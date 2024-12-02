import { connection } from '~/config/connectDatabase';

// Hàm thực thi một query đơn giản
export async function excuteQuery(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

// Hàm lấy một bản ghi từ bảng
export async function getOne(table, where = {}, join = []) {
  return new Promise((resolve, reject) => {
    const joinClause = join.length
      ? join.map(({ table: joinTable, on }) => `JOIN ${joinTable} ON ${on}`).join(' ')
      : '';

    const whereClause = Object.entries(where)
      .map(([key, value]) => `${key}='${value}'`)
      .join(' AND ');

    const query = `SELECT * FROM ${table} ${joinClause} ${whereClause ? `WHERE ${whereClause}` : ''} LIMIT 1`;
    
    connection.query(query, (err, row) => {
      if (err) return reject(err);
      resolve(row[0] || null);
    });
  });
}

export async function getAll(table, condition = {}) {
  return new Promise((resolve, reject) => {
    try {
      const keys = Object.keys(condition);
      const values = Object.values(condition);
      const whereClause = keys.map((key) => `${key} = ?`).join(' AND ');
      const query = `SELECT * FROM ${table} ${keys.length > 0 ? `WHERE ${whereClause}` : ''}`;
      connection.query(query, values, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Hàm chèn một dòng vào bảng
export async function insertSingleRow(table, data = {}) {
  const fields = Object.keys(data).join(', ');
  const placeholders = Object.keys(data).map(() => '?').join(', ');

  const query = `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`;

  return new Promise((resolve, reject) => {
    connection.query(query, Object.values(data), (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

// Hàm chèn nhiều dòng vào bảng
export async function insertMultipleRows(table, rows = []) {
  if (rows.length === 0) {
    throw new Error('No data to insert');
  }

  const fields = Object.keys(rows[0]).join(', ');
  const placeholders = rows.map(() => `(${Object.keys(rows[0]).map(() => '?').join(', ')})`).join(', ');

  const query = `INSERT INTO ${table} (${fields}) VALUES ${placeholders}`;

  const values = rows.reduce((acc, row) => {
    acc.push(...Object.values(row));
    return acc;
  }, []);

  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

// Hàm cập nhật một dòng trong bảng
export async function updateRow(table, data = {}, where = {}) {
  const setClause = Object.entries(data)
    .map(([key, value]) => `${key}='${value}'`)
    .join(', ');

  const whereClause = Object.entries(where)
    .map(([key, value]) => `${key}='${value}'`)
    .join(' AND ');

  const query = `UPDATE ${table} SET ${setClause} WHERE ${whereClause}`;

  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

// Hàm xóa một dòng trong bảng
export async function deleteRow(table, where = {}) {
  const whereClause = Object.entries(where)
    .map(([key, value]) => `${key}='${value}'`)
    .join(' AND ');

  const query = `DELETE FROM ${table} WHERE ${whereClause}`;

  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
