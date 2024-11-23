
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const {hostRouter} = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");

const rootDir = require("./util/path-util");
const errorController = require("./controllers/errorController");
const app = express();


app.set('view engine', 'ejs');

app.set('views',  'views');

app.use(express.static(path.join(rootDir, "public")));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use routers
app.use(storeRouter); 
app.use("/host", hostRouter);

app.use((req, res, next) => {
  console.log("Request received", req.url, req.method);
  next();
});

app.use(errorController.get404);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
