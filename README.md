# ༊✨𝐌𝐀𝐆𝐈𝐂🔹𝐎𝐅🔸𝐒𝐎𝐔𝐍𝐃✨᯾

Powerful Messenger Bot by Rasel Mahmud
# MAGIC-OF-SOUND-BOT
[![Bot Status](https://img.shields.io/badge/status-online-brightgreen)]()
# ༊✨𝐌𝐀𝐆𝐈𝐂𝐎𝐅𝐒𝐎𝐔𝐍𝐃✨᯾

<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="280"/>
</p>

<p align="center">
  <img src="http://readme-typing-svg.herokuapp.com?color=00ffff&center=true&vCenter=true&lines=༊✨MAGIC+OF+SOUND✨᯾" alt="Magic of Sound typing"/>
</p>

<p align="center">
  <strong>👑 𝐎𝐰𝐧𝐞𝐫:</strong><br>
  <img src="http://readme-typing-svg.herokuapp.com?color=ff69b4&center=true&vCenter=true&lines=𝗥𝗮𝘀𝗲𝗹+𝗠𝗮𝗵𝗺𝘂𝗱" alt="Owner typing"/><br><br>
  <strong>📅 𝐑𝐞𝐥𝐞𝐚𝐬𝐞𝐝:</strong><br>
  <img src="http://readme-typing-svg.herokuapp.com?color=ff1493&center=true&vCenter=true&lines=28/07/2025" alt="Release date typing"/>
</p>

<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="280"/>
</p>

---

## 🌟 পরিচিতি

**༊✨MAGIC OF SOUND✨᯾** কোনো সাধারণ বট না —  
এটা একদম ভিন্নধর্মী, যেখানে মেসেজের মাধ্যমে মজা, আবেগ আর একটুকরো ম্যাজিক একসাথে পাওয়া যায়।

> 🎧 প্রতিটি কমান্ডে থাকে কল্পনার ছোঁয়া,  
> 💫 আর প্রতিক্রিয়াগুলোয় লুকিয়ে থাকে একটু চমক।

---

## 🖼️ 𝐁𝐨𝐭 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 ✨

<p align="center">
  <img src="https://i.imgur.com/mWuHL8E.png" alt="Bot Image" width="300"/>
</p>

---

## 🚀 ব্যবহারবিধি (How to use)

১. নিচের Messenger গ্রুপে জয়েন করুন ✅
২. কমান্ড লিখুন আর ম্যাজিক উপভোগ করুন 🎉
৩. বটের কমান্ড জানতে *help লিখতে হবে 🌺

🔗 **Messenger Group:**  
👉 [এখানে ক্লিক করে জয়েন করুন](https://m.me/j/AbZnvggXXnMoLZd7/)

---

## 📡 যোগাযোগ করুন

📘 **Facebook (Main):** [Rasel Mahmud](https://www.facebook.com/raselmahmud.q)  
👤 **Facebook (Alt):** [View Profile](https://www.facebook.com/iiii.482394)  
📺 **YouTube Channel:** [𝐑𝐌 𝐒𝐈𝐋𝐄𝐍𝐓 𝐊𝐈𝐋𝐋𝐄𝐑](https://youtube.com/@rmsilentgaming?si=jdMyMhECKt2iHCh-)
> ✨ আপনার কোনো পরামর্শ, প্রশ্ন বা আইডিয়া থাকলে, নির্দ্বিধায় যোগাযোগ করুন।

---

## 💬 শেষ কিছু কথা

> 💙 এই বট বানানো হয়েছে মজা, ভালোবাসা আর আপনার কাজ করা সহজের জন্য কেউ বটকি অপব্যবহার করবেন না ।  

<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="280"/>
</p>

<p align="center">


<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="280"/>
</p>


## Setup

1. Clone repo
2. Copy `.env.example` → `.env` এবং আপডেট করো
3. Run `npm install`
4. Run `npm start` or `npm run dev`

## Features

- VIP/Admin/General permission
- Modular commands
- Auto-react
- Auto-unsend on reaction
- Scheduler
- Logging
- Database support
- Multi-language (i18n)
- Plugins support
<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="280"/>
</p>

<p align="center">
  <strong>
    🪄 Thanks for visiting<br>
    🔊 MAGIC OF SOUND ✨<br>
    Made
    💙By Rasel Mahmud
  </strong>
</p>

<p align="center">
  <img src="https://i.imgur.com/LyHic3i.gif" width="280"/>
</p>


# Deploy Bot via GitHub Actions

এই GitHub Actions workflow ব্যবহার করে তোমার বট সরাসরি GitHub থেকে deploy করা যাবে।  

## Steps

1. `.env.example` ফাইল তৈরি থাকবে। Workflow এ এটি `.env` হিসেবে কপি হবে।  
2. Database migration স্বয়ংক্রিয়ভাবে করা হবে।  
3. Node.js 22 ব্যবহার করা হবে।  

## Workflow Code

```yaml
name: Deploy Bot

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build-and-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'

      - name: Install Dependencies
        run: npm install

      - name: Copy .env
        run: cp .env.example .env

      - name: Run Database Migration
        run: node scripts/migrate.js

      - name: Start Bot
        run: node index.js
