module.exports.login = function({ appState }) {
    return new Promise((resolve, reject) => {
        if(!appState) return reject("No appState provided!");
        const api = {
            sendMessage: (msg, threadID) => console.log(`Message sent to ${threadID}: ${msg}`)
        };
        resolve(api);
    });
};
