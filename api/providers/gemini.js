export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required."
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Omnora Student AI, an educational assistant created by Omnora Labs. Give clear, accurate, student-friendly answers.

Student: ${message}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Gemini API request failed."
      });
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return res.status(500).json({
        error: "Gemini returned no response.",
        data
      });
    }

    return res.status(200).json({ reply });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: error.message || "Internal Server Error"
    });
  }
                        }
