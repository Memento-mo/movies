const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const multer = require("multer");
const sharp  = require('sharp');

const Bookmark = mongoose.model("bookmarks");
const Viewed = mongoose.model("viewed");
const User = mongoose.model('users');
const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  }
});

module.exports = app => {
  app.post("/api/bookmark", requireLogin, async (req, res) => {
    const { original_title, overview, poster_path, id, name } = req.body;
    const isMark = await Bookmark.findOne({ id });

    try {
      if (isMark) { 
        await Bookmark.findOneAndDelete({ id });

        const user = await req.user.save();

        res.send(user);   
      } else {
        const bookmark = new Bookmark({
          title: original_title ? original_title : name,
          overview,
          poster_path,
          id,
          type: name ? "tv" : "movie",
          _user: req.user._id
        });
        await bookmark.save();

        const user = await req.user.save();

        res.send(user);
      } 
    }
  });

  app.get("/api/getbookmarks", requireLogin, async (req, res) => {
    const movies = await Bookmark.find({ _user: req.user._id });
    res.send(movies);
  });

  app.post('/api/viewed', requireLogin, async (req, res) => {
    const { original_title, overview, poster_path, id, name } = req.body;
    const isMark = await Viewed.findOne({ id });

    try {
      if (isMark) {jujkk
        await Viewed.findOneAndDelete({ id });

        const user = await req.user.save();
        res.send(user);
      } else {
        const viewed = new Viewed({
          title: original_title ? original_title : name,
          overview,
          poster_path,
          id,
          type: name ? "tv" : "movie",
          _user: req.user._id
        });
        await viewed.save();

        const user = await req.user.save();
        res.send(user);
      };
    } catch (error) {
      res.status(402).send(error);
    };
  });

  app.get("/api?viewed", requireLogin, async (req, res) => {
    const movies = await Viewed.find({ _user: req.user._id });
    res.send(movies);
  });

  app.post(
    "/api/profile/avatar",
    requireLogin,
    upload.single("avatar"),
    async (req, res) => {
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 250, height: 250 })
        .png()
        .toBuffer();
      req.user.avatar = buffer;
      await req.user.save();
      res.send();
    },
    (error, req, res, next) => {
      res.status(400).send({ error: error.message });
    }
  );

  app.delete("/api/profile/avatar", requireLogin, async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.send();
  });

  app.get("/api/profile/:id/avatar", async (req, res) => {
    try {
      // const user = await User.findById(req.params.id);

      if (!req.user || !req.user.avatar) {
        throw new Error();
      }

      res.set("Content-Type", "image/png");
      res.send(req.user.avatar);
    } catch (error) {
      res.status(404).send();
    }
  });
};