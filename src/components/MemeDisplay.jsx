import { useRef } from 'react';
import PropTypes from 'prop-types';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

function MemeDisplay({
  meme,
  topText,
  bottomText,
  selectedFont,
  topTextColor,
  bottomTextColor,
  topTextPosition,
  bottomTextPosition,
  setTopTextPosition,
  setBottomTextPosition,
}) {
  const memeRef = useRef(null); // Creamos una referencia para el contenedor del meme

  // Manejo del arrastre del texto
  const handleDragStart = (e, textType) => {
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;
    e.dataTransfer.setData('textType', textType);
    e.dataTransfer.setData('offsetX', offsetX);
    e.dataTransfer.setData('offsetY', offsetY);
  };

  const handleDrop = (e) => {
    const textType = e.dataTransfer.getData('textType');
    const offsetX = e.dataTransfer.getData('offsetX');
    const offsetY = e.dataTransfer.getData('offsetY');
    const x = e.clientX - e.target.getBoundingClientRect().left - offsetX;
    const y = e.clientY - e.target.getBoundingClientRect().top - offsetY;

    if (textType === 'top') {
      setTopTextPosition({ x, y });
    } else if (textType === 'bottom') {
      setBottomTextPosition({ x, y });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Función para descargar el meme
  const handleDownloadMeme = () => {
    toPng(memeRef.current)
      .then((dataUrl) => {
        saveAs(dataUrl, 'meme.png');
      })
      .catch((err) => {
        console.error('Error al generar la imagen del meme', err);
      });
  };

  return (
    <div>
      <div
        className="containerMeme"
        ref={memeRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ position: 'relative' }}
      >
        
        <img className="img" src={meme.url} alt={meme.name} />

        {/* Texto superior arrastrable */}
        <h2
          className="textTop"
          draggable
          onDragStart={(e) => handleDragStart(e, 'top')}
          style={{
            position: 'absolute',
            left: `${topTextPosition.x}px`,
            top: `${topTextPosition.y}px`,
            fontFamily: selectedFont,
            color: topTextColor,
          }}
        >
          {topText}
        </h2>

        {/* Texto inferior arrastrable */}
        <h2
          className="textBottom"
          draggable
          onDragStart={(e) => handleDragStart(e, 'bottom')}
          style={{
            position: 'absolute',
            left: `${bottomTextPosition.x}px`,
            top: `${bottomTextPosition.y}px`,
            fontFamily: selectedFont,
            color: bottomTextColor,
          }}
        >
          {bottomText}
        </h2>
        
      </div>

      {/* Botón para descargar el meme */}
      <button onClick={handleDownloadMeme} className="btn">
        Descarga tu meme
      </button>
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
  topTextPosition: PropTypes.object.isRequired,
  bottomTextPosition: PropTypes.object.isRequired,
  setTopTextPosition: PropTypes.func.isRequired,
  setBottomTextPosition: PropTypes.func.isRequired,
};

export default MemeDisplay;
