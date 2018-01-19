const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;

var user = {
    
};

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new LocalStrategy({
        usernameField: "username",
        passwordField: "password",
        session: true,
        passReqToCallback: false,
    }, (id, password, done) => {

        if(true) {
            return done(null, user);
        }
        else {
            return done(null, false, { message: "아이디가 틀렸습니다." });
        }

    }));
};
