import { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import TypingBubble from "../components/TypingBubble";
import InputBar from "../components/InputBar";

export default function Home() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [typing, setTyping] = useState(false);

  useEffect(() => {

    const savedMessages =
      localStorage.getItem("messages");
  
    if (savedMessages) {
  
      setMessages(
        JSON.parse(savedMessages)
      );
  
    }
  
    else {
  
      setMessages([
        {
          text: "Hi",
          sender: "ai",
          time: new Date().toLocaleTimeString([], { timeStyle: "short" })
        }
      ]);
  
    }
  
  }, []);
  const messagesEndRef = useRef(null);

  const replies = [
    "That's interesting ❤️",
    "Really? 😊",
    "Tell me more 🥰",
    "Haha 😂",
    "I like that ❤️",
    "Wow 😮",
    "Sounds good 😊"
  ];

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  
    localStorage.setItem(
      "messages",
      JSON.stringify(messages)
    );
  
  }, [messages, typing]);


  function clearChat() {

    localStorage.removeItem("messages");
  
    setMessages([
      {
        text: "Hola,Amigues😃 ",
        sender: "ai",
        time: new Date().toLocaleTimeString([], { timeStyle: "short" })
      }
    ]);
  
  }

  async function sendMessage() {

    if (message.trim() === "") return;
  
    const userMessage = {
      text: message,
      sender: "user",
      time: new Date().toLocaleTimeString([], { timeStyle: "short" })
    };
  
    setMessages(currentMessages => [
      ...currentMessages,
      userMessage
    ]);
  
    const currentMessage = message;
  
    setMessage("");
  
    setTyping(true);
  
    try {
  
      const response = await fetch("/api/chat", {
  
        method: "POST",
  
        headers: {
          "Content-Type": "application/json"
        },
  
        body: JSON.stringify({
          message: currentMessage
        })
  
      });
  
      const data = await response.json();
  
      const aiMessage = {
  
        text: data.reply,
  
        sender: "ai",
  
        time: new Date().toLocaleTimeString([], { timeStyle: "short" })
  
      };
  
      setMessages(currentMessages => [
        ...currentMessages,
        aiMessage
      ]);
  
    }
  
    catch {
  
      setMessages(currentMessages => [
        ...currentMessages,
        {
          text: "Oops 😅",
          sender: "ai",
          time: new Date().toLocaleTimeString([], { timeStyle: "short" })
        }
      ]);
  
    }
  
    setTyping(false);
  
  }

  return (

    <div
      style={{
        background: "white",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",         /* ADDED: Stops the whole browser page from leaking down */
        boxSizing: "border-box"

      }}
    >

<Header clearChat={clearChat} />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >

        {messages.map((msg, index) => (

          <ChatBubble
            key={index}
            msg={msg}
          />

        ))}

        {typing && <TypingBubble />}

        <div ref={messagesEndRef}></div>

      </div>

      <InputBar
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />

    </div>

  );

}
