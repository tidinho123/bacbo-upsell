import { Telegraf } from 'telegraf';
import { config } from './config.js';

// Criar o bot — isto é como ligar um "robô de Telegram"
const bot = new Telegraf(config.telegramBotToken);

// Quando alguém manda /start
bot.command('start', async (ctx) => {
  const message = `
🤖 **Aviator Bot iniciado!**

Estou aqui para mandar sinais do Aviator via Telegram.

Comandos disponíveis:
/status - Ver se o bot está a funcionar
/latest - Ver o último sinal
  `;

  await ctx.reply(message, { parse_mode: 'Markdown' });
  console.log('✅ Utilizador iniciou o bot');
});

// Quando alguém manda /status
bot.command('status', async (ctx) => {
  await ctx.reply('✅ Bot está a funcionar!');
  console.log('✅ Status verificado');
});

// Quando alguém manda /latest
bot.command('latest', async (ctx) => {
  await ctx.reply('📊 Ainda não há sinais... Aguarde.');
  console.log('📊 Último sinal pedido');
});

// Função para mandar uma mensagem automaticamente (útil quando o bot quer falar)
export async function sendSignal(message: string) {
  try {
    await bot.telegram.sendMessage(config.telegramChatId, message, {
      parse_mode: 'Markdown',
    });
    console.log('✅ Sinal enviado:', message);
  } catch (error) {
    console.error('❌ Erro ao enviar sinal:', error);
  }
}

// Iniciar o bot
console.log('🚀 Iniciando Aviator Bot...');
bot.launch();

console.log('✅ Bot está ligado e pronto!');
console.log('📍 Listening for commands...');

// Isto diz ao Node.js para manter o programa a correr (não sair)
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
