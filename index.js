const discord = require("discord.js-selfbot-v11");
const client = new discord.Client()
const rpc = require("discordrpcgenerator");

client.on("ready", () => {
 rpc.getRpcImage(process.env.ApplicationId, process.env.ImageName).then(large => {

      
          let presence = new rpc.Rpc()
             .setName(process.env.Name)
              .setUrl(process.env.Url)
              .setType(process.env.Type)
              .setApplicationId(process.env.ApplicationId)
            
              
             .setState(process.env.State)
             .setDetails(process.env.Details)
              .setAssetsLargeImage(large.id)
       
         .setAssetsSmallImage(process.env.ImageSmall)
              .setStartTimestamp(Date.now())
              
       
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
    
})
})

client.login(process.env.TOKEN)
