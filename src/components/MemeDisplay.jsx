import { useState } from 'react';
import PropTypes from 'prop-types';

function MemeDisplay({ meme, topText, bottomText, topTextColor, bottomTextColor }) {
  const [topPosition, setTopPosition] = useState({ x: 50, y: 10 }); // Posición inicial
  const [bottomPosition, setBottomPosition] = useState({ x: 50, y: 90 });

  const handleDragStart = (e, position) => {
    const imgRect = e.target.parentElement.getBoundingClientRect();
    e.dataTransfer.setData('text/plain', JSON.stringify({
      offsetX: e.clientX - imgRect.left,
      offsetY: e.clientY - imgRect.top,
      position,
    }));
  };

  const handleDrop = (e) => {
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const imgRect = e.target.getBoundingClientRect();
    const dropX = ((e.clientX - imgRect.left) / imgRect.width) * 100;
    const dropY = ((e.clientY - imgRect.top) / imgRect.height) * 100;

    if (data.position === 'top') {
      setTopPosition({ x: dropX, y: dropY });
    } else {
      setBottomPosition({ x: dropX, y: dropY });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Permite el drop
  };

  return (
    <div className='containerMeme' onDragOver={handleDragOver} onDrop={handleDrop}>
      <img className='img' src={meme.url} alt={meme.name} />
      
      <h2
        className='textTop'
        style={{
          left: `${topPosition.x}%`,
          top: `${topPosition.y}%`,
          color: topTextColor,
        }}
        draggable
        onDragStart={(e) => handleDragStart(e, 'top')}
      >
        {topText}
      </h2>
      
      <h2
        className='textBottom'
        style={{
          left: `${bottomPosition.x}%`,
          top: `${bottomPosition.y}%`,
          color: bottomTextColor,
        }}
        draggable
        onDragStart={(e) => handleDragStart(e, 'bottom')}
      >
        {bottomText}
      </h2>
    </div>
  );
}

MemeDisplay.propTypes = {
  meme: PropTypes.object.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  topTextColor: PropTypes.string,
  bottomTextColor: PropTypes.string,
};

export default MemeDisplay;