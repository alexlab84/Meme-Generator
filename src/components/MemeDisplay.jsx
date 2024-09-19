import PropTypes from 'prop-types';


function MemeDisplay({ meme, topText, bottomText }) {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img className='img' src={meme.url} alt={meme.name}  />
      <h2
        style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2rem',
          textShadow: '2px 2px 5px black',
        }}
      >
        {topText}
      </h2>
      <h2
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2rem',
          textShadow: '2px 2px 5px black',
        }}
      >
        {bottomText}
      </h2>
    </div>
  );
}

MemeDisplay.propTypes = {
      meme: PropTypes.object.isRequired,  
      url: PropTypes.string,
      topText: PropTypes.string.isRequired,
      bottomText: PropTypes.string.isRequired,
    
  };
  

export default MemeDisplay;
