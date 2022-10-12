const express = require("express");
const path = require("path");
const config = require("config");
const mongoose = require("mongoose");

const PORT = config.get("port") || 5000;
const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/link", require("./routes/link.routes"));
app.use("/t/", require("./routes/redirect.routes"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {});
    app.listen(PORT, () => {
      console.log("Good Server On Port", PORT);
    });
  } catch (error) {
    process.exit(1);
  }
}

start();
