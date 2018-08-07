const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!c";

clientDiscord.on('message', message => {

    if (message.content.startsWith(PREFIX + " mas")) {
	    var replys1 = [
	        ":gem: : :gem: : :gem: ",
            ":star: : :star: : :star: ",
	        ":lemon: : :lemon: : :lemon: ",
	        ":seven: : :seven: : :seven: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: ",
	        ":gem: : :cherries: : :cherries:",
			":gem: : :bell: : :star:",
			":cherries: : :seven: : :cherries: ",
			":seven: : :seven: : :cherries: ",
			":cherries: : :seven: : :seven: ",
			":cherries: : :star: : :gem: ",
			":cherries: : :gem: : :gem: ",
			":cherries: : :lemon: : :gem: ",
			":lemon: : :lemon: : :gem: ",
			":lemon: : :lemon: : :bell: ",
			":bell: : :lemon: : :bell: ",
			":star: : :lemon: : :bell: ",
			":star: : :cherries: : :bell: "
	    ];
	    let reponse = (replys1[Math.floor(Math.random() * replys1.length)])

	    var replys2 = [
            ":gem: : :gem: : :gem: ",
            ":star: : :star: : :star: ",
	        ":lemon: : :lemon: : :lemon: ",
	        ":seven: : :seven: : :seven: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: ",
	        ":gem: : :cherries: : :cherries:",
			":gem: : :bell: : :star:",
			":cherries: : :seven: : :cherries: ",
			":seven: : :seven: : :cherries: ",
			":cherries: : :seven: : :seven: ",
			":cherries: : :star: : :gem: ",
			":cherries: : :gem: : :gem: ",
			":cherries: : :lemon: : :gem: ",
			":lemon: : :lemon: : :gem: ",
			":lemon: : :lemon: : :bell: ",
			":bell: : :lemon: : :bell: ",
			":star: : :lemon: : :bell: ",
			":star: : :cherries: : :bell: "
	    ];
	    let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
	    var replys3 = [
	        ":gem: : :gem: : :gem: ",
            ":star: : :star: : :star: ",
	        ":lemon: : :lemon: : :lemon: ",
	        ":seven: : :seven: : :seven: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: ",
	        ":gem: : :cherries: : :cherries:",
			":gem: : :bell: : :star:",
			":cherries: : :seven: : :cherries: ",
			":seven: : :seven: : :cherries: ",
			":cherries: : :seven: : :seven: ",
			":cherries: : :star: : :gem: ",
			":cherries: : :gem: : :gem: ",
			":cherries: : :lemon: : :gem: ",
			":lemon: : :lemon: : :gem: ",
			":lemon: : :lemon: : :bell: ",
			":bell: : :lemon: : :bell: ",
			":star: : :lemon: : :bell: ",
			":star: : :cherries: : :bell: "
	    ];
	    let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])

	    const embed = new Discord.RichEmbed()
	        .setColor("#FE0101")
	        .setTitle(`** :slot_machine: ${message.author.username} à lancé la machine à sous! :slot_machine: **`)
	        .addField("**-------------------**", "** **")
	        .addField(`${reponse} \n \n${reponse2}**<** \n \n${reponse3}`, `** **`)
	        .addField("**-------------------**", "** **")
	        .setDescription("** **")
        message.channel.send(embed)
        
        if (reponse2 === ":lemon: : :lemon: : :lemon: " || reponse2 === ":bell: : :bell: : :bell:" || reponse2 === ":cherries: : :cherries: : :cherries: " || reponse2 === ":star: : :star: : :star: " || reponse2 === ":seven: : :seven: : :seven: " || reponse2 === ":gem: : :gem: : :gem: ") {

            const embed = new Discord.RichEmbed()
	        .setColor("#FE0101")
            .setTitle(`**🔔 VICTOIRE ! 🔔**`)
            .addField("**-------------------**", "** **")
            .addField(`**Felicitations ${message.author.username}, tu viens de gagner 500€ qui viennent directement d'ètre transferés sur le compte de Charly! :tada:**`, `** **`)
            .addField("**-------------------**", "** **")
            message.channel.send(embed).then(function (message) {
                message.react("🎉");
    
            }).catch(function() {
            });
        }
	}
});

clientDiscord.login(process.env.TOKEN);
