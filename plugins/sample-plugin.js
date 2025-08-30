// plugins/sample-plugin.js

/**
 * Sample Plugin for ༊✨𝐌𝐀𝐆𝐈𝐂🔹𝐎𝐅🔸𝐒𝐎𝐔𝐍𝐃✨᯾
 * Author: Rasel Mahmud
 * Description: Example plugin showing how to extend bot features.
 */

module.exports = {
  name: "sample", // command name
  description: "Replies with a sample message",
  usage: "!sample",
  permission: 0, // 0 = everyone, 1 = admin, 2 = only bot owner

  /**
   * Main function
   * @param {Object} context - Bot context
   * @param {Object} event - Message / event data
   * @param {Array} args - Command arguments
   */
  onStart: async function (context, event, args) {
    try {
      const replyMessage = `👋 Hello ${event.senderName || "User"}!\nThis is a sample plugin running successfully ✅`;
      context.api.sendMessage(replyMessage, event.threadID, event.messageID);
    } catch (e) {
      console.error("[Sample Plugin Error]", e);
      context.api.sendMessage("❌ Something went wrong in sample plugin.", event.threadID);
    }
  },

  /**
   * Optional event listener (trigger without command)
   * Example: Auto reply if user says "ping"
   */
  onChat: async function (context, event) {
    if (!event.body) return;
    if (event.body.toLowerCase() === "ping") {
      context.api.sendMessage("🏓 Pong!", event.threadID, event.messageID);
    }
  }
};
