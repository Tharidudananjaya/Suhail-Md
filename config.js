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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "SRILANK/KURUNEGALA";
global.github=process.env.GITHUB|| "https://github.com/MR DASA TECH";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VafPRIHIHphCGVuZEb0T";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VafPRIHIHphCGVuZEb0T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e752864c897abc8d01614.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94741235633";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94741235633,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_13_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInNGS25KUjJ1RTJpaDY2MmdKMGVIZFhXUFl3U0pTOWgzNVc0bVFhNml0SkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDEyMzU2MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVGMEJCQjZBNTc0OEJEMDJDQzM4OUYxMzEzNjBEMDZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA5OTYyOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItdmtJUW94c1JkQzE5dlpxa0NTSEN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjMWM0NDdlLWFlNDgtNDk5ZS04MDBhLTk5NjM2NzU4ZTEyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxODUsXG4gICAgICA2MSxcbiAgICAgIDM3LFxuICAgICAgMTQxLFxuICAgICAgMTg0LFxuICAgICAgMTM2LFxuICAgICAgNzcsXG4gICAgICAyMjEsXG4gICAgICAxOTIsXG4gICAgICA1OSxcbiAgICAgIDE4MCxcbiAgICAgIDYsXG4gICAgICA1MixcbiAgICAgIDE1MCxcbiAgICAgIDUxLFxuICAgICAgMjQ2LFxuICAgICAgNDksXG4gICAgICAxOCxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDIzOCxcbiAgICAgIDE2NCxcbiAgICAgIDI4LFxuICAgICAgMTE3LFxuICAgICAgMjU0LFxuICAgICAgMzAsXG4gICAgICAxNDQsXG4gICAgICAxNDksXG4gICAgICAxMjIsXG4gICAgICAyMTMsXG4gICAgICA3MyxcbiAgICAgIDExLFxuICAgICAgMTYsXG4gICAgICA4NSxcbiAgICAgIDEwNSxcbiAgICAgIDE4NCxcbiAgICAgIDEyNyxcbiAgICAgIDE1MCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJETFhMNFpUS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDEyMzU2MzM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbvCdkIzwnZCRICDwnZCD8J2QgPCdkJLwnZCAXCIsXG4gICAgXCJsaWRcIjogXCI5NjA1NzQ2MzcyNjI5MDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDNHFmc0dFT2pLMTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRFFUalVxd1VsTk1ORE1YVWtaK3d4NDFrOEQ4UzU1Wnc4SHFjMWdnSXptVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMcUJibmVSR1BIZDdLdTRQakxvYXhzM1pvd0ljaExHbTFOY3pRRk5uZDhHZ3ZUUVVqRjhpcTBNRE0xS1NPaHlIUnVrckMxTEluKzdtODl2QzY4TllEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLemZkM25YL1ZYY29MLytWZ3BVOHBaVzdKam1DbU5nQWE5bGdleC9sQ3RzZWh0OXMzY0lSdEF1WGxaSDk1ejlHLzl3K0dEWnVHQWlMai80ZnNEZnppZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MTIzNTYzMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwOTk2MjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEd0RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR3RC5qc29uIjogIntcImtleURhdGFcIjpcIlhrOVZBQ0xxcDA0YjhxYitVZ3BRQ0IvNUZCb2JaVDBqeFdDb3RKQ1ljR2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg2OTI0MTM2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDk5NjMxMzg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "?",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MISTER DASA",
  ownername:process.env.OWNER_NAME|| "MR DASA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MR DASA"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
