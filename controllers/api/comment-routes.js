const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("You have hit api/comment");
  //   try {
  //     const dbPaintingData = await Painting.findByPk(req.params.id);

  //     const painting = dbPaintingData.get({ plain: true });

  //     res.render("painting", { painting });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
});

module.exports = router;
