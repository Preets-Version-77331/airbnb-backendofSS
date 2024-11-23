const Home = require('./../models/Home');

exports.getAddHome = (req, res, next) => {
  // Your logic here
  res.render("add-home", { pageTitle: "Add Home" });
};
exports.postAddHome = (req, res, next) => {
  console.log(req.body);
 
  
  const { houseName, price, location, rating, photourl } = req.body;
  const newHome = new Home(houseName);
  newHome.save();
 
  res.render("home-added", { pageTitle: "Home Added" });
};


