const fs = require("fs");
const path = require("path");

const rootDir = require("./../util/path-util");
const { error } = require("console");
const registeredHomes = [];

module.exports = class Home {
  constructor(houseName,price,location , rating , photourl ) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl
  }
  save() {
    registeredHomes.push(this);
    const homeFilePath = path.join(rootDir, "data", "homes.json");
    fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), (error) => {
      if (error) {
        console.error("Failed to write to homes.json:", error);
        throw error; // Optionally re-throw the error
      } else {
        console.log("Home saved successfully.");
      }
    });
  }
  
    static fetchAll() {
    return registeredHomes;
  }
};

exports.registeredHomes = registeredHomes;
