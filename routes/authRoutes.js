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
      res.redirect("/offer");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log("req.user.id");
    console.log(req.user.id);
    //res.send(req.session);
    res.send(req.user);
  });
};
