module.exports= {
    name: 'givemeacoolfact',
    description: "gives a cool fact",
    execute(message, args){
        message.channel.send(`${message.author.toString()}, I don't think I feel like giving a cool fact to a stupid swine the likes of you.`);
    }
}