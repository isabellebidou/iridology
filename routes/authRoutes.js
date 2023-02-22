const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  //https://stackoverflow.com/questions/21129989/internaloautherror-failed-to-obtain-access-token
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );
  app.get("/api/logout", (req, res) => {
    try {
      req.logout();
    res.redirect("/");
    } catch (error) {
      console.error(error)
    }
    
  });

  app.get("/api/current_user", (req, res) => {

    try {
      if (req.user) {
      }
      res.send(req.user);
    } catch (error) {
      console.error(error)
      
    }
    

  });
};
