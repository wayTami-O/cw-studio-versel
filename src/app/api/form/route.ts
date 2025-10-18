import { bot } from "@/lib/bot";


export async function POST(request: Request) {
    const message = await request.json();
    bot.launch();

     // Форматирование сообщения
    const formattedMessage = `
📝 Новая заявка с сайта:

👤 Имя: ${message.name}
📧 Email: ${message.email}
📱 Telegram: ${message.telegram}
${message.message ? `💬 Сообщение: ${message.message}` : ''}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`.trim();

    await bot.telegram.sendMessage(process.env.CHAT_ID, formattedMessage);

    bot.stop();

    return Response.json({ message: "ok" });
}