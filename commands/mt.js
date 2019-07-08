const Discord = module.require("discord.js");

module.exports.run = async (bot, msg, args) => {
    function countStars(starsCount) {
        var stars = "";
        let i = 1;
        if(starsCount > 5) {
            return msg.channel.send("Aż tak dobry debilu nie jestes")
        }
        else {
            while (i <= starsCount) {
                stars = stars.concat("⭐");
                i++;
            }
            return stars
        }
    }

    var fieldsArray = [];

    for(let i = 0; i < args.length - 1; i++) {
        fieldsArray.push({
            name: `${args[i + 1]}`,
            value: `${countStars(args[i + 2])}`
        });
    }

    msg.channel.send({embed: {
        color: #447003,
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        title: "My technologies",
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
    name: "mt"
}
