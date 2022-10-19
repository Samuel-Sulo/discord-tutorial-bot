require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { DISCORDJS_BOT_TOKEN, COMMAND_PREFIX } = require('./constants');
const { CommandBuilder } = require('./commands');

const client = new Client({ intents: [
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
]});

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`)
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.startsWith(COMMAND_PREFIX)) {
    const command = new CommandBuilder(message).build();
    if (!command) {
      return;
    }
    command.execute();
  }
});

client.login(DISCORDJS_BOT_TOKEN);
