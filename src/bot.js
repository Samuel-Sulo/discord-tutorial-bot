require('dotenv').config();
const { Client } = require('discord.js');

const { DISCORDJS_BOT_TOKEN } = require('./constants');
const client = new Client({ intents: 'MessageContent' });

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`)
});

client.on('messageCreate', (message) => {
  console.log(message.content);
});

client.login(DISCORDJS_BOT_TOKEN);
