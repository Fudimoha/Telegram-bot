const TelegramBot = require('node-telegram-bot-api');

// Replace with your token
const token = '7860333680:AAGgXHpyWaJ4VrZRxGtxuNPEDUyu_bHEplo';
const bot = new TelegramBot(token, { polling: true });

// When someone sends /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! I am your bot. How can I help you?');
});

// Reply to any message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  bot.sendMessage(chatId, `You said: ${text}`);
});
