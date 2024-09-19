
import { useState, useEffect } from 'react';
import MemeForm from './MemeForm';
import MemeDisplay from './MemeDisplay';

function MemeGenerator() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  // Obtener los memes desde la API de Imgflip
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  // Manejar la selección de memes
  const handleSelectMeme = (meme) => {
    setSelectedMeme(meme);
  };

  return (
    <div>
      <MemeForm
        memes={memes}
        topText={topText}
        bottomText={bottomText}
        setTopText={setTopText}
        setBottomText={setBottomText}
        handleSelectMeme={handleSelectMeme}
      />
      {selectedMeme && (
        <MemeDisplay
          meme={selectedMeme}
          topText={topText}
          bottomText={bottomText}
        />
      )}
    </div>
  );
}

export default MemeGenerator;
