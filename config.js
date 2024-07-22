const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_00_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0OUJaVFhFZnhRSC9aemJndkhHeE1meVBXdmViQlJuMHIvWFNFSUxKcWdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQxMjM1NjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQkY2Q0VBOTYyQzQwODY2RDMxOURENzg1MjhBOTQxRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2NjA0NTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWF6UEoydjRSVld0bllHSHpKZ0k2QVwiLFxuICBcInBob25lSWRcIjogXCIzMmEyMjIyNS0yNjljLTRiNmQtYTUxYi03NDczNmJmNWYyOGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICA0MyxcbiAgICAgIDE5OSxcbiAgICAgIDIyMCxcbiAgICAgIDYwLFxuICAgICAgMjM0LFxuICAgICAgMTQyLFxuICAgICAgODQsXG4gICAgICA1MixcbiAgICAgIDEyMyxcbiAgICAgIDc0LFxuICAgICAgMTM1LFxuICAgICAgMTk1LFxuICAgICAgMTQ5LFxuICAgICAgOTAsXG4gICAgICAyMDEsXG4gICAgICA2MSxcbiAgICAgIDE3MyxcbiAgICAgIDE2NSxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxNTYsXG4gICAgICAzNixcbiAgICAgIDcsXG4gICAgICAxNzEsXG4gICAgICAxMTUsXG4gICAgICAxNTQsXG4gICAgICAzNixcbiAgICAgIDIxOCxcbiAgICAgIDI1LFxuICAgICAgMzEsXG4gICAgICAxNDcsXG4gICAgICA5NSxcbiAgICAgIDE0MCxcbiAgICAgIDEyMixcbiAgICAgIDYzLFxuICAgICAgMTgxLFxuICAgICAgMTYxLFxuICAgICAgOTQsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWFJXVjVFUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDEyMzU2MzM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7wnZCM8J2QkSAg8J2Qg/CdkIDwnZCS8J2QgFwiLFxuICAgIFwibGlkXCI6IFwiOTYwNTc0NjM3MjYyOTA6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHZrbjVnRkVKN28rYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4S29US0xCSDgrTG5ZbndjUnJQcXBmekw3MTRZeW9XSGdkWUlpTlRiTGdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhqYjAzMy80RWNrU1hMQ3lXZlRZNG96VnF2RVdMRHlxK0k1aCtxOTNpL1JhS21xWi9wZ1hDbU5jYUFRblBjTmc2QnNBaU91Rk5hb2N1UklWWlJBcERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh5Tys4UTU0Q0lnVGp2NWg0ZUt6dUJuOXlPTUFPc2FqeTZHd1FEVXI2SXA0akdsL0dXWm0vb0YyU3ZmQTJTR3M2cUNMVGV1Ylo3VVBxQVVXTDgvOWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxMjM1NjMzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NjA0NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMU2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxTaS5qc29uIjogIntcImtleURhdGFcIjpcIkE1a1JXSjRBTndnYzRFWGhYNnFWMmxKUS8ycDhwaUlNQUVjcDcwc3BEa1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5MzAyOTc1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY1OTcyNTA5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
