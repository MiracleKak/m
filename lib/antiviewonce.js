const {
	delay
} = require('@adiwajshing/baileys')
const moment = require("moment-timezone")

module.exports = async (xylaa,m) => {
  			try {
let teks = `ć *Anti ViewOnce Message* ć
      
š¤  *Name* : ${m.pushName}
š¾ *User* : wa.me//${m.sender.split("@")[0]}
ā° *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
      
š« *MessageType* : ${m.mtype}`

   m.msg.caption = teks + "\n\n\nš¬ *CAPTION* : \n\n"+ m.msg.caption

  await delay(500)
  
  m.copyNForward(m.chat, true, {
  readViewOnce: true,
    quoted: m
  })

			} catch (err) {
				console.log(err)
			}
}
