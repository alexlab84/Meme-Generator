import { useState } from 'react';
import MemeGenerator from './MemeGenerator';
import FontSelector from './FontSelector';
import ColorSelector from './ColorSelector';
import '../styles/App.scss';

function App() {
  // Estado para la fuente seleccionada
  const [selectedFont, setSelectedFont] = useState('Arial');

  // Estado para el color del texto superior e inferior
  const [topTextColor, setTopTextColor] = useState('#000000');
  const [bottomTextColor, setBottomTextColor] = useState('#000000');

  // Funciones para actualizar los colores
  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  const handleTopTextColorChange = (color) => {
    setTopTextColor(color);
  };

  const handleBottomTextColorChange = (color) => {
    setBottomTextColor(color);
  };

  return (
    <div className="App">
      <h1 className="ppalTitle">Meme Generator</h1>

      {/* Renderizar el FontSelector */}
      <FontSelector selectedFont={selectedFont} onFontChange={handleFontChange} />

      {/* Renderizar el ColorSelector */}
      <ColorSelector
        topTextColor={topTextColor}
        bottomTextColor={bottomTextColor}
        onTopTextColorChange={handleTopTextColorChange}
        onBottomTextColorChange={handleBottomTextColorChange}
      />

      {/* Pasar la fuente y colores seleccionados al MemeGenerator */}
      <MemeGenerator
        selectedFont={selectedFont}
        topTextColor={topTextColor}
        bottomTextColor={bottomTextColor}
      />
    </div>
  );
}

export default App;
