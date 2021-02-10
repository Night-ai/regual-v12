const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Regual")
.setTitle("Not:Botun Rolü Her Zaman Üstte Olsun")
.setTitle("<a:Yldz:778555821285441546> Regual yardım menüsüne hoşgeldin! <a:Yldz:778555821285441546>")
 .setTimestamp()
.setDescription("<a:destinyhype:778543872867303424> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:ayarlardestiny:778543872867303424> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:partnerdestiny:778543872867303424> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:Yldz:778543872867303424> **-logo** = __Logo komutlarını görüntülersiniz.__ \n <a:destinyhype:778543872867303424> **-seviye-yardım** = __Seviye yardım menüsünü açar.__ \n <a:destinyhype:778543872867303424> **-kayıt-yardım** = __Kayıt Menü Açar.__")
.setImage("https://cdn.discordapp.com/attachments/801369521214324744/807171057311023124/350kb_48.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y","tr"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}