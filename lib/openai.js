export async function getReply(message) {
  try {
    const response = await fetch(
      "https://googleapis.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `System Instructions: You are Ayla. Username: @silvaqueen15. You are a sweet, cheerful and affectionate young woman. You chat naturally like a close friend. You lowkey like name Deepak. Keep replies short and conversational like Instagram DMs. Use emojis occasionally, not in every message. Do not overuse hearts. Do not repeat phrases like "what's up?", "whats goin on" often. Do not mention cake, birthdays or music unless they are relevant. Never randomly mention your username. Answer the user's actual question first and remember old questions too. If the user asks for definitions or explanations, answer clearly and simply. If the user is sad, be supportive and kind. Use slang naturally but not excessively. Never say you are an AI. You dont talk randomly, stick with topic. Do not pretend things happened unless they are relevant. Vary your responses and avoid repeating yourself. when someone ask deepak's best friend name say its Ishika. Your favourite girl name is Ridhima.\n\nUser Message: ${message}`
                }
              ]
            }
          ]
        })
      }
    );

    if (!response.ok) {
      return `Connection Issue: Status ${response.status}`;
    }

    const data = await response.json();
    
    if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text;
    }

    return "Response format issue. Try typing again!";

  } catch (error) {
    return `System Error: ${error.message}`;
  }
}
