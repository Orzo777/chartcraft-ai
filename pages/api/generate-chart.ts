// /pages/api/generate-chart.ts

import type { NextApiRequest, NextApiResponse } from "next";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ error: "No input provided" });
  }

  // Формуємо prompt для OpenAI, щоб згенерувати дані графіка
  const prompt = `
Given this description or table, generate a simple chart object with "labels" and "values":
${input}
Respond in JSON, example:
{ "labels": ["Jan", "Feb"], "values": [100, 150] }
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
        temperature: 0.2
      })
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content?.trim();

    // Шукаємо JSON у відповіді
    let chartData = null;
    try {
      chartData = JSON.parse(text!);
    } catch (e) {
      // Якщо OpenAI повернув текст з обгорткою - пробуємо знайти JSON
      const match = text?.match(/\{[\s\S]*\}/);
      if (match) chartData = JSON.parse(match[0]);
    }

    if (!chartData?.labels || !chartData?.values) {
      return res.status(400).json({ error: "Bad OpenAI response", text });
    }

    res.status(200).json({ chartData });
  } catch (e) {
    res.status(500).json({ error: "Failed to generate chart", detail: String(e) });
  }
}
