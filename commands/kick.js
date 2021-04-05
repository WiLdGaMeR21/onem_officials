module.exports = {
    name: 'kick',
    permissions: ['KICK_MEMBERS'],
    description: "This command kicks a member!",
    execute(message,args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been kicked`);
        }else{
            message.channel.send(`You couldn't kick that member!`);
        }
    }
};