const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Bookmark = mongoose.model("bookmarks");

module.exports = app => {
  app.post("/api/bookmark", requireLogin, async (req, res) => {
    const { original_title, overview, poster_path, id, name } = req.body;

    const isMark = await Bookmark.findOne({ id });

    if (isMark) {
      return;
    } else {
      const bookmark = new Bookmark({
        title: original_title ? original_title : name,
        overview,
        img: poster_path,
        id,
        _user: req.user._id
      });

      try {
        await bookmark.save();

        const user = await req.user.save();

        res.send(user);
      } catch (error) {
        res.status(402).send(err);
      }
    }
  });
};
