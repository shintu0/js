module.exports = {
  requestFilter: (req, res, next) => {
    if (req.query.age) {
      if (req.query.age < 18) {
        res.send("You Are under Age")
      } else if (req.query.age >= 18) {
        next();
      } else {
        res.send("Please Enter the age");
      }
    } else {
      res.send("Sorry Not allowed");
    }
  }
}