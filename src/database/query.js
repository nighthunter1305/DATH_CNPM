/* eslint-disable quotes */
import { connection } from "~/config/connectDatabase";

export async function getOne(table, id) {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM ?? WHERE id = ?`;
    connection.query(query, [table, id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

export async function getAll(table) {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM ??`;
    connection.query(query, [table], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export async function insertSingleRow(table, data = {}) {
  return new Promise((resolve, reject) => {
    const fields = Object.keys(data).join(", ");
    const placeholders = Object.keys(data).map(() => "?").join(", ");
    let query = `INSERT INTO ?? (${fields}) VALUES (${placeholders});`;

    connection.query(query, [table, ...Object.values(data)], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

export async function insertMultipleRows(table, rows = []) {
  if (rows.length === 0) throw new Error("No data to insert");

  return new Promise((resolve, reject) => {
    const fields = Object.keys(rows[0]).join(", ");
    const placeholders = rows.map(() => `(${Object.keys(rows[0]).map(() => "?").join(", ")})`).join(", ");
    let query = `INSERT INTO ?? (${fields}) VALUES ${placeholders};`;
    const values = rows.reduce((acc, row) => acc.concat(Object.values(row)), []);

    connection.query(query, [table, ...values], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

export async function updateRow(id, table, data) {
  return new Promise((resolve, reject) => {
    let query = `UPDATE ?? SET ? WHERE id = ?`;
    connection.query(query, [table, data, id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

export async function deleteRow(id, table) {
  return new Promise((resolve, reject) => {
    let query = `DELETE FROM ?? WHERE id = ?`;
    connection.query(query, [table, id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}
