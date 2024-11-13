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
    email VARCHAR(255) NOT NULL
);

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

SET FOREIGN_KEY_CHECKS = 1;

-- Thêm dữ liệu mẫu cho Branch
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO Branch (
        branchName,
        branchNo,
        street,
        district,
        city,
        region,
        email
    )
VALUES (
        'Branch A',
        1,
        '123 Main St',
        'District 1',
        'City A',
        'Region 1',
        'branchA@example.com'
    ),
    (
        'Branch B',
        2,
        '456 Market St',
        'District 2',
        'City B',
        'Region 2',
        'branchB@example.com'
    );

INSERT INTO BranchPhone (branchName, phoneNumber)
VALUES ('Branch A', '1234567890'),
    ('Branch B', '0987654321');

INSERT INTO BranchFax (branchName, faxNumber)
VALUES ('Branch A', '1112223333'),
    ('Branch B', '4445556666');

SET FOREIGN_KEY_CHECKS = 1;

-- USER
CREATE TABLE user (
	id 			int not null auto_increment,
    email 		varchar(50) not null UNIQUE CHECK (email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
    password 	varchar(128) not null,
    role		varchar(50) not null default 'user',
    primary 	key (id)
);

-- Tài khoản mẫu cho bảng user
INSERT INTO user (email, password, role) VALUES
('admin1@hcmut.edu.vn', '$2a$10$MVH7lqOh6kCkHimpuIEyg.0ABo/QcHWO0eNQcVtamRNk7OpWcC22y', 'admin'), 
('user1@hcmut.edu.vn', '$2a$10$MVH7lqOh6kCkHimpuIEyg.0ABo/QcHWO0eNQcVtamRNk7OpWcC22y', 'user');
