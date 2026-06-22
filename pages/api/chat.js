import { getReply } from "../../lib/openai";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { message } = req.body;

  try {

    const reply = await getReply(message);

    res.status(200).json({
      reply
    });

  }

  catch (error) {

    res.status(500).json({
      reply: "Oops 😅"
    });

  }

}