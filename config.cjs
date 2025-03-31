// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "BABIYA-MD [KILL]>>>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU8zeFBockIzdWpQSHN3M0RlRVc4VlV4dlV4VHBnUHZ6WHpzUVZZR3VsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUlEd1RmamIrZm9WS25Na3FFK21tMURITnJ0M1RwNGZhRUI0TFFCUVJVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTXBONUtxNGlJM2M4Yi9Yc21QY0gwQVExWGRqMEswdEprMDMwYnBILzBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2MlBHTUZ0OW9HSlJqeDRKS21DcU1HVDVwc1VBUys4SmFFbmZjUXhxZFdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHTEJYc1B6TnBTakxTRFJqL0FGRkhVc2FkQ0ZxNTIyOC9EWmcwajVyRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpQNEl3UzUwRHNJQjFpbTUrT21RMnZVT3dZV0hnUlF6dmRZeW8yeU1HUk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpMZTJDNUFnaU9INzRHNTZtK0JzZndIdDBJcHcvQ0NVZ0NhMkZWNEkwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHo2U09lNThLVi9IY1lXSUxVNXQzY1FrV2x3ZTBVWjhobERIRVY1aXdnTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVEOUYyT2dKVUxPYWo1aUc0ZVczbFJ1QW5tRGh1SG9yRS9URWFvOTFQbjV5WkwwQjhGaEZUUzNMd2hxVXZQUTRDNkNvVWNxN1ZHT1R1ZDBtTG83a0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJMZ21xS2czdEhVNEdXUUlXcExxTjVNb1VKQjFKTjIwRFpjTk16ZG0reWZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIYkhDZDd1TFIzcXY2TTI3YkRUdFZ3IiwicGhvbmVJZCI6Ijc2ZGI1ZjEwLWVlZTQtNDdkYy1iMjE4LWU5YzQ1NDU1OTMyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyWituTWIwaktnSDRJNDluS3NZd0FIMGlLeWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianZLQmd2VWgrUzhYWGkwNkVOU1RiVEIwWEFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldBNUg2Q1NUIiwibWUiOnsiaWQiOiI5NDcyNDM4OTY5OTozNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWVSbDUwQ0VNbkJxYjhHR0E0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlFhaVVHMFlzTW1hYnpJc3ZmejkySWJmdFVvbE8wWjNIZ1BjbVFKN3dqdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiREdNRnJOTlhleDViOXYyOTJSZlBpeDVkdjkyRXJzYWtITHlMMlNRb0tEWGFyNk1pUTJuc3Z5cE5vdU1WUFRTVDRYRjdRdlRSU1kzTmd1VGpHZU1TQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InJlNksxYjN5ZTVKUTgySjNVVEloVUxtTC9mb0U2andPT2NPNmRjKzNBQTNxMXNrd1FWYWYyZzAvMno4YjJPMkk5Z0RtRWg4L1o2dHUwYkowVW9BeERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjQzODk2OTk6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGtHb2xCdEdMREptbTh5TEwzOC9kaUczN1ZLSlR0R2R4NEQzSmtDZThJOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzQxMzQ2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDRTUifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ !== undefined ? process.env.AUTO_STATUS_READ === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "BABIYA-MD",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94764978991",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
