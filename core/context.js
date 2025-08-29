module.exports = {
  build(event) {
    return {
      threadID: event.threadID,
      messageID: event.messageID,
      senderID: event.senderID,
      body: event.body,
      type: event.type,
      timestamp: event.timestamp,
      rawEvent: event
    };
  }
};
