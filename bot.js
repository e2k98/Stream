const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
client.on("message", message => {


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : e2k`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : e2k ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Hii `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);
