import dotenv from 'dotenv';

dotenv.config();

// Isto é como puxar informação da caixa de segredos (.env)
export const config = {
  // Token do bot de Telegram
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',

  // ID do chat onde mandar mensagens
  telegramChatId: process.env.TELEGRAM_CHAT_ID || '',

  // Ambiente (desenvolvimento ou produção)
  isDevelopment: process.env.NODE_ENV === 'development',
};

// Verificar se temos tudo o que precisamos
if (!config.telegramBotToken) {
  console.error('❌ Erro: TELEGRAM_BOT_TOKEN não foi preenchido no .env');
  process.exit(1);
}

if (!config.telegramChatId) {
  console.error('❌ Erro: TELEGRAM_CHAT_ID não foi preenchido no .env');
  process.exit(1);
}
