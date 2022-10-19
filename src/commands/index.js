const { COMMAND_PREFIX } = require('../constants');
const { KickCommand } = require('./kick');

class CommandBuilder {
  message = null;
  command = null;
  commandName = null;
  commandArgs = null;

  constructor(message) {
    this.message = message;
    this.command = message.content;
    this.removePrefix();
    this.removeAdditionalSpaces();
    [this.commandName, ...this.commandArgs] = this.splitCommandParts();
  }

  removePrefix() {
    this.command = this.command.substring(COMMAND_PREFIX.length);
  }

  removeAdditionalSpaces() {
    this.command = this.command.trim();
  }

  splitCommandParts() {
    return this.command.split(/\s+/);
  }

  build() {
    if (this.commandName === 'kick') {
      return new KickCommand(this.message, this.commandArgs);
    }
  }
}

module.exports = {
  CommandBuilder
}
