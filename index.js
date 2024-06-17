//Made by bruu#1050
const { Client, RichPresence } = require("discord.js-selfbot-v13");
const express = require('express')
const server = express();
const client = new Client({checkUpdate: false,});
server.all('/', (re, res)=>{
    res.send("Success !!")
})

let Type = "STREAMING"//PLAYING / LISTENING / WATCHING / STREAMING / COMPETING
let Name = ".gg/tambayan"//Set Name
let Details = ".gg/tambayan"//Set Details
let State = "social active nitro gaming"//Set State
let LargeText = "Join now!"//Large Text
let LargeImage = "https://cdn.discordapp.com/attachments/1064428967353917490/1252007050276245634/IMG_7391.jpg?ex=6670a5ed&is=666f546d&hm=eb0f48dc9e421cd3136cf6b3c7dab458cf2e355903cf99aac3bc45335b68d7ac&"//Large Image Name/Url
let SmallText = "24/7 online"//Small Text
let SmallImage = "https://media.discordapp.net/attachments/1064428967353917490/1252004100502061141/IMG_7386.jpg?ex=6670a32e&is=666f51ae&hm=ba25b9f81334c606d524e479b04a347272412c74131eabd6bd4027577d2279b7&"//Small Image Name/Url
let Status = "online"//online /idle /dnd /invisible
let Button1 = "click to join"//Button1 Text
let Link1 = "https://discord.gg/tambayan"//Button1 Url/Link
let Button2 = ".gg/tambayan"//Button2 Text
let Link2 = "https://discord.gg/tambayan"//Button2 Url/Link
let APPID = "1076052266294976553"//Put a valid Application ID

client.on("ready", async() => {
  const pr = new RichPresence()

.setApplicationId(APPID)
.setType(Type)
.setURL("https://twitch.tv/#") 
.setState(State)
.setName(Name)
.setDetails(Details)
.setAssetsLargeImage(LargeImage)
.setAssetsSmallImage(SmallImage)
.addButton(Button1, Link1)
.addButton(Button2, Link2)
.setAssetsLargeText(LargeText)   
.setAssetsSmallText(SmallText)
.setStartTimestamp("1674327954461" || Date.now())
client.user.setStatus(Status);
  client.user.setActivity(pr.toJSON());
  
  console.log(`Logged in as ${client.user.tag}`)
})

server.listen(3000, () => {
  console.log("Listening to Port: 3000")

setTimeout(() => {
    if(!client || !client.user) {
    console.log("The Client Didn't Login Proccesing Kill 1")

        process.kill(1);
    } else {
        console.log("The Client Has Logged In Successfully")
    }
}, 10000);
  
  client.login(process.env.TOKEN)
});