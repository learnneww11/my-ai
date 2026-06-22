export default function ChatBubble({ msg }) {

    return (
  
      <div
      style={{
        background:
          msg.sender === "user"
            ? "linear-gradient(200deg, blueviolet, mediumblue)"
            : "rgb(239,239,239)",
      
        color:
          msg.sender === "user"
            ? "white"
            : "black",
      
        padding: "10px 15px",
      
        borderRadius: "22px",
      
        maxWidth: "75%",
      
        alignSelf:
          msg.sender === "user"
            ? "flex-end"
            : "flex-start",
      
        wordBreak: "break-word"
      }}
      >
  
        <div>
          {msg.text}
        </div>
  
        <div
          style={{
            marginTop: "5px",
            fontSize: "12px",
  
            color:
              msg.sender === "user"
                ? "lavender"
                : "gray"
          }}
        >
          {msg.time}
        </div>
  
      </div>
  
    );
  
  }
