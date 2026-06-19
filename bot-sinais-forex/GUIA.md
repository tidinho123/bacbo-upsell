# GUIA COMPLETO — BOT DE SINAIS FOREX (EUR/USD)

---

## O QUE ESSE BOT FAZ

- Analisa o par EUR/USD a cada 5 minutos usando dados reais do mercado
- Usa Médias Móveis (9/21) e RSI para detectar oportunidades
- Envia um alerta no seu Telegram com: tipo de operação, preço de entrada, stop loss e take profit
- **Você decide se opera ou não** — o bot não executa nada automaticamente

---

## PASSO 1 — INSTALAR O PYTHON

1. Acesse: https://www.python.org/downloads/
2. Clique em **Download Python** (botão amarelo grande)
3. Execute o instalador
4. IMPORTANTE: Marque a caixa **"Add Python to PATH"** antes de clicar em Install
5. Clique em **Install Now**

---

## PASSO 2 — CRIAR SEU BOT NO TELEGRAM

### 2.1 — Criar o Bot e pegar o TOKEN

1. Abra o Telegram no celular ou computador
2. Na busca, procure por: **@BotFather**
3. Clique nele e depois em **START**
4. Digite: `/newbot`
5. Ele vai pedir um **nome** para o bot (ex: `Meus Sinais Forex`)
6. Depois vai pedir um **username** — tem que terminar em `bot` (ex: `meussinaisforex_bot`)
7. O BotFather vai te enviar uma mensagem com o **TOKEN** — é uma sequência assim:
   ```
   1234567890:ABCDefGhIJKlmNoPQRsTUVwxyz
   ```
8. **Copie e guarde esse TOKEN** — você vai colar no código

### 2.2 — Pegar o seu CHAT ID

1. No Telegram, procure por: **@userinfobot**
2. Clique em **START**
3. Ele vai te responder com seu **Id** — é um número assim: `123456789`
4. **Copie esse número** — é o seu Chat ID

---

## PASSO 3 — CONFIGURAR O CÓDIGO

1. Abra a pasta `bot-sinais-forex`
2. Abra o arquivo `bot.py` com o **Bloco de Notas**
3. Encontre as linhas no topo do arquivo:

```python
TELEGRAM_TOKEN   = "COLE_SEU_TOKEN_AQUI"
TELEGRAM_CHAT_ID = "COLE_SEU_CHAT_ID_AQUI"
```

4. Substitua `COLE_SEU_TOKEN_AQUI` pelo TOKEN que você copiou do BotFather
5. Substitua `COLE_SEU_CHAT_ID_AQUI` pelo número do Chat ID
6. Salve o arquivo

**Exemplo de como deve ficar:**
```python
TELEGRAM_TOKEN   = "1234567890:ABCDefGhIJKlmNoPQRsTUVwxyz"
TELEGRAM_CHAT_ID = "123456789"
```

---

## PASSO 4 — INSTALAR AS DEPENDÊNCIAS

1. Pressione `Windows + R`, digite `cmd` e aperte Enter
2. Uma tela preta vai abrir (é o terminal)
3. Digite o comando abaixo e aperte Enter:

```
pip install yfinance requests pandas
```

4. Aguarde terminar a instalação (pode demorar 1-2 minutos)

---

## PASSO 5 — LIGAR O BOT

1. No terminal (tela preta), navegue até a pasta do bot:

```
cd caminho\para\bot-sinais-forex
```

*(Substitua `caminho\para\` pelo caminho real da pasta no seu computador)*

2. Execute o bot com o comando:

```
python bot.py
```

3. Se tudo estiver certo, você vai ver no terminal:
   ```
   Telegram conectado. Bot rodando. Pressione Ctrl+C para parar.
   ```
4. E vai receber no Telegram: **"Bot iniciado! Monitorando EUR/USD..."**

---

## COMO FUNCIONA O SINAL

O bot envia uma mensagem assim no Telegram quando detecta uma oportunidade:

```
🟢 SINAL DETECTADO 📈

📊 Par: EUR/USD
⏰ Horário: 14:32 — 19/06/2026
📐 Timeframe: 15m

━━━━━━━━━━━━━━━━━━━
🎯 AÇÃO: COMPRAR (BUY)
💰 Entrada: 1.08542
🛑 Stop Loss: 1.08342
✅ Take Profit: 1.08942
━━━━━━━━━━━━━━━━━━━

📌 RSI: 48.3  |  MAs: 9/21

⚠️ Confirme o sinal antes de operar. Gerencie seu risco.
```

**Você recebe o sinal → analisa → decide se opera na Exness.**

---

## PARA PARAR O BOT

No terminal, pressione: `Ctrl + C`

---

## DÚVIDAS FREQUENTES

**O bot não enviou mensagem no Telegram**
→ Verifique se o TOKEN e o CHAT_ID estão corretos no arquivo `bot.py`
→ Certifique-se de ter dado START no seu bot no Telegram antes de rodar

**Apareceu erro "pip não é reconhecido"**
→ Reinstale o Python e marque a caixa "Add Python to PATH"

**O bot roda mas não manda sinal**
→ Normal — o bot só manda quando detecta cruzamento de médias
→ Deixe rodando, os sinais aparecem ao longo do dia

---

*Aviso: sinais são baseados em análise técnica automática. Sempre gerencie seu risco antes de operar.*
