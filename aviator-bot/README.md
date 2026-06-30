# 🚀 Aviator Bot - Telegram

Um bot de Telegram que analisa o histórico do Aviator e manda sinais.

## 📋 Pré-requisitos

- Node.js (versão 18+)
- Uma conta de Telegram
- Um bot de Telegram (vamos criar)

## 🛠️ Instalação

### 1. Instalar dependências

```bash
cd aviator-bot
npm install
```

### 2. Criar um bot no Telegram

1. Abra o Telegram
2. Procure por **@BotFather**
3. Envie `/newbot`
4. Siga as instruções (nome do bot, etc.)
5. BotFather vai dar-te um **TOKEN** - copia isto
6. Cola no arquivo `.env` na linha `TELEGRAM_BOT_TOKEN=`

### 3. Obter o Chat ID

1. Abra o Telegram
2. Procure por **@userinfobot**
3. Envie qualquer mensagem
4. Ele vai responder com o teu ID
5. Cola no `.env` na linha `TELEGRAM_CHAT_ID=`

### 4. Executar o bot

```bash
npm run dev
```

## 📝 Estrutura dos arquivos

```
aviator-bot/
├── src/
│   ├── bot.ts         ← O bot principal
│   ├── config.ts      ← Configurações
│   └── aviator.ts     ← Lógica de análise (próxima)
├── package.json       ← Dependências
├── tsconfig.json      ← Configuração TypeScript
├── .env               ← Segredos (NÃO enviar ao Git!)
└── README.md          ← Este ficheiro
```

## 🎮 Comandos

- `/start` - Iniciar o bot
- `/status` - Ver se está funcionando
- `/latest` - Ver último sinal

Mais comandos vêm depois!
