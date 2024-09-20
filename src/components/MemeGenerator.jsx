import { useState, useEffect } from 'react';
import MemeForm from './MemeForm';
import MemeDisplay from './MemeDisplay';
import PropTypes from 'prop-types';

function MemeGenerator({ selectedFont, topTextColor, bottomTextColor }) {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

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
          selectedFont={selectedFont}
          topTextColor={topTextColor}
          bottomTextColor={bottomTextColor}
        />
      )}
    </div>
  );
}

MemeGenerator.propTypes = {
  selectedFont: PropTypes.string.isRequired,
  topTextColor: PropTypes.string.isRequired,
  bottomTextColor: PropTypes.string.isRequired,
};

export default MemeGenerator;
