const Discord = require('discord.js')
const client = new Discord.Client()

//DIscord.me/PRZ 
join my discord

const welcome = require('./welcome')
const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('The BOT is ONLINE')

  welcome(client)


  command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
      } else {
        message.channel.send(`${tag} Please specify someone to ban.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      )
    }
  })

  command(client, 'kick', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.kick()
        message.channel.send(`${tag} That user has kicked`)
      } else {
        message.channel.send(`${tag} Please specify someone to kick.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      )
    }
  })
})



const prefix = '!'; // Commands perfix // kick/ban perfix = config.json 

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

if(command === 'spoofer'){ 
	message.channel.send(`**${message.author.username}** *Download link sent DM*`);
   message.member.send('');
} else if (command == 'help'){
message.channel.send('**COMMANDS**\n!yotube\n!spoofer');
} else if (command == 'buy'){
  message.member.send('');
} else if (command == 'youtube'){ 
message.channel.send('https://www.youtube.com/channel/UC1JCUtpfLn-ZveYTfz2-tIQ?view_as=subscriber');
} else if (command == 'serverinfo'){ 
  message.channel.send(`**This server name is:** *${message.guild.name}*\n**Total members:** *${message.guild.memberCount}*`);
  
}
});

client.login(config.token)