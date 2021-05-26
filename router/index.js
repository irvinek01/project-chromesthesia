const router = require("express").Router();
const clientRouter = require("./clientRouter");
const userRouter = require("./userRouter");
const trackRouter = require("./trackRouter");
const colorRouter = require("./colorRouter");

router.use("/api/users", userRouter);
router.use("/api/tracks", trackRouter);
router.use("/api/colors", colorRouter);

// server react client and static assets (usually on heroku)
// create-react-app dev server used in development
if (process.env.NODE_ENV === "production") {
  router.use(clientRouter);
}

module.exports = router;
