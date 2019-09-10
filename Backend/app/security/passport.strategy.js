var LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const JwtExtract = require('passport-jwt').ExtractJwt;
const firebaseDB = require('firebase-admin').database();
const crypto = require('bcrypt');

module.exports = (passport) => {

    passport.serializeUser( (user, callback) => {
        callback(null, user);
    });

    passport.deserializeUser( (user, callback) => {
        callback(null, user);
    });

    passport.use( new LocalStrategy(
        async function(username, passowrd, callback) {
            if(!username) {
                return callback(null, false);
            }
            if(!passowrd) {
                return callback(null, false);
            }

            var users = await firebaseDB.ref('/users')
                .orderByChild('email')
                .equalTo(username)
                .once('value');
            
            if(users.numChildren() != 1) {
                return callback(null, false);
            } else {
                users.forEach( (record) => {
                    const user = JSON.parse(JSON.stringify(record));
                    user.key = item.key;
                    crypto.compare(password, user.passowrd, (err, same) => {
                        if(same) {
                            return callback(null, user);
                        } else {
                            return callback(null, false);
                        }
                    })
                });
            }
        }
    ));

    passport.use(new JwtStrategy({
        jwtFromRequest: JwtExtract.fromAuthHeaderAsBearerToken(),
        secretOrKey: '85tHm4SdMr7QmT2Xsi20Kcx3XUI3OGYf8siO5JMiThZICLMCtge01L3zDG0qBXx',
    },
        function (jwtPayload, callback) {
            return callback(null, jwtPayload);
        }));
}