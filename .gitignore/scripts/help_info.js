const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";

// !c help

clientDiscord.on('message', message => {
    if(message.content.startsWith(PREFIX + " help")) {
            const embed = new Discord.RichEmbed();
            embed.setTitle(' ')
            .setAuthor('Chez Chvrly', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`

**>** La liste des commande viens de t'étre envoyée en MP !

`)
            
            message.channel.send({embed});
            message.author.createDM().then(channel => {
                const embed = new Discord.RichEmbed();
                embed.setTitle('Voici la liste des commandes :')
                .setAuthor(' ', clientDiscord.user.avatarURL)
                .setColor(3447003)
                .setDescription(
`

__Commandes Principales :__

**!c regles** -> Affiche le réglement.
**!c météo <ville>** -> Affiche la météo en direct.
**!c sondage <question>** -> Poste un sondage.
**!c mas** -> Lance la machine à sous.

__Commandes Secondaires :__

**!c heure** -> Affiche l'heure.
**!c info** -> Affiche les informations du bot.

`)
                
                channel.send({embed});
            })
        }
});

// !c info

clientDiscord.on('message', message => {
    if(message.content.startsWith(PREFIX + " info")) {
            const embed = new Discord.RichEmbed();
            embed.setTitle('Fiche technique:')
            .setAuthor('Informations de ChvrlyBot', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`

**> Version:** Alpha (v0.001)
**> Auteur:** CHVRLY

`)
            
            message.channel.send({embed});
        }
});

clientDiscord.login(process.env.TOKEN);
