const Discord = require('discord.js');
const fs = require("fs-extra");
const superagent = require("superagent")

var bot = new Discord.Client();

var PREFIX = ">";

var randnum = 0

var mention = "<@386166409002221568>";

bot.on("ready",function() {
    console.log("Je suis en ligne");
    bot.user.setGame('Prefix > donner des hugs')
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    var mentionned = message.mentions.users.first();
    if (!mentionned) return;
    if(message.content[0] === PREFIX) {
        if(message.content.startsWith(">hug")) {
            random();

            if (randnum == 0){
                const hug0_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('http://i.imgur.com/qSejAy0.gif')
                message.channel.sendEmbed(hug0_embed)
                console.log('commande hug0 executé')
            }

            if (randnum == 1){
                const hug1_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/CyW6NTEfSw288/source.gif')
                message.channel.sendEmbed(hug1_embed)
                console.log('commande hug1 executé')
            }

            if (randnum == 2){
                const hug2_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/tZiqGOYhRw27m/giphy.gif')
                message.channel.sendEmbed(hug2_embed)
                console.log('commande hug2 executé')
            }

            if (randnum == 3){
                const hug3_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif')
                message.channel.sendEmbed(hug3_embed)
                console.log('commande hug3 executé')
            }

            if (randnum == 4){
                const hug4_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('http://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-24.gif')
                message.channel.sendEmbed(hug4_embed)
                console.log('commande hug4 executé')
            }

            if (randnum == 5){
                const hug5_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/EwEeA6fagZNHW/giphy.gif')
                message.channel.sendEmbed(hug5_embed)
                console.log('commande hug5 executé')
            }

            if (randnum == 6){
                const hug6_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://i.pinimg.com/originals/68/0b/69/680b69563aceba3df48b4483d007bce3.gif')
                message.channel.sendEmbed(hug6_embed)
                console.log('commande hug6 executé')
            }

            if (randnum == 7){
                const hug7_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/EbWgNTFqb9Muk/source.gif')
                message.channel.sendEmbed(hug7_embed)
                console.log('commande hug7 executé')
            }

            if (randnum == 8){
                const hug8_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461068486-646f3523d0fd8f3e6d818d96012b248e.gif')
                message.channel.sendEmbed(hug8_embed)
                console.log('commande hug8 executé')
            }

            if (randnum == 9){
                const hug9_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://78.media.tumblr.com/5fa89acc3637b84a29c6f528c1727135/tumblr_o3kyyxj5nF1unech7o1_500.gif')
                message.channel.sendEmbed(hug9_embed)
                console.log('commande hug9 executé')
            }

            if (randnum == 10){
                const hug10_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('http://pa1.narvii.com/5662/7614d83e68f9630de0f5a7a51690a73a42b529d6_hq.gif')
                message.channel.sendEmbed(hug10_embed)
                console.log('commande hug10 executé')
            }

            if (randnum == 11){
                const hug11_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://i.imgur.com/gw3hsqe.gif')
                message.channel.sendEmbed(hug11_embed)
                console.log('commande hug11 executé')
			}
			
			if (randnum == 12){
                const hug12_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('http://i.imgur.com/qSejAy0.gif')
                message.channel.sendEmbed(hug12_embed)
                console.log('commande hug12 executé')
            }

            if (randnum == 13){
                const hug13_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/CyW6NTEfSw288/source.gif')
                message.channel.sendEmbed(hug13_embed)
                console.log('commande hug13 executé')
            }

            if (randnum == 14){
                const hug14_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/tZiqGOYhRw27m/giphy.gif')
                message.channel.sendEmbed(hug14_embed)
                console.log('commande hug14 executé')
            }

            if (randnum == 15){
                const hug15_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif')
                message.channel.sendEmbed(hug15_embed)
                console.log('commande hug15 executé')
            }

            if (randnum == 16){
                const hug16_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media1.tenor.com/images/c32141ae982029beaf8db8d4ddf057bd/tenor.gif?itemid=5960635')
                message.channel.sendEmbed(hug16_embed)
                console.log('commande hug16 executé')
            }

            if (randnum == 17){
                const hug17_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/EwEeA6fagZNHW/giphy.gif')
                message.channel.sendEmbed(hug17_embed)
                console.log('commande hug17 executé')
            }

            if (randnum == 18){
                const hug18_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://i.pinimg.com/originals/68/0b/69/680b69563aceba3df48b4483d007bce3.gif')
                message.channel.sendEmbed(hug18_embed)
                console.log('commande hug18 executé')
            }

            if (randnum == 19){
                const hug19_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://media.giphy.com/media/EbWgNTFqb9Muk/source.gif')
                message.channel.sendEmbed(hug19_embed)
                console.log('commande hug19 executé')
            }

            if (randnum == 20){
                const hug20_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461068486-646f3523d0fd8f3e6d818d96012b248e.gif')
                message.channel.sendEmbed(hug20_embed)
                console.log('commande hug20 executé')
            }

            if (randnum == 21){
                const hug21_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://78.media.tumblr.com/5fa89acc3637b84a29c6f528c1727135/tumblr_o3kyyxj5nF1unech7o1_500.gif')
                message.channel.sendEmbed(hug21_embed)
                console.log('commande hug21 executé')
            }

            if (randnum == 22){
                const hug22_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('http://pa1.narvii.com/5662/7614d83e68f9630de0f5a7a51690a73a42b529d6_hq.gif')
                message.channel.sendEmbed(hug22_embed)
                console.log('commande hug22 executé')
            }

            if (randnum == 23){
                const hug23_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://i.imgur.com/gw3hsqe.gif')
                message.channel.sendEmbed(hug23_embed)
                console.log('commande hug23 executé')
            }

            if (randnum == 24){
                const hug24_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://i.skyrock.net/9531/83199531/pics/3087048637_1_3_4dv7ysMK.gif')
                message.channel.sendEmbed(hug24_embed)
                console.log('commande hug24 executé')
            }

            if (randnum == 25){
                const hug25_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460993069-9ac8eaae8cd4149af4510d0fed0796bf.gif')
                message.channel.sendEmbed(hug25_embed)
                console.log('commande hug25 executé')
            }

            if (randnum == 26){
                const hug26_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('http://media1.giphy.com/media/QbkL9WuorOlgI/giphy.gif')
                message.channel.sendEmbed(hug26_embed)
                console.log('commande hug26 executé')
            }

            if (randnum == 27){
                const hug27_embed = new Discord.RichEmbed()
                .setColor(15105570)
                .addField(message.author + " offre un câlin à " + mentionned.username ,"On aime se donner des câlins")
                .setImage('https://lh3.googleusercontent.com/-w_NhaCQ6Rcc/VlECUNpi8CI/AAAAAAABPCY/c3rXwR-4ji0/w500-h281-n/tumblr_nw71abB0zu1ru30ujo1_500.gif')
                message.channel.sendEmbed(hug27_embed)
                console.log('commande hug27 executé')
            }
        }
    }
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(27);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

bot.on("message" , async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(PREFIX.length);

    let args = message.content.split(" ").slice(1);

    if (command === "cat") {
        const { body } = await superagent
        .get('http://random.cat/meow');
        const embed = new Discord.RichEmbed()
        .setColor(15105570)
        .setTitle("Je suis trop cute :cat:")
        .setImage(body.file)
        message.channel.send({embed})
    }
});

bot.on('message', message => {

    if(message.author.bot) return;
    const args = message.content.split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.content[0] === PREFIX) {
        if (command === '>erreur') {
            message.channel.send('CatCute.exe a cessé de fonctionner :x:');
    }

    if(message.content[0] === PREFIX) {
        if (command === '>say') {
            message.channel.send(args.join(' '));
            message.delete();
    }
}}});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === ">help") {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'CatCute Bot',
                description: 'Bonjour tout le monde !',
                fields: [{
                    name: 'Voici les commandes du bot CatCute',
                    value: '%help pour afficher toute les commandes du bot CatCute'
                },
                {
                    name: '>erreur',
                    value: 'le bot vous repond CatCute.exe a cessé de fonctionner :x:'
                },
                {
                    name: '>say',
                    value: 'pour écrire en tant que bot'
                },
                {
                    name: '>hug',
                    value: 'pour donner un hug à la personne que tu souhaite'
                },
                {
                    name: '>cat',
                    value: 'le bot envoi des images de chats'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: 'Par La team des quatre pommes'
                }
            }});
        }
    }
});
