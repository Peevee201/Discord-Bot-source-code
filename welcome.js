module.exports = (client) => {
    const channelId = '751907417050185798' // welcome channel
    const targetChannelId = '733461934275297311' // rules and info
  
    client.on('guildMemberAdd', (member) => {
      const message = `Welcome <@${
        member.id
      }> to the server! Please check out ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }