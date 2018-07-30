const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";

clientDiscord.on('message', message => {
    if(message.content.startsWith(PREFIX + " regles")) {
            const embed = new Discord.RichEmbed();
            embed.setTitle(' ')
            .setAuthor('Réglement du discord:', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`
__Les règles ci-dessous sont à respecter obligatoirement :__

**1.** Soyez respecteux avec les autres membres du discord.

**2.** Merci de ne dévoiller aucune informations personnelles afin de respecter la vie privée de tous.

**3.** Il est formellement interdit de poster des images choquantes/pornographiques dans les salons publics, des salons privés sont prévus à cet effet.

**4.** Le spam est formellement interdit.

`)
            
            message.channel.send({embed});
        }
});

clientDiscord.login(process.env.TOKEN);
