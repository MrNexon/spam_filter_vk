const VkBot = require('node-vk-bot-api');

const TOKEN = 'vk1.a.wi1PZPq3wts8vnDryyNzkiRuKjmJMTFFIkWe8kk1PX3IvwkFjIe1DlEgeTMBIOolnHBexKCMWqhVqnsog2Fc-EEyaAMnAPR8kIBEs0yGss0pwNmMiyDUkDIkHWjBGGLRYB3b04u5kfllgSYad9z7MoBpgy9F45vdj94BpK4k0acBIT7oQVpPLs5UJED3kPToLfbSHHEJejdglh-t3xIC6A';
const bot = new VkBot({
    token: TOKEN,
});
bot.on((ctx) => {
    if (ctx.message.action?.type == 'chat_invite_user') {
        if (ctx.message.action?.member_id >= 770877286) {
            bot.execute('messages.removeChatUser', {
                chat_id: ctx.message.peer_id - 2000000000,
                member_id: ctx.message.action?.member_id,
                access_token: TOKEN
            })
        }
    }
});
bot.startPolling((err) => {
    console.log(err)
});
