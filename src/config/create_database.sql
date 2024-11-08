DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;
USE user_db;

-- CUSTOMER
CREATE TABLE Customer (
    customerCode CHAR(36) PRIMARY KEY DEFAULT (UUID()), 
    firstName VARCHAR(50) NOT NULL CHECK (TRIM(firstName) <> ''), 
    lastName VARCHAR(50) NOT NULL CHECK (TRIM(lastName) <> ''), 
    homeAddress VARCHAR(255) NOT NULL CHECK (TRIM(homeAddress) <> ''),
    officeAddress VARCHAR(255), 
    phoneNumber VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE CHECK (email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), 
    dob DATE NOT NULL,
    guardianConfirmation BOOLEAN
);

DELIMITER //
CREATE TRIGGER CHK_dob
BEFORE INSERT ON Customer
FOR EACH ROW
BEGIN
    IF NEW.dob > CURRENT_DATE() THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Ngày sinh không thể lớn hơn ngày hiện tại.';
    END IF;

    IF YEAR(CURRENT_DATE()) - YEAR(NEW.dob) < 16 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Khách hàng phải từ đủ 16 tuổi trở lên.';
    END IF;
END;
//
DELIMITER ;

CREATE TABLE CustomerPhoneNumber (
    phoneNumber VARCHAR(15) NOT NULL CHECK (LENGTH(phoneNumber) > 0 AND LENGTH(phoneNumber) <= 11 AND (phoneNumber REGEXP '^[0-9]+$')),
    customerCode CHAR(36),
    PRIMARY KEY (phoneNumber, customerCode),
    FOREIGN KEY (customerCode) REFERENCES Customer(customerCode) ON DELETE CASCADE
);

-- ACCOUNT
DELIMITER //
CREATE TRIGGER CHK_account_open_date
BEFORE INSERT ON Account
FOR EACH ROW
BEGIN
    IF NEW.openDate IS NULL THEN
        SET NEW.openDate = CURRENT_DATE;
    END IF;

    IF NEW.openDate > CURRENT_DATE() THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Ngày tạo tài khoản không thể lớn hơn ngày hiện tại.';
    END IF;
END;
//
DELIMITER ;


-- Tạm thời tắt kiểm tra khoá ngoại
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE Branch (
    branchName VARCHAR(255) PRIMARY KEY,
    branchNo INT UNSIGNED NOT NULL,
    street VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    employeeID CHAR(12) NOT NULL -- FOREIGN KEY (employeeID) REFERENCES Employee(employeeID)  -- Khoá ngoại sẽ thêm sau
);

CREATE TABLE Employee (
    employeeID CHAR(36) PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    birthDate DATE NOT NULL,
    employeeNo INT UNSIGNED NOT NULL,
    street VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
    branchName VARCHAR(255) NOT NULL,
    FOREIGN KEY (branchName) REFERENCES Branch(branchName)
);

DELIMITER //
CREATE TRIGGER check_employee_age
BEFORE INSERT ON Employee
FOR EACH ROW
BEGIN
    IF DATEDIFF(CURDATE(), NEW.birthDate) / 365.25 < 18 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Nhân viên phải từ 18 tuổi trở lên.';
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER check_employee_age_update
BEFORE UPDATE ON Employee
FOR EACH ROW
BEGIN
    IF DATEDIFF(CURDATE(), NEW.birthDate) / 365.25 < 18 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Nhân viên phải từ 18 tuổi trở lên.';
    END IF;
END;
//
DELIMITER ;

ALTER TABLE Branch
ADD CONSTRAINT FK_Branch_Employee FOREIGN KEY (employeeID) REFERENCES Employee(employeeID);

CREATE TABLE BranchPhone(
    branchName VARCHAR(255) NOT NULL,
    phoneNumber CHAR(10) NOT NULL,
    PRIMARY KEY (branchName, phoneNumber),
    FOREIGN KEY (branchName) REFERENCES Branch(branchName)
);

CREATE TABLE BranchFax(
    branchName VARCHAR(255) NOT NULL,
    faxNumber CHAR(10) NOT NULL,
    PRIMARY KEY (branchName, faxNumber),
    FOREIGN KEY (branchName) REFERENCES Branch(branchName)
);

CREATE TABLE EmployeePhone(
    employeeID CHAR(36) NOT NULL,
    phoneNumber CHAR(10) NOT NULL,
    PRIMARY KEY (employeeID, phoneNumber),
    FOREIGN KEY (employeeID) REFERENCES Employee(employeeID)
);
SET FOREIGN_KEY_CHECKS = 1;

-- Khởi tạo một vài giá trị ban đầu để tránh lỗi tham chiếu khoá ngoại
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO Employee (
        employeeID,
        firstName,
        lastName,
        birthDate,
        employeeNo,
        street,
        district,
        city,
        email,
        branchName
    )
VALUES (
        'E001',
        'John',
        'Doe',
        '1985-06-15',
        12345,
        '123 Elm St',
        'District 1',
        'City A',
        'johndoe@example.com',
        'Branch A'
    ),
    (
        'E002',
        'Jane',
        'Smith',
        '1990-09-10',
        12346,
        '456 Oak St',
        'District 2',
        'City B',
        'janesmith@example.com',
        'Branch B'
    );

INSERT INTO Branch (
        branchName,
        branchNo,
        street,
        district,
        city,
        region,
        email,
        employeeID
    )
VALUES (
        'Branch A',
        1,
        '123 Main St',
        'District 1',
        'City A',
        'Region 1',
        'branchA@example.com',
        'E001'
    ),
    (
        'Branch B',
        2,
        '456 Market St',
        'District 2',
        'City B',
        'Region 2',
        'branchB@example.com',
        'E002'
    );

INSERT INTO BranchPhone (branchName, phoneNumber)
VALUES ('Branch A', '1234567890'),
    ('Branch B', '0987654321');

INSERT INTO BranchFax (branchName, faxNumber)
VALUES ('Branch A', '1112223333'),
    ('Branch B', '4445556666');

INSERT INTO EmployeePhone (employeeID, phoneNumber)
VALUES ('E001', '1234567890'),
    ('E002', '0987654321');

SET FOREIGN_KEY_CHECKS = 1;