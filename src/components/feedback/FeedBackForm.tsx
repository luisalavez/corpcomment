import { useState } from "react"
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList:(text:string) => void; 
}

export default function FeedBackForm({
  onAddToList
}:FeedbackFormProps) {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIncidator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIncidator] = useState(false);

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if(newText.length > MAX_CHARACTERS)
    {
      return;
    }
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(text.includes("#") && text.length >= 5) {
      setShowValidIncidator(true);
      setTimeout(() => {
        setShowValidIncidator(false)
      }, 2000);
    } else {
      setShowInvalidIncidator(true);
      setTimeout(() => {
        setShowInvalidIncidator(false)
      }, 2000);
      return;
    }
    onAddToList(text);
    setText("");
  }

  return <form onSubmit={handleSubmit} className={`form 
    ${showValidIndicator ? "form--valid" : ""}
    ${showInvalidIndicator ? "form--invalid" : ""}`}>

    <textarea 
      value={text}
      onChange={handleChange}
      id="feedback-textarea" 
      placeholder="bla"
      spellCheck={false}/>
    <label htmlFor="feedback-textarea">
      Enter your feedback here
    </label>

    <div>
      <p className="u-italic">{charCount}</p>
      <button><span>submit</span></button>
    </div>

  </form>
}
