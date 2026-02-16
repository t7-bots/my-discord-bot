const express = require('express');
const app = express();
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!holaaaaa') {
    message.reply('holaa');
  }

  if (message.content === '!hello') {
    message.reply('هلا والله 👋');
  }

  if (message.content === '!server') {
    message.reply(`اسم السيرفر: ${message.guild.name}`);
  }
if (message.content === '-ش') {

  // نتأكد إن الشخص داخل روم صوتي
  const channel = message.member.voice.channel;

  if (!channel) {
    return message.reply('❌ لازم تدخل روم صوتي أول!');
  }

  // يدخل البوت نفس الروم
  joinVoiceChannel({
    channelId: channel.id,
    guildId: message.guild.id,
    adapterCreator: message.guild.voiceAdapterCreator,
  });

  message.reply('✅ دخلت الروم!');
}
});


client.login('client.login(process.env.TOKEN');
