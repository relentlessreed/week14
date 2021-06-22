const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  console.log("You have hit /dashboard");
  //   try {
  //     const dbPaintingData = await Painting.findByPk(req.params.id);

  //     const painting = dbPaintingData.get({ plain: true });

  //     res.render("painting", { painting });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
});

router.get("/new", withAuth, async (req, res) => {
  console.log("You have hit /dashboard");
});

router.get("/edit/:id", withAuth, async (req, res) => {
  console.log("You have hit /dashboard");
});

module.exports = router;
