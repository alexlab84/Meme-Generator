
import PropTypes from 'prop-types';

function MemeForm({ memes, topText, bottomText, setTopText, setBottomText, handleSelectMeme }) {
  return (
    <div>
      <h3>Choose a meme template:</h3>
      <select onChange={(e) => handleSelectMeme(memes.find(meme => meme.id === e.target.value))}>
        <option value="">Select a meme</option>
        {memes.map((meme) => (
          <option key={meme.id} value={meme.id}>
            {meme.name}
          </option>
        ))}
      </select>

      <div>
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
    </div>
  );
}

MemeForm.propTypes = {
    memes: PropTypes.array.isRequired,
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    onInputChange: PropTypes.func,
    onSubmit: PropTypes.func,
    setTopText: PropTypes.func.isRequired,
    setBottomText: PropTypes.func.isRequired,
    handleSelectMeme: PropTypes.func.isRequired
  };

export default MemeForm;
