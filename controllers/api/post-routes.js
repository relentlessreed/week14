const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("You have hit api/post");

  // try {
  //   const dbPaintingData = await Painting.findByPk(req.params.id);

  //   const painting = dbPaintingData.get({ plain: true });

  //   res.render("painting", { painting });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

router.put("/", withAuth, async (req, res) => {
  console.log("You have hit api/put");
});

router.delete("/", withAuth, async (req, res) => {
  console.log("You have hit api/delete");
});

module.exports = router;
