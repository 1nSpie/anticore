const axios = require('axios');

const BOT_TOKEN = '8144218850:AAEd0Dsvmkk_fy41mNwH8GMD7RmPOOZFQhA';

async function getBotInfo() {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`);
    
    console.log('🤖 Bot Information:');
    console.log('Bot Name:', response.data.result.first_name);
    console.log('Bot Username: @' + response.data.result.username);
    console.log('Bot ID:', response.data.result.id);
    
    console.log('\n📱 Next steps:');
    console.log('1. Open Telegram');
    console.log('2. Search for: @' + response.data.result.username);
    console.log('3. Start a chat and send: /start');
    console.log('4. Then run: node get-chat-id.js');
    
  } catch (error) {
    console.error('Error getting bot info:', error.response?.data || error.message);
  }
}

getBotInfo();
