// DEPENDANCES
const Discord = require('discord.js');
const config = require('./scripts/config.json');
const scripts = require('./scripts/scripts.js');
const weather = require('weather-js');
require('events').EventEmitter.prototype._maxListeners = 1000;


// VARIABLES
const clientDiscord = new Discord.Client();
const PREFIX = ".";

// EVENEMENTS

clientDiscord.on('ready', () => {
    console.log("> initialisation du bot : OK!");
    clientDiscord.user.setActivity('. help');
});


clientDiscord.login(process.env.TOKEN);
