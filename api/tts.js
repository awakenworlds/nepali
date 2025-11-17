export default async function handler(req, res) {
  try {
    const { text, voice } = req.query;

    if (!text) {
      return res.status(400).json({ error: 'Missing text parameter.' });
    }

    // Call OpenAI Realtime TTS
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        input: text,
        voice: voice || "verse"
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(500).json({ error });
    }

    const audioBuffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audioBuffer));

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
