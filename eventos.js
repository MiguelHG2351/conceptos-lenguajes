const Discord = require("discord.js") // errolens ignores

const client = new Discord.Client()

client.on("ready", () => {
    console.log(`Bot is ready as ${client.user.tag}`)
    client.user.setStatus("idle")
    console.log(client.user.presence.status)
})

client.on("message", (msg) => {
    console.log(msg.content)
    if(msg.content === "Funciono?") {
        console.log(msg.author)
        msg.reply(`Asi es! xd ${msg.author}`)
    }
    if(msg.content.includes("!test")) {
        console.log("Quieres hacer algún tests")
        msg.channel.send(`Feliz de que estes testiando ${msg.author} ;)`)
    }

    if(msg.content.includes("cuál es el facebook de") && msg.content.includes(facebook)) {
        console.log("Quieres hacer algún tests")
        msg.channel.send(`https://facebook.com/${facebook} ${msg.author} ;)`)
    }
})

client.login("No lo voy a mostrar") // token