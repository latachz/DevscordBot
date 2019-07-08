const Discord = require('discord.js');
const token = 'NTk3NTg3ODA1ODI0MDkwMTQy.XSKTVw.FYiYksnXMGgGMdmUaW3euk1HZPA';

const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Bot is online!`)
})

client.on('message', msg => {
    if(msg.author.bot) return;
    
    const args = msg.content.split(" ");
    const cmd = args[0];

    if (cmd === '/my_technologies') {    
        function countStars(starsCount) {
            let stars = "";
            let i = 1;
            while (i <= starsCount) {
                stars = stars.concat("⭐");
                i++;
            }
            return stars
        }
      const embed = new Discord.RichEmbed()
        .setTitle('My technologies')
        .addField(`${args[1]}`, `${countStars(args[2])}`, true)
        .addField(`${args[3]}`, `${countStars(args[4])}`, true)
        .addField(`${args[5]}`, `${countStars(args[6])}`, true)
        .setAuthor(`${msg.author.username}`)
        .setColor('#f50057')
      msg.channel.send(embed);
    }
});

client.login(token);