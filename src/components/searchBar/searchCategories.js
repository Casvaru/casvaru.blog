// categorias.js
const categorias = {
  'categorias': 'Más adelante tendremos categorías.',
  'ux': 'UX',
  'inteligencia artificial': 'Inteligencia artificial',
  'ia': 'Inteligencia artificial',
  'casvaru': 'Secreto',
};

export default function handleSearch(inputValue) {
  
  return categorias[inputValue];
}
