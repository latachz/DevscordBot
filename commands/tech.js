const Discord = module.require("discord.js");
const fs = require('fs')

module.exports.run = (bot, msg, args) => {
    let user = args[1]

    function countStars(starsCount) {
        var stars = "";
        let i = 1;
        if(starsCount > 5) {
            starsCount = 5;
        }
        else {
            while (i <= starsCount) {
                stars = stars.concat("⭐");
                i++;
            }
            return stars
        }
    }

    data = fs.readFileSync(__dirname + "\\users.json");
    parsedData = JSON.parse(data)

    var fields = parsedData[`${user}`].technologies;

    var fieldsArray = [];

    fields.forEach(field => {
        fieldsArray.push({
            name: `${field.name}`,
            value: `${countStars(field.value)}`
        })
    })

    msg.channel.send({embed: {
        color: 3447003,
        author: {
          name: user,
          icon_url: msg.author.avatarURL
        },
        title: `${user}'s technologies:`,
        fields: fieldsArray,
        timestamp: new Date(),
        footer: {
          icon_url: msg.author.avatarURL,
          text: "©2019 DevscordBot "
        }
      }
    });

}

module.exports.help = {
    name: "tech"
}
