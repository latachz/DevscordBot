const Discord = module.require("discord.js");

module.exports.run = async (bot, msg, args) => {
    msg.channel.send({embed: {
        color: 3447003,
        author: {
          name: msg.author.username,
          icon_url: bot.avatarURL
        },
        title: "Information about avaible commands",
        fields: [{
            name: "/mt tech1 lvl(1-5) tech2 lvl(1-5) tech3 lvl(1-5)",
            value: "Example: /mt Elixir 3 C# 5 Haskell 2"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.avatarURL,
          text: "©2019 DevscordBot "
        }
      }
    });
}

module.exports.help = {
    name: "help"
}