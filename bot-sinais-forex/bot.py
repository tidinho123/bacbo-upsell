import yfinance as yf
import requests
import time
from datetime import datetime

# ============================================================
#   CONFIGURAÇÕES - EDITE APENAS ESTAS 2 LINHAS ABAIXO
# ============================================================
TELEGRAM_TOKEN  = "COLE_SEU_TOKEN_AQUI"    # Token do BotFather
TELEGRAM_CHAT_ID = "COLE_SEU_CHAT_ID_AQUI" # Seu Chat ID
# ============================================================

PAR             = "EURUSD=X"   # Par monitorado
INTERVALO       = "15m"        # Timeframe das velas
VERIFICAR_A_CADA = 300         # Segundos entre cada verificação (5 min)
MA_CURTA        = 9
MA_LONGA        = 21
RSI_PERIODO     = 14


def calcular_rsi(serie, periodo=14):
    delta  = serie.diff()
    ganho  = delta.where(delta > 0, 0.0).rolling(periodo).mean()
    perda  = (-delta.where(delta < 0, 0.0)).rolling(periodo).mean()
    rs     = ganho / perda
    return 100 - (100 / (1 + rs))


def obter_dados():
    try:
        df = yf.Ticker(PAR).history(period="3d", interval=INTERVALO)
        return df if len(df) > MA_LONGA + 5 else None
    except Exception:
        return None


def analisar(df):
    if df is None:
        return None

    df = df.copy()
    df["MA_C"] = df["Close"].rolling(MA_CURTA).mean()
    df["MA_L"] = df["Close"].rolling(MA_LONGA).mean()
    df["RSI"]  = calcular_rsi(df["Close"], RSI_PERIODO)

    atual    = df.iloc[-1]
    anterior = df.iloc[-2]

    preco = round(float(atual["Close"]), 5)
    rsi   = round(float(atual["RSI"]), 1)

    cruzou_cima  = anterior["MA_C"] <= anterior["MA_L"] and atual["MA_C"] > atual["MA_L"]
    cruzou_baixo = anterior["MA_C"] >= anterior["MA_L"] and atual["MA_C"] < atual["MA_L"]

    if cruzou_cima and rsi < 65:
        return {"tipo": "COMPRA", "preco": preco, "rsi": rsi,
                "stop": round(preco - 0.0020, 5), "alvo": round(preco + 0.0040, 5)}

    if cruzou_baixo and rsi > 35:
        return {"tipo": "VENDA", "preco": preco, "rsi": rsi,
                "stop": round(preco + 0.0020, 5), "alvo": round(preco - 0.0040, 5)}

    return None


def montar_mensagem(sinal):
    hora = datetime.now().strftime("%H:%M")
    data = datetime.now().strftime("%d/%m/%Y")

    if sinal["tipo"] == "COMPRA":
        icone, seta, acao = "🟢", "📈", "COMPRAR (BUY)"
    else:
        icone, seta, acao = "🔴", "📉", "VENDER (SELL)"

    return (
        f"{icone} <b>SINAL DETECTADO</b> {seta}\n\n"
        f"📊 <b>Par:</b> EUR/USD\n"
        f"⏰ <b>Horário:</b> {hora} — {data}\n"
        f"📐 <b>Timeframe:</b> {INTERVALO}\n\n"
        f"━━━━━━━━━━━━━━━━━━━\n"
        f"🎯 <b>AÇÃO:</b> {acao}\n"
        f"💰 <b>Entrada:</b> {sinal['preco']}\n"
        f"🛑 <b>Stop Loss:</b> {sinal['stop']}\n"
        f"✅ <b>Take Profit:</b> {sinal['alvo']}\n"
        f"━━━━━━━━━━━━━━━━━━━\n\n"
        f"📌 RSI: {sinal['rsi']}  |  MAs: {MA_CURTA}/{MA_LONGA}\n\n"
        f"⚠️ <i>Confirme o sinal antes de operar. Gerencie seu risco.</i>"
    )


def enviar(texto):
    url  = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    resp = requests.post(url, data={"chat_id": TELEGRAM_CHAT_ID,
                                    "text": texto, "parse_mode": "HTML"}, timeout=10)
    return resp.status_code == 200


def main():
    print("=" * 50)
    print("  BOT DE SINAIS FOREX — EUR/USD")
    print("=" * 50)

    if not enviar("🤖 <b>Bot iniciado!</b>\n\nMonitorando EUR/USD...\nAguarde os sinais."):
        print("ERRO: Verifique seu TOKEN e CHAT_ID no topo do arquivo.")
        return

    print("Telegram conectado. Bot rodando. Pressione Ctrl+C para parar.\n")

    ultimo = None

    while True:
        try:
            agora = datetime.now().strftime("%H:%M:%S")
            print(f"[{agora}] Analisando...", end=" ")

            sinal = analisar(obter_dados())

            if sinal and sinal["tipo"] != ultimo:
                print(f"SINAL: {sinal['tipo']}")
                if enviar(montar_mensagem(sinal)):
                    ultimo = sinal["tipo"]
                    print("  → Mensagem enviada ao Telegram.")
            else:
                print("sem sinal.")

            time.sleep(VERIFICAR_A_CADA)

        except KeyboardInterrupt:
            print("\nBot parado.")
            break
        except Exception as e:
            print(f"Erro: {e}")
            time.sleep(60)


if __name__ == "__main__":
    main()
