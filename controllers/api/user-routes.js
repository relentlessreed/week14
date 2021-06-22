const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  console.log("You have hit api/user");
  //   try {
  //     const dbPaintingData = await Painting.findByPk(req.params.id);

  //     const painting = dbPaintingData.get({ plain: true });

  //     res.render("painting", { painting });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
});

router.post("/login", async (req, res) => {
  console.log("You have hit api/login");
});

router.post("/logout", async (req, res) => {
  console.log("You have hit api/logout");
});

module.exports = router;
