const Discord = require('discord.js');
const fs = require("fs");

const token = process.env.TOKEN

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`); 
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    })
})

bot.on('ready', async () => {
    console.log(`Bot is online!`)
})

bot.on('message', msg => {
    if(msg.author.bot) return;
    
    const args = msg.content.split(" ");
    const command = args[0];

    const prefix = "/";

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length))
    if(cmd) cmd.run(bot, msg, args)

});

bot.login(token);