const { Plugin } = require("powercord/entities");
const { channels, messages } = require("powercord/webpack");

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
    powercord.api.commands.registerCommand({
      command: 'dmbear',
      description: 'funny 2',
      usage: '{c} [ ...arguments ]',
      executor: (args) => ({
        const channelId = channels.getChannelId('670415208472248349');
        
        messages.sendMessage(channelId, { content: "https://cdn.discordapp.com/attachments/525151751834304532/927690029785030726/femboy-bear.jpg" });
      })
    });
  }
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand('femboybear');
  }
}
