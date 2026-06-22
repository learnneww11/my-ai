export default function InputBar({
  message,
  setMessage,
  sendMessage
}) {
  return (
    <div
      style={{
        padding: "7px",
        borderTop: "1px solid lightgray",
        background: "white",
        display: "flex",
        alignItems: "center",
        gap: "2px"
      }}
    >
      {/* Camera */}
      <button
        type="button"
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center"
        }}
      >
        <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
      </button>

      {/* Input Field */}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        placeholder="Message..."
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "25px",
          border: "1px solid lightgray",
          outline: "none",
          fontSize: "16px"
        }}
      />

      {/* Microphone */}
      <button
        type="button"
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center"
        }}
      >
        <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zm7 10a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.93V21H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.07A7 7 0 0 0 19 12z"/>
        </svg>
      </button>

      {/* Send */}
      <button
        type="button"
        onClick={sendMessage}
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center",
          color: "blue"
        }}
      >
        <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </div>
  );
}

