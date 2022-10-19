class KickCommand {
  message = null;
  args = null;

  constructor(message, args) {
    this.message = message;
    this.args = args;
  }

  execute() {
    if (this.args.length === 0) {
      this.message.reply('Please provide an ID.');
      return;
    }
    for (const memberId of this.args) {
      const member = this.message.guild.members.cache.get(memberId);
      if (member) {
        member.kick();
      } else {
        this.message.channel.send(`Member ${memberId} was not found.`);
      }
    }
  }
}

module.exports = {
  KickCommand
}