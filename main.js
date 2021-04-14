const { Console } = require('console');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '~';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Pam 2 has Risen to The Realm of The Living');
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'hellopam')
    {
        client.commands.get('hellopam').execute(message, args);
    }
    else if (command === 'goodbyepam')
    {
        client.commands.get('goodbyepam').execute(message, args);
    }
    else if (command === 'help')
    {
        client.commands.get('help').execute(message, args);
    }
    else if (command === 'commands')
    {
        client.commands.get('commands').execute(message, args);
    }
    else if (command === 'nate')
    {
        client.commands.get('nate').execute(message, args);
    }
    else if (command === 'jesse')
    {
        client.commands.get('jesse').execute(message, args);
    }
    else if (command === 'james')
    {
        client.commands.get('james').execute(message, args);
    }
    else if (command === 'ispam2biased')
    {
        client.commands.get('ispam2biased').execute(message, args);
    }
    else if (command === 'givemeacoolfact')
    {
        client.commands.get('givemeacoolfact').execute(message, args);
    }
    else if (command === 'cum')
    {
        client.commands.get('cum').execute(message, args);
    }
    else if (command === 'hellopam1')
    {
        client.commands.get('hellopam1').execute(message, args);
    }
    else if (command === 'talkingtopam')
    {
        client.commands.get('talkingtopam').execute(message, args);
    }
    else if (command === 'responsetopam')
    {
        client.commands.get('responsetopam').execute(message, args);
    }else if (command === 'garrettquotes')
    {
        client.commands.get('garrettquotes').execute(message, args);
    }else if (command === 'savequote')
    {
        var os = require("os");

        var messagetosave = message.content.substring(11);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        messagetosave += ' - Garrett Negrete, ';
        messagetosave += today.toString();

        processInput(messagetosave.toString());

        message.channel.send(`save quote goes brrrr`);
    }
    else if (command === 'gooberpeas2366')
    {
        client.destroy();
    }
})

function processInput ( text ) 
{     
    var stream = fs.createWriteStream("garretquotes.txt", {'flags': 'a'});
    stream.once('open', function(fd) {
    stream.write("\r\n" + text);
  });
}

client.login('ODMxMzk2NTg5OTI2ODc1MTQ4.YHUoaQ.EitNGDbgGsyPYsVikJGCnMjfmAA');