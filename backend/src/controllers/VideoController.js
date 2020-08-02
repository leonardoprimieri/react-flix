const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { name, url, channel, category_name } = req.body;

    const video = await connection("videos").insert({
      name,
      url,
      channel,
      category_name,
    });

    return res.json(video);
  },
  async index(req, res) {
    const videos = await connection("videos").select("*");

    return res.json(videos);
  },
  async delete(req, res) {
    const { name } = req.params;

    await connection("videos").where("name", name).delete();

    return res.json({ message: "deletado" });
  },
};
