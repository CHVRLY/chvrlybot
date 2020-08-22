const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');

clientDiscord.on("guildMemberAdd", member => {
    //let role = member.guild.roles.find("name", "👥 La plèbe");
    member.guild.channels.find("id", "721774962641207338").send(` Accueillons **${member.user.id}** qui vient de rejoindre le discord! :Winnie: `)
    //member.addRole(role)
});

clientDiscord.on("guildMemberRemove", member => {
    member.guild.channels.find("id", "721774962641207338").send(` **${member.user.id}** vient de quitter le discord... :Winnie: `)
})

clientDiscord.login(process.env.TOKEN);
