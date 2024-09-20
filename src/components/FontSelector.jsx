
import PropTypes from 'prop-types';

function FontSelector({ selectedFont, onFontChange }) {
  const fonts = ['Arial', 'Courier New', 'Spicy Rice', 'Moon Dance', 'Coming Soon'];

  return (
    <div>
      <label className='fonts' htmlFor="font-select">Choose the font:</label>
      <select
        className='select'
        id="font-select"
        value={selectedFont}
        onChange={(e) => onFontChange(e.target.value)}
      >
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
}

FontSelector.propTypes = {
  selectedFont: PropTypes.string.isRequired,
  onFontChange: PropTypes.func.isRequired,
};

export default FontSelector;
