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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx"
STATUS_REACT: process.env.STATUS_REACT || "true"
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_13_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInlkclAwcC95WjhSTkpVMW1sNi9FbXZ6RjhYbWVWbjZqNHVyLzZ6d3dwcWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA3MTEzNDE2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMThFMDVCNEY3MTcxNUFGNTgwRDNEN0VEQzRFNzZCODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ3MTIzOTk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjB6SHp6NTg5U2R1ZEJfTzcwQi04ZUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2Y3ZTQzY2UtOTNiNy00YzFjLWI4YWEtMTdjNjE5NzhkMWNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDE3NCxcbiAgICAgIDEwLFxuICAgICAgMjI0LFxuICAgICAgNjMsXG4gICAgICAxODcsXG4gICAgICAxNTcsXG4gICAgICAyNDQsXG4gICAgICAxMzEsXG4gICAgICAyMTcsXG4gICAgICAxOTIsXG4gICAgICAxMzcsXG4gICAgICAxMDksXG4gICAgICAyMzMsXG4gICAgICAyMTMsXG4gICAgICAyMzAsXG4gICAgICAxMDAsXG4gICAgICAxNzIsXG4gICAgICA1NixcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDI0NyxcbiAgICAgIDI0NSxcbiAgICAgIDM3LFxuICAgICAgMixcbiAgICAgIDE1NCxcbiAgICAgIDI0NCxcbiAgICAgIDEwOCxcbiAgICAgIDEwMyxcbiAgICAgIDE1LFxuICAgICAgMTM4LFxuICAgICAgMTE1LFxuICAgICAgNjksXG4gICAgICAxOTYsXG4gICAgICAxMjAsXG4gICAgICA3NSxcbiAgICAgIDEwMixcbiAgICAgIDgxLFxuICAgICAgMTQzLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0QxUThUREJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzExMzQxNjA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDI3ODE5MDEzMzI5MzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXeWxkd0dFSkgraThFR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUm5venVYWmE4bldtdHY3VkhkcmpLbS9hRXRVMWNHcVBlOFdYNjM0a05Ibz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJadk9vWUsyQXY1L0VGaFhuMVJ4ZVNHSFRnZEd2MlhibnVEcHZ4REdqTkp3SGtQaU0xanZtZ3puMEIySW4yZmhBOFd3UXBONTVveklDdnp5eW9CMEZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOaXJ1QkRRbEVoT2V4TzJzNXV6NUh4YUpWeU5XZkR4dVdrRmpOYTdBQWRGSTlFVUxER1JtdWQ4bU5sZTArbVkrbHdXTE5OanJURlNyeTJUbGFEU0pqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcxMTM0MTYwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDcxMjM5ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZ1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVnWi5qc29uIjogIntcImtleURhdGFcIjpcIkJDZmNOREp3OVBhWHpNRjErQ0xHOUNRL00wUjFLNXlHK0MzYVd1QlQ3R3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwMzkwMTMwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ3MTIzNzQ5NzA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
