const path = require("path");
const express = require("express");
const storeController = require("./../controllers/storeController")

const rootDir = require("../util/path-util");


const storeRouter = express.Router(); // Corrected this line

storeRouter.get("/", storeController.getHome );

module.exports = storeRouter; // Ensure this is exporting the correct router
