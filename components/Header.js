export default function Header({clearChat}) {
    return (
      <div
        style={{
          padding: "9px",
          background: "white",
          borderBottom: "1px solid lightgray",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
  
        <div
          style={{
            position: "relative"
          }}
        >
  
  <img
  src="/avatar.jpeg"
  alt="Avatar"
  onError={(e) => {
    e.target.src =
      "https://i.pravatar.cc/150?img=47";
  }}
  style={{
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    objectFit: "cover"
  }}
/>
          <div
            style={{
              position: "absolute",
              right: "2px",
              bottom: "2px",
              width: "12px",
              height: "12px",
              background: "limegreen",
              borderRadius: "50%",
              border: "2px solid white"
            }}
          >
          </div>
  
        </div>
  
        <div
          style={{
            flex: 1
          }}
        >
  
          <h2
            style={{
              margin: 0,
              fontSize: "18px"
            }}
          >
            Ana Santos ✨
          </h2>
  
          <p
            style={{
              margin: 0,
              color: "gray",
              fontSize: "11px"
            }}
          >
            @redsnow14
          </p>
  
          <p
            style={{
              margin: 0,
              color: "gray",
              fontSize: "12px"
            }}
          >
            Active now
          </p>
  
        </div>
  
        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: "24px"
          }}
        >
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 24 24"
  fill="none"
  stroke="black"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2
  19.79 19.79 0 0 1-8.63-3.07
  19.5 19.5 0 0 1-6-6
  A19.79 19.79 0 0 1 2.11 5.18
  2 2 0 0 1 4.11 3h3
  a2 2 0 0 1 2 1.72
  c.13 1.21.38 2.39.74 3.54
  a2 2 0 0 1-.45 2.11L8.09 10.91
  a16 16 0 0 0 6 6l.54-.54
  a2 2 0 0 1 2.11-.45
  c1.15.36 2.33.61 3.54.74
  A2 2 0 0 1 22 16.92z" />
</svg>
        </button>
  
       <button
  style={{
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "6px"
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
</button>
        
        <button
  onClick={clearChat}
  style={{
    background: "transparent",
    border: "none",
    fontSize: "22px"
  }}
>
  ...
</button>
  
      </div>
    );
  }
