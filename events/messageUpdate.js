const discord = require('discord.js');
exports.run = (client, fs, config, omsg, nmsg) => {
    const log = client.channels.cache.get("461275693808877568");
    if (nmsg.author.bot || !(nmsg.content.indexOf(config.prefix) !== 0) || nmsg.content === omsg.content)
        return;
    if (omsg.content.length > 1023 || nmsg.content.length > 1023)
        return;
    const embed = new discord.MessageEmbed()
        .setAuthor("Message édité", client.user.avatarURL)
        .setColor(3066993)
        .setThumbnail("https://pics.suertzz.fr/Q8SzUdG.png")
        .setTimestamp()
        .addField("Auteur :", nmsg.author.tag)
        .addField("Ancien message :", omsg.content)
        .addField("Nouveau message :", nmsg.content)
        .addField("Canal :", nmsg.channel.name);
    log.send({embed})
}
