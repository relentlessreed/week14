const router = require("express").Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
  console.log("You have hit /");
  //   try {
  //     const dbPaintingData = await Painting.findByPk(req.params.id);

  //     const painting = dbPaintingData.get({ plain: true });

  //     res.render("painting", { painting });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
});

router.get("/post/:id", async (req, res) => {
  console.log("You have hit /dashboard");
});

router.get("/login", async (req, res) => {
  console.log("You have hit /dashboard");
});

router.get("/signup", async (req, res) => {
  console.log("You have hit /dashboard");
});

module.exports = router;
