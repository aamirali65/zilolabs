// app/api/gemini/route.js

import { GoogleGenerativeAI } from "@google/generative-ai";

// Next.js uses the Web standard Response object
export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GEMINI_API_KEY is not set." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(message);
    const response = await result.response.text();

    return new Response(JSON.stringify({ reply: response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong on the server." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
