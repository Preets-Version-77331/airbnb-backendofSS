const Home = require('./../models/Home');

exports.getAddHome = (req, res, next) => {
  // Your logic here
  res.render("add-home", { pageTitle: "Add Home" });
};
exports.postAddHome = (req, res, next) => {
  console.log(req.body);
   const { houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.save();
 
  res.render("home-added", { pageTitle: "Home Added" });
};


