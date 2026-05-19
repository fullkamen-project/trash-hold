import { NextResponse } from 'next/server';

export async function GET() {
  // ВСТАВЬ СВОИ ДАННЫЕ С TWITCH DEV CONSOLE ЗДЕСЬ:
  const CLIENT_ID = 'isOB2xc2xJa9ZV3w5MRvzEw0KC2019EbqZ37MTqDrZ4='; 
  const CLIENT_SECRET = 'z1kih95sm9e0anokhhr1jzvcdyqh9m';
  const CHANNEL_NAME = 'fullkamen';

  try {
    // 1. Получаем OAuth токен
    const authResponse = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
      { method: 'POST' }
    );
    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // 2. Проверяем статус стрима
    const streamResponse = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${CHANNEL_NAME}`,
      {
        headers: {
          'Client-ID': CLIENT_ID,
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );
    const streamData = await streamResponse.json();

    // Если массив data не пустой — стрим идет
    const isLive = streamData.data && streamData.data.length > 0;

    return NextResponse.json({ isLive });
  } catch (e) {
    console.error("Twitch API Error:", e);
    // В случае ошибки (например, неверные ключи) возвращаем оффлайн
    return NextResponse.json({ isLive: false });
  }
}