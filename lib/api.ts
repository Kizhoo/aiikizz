import axios from "axios";

export async function callOpenRouter(prompt: string, messages: any[]) {
  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.choices[0].message;
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return {
      role: "assistant",
      content: "Maaf, terjadi kesalahan pada server AI.",
    };
  }
}
