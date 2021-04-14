module.exports= {
    name: 'garrettquotes',
    description: "garrett quotes moment",
    execute(message, args){

        var quotes = ["Girls gone WILD! - Garrett Negrete, 04/13/2021", 
        "Horizontal is up and down - Garrett Negrete, 04/13/2021", 
        "The razor blade's going in - Garrett Negrete, 04/13/2021",
        "Thumbtacks in my bum - Garrett Negrete, 04/13/2021",
        "I'm fingerblasting my butthole - Garrett Negrete, 04/13/2021",
        "Popeye's Chicken sandwich makes you CREAM - Garrett Negrete, 04/13/2021",
        "I'm the first one to call Prapor Poop Whore - Garrett Negrete, 04/13/2021",
        "It's like a cock stretch but using your hands - Garrett Negrete, 04/13/2021",
        "They stick heroin in their cock - Garrett Negrete, 04/13/2021"]

        
        var questionval = getRandomInt(quotes.length);
        message.channel.send(quotes[questionval]);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }