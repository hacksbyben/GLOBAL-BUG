global.namaown = "ben" // your owner name here
global.namabot = "ben-bug-bot" // your bot name here
global.versisc = "9.5.0" //
global.owner = ["6588378414"] // your owner number here
global.tele = "not_available" // your telegram here
global.url = "not_available" // Your YouTube Here
global.namastore = "LynnZxD" // UBAH NAMA STORE LU
global.simbol = "✪" // You Can Change Simbol
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 100
}

// Ganti Logo Disini
global.painlogo = "http://telegra.ph/file/9a332c815ad31956d5ce6.jpg" 

global.my = {
      saluran: "not_available",
      idCH: "not_available",
      youtube: "not_available",
      telegram: "not_available",
      Instagram: "not_available"
   }


global.mess = {
    success: 'ᴅᴏɴᴇ',
    admin: '_*❗ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ !*_',
    botAdmin: '_*❗ʙᴏᴛ ᴍᴜꜱᴛ ʙᴇ ᴛʜᴇ ᴀᴅᴍɪɴ !*_',
    OnlyOwner: '_*❗ᴏᴡɴᴇʀꜱ ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ !*_',
    OnlyGrup: '_*❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ɢʀᴏᴜᴘ !*_',
    private: '_(❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ !*_',
    wait: '_*ᴘʀᴏᴄᴇꜱꜱɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*_',
    notregist: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ*_',
    premium: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴘʀᴇᴍɪᴜᴍ_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 WIB_*.',
     bugrespon: `\`[ ! ]\`ᴡᴀɪᴛ ; ᴄᴜʀʀᴇɴᴛʟʏ ꜱᴇɴᴅɪɴɢ ᴠɪʀᴜꜱ ᴀᴛᴛᴀᴄᴋ`,
     donebug: `\`[ ! ]\`ᴠɪʀᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ꜱᴇɴᴛ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ`,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
