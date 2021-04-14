module.exports= {
    name: 'commands',
    description: "all the commands",
    execute(message, args){
        message.channel.send(`${message.author.toString()} ~hellopam, ~goodbyepam, ~help, ~givemeacoolfact, ~ispam2biased are the commands dingdong`);
    }
}