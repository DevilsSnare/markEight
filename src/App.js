import { useState } from "react";
import "./styles.css";
const emojiDict = {
  "😂": "Face with Tears of Joy",
  "😭": "Loudly Crying Face",
  "🥺": "Pleading Face",
  "❤️": "Red Heart",
  "🤣": "Rolling on the Floor Laughing",
  "✨": "Sparkles",
  "😍": "Smiling Face with Heart-Eyes",
  "🙏": "Folded Hands",
  "🥰": "Smiling Face with Hearts",
  "😊": "Smiling Face with Smiling Eyes"
};
const emojis = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("emoji meaning will appear here");

  function changeMeaning(event) {
    let emojiInput = event.target.value;
    emojiInput = emojiDict[emojiInput];
    setMeaning(emojiInput);
    if (emojiInput === undefined) {
      setMeaning("uh-oh! something is wrong.");
    }
  }
  function changeMeaningbyClick(emoji) {
    setMeaning(emojiDict[emoji]);
  }

  return (
    <div className="App">
      <div className="app-brand">emoji interpreter</div>
      <input
        onChange={changeMeaning}
        className="app-input"
        placeholder="insert emoji"
      />
      <div className="app-meaning">{meaning}</div>
      <div class="app-emoji-list">
        {emojis.map((emoji) => (
          <div
            className="app-emoji"
            onClick={() => changeMeaningbyClick(emoji)}
          >
            {emoji}
          </div>
        ))}
      </div>
    </div>
  );
}
