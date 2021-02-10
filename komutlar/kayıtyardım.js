const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Regual")
.setTitle("<a:Yldz:778542755394879520> Regual Kayıt Komutları <a:Yldz:778542755394879520>")
 .setTimestamp()
.setDescription("<a:yan:778542755394879520> **-erkek-rol @rol** = Erkek Rolünü Ayarlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-erkek-rol sıfırla** = Erkek Rolünü Sıfırlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-kız-rol @rol** = Kız Rolünü Ayarlar. <a:developeremoji:778542755394879520> \n <a:developeremoji:778542755394879520> **-kız-rol sıfırla** = Kız Rolünü Sıfırlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-alınacak-rol @rol** = Alınacak Rolü Ayarlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-alınacak-rol sıfırla** = Kayıt Olunca Alınacak Rolü Sıfırlar. <a:developeremoji:749525084586115153> \n <a:yan:778542755394879520> **-kayıt-kanal #kanal** = Kayıt Kanalını Ayarlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-kayıt-kanal sıfırla** = Kayıt Kanalını Sıfırlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-kayıtçı-rol @rol** = Kayıtçı Rolünü Ayarlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-kayıtçı-rol sıfırla** = Kayıtçı Rolünü Sıfırlar. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-kayıtçı-ver @kullanıcı** = Belirttiğiniz Kullanıya Kayıtçı Rolü Verir. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-kayıtçı-al @kullanıcı** = Belirttiğiniz Kullanıcıdan Kayıtçı Rolünü Alır. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-erkek @kullanıcı isim yaş** = Erkek Olarak Kayıt Edersiniz. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-kız @kullanıcı isim yaş** = Kız Olarak Kayıt Edersiniz. <a:developeremoji:778542755394879520>")
.setImage("https://cdn.discordapp.com/attachments/801369521214324744/807171057311023124/350kb_48.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kayıt-yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}