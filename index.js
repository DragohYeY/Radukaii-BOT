const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`)
    bot.user.setActivity("Quanto è bello il server", {type: "WATCHING"});
});

bot.on('guildMemberAdd', member => {
    console.log('Un utente di nome' + member.user.username + `è entrato nel server`)

    var role = member.guild.roles.find('name', '༻━━━━ Normal ━━━━');
    var role2 = member.guild.roles.find('name', '༻━━━━ ๖̶̶̶ζ͜͡Level━━━━');
    var role3 = member.guild.roles.find('name', '⚜️Member⚜️');

    member.addRole(role)
    member.addRole(role2)
    member.addRole(role3)
})

bot.login(process.env.bot_token);
