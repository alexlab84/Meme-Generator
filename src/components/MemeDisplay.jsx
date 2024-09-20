import PropTypes from 'prop-types';

function MemeDisplay({ meme, topText, bottomText, selectedFont, topTextColor, bottomTextColor }) {
  return (
    <div className="containerMeme">
      <h2 className="textTop" style={{ fontFamily: selectedFont, color: topTextColor }}>
        {topText}
      </h2>
      <img className="img" src={meme.url} alt={meme.name} />
      <h2 className="textBottom" style={{ fontFamily: selectedFont, color: bottomTextColor }}>
        {bottomText}
      </h2>
    </div>
  );
}

MemeDisplay.propTypes = {
  meme: PropTypes.object.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  selectedFont: PropTypes.string.isRequired,
  topTextColor: PropTypes.string.isRequired,
  bottomTextColor: PropTypes.string.isRequired,
};

export default MemeDisplay;
