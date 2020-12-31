const discord = require('discord.js');
exports.run = (client, fs, config, messageDelete) => {
    if (messageDelete.author.bot || !(messageDelete.content.indexOf(config.prefix) !== 0) || messageDelete.content <= 0)
        return;
    if (messageDelete.content.length > 1023)
        return;
    const log = client.channels.cache.get("461275693808877568");
    const embed = new discord.MessageEmbed()
        .setAuthor("Message supprimé", client.user.avatarURL)
        .setColor(15105570)
        .setThumbnail("https://pics.suertzz.fr/fJpAFgN.png")
        .setTimestamp()
        .addField("Auteur :", messageDelete.author.tag)
        .addField("Message :", messageDelete.content)
        .addField("Canal :", messageDelete.channel.name);
    log.send({embed})
}