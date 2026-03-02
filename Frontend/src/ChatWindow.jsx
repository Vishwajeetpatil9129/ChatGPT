import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow() {
    return (
        <div className="chatWindow">
            <div className="navbar">
                <span>
                    SigmaGPT <i className="fa-solid fa-chevron-down"></i>
                </span>
                <div className="userIconDiv">
                    <span>
                        <i className="fa-solid fa-user"></i>
                    </span>
                </div>
            </div>
            <Chat />
            <div className="inputBox">
                <div className="userInput">
                    <input placeholder="Ask anything" />
                </div>
                <div id="submit">
                    <i className="fa-solid fa-paper-plane"></i>
                </div>
            </div>
            <p className="info">
                SigmaGPT can make mistakes. Check important info. See Cookie Preferences.
            </p>
        </div>
    );
}

export default ChatWindow;