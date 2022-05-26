import React from 'react';
import './Meme.css';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import Axios from 'axios';

export default function Meme() {
  const [memer, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/4t0m5.jpg',
  });

  function handleClick(e) {
    e.preventDefault();

    Axios.get('https://api.imgflip.com/get_memes').then((response) => {
      const memesArray = response.data.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber].url;
      setMeme((prevMeme) => {
        return { ...prevMeme, randomImage: url };
      });
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const printRef = React.useRef();

  const handleSave = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { useCORS: true });

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <main>
      <form className="form">
        <input
          type="text"
          className="form_input"
          placeholder=" Top text"
          name="topText"
          value={memer.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form_input"
          placeholder=" Bottom text"
          name="bottomText"
          value={memer.bottomText}
          onChange={handleChange}
        />
        <button onClick={handleClick} className="form_button">
          Get a new Meme!
        </button>
      </form>

      <div className="meme" ref={printRef}>
        <img className="meme_Image" alt="meme" src={memer.randomImage} />
        <Draggable>
          <h2 className="meme_text top">{memer.topText}</h2>
        </Draggable>
        <Draggable>
          <h2 className="meme_text bottom">{memer.bottomText}</h2>
        </Draggable>
      </div>
      <div className="meme_save_button">
        <button onClick={handleSave} className="save_button">
          Download Meme
        </button>
      </div>
    </main>
  );
}
