
export default function InputBar({
  message,
  setMessage,
  sendMessage
}) {
  return (
    <div
      style={{
        padding: "10px 14px",
        background: "white",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        boxSizing: "border-box",
        width: "100%"
      }}
    >
      {/* Camera Outside on the Left */}
      <button
        type="button"
        style={{
          background: "transparent",
          border: "none",
          padding: "0",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          color: "black" 
        }}
      >
        <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      </button>

      {/* The Unified Instagram Pill Container */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          background: "whitesmoke", 
          borderRadius: "24px",
          padding: "4px 14px",
          gap: "8px"
        }}
      >
        {/* Input Field Inside the Pill */}
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
            background: "transparent",
            border: "none",
            outline: "none",
            padding: "10px 0",
            fontSize: "15px",
            color: "black"
          }}
        />

        {/* Microphone Inside the Pill (Only shows if text is empty) */}
        {!message.trim() && (
          <button
            type="button"
            style={{
              background: "transparent",
              border: "none",
              padding: "0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "black"
            }}
          >
            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </button>
        )}

        {/* Send Button Inside the Pill (Only shows when user types text) */}
        {message.trim() && (
          <button
            type="button"
            onClick={sendMessage}
            style={{
              background: "transparent",
              border: "none",
              padding: "0 4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "dodgerblue", 
              fontWeight: "600",
              fontSize: "15px"
            }}
          >
            Send
          </button>
        )}
      </div>
    </div>
  );
}
