const {
	delay
} = require('@adiwajshing/baileys')
const moment = require("moment-timezone")

module.exports = async (xylaa,m) => {
  			try {
let teks = `「 *Anti ViewOnce Message* 」
      
🤠 *Name* : ${m.pushName}
👾 *User* : wa.me//${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
      
💫 *MessageType* : ${m.mtype}`

   m.msg.caption = teks + "\n\n\n💬 *CAPTION* : \n\n"+ m.msg.caption

  await delay(500)
  
  m.copyNForward(m.chat, true, {
  readViewOnce: true,
    quoted: m
  })

			} catch (err) {
				console.log(err)
			}
}
