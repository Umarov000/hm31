const {
  create,
  findAll,
  findOne,
  update,
  remove,
  loginAuthor,
} = require("../controllers/author.controller");

const router = require("express").Router();

router.post("/", create);
router.post("/login", loginAuthor);
router.get("/", findAll);
router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/:id", remove);



module.exports = router;
