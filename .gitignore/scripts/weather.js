const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const weather = require('weather-js');
const PREFIX = ".";
 

clientDiscord.on('message', message => {

    let cont = message.content.slice(PREFIX.length).split(" ");
    let args = cont.slice(2);

    if (message.content.startsWith(PREFIX + 'meteo') || message.content.startsWith(PREFIX + 'météo'))  {

        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            //if (err) message.channel.send(err);

            if (result === undefined || result.length === 0) {
                message.channel.send("**Merci de renseigner une localisation valide...**")
                return;
            }

            // Variables
            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Météo pour ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('**__Fuseau Horaire__**',`UTC${location.timezone}`, true)
                .addField('**__Unité__**','Celsius', true)
                .addField('**__Temperature__**',`${current.temperature} Degrés`, true)
                .addField('**__Ressenti__**', `${current.feelslike} Degrés`, true)
                .addField('**__Vent__**',current.winddisplay, true)
                .addField('**__Humidité__**', `${current.humidity}%`, true)

                message.channel.send({embed});
        });
    }

});

clientDiscord.login(process.env.TOKEN);
