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
  async show(req, res) {
    const { category_name } = req.body;
    const videoByCategory = await connection("videos")
      .where("category_name", category_name)
      .select("*");

    return res.json(videoByCategory);
  },
  async index(req, res) {
    const category = req.headers.category;
    const videos = await connection("videos")
      .where("category_name", category)
      .select("*");
    return res.json(videos);
  },
  async delete(req, res) {
    const { id } = req.params;

    await connection("videos").where("id", id).delete();

    return res.json({ message: "deletado" });
  },
};
