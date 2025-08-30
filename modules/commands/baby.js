const axios = require('axios');


 const baseApiUrl = async () => {

    const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);

    return base.data.api;

};


module.exports.config = {

  name: "baby",

  version: "6.9.9",

  credits: "Rasel Mahmud",

  cooldowns: 0,

  hasPermssion: 0,

  description: "better than all sim simi",

  commandCategory: "chat",

  category: "chat",

  usePrefix: true,

  prefix: true,

  usages: `[anyMessage] OR\nteach [YourMessage] - [Reply1], [Reply2], [Reply3]... OR\nteach [react] [YourMessage] - [react1], [react2], [react3]... OR\nremove [YourMessage] OR\nrm [YourMessage] - [indexNumber] OR\nmsg [YourMessage] OR\nlist OR\nall OR\nedit [YourMessage] - [NewMessage]`,

};


module.exports.run = async function ({ api, event, args, Users }) {

  try {

    const link = `${await baseApiUrl()}/baby`;

    const dipto = args.join(" ").toLowerCase();

    const uid = event.senderID;


    if (!args[0]) {

      const ran = ["Bolo baby", "hum", "type help baby", "type !baby hi"];

      const r = ran[Math.floor(Math.random() * ran.length)];

      return api.sendMessage(r, event.threadID, event.messageID);

    }


    if (args[0] === 'remove') {

      const fina = dipto.replace("remove ", "");

      const respons = await axios.get(`${link}?remove=${fina}&senderID=${uid}`);

      return api.sendMessage(respons.data.message, event.threadID, event.messageID);

    }


    if (args[0] === 'rm' && dipto.includes('-')) {

      const [fi, f] = dipto.replace("rm ", "").split(/\s*-\s*/);

      const respons = await axios.get(`${link}?remove=${fi}&index=${f}`);

      return api.sendMessage(respons.data.message, event.threadID, event.messageID);

    }


    if (args[0] === 'list') {

      if (args[1] === 'all') {

        const res = await axios.get(`${link}?list=all`);

        const data = res.data.teacher.teacherList;

        const teachers = await Promise.all(data.map(async (item) => {

          const number = Object.keys(item)[0];

          const value = item[number];

          const name = await Users.getNameUser(number).catch(()=>{}) || "unknown";

          return { name, value };

        }));

        teachers.sort((a, b) => b.value - a.value);

        const output = teachers.map((teacher, index) => `${index + 1}/ ${teacher.name}: ${teacher.value}`).join('\n');

        return api.sendMessage(`Total Teach = ${res.data.length}\n\n👑 | List of Teachers of baby\n${output}`, event.threadID, event.messageID);

      } else {

        const respo = await axios.get(`${link}?list=all`);

        return api.sendMessage(`Total Teach = ${respo.data.length}`, event.threadID, event.messageID);

      }

    }


    if (args[0] === 'msg' || args[0] === 'message') {

      const fuk = dipto.replace("msg ", "");

      const respo = await axios.get(`${link}?list=${fuk}`);

      return api.sendMessage(`Message ${fuk} = ${respo.data.data}`, event.threadID, event.messageID);

    }


    if (args[0] === 'edit') {

      const command = dipto.split(/\s*-\s*/)[1];

      if (command.length < 2) {

        return api.sendMessage('❌ | Invalid format! Use edit [YourMessage] - [NewReply]', event.threadID, event.messageID);

      }

      const res = await axios.get(`${link}?edit=${args[1]}&replace=${command}`);

      return api.sendMessage(`changed ${res.data.message}`, event.threadID, event.messageID);

    }


    if (args[0] === 'teach' && args[1] !== 'amar' && args[1] !== 'react') {

      const [comd, command] = dipto.split(/\s*-\s*/);

      const final = comd.replace("teach ", "");

      if (command.length < 2) {

        return api.sendMessage('❌ | Invalid format! Use [YourMessage] - [Reply1], [Reply2], [Reply3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);

      }

      const re = await axios.get(`${link}?teach=${encodeURIComponent(final)}&reply=${encodeURIComponent(command)}&senderID=${uid}&threadID=${event.threadID}`);

      const name = await Users.getNameUser(re.data.teacher).catch(() => {}) || "unknown";

      return api.sendMessage(`✅ Replies added ${re.data.message}\nTeacher: ${name || "unknown"}\nTeachs: ${re.data.teachs}`, event.threadID, event.messageID);

    }


    if (args[0] === 'teach' && args[1] === 'amar') {

      const [comd, command] = dipto.split(/\s*-\s*/);

      const final = comd.replace("teach ", "");

      if (command.length < 2) {

        return api.sendMessage('❌ | Invalid format! Use [YourMessage] - [Reply1], [Reply2], [Reply3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);

      }

      const re = await axios.get(`${link}?teach=${final}&senderID=${uid}&reply=${command}&key=intro`);

      return api.sendMessage(`✅ Replies added ${re.data.message}`, event.threadID, event.messageID);

    }


    if (args[0] === 'teach' && args[1] === 'react') {

      const [comd, command] = dipto.split(/\s*-\s*/);

      const final = comd.replace("teach react ", "");

      if (command.length < 2) {

        return api.sendMessage('❌ | Invalid format! Use [teach] [YourMessage] - [Reply1], [Reply2], [Reply3]... OR [teach] [react] [YourMessage] - [react1], [react2], [react3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);

      }

      const re = await axios.get(`${link}?teach=${final}&react=${command}`);

      return api.sendMessage(`✅ Replies added ${re.data.message}`, event.threadID, event.messageID);

    }


    if (['amar name ki', 'amr nam ki', 'amar nam ki', 'amr name ki'].some(phrase => dipto.includes(phrase))) {

      const response = await axios.get(`${link}?text=amar name ki&senderID=${uid}&key=intro`);

      return api.sendMessage(response.data.reply, event.threadID, event.messageID);

    }


     const a = (await axios.get(`${link}?text=${dipto}&senderID=${uid}&font=1`)).data.reply;

    return api.sendMessage(a, event.threadID,

        (error, info) => {

          global.client.handleReply.push({

            name: this.config.name,

            type: "reply",

            messageID: info.messageID,

            author: event.senderID,

            lnk: a,

            apiUrl: link

          });

        }, event.messageID);


  } catch (e) {

    console.error('Error in command execution:', e);

    return api.sendMessage(`Error: ${e.message}`, event.threadID, event.messageID);

  }

};


module.exports.handleReply = async function ({ api, event, handleReply }) {

try{

  if (event.type == "message_reply") {

    const reply = event.body.toLowerCase();

    if (isNaN(reply)) {

      const b = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(reply)}&senderID=${event.senderID}&font=1`)).data.reply;

      await api.sendMessage(b, event.threadID, (error, info) => {

          global.client.handleReply.push({

            name: this.config.name,

            type: "reply",

            messageID: info.messageID,

            author: event.senderID,

            lnk: b

          });

        }, event.messageID,

      )}}

}catch(err){

    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);

}};


   

module.exports.handleEvent = async function ({ api, event }) {

try{

   const body = event.body ? event.body?.toLowerCase() : ""

        if (body.startsWith("baby") || body.startsWith("bby") || body.startsWith("bot") || body.startsWith("Magicchat") || body.startsWith("🤺") || body.startsWith("🤖")) {

            const arr = body.replace(/^\S+\s*/, "")

        const randomReplies = ["আমাকে না ডেকে তোমার প্রিয় মানুষের কাছে যাও 😒", "Yes 😀, I am here", "নেট সমস্যা 🐸😩", "তুমি সেই লুচ্চাটা না 🫵", "kire luccha 🥱", "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি বলদের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?", "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘", "সুন্দর মাইয়া মানেই-🥱আমার বস রাসেল এর ভাবি-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸"];

            if (!arr) {

    await api.sendMessage(randomReplies[Math.floor(Math.random() * randomReplies.length)], event.threadID, (error, info) => {

            global.client.handleReply.push({

            name: this.config.name,

            type: "reply",

            messageID: info.messageID,

            author: event.senderID

          });

        }, event.messageID,

      )

    }

    const a = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(arr)}&senderID=${event.senderID}&font=1`)).data.reply;     

        await api.sendMessage(a, event.threadID, (error, info) => {

          global.client.handleReply.push({

            name: this.config.name,

            type: "reply",

            messageID: info.messageID,

            author: event.senderID,

            lnk: a

          });

        }, event.messageID,

      )}

}catch(err){

    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);

}};
