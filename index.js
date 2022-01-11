const { Plugin } = require("powercord/entities");

module.exports = class PluginName extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: 'femboybear',
      description: 'funny',
      usage: '{c} [ ...arguments ]',
      executor: (args) => ({
        send: true,
        result: 'https://cdn.discordapp.com/attachments/525151751834304532/927690029785030726/femboy-bear.jpg'
      })
    });
  }
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand('femboybear');
  }
}
