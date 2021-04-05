const Discord = require ('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }



// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}!`)
//   })

//   client.on('guildMemberAdd', guildMember =>{
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'ayan');
 
//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('786085164442583041').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
// });





client.login(process.env.BOT_TOKEN)