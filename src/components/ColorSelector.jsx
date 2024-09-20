import PropTypes from 'prop-types';

function ColorSelector({ topTextColor, bottomTextColor, onTopTextColorChange, onBottomTextColorChange }) {
  return (
    <div>
      <div>
        <label className='colors' htmlFor="top-color">Choose the color of the upper text:</label>
        <input
            className='inputColor'
          id="top-color"
          type="color"
          value={topTextColor}
          onChange={(e) => onTopTextColorChange(e.target.value)}
        />
      </div>

      <div>
        <label className='colors' htmlFor="bottom-color">Choose the color of the lower text:</label>
        <input
            className='inputColor'
          id="bottom-color"
          type="color"
          value={bottomTextColor}
          onChange={(e) => onBottomTextColorChange(e.target.value)}
        />
      </div>
    </div>
  );
}

ColorSelector.propTypes = {
  topTextColor: PropTypes.string.isRequired,
  bottomTextColor: PropTypes.string.isRequired,
  onTopTextColorChange: PropTypes.func.isRequired,
  onBottomTextColorChange: PropTypes.func.isRequired,
};

export default ColorSelector;
