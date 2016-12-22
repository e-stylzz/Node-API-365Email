
var config = {
    "email" : {
        "host" : process.env.host || "smtp.office365.com",
        "port" : 587,
        "ciphers" : "SSLv3",
        "secure" : true,
        "from" : '"SomeOne" <someone@somewhere.com>',
        "username" : process.env.username || "someone@somewhere.com",
        "password" : process.env.password || "some_password"
    }
};

module.exports = config;