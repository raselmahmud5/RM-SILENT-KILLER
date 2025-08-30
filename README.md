# ༊✨𝐌𝐀𝐆𝐈𝐂🔹𝐎𝐅🔸𝐒𝐎𝐔𝐍𝐃✨᯾

Powerful Messenger Bot by Rasel Mahmud

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
