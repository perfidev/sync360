const db = require('../db');

exports.getAllUsers = async () => {
  const [data] = await db.query('SELECT * FROM users');
  return data;
};

exports.getUser = async (id) => {
  const [data] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return data[0];
};

exports.createUser = async (user) => {
  const { nome, idade, rua, bairro, estado, biografia, imagem } = user;

  const [data] = await db.query(
    'INSERT INTO users (nome, idade, rua, bairro, estado, biografia, imagem) VALUES (?,?,?,?,?,?,?)',
    [nome, idade, rua, bairro, estado, biografia, imagem],
  );

  return data.insertId;
};

exports.updateUser = async (id, user) => {
  const { nome, idade, rua, bairro, estado, biografia, imagem } = user;

  const [data] = await db.query(
    'UPDATE users SET nome = ?, idade = ?, rua = ?, bairro = ?, estado = ?, biografia = ?, imagem = ? WHERE id = ?',
    [nome, idade, rua, bairro, estado, biografia, imagem, id],
  );

  return id;
};

exports.deleteUser = async (id) => {
  const [data] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return id;
};
