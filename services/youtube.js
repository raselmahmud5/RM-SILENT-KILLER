const ytdl = require("ytdl-core");
const fs = require("fs");
const path = require("path");

module.exports = {
  download: async (url) => {
    const filePath = path.join(__dirname, "..", "cache", "video.mp4");
    return new Promise((resolve, reject) => {
      ytdl(url)
        .pipe(fs.createWriteStream(filePath))
        .on("finish", () => resolve(filePath))
        .on("error", reject);
    });
  }
};
