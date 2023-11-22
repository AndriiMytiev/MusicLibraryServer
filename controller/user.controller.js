const db = require("../db");

class UserController {
  async createUser(req, res) {
    const { login, password, admin } = req.body;
    console.log(login, password, admin);
    const newUser = await db.query(
      "INSERT INTO users (login, password, admin) values ($1, $2, $3) RETURNING *",
      [login, password, admin],
    );
    res.json(newUser.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM users");
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const {
      id,
      login,
      password,
      name,
      surname,
      info,
      avatar,
      favourites,
      admin,
    } = req.body;
    console.log("Оновлення користувача з ID:", id);

    // Додайте виведення в консоль для відлагодження отриманих даних
    console.log("Отримані дані:", req.body);
    const user = await db.query(
      "UPDATE users SET login = $1, password = $2, name = $3, surname = $4, info = $5, avatar = $6, favourites = $7, admin = $8 WHERE id = $9 RETURNING *",
      [login, password, name, surname, info, avatar, favourites, admin, id],
    );
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM users WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
