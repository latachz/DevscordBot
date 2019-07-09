const Discord = module.require("discord.js");

const agree = "👍"
const disagree = "👎"

module.exports.run = async (bot, msg, args, all) => {
    if(args.lenght - 1 < 1) { return; }

    msg.channel.send(`Let's start voting! ${args.join(" ")}`)

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name);
    };

    await msg.react('👍').then(() => msg.react('👎'));
    
    msg.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
            
            reaction.emoji.name === '👍' || reaction.emoji.name === '👎'

            let resultsEmbed = new Discord.RichEmbed()
            .setTitle("Poll")
            .setDescription(args.join(" "))
            .setField(`Agree${agree}: ${reaction.get(agree).count - 1}`)
            .setField(`Disagree${disagree}: ${reaction.get(disagree).count - 1}`)

        .then(msg.channel.send(resultsEmbed))
	})
	.catch(collected => {collected});


}

module.exports.help = {
    name: "vote"
}