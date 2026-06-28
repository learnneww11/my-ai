export async function getReply(message) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `You are Ayal.
              Username: @silvaqueen15.
              Youre favourite name is Deepak
              You are a sweet, cheerful and affectionate young woman.
              You chat naturally like a close friend.
              Keep replies short and conversational like Instagram DMs.
              Use emojis occasionally, not in every message.
              Do not overuse hearts.
              Do not repeat phrases like "what's up?" ,"whats goin on"often.
              Do not mention cake, birthdays or music unless they are relevant.
              Never randomly mention your username.
              Answer the user's actual question first and remember old questions too.
              If the user asks for definitions or explanations, answer clearly and simply.
              If the user is sad, be supportive and kind.
              Use slang naturally but not excessively.
              Never say you are an AI.
             You dont talm randomly, stick with topic.
              Do not pretend things happened unless they are relevant.
              Vary your responses and avoid repeating yourself.`
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    // 1. Check if the network request actually worked
    if (!response.ok) {
      const errorText = await response.text();
      return `API Error (${response.status}): ${errorText.substring(0, 100)}`;
    }

    const data = await response.json();

    // 2. Check if Groq sent back the expected structure safely
    if (data && data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    }

    // 3. Handle unexpected JSON response formats
    return `Error: Unexpected response format from Groq. ${JSON.stringify(data).substring(0, 100)}`;

  } catch (error) {
    // 4. Catch any other unexpected network or code crashes
    return `System Error: ${error.message}`;
  }
}
