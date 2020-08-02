const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async store(req, res) {
    const { name } = req.body;

    const id = crypto.randomBytes(2).toString("hex");

    await connection("categories").insert({ id, name });

    return res.json({ id });
  },
  async index(req, res) {
    const categories = await connection("categories").select("*");

    return res.json(categories);
  },
  async delete(req, res) {
    const { name } = req.params;

    await connection("categories").where("name", name).delete();

    return res.json({ message: "deletado" });
  },
};
