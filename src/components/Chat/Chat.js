import React, { useEffect, useState } from "react";
import "./Chat.css";
import Send from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import Message from "../Message/Message";
import { selectChatName, selectChatId } from "../../features/chatSlice";
import { useSelector } from "react-redux";
import db from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import ScrollableFeed from "react-scrollable-feed";

function Chat() {
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const user = useSelector(selectUser);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>{" "}
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <ScrollableFeed forceScroll={true}>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </ScrollableFeed>
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
