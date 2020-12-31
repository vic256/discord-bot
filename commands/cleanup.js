exports.run = (client, message, args, fs, config) =>
{
    if (message.channel.type === "dm") return;
    if (message.member.roles.cache.some(r=>["Leader", "Administrateur", "Modérateur", "Support"].includes(r.name)))
        message.delete();
    else
    {
        message.react("😡");
        message.delete(60000);
        return;
    }
    if (args[0] === "messages")
    {
        async function m_purge()
        {
            if (isNaN(args[1])) return message.channel.send("Veuillez utiliser un nombre comme argument. Utilisation : `" + config.prefix + "cleanup messages <amount>`");
            const fetched = await message.channel.messages.fetch({limit: args[1]});
            console.log(fetched.size + " messages found, deleting...");
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send("Erreur : `" + error + '`'));
        }
        m_purge();
    }
    else if (args[0] === "after")
    {
        async function a_purge()
        {
            if (isNaN(args[1])) return message.channel.send("Veuillez utiliser un ID comme argument. Utilisation : `" + config.prefix + "cleanup after <ID>`");
            const fetched = await message.channel.messages.fetch({after: args[1], limit:99});
            console.log(fetched.size + " messages found, deleting...");
            message.channel.bulkDelete(fetched).catch(console.log);
        }
        a_purge();
    }
    else
    {
        message.channel.send("Argument manquant. " + "Utilisation : `" + config.prefix + "cleanup <messages / after>`");
        return;
    }
}