// messageUpdate.js
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.json());

// VERIFY WEBHOOK
app.get("/webhook", (req, res) => {
    const VERIFY_TOKEN = "YOUR_VERIFY_TOKEN"; // নিজের টোকেন বসান
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token) {
        if (mode === "subscribe" && token === VERIFY_TOKEN) {
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

// HANDLE WEBHOOK EVENTS
app.post("/webhook", (req, res) => {
    const body = req.body;

    if (body.object === "page") {
        body.entry.forEach(function(entry) {
            let webhook_event = entry.messaging[0];

            // যদি মেসেজ আপডেট হয়
            if (webhook_event.message) {
                const senderId = webhook_event.sender.id;

                if (webhook_event.message.is_deleted) {
                    console.log(`User ${senderId} unsent a message!`);
                    sendMessage(senderId, "You just unsent a message!");
                }

                if (webhook_event.message.is_edited) {
                    console.log(`User ${senderId} edited their message!`);
                    sendMessage(senderId, "I saw you edited your message!");
                }
            }
        });

        res.status(200).send("EVENT_RECEIVED");
    } else {
        res.sendStatus(404);
    }
});

// SEND MESSAGE FUNCTION
function sendMessage(sender_psid, response) {
    const PAGE_ACCESS_TOKEN = "YOUR_PAGE_ACCESS_TOKEN"; // এখানে আপনার পেজ অ্যাক্সেস টোকেন বসান

    const request_body = {
        recipient: { id: sender_psid },
        message: { text: response }
    };

    request(
        {
            uri: "https://graph.facebook.com/v17.0/me/messages",
            qs: { access_token: PAGE_ACCESS_TOKEN },
            method: "POST",
            json: request_body
        },
        (err, res, body) => {
            if (!err) {
                console.log("Message sent!");
            } else {
                console.error("Unable to send message:" + err);
            }
        }
    );
}

app.listen(3000, () => console.log("Messenger bot is listening on port 3000"));
