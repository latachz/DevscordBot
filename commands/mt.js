const Discord = module.require("discord.js");

module.exports.run = async (bot, msg, args) => {
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

    var fieldsArray = [];

    for(let i = 0; i < (args.length - 1) / 2; i++) {
        fieldsArray.push({
            name: `${args[2 * i + 1].charAt(0).toUpperCase() + args[2 * i + 1].slice(1)}`,
            value: `${countStars(args[2 * i + 2])}`
        });
    }

    msg.channel.send({embed: {
        color: 3447003,
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        title: "My technologies:",
        fields: fieldsArray,
        timestamp: new Date(),
        footer: {
          icon_url: msg.author.avatarURL,
          text: "©2019 DevscordBot "
        }
      }
    });

    let data = []

    fieldsArray.forEach(field => {
        data.push(field.name)
        data.push(field.value.length)
    })

    console.log(data)

}

module.exports.help = {
    name: "mt"
}
