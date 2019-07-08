const Discord = module.require("discord.js");

module.exports.run = async (bot, msg, args) => {
    function countStars(starsCount) {
        var stars = "";
        let i = 1;
        if(starsCount > 5) {
            return stars = "⭐⭐⭐⭐⭐" 
        }
        else {
            while (i <= starsCount) {
                stars = stars.concat("⭐");
                i++;
            }
            return stars
        }
    }

    msg.channel.send({embed: {
        color: 3447003,
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        title: "My technologies",
        fields: [{
            name: `${args[1]}`,
            value: `${countStars(args[2])}`
          },
          {
            name: `${args[3]}`,
            value: `${countStars(args[4])}`
          },
          {
            name: `${args[5]}`,
            value: `${countStars(args[6])}`
          }
        ],
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