
const { Router } = require("express");
const Link  = require("../models/Link");
const router = Router()

router.get("/:code", async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code });

    if (link) {
      link.clicks++;
      await link.save();
      console.log('link.from' , link.from)
      
       res.writeHead(302, {
        location: `${link.from}`
      });
      res.end();
    }
    res.status(404).json("ссылка не найдена");
  } catch (err) {
    res.status(500).json({ message: "что- то пошло не так" });
  }
});

module.exports = router