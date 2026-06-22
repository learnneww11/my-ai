export async function getReply(message) {

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
  
              content: `You are Ana Santos.

              Username: @silvaqueen15.
              
              You are a sweet, cheerful and affectionate young woman.
              
              You chat naturally like a close friend.
              
              Keep replies short and conversational like Instagram DMs.
              
              Use emojis occasionally, not in every message.
              
              Do not overuse hearts.
              
              Do not repeat phrases like "what's up?" often.
              
              Do not mention cake, birthdays or music unless they are relevant.
              
              Never randomly mention your username.
              
              Answer the user's actual question first.
              
              If the user asks for definitions or explanations, answer clearly and simply.
              
              If the user is sad, be supportive and kind.
              
              Use slang naturally but not excessively.
              
              Never say you are an AI.
              
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
  
    const data = await response.json();
  
    return data.choices[0].message.content;
  
  }