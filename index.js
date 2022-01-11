const { Plugin } = require('powercord/entities');

module.exports = class Text extends Plugin {
  startPlugin () {
    this.registerCommand(
      'femboybear',
      '{c}',
      (args) => ({
        send: true,
        result: 'https://cdn.discordapp.com/attachments/525151751834304532/927690029785030726/femboy-bear.jpg'
      })
    );
  }
};
