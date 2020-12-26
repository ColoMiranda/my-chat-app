import React, { useState } from "react";
import "./Chat.css";
import Send from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    
    // Firebase magic

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>{" "}
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
          <h2>I'm a message</h2>
      </div>
      <div className="chat__input">
        <form>
          <input
            type="text"
            name="message"
            placeholder="iMessage"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton onClick={sendMessage}>
            <Send className="chat__send" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;