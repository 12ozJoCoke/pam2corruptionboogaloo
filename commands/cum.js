module.exports= {
    name: 'cum',
    description: "cum command",
    execute(message, args){
        message.channel.send(`${message.author.toString()} https://cum.com/`);
    }
}