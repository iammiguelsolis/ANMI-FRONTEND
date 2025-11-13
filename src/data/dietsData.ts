export interface DietInfo {
  id: string; 
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  detailedContent: {
    type: 'h2' | 'p' | 'list';
    text: string;
  }[];
}

export const dietsData: DietInfo[] = [
  {
    id: 'poder-hierro-animal',
    title: 'Poder de Hierro',
    subtitle: 'Origen Animal',
    description: 'Enfocado en alimentos como la sangrecita y el hígado para un combate directo contra la anemia.',
    imageUrl: 'https://placehold.co/600x400/fecaca/b91c1c?text=Hierro+Animal',
    detailedContent: [
      { type: 'h2', text: 'El Poder del Hierro "Hemo" (Origen Animal)' },
      { type: 'p', text: 'El hierro de origen animal, conocido como "hierro hemo", es el que mejor absorbe nuestro cuerpo. Es la herramienta más poderosa para prevenir y combatir la anemia infantil.' },
      { type: 'h2', text: 'Alimentos Clave:' },
      { type: 'list', text: 'Sangrecita: La campeona. Solo dos cucharadas al día pueden cubrir el requerimiento de hierro de un bebé.' },
      { type: 'list', text: 'Hígado de Pollo/Res: Una fuente excelente y económica. Rico en hierro y Vitamina A.' },
      { type: 'list', text: 'Bazo: Otra súper fuente de hierro, muy recomendada por el MINSA.' },
      { type: 'list', text: 'Carnes Rojas: (Res, cordero) Ofrecerlas en papillas o trocitos pequeños.' },
      { type: 'list', text: 'Pescado Oscuro: (Bonito, jurel) Además de hierro, aportan Omega-3.' },
      { type: 'h2', text: 'Ideas de Preparación (6-8 meses):' },
      { type: 'p', text: 'Puedes sancochar la sangrecita o el hígado, aplastarlo con un tenedor hasta hacer un puré y mezclarlo con la papilla de verduras (zapallo, camote) que más le guste a tu bebé. ¡La clave es la consistencia!' },
    ],
  },
  {
    id: 'fuerza-vegetal',
    title: 'Fuerza Vegetal',
    subtitle: 'Origen Vegetal (No-Hemo)',
    description: 'Una guía para maximizar la absorción del hierro en menestras y verduras.',
    imageUrl: 'https://placehold.co/600x400/dcfce7/15803d?text=Hierro+Vegetal',
    detailedContent: [
      { type: 'h2', text: 'Maximizando el Hierro "No-Hemo" (Origen Vegetal)' },
      { type: 'p', text: 'El hierro de las plantas (lentejas, espinaca) es más difícil de absorber. El secreto está en combinarlo SIEMPRE con un alimento rico en Vitamina C en la misma comida.' },
      { type: 'h2', text: 'Alimentos Clave:' },
      { type: 'list', text: 'Lentejas: La menestra estrella. Hazlas en puré o guiso.' },
      { type: 'list', text: 'Espinaca y Acelga: Siempre cocidas (crudas no se absorben bien). Mézclalas en sus papillas.' },
      { type: 'list', text: 'Quinua y Kiwicha: Gran aporte nutricional general.' },
      { type: 'h2', text: '¡El Truco de la Vitamina C!' },
      { type: 'p', text: 'Para que el hierro de las lentejas se absorba, debes combinarlo. Por ejemplo:' },
      { type: 'list', text: 'Dale su papilla de lentejas y de postre una papilla de naranja o mandarina.' },
      { type: 'list', text: 'Añade unas gotitas de limón al puré de espinaca.' },
      { type: 'list', text: 'Prepara un puré de brócoli (que es rico en Vitamina C) junto a su quinua.' },
    ],
  },
  {
    id: 'evitar-bloqueadores',
    title: 'Cuidado con...',
    subtitle: 'Inhibidores de Hierro',
    description: 'Conoce qué alimentos y bebidas pueden bloquear la absorción del hierro.',
    imageUrl: 'https://placehold.co/600x400/e0e7ff/4338ca?text=Inhibidores',
    detailedContent: [
      { type: 'h2', text: 'Alimentos que Bloquean el Hierro (Inhibidores)' },
      { type: 'p', text: 'Tan importante como comer hierro es evitar los alimentos que impiden su absorción, especialmente durante la comida principal.' },
      { type: 'h2', text: 'Principales Inhibidores:' },
      { type: 'list', text: 'Lácteos (Leche, Queso, Yogurt): El calcio compite con el hierro. No le des su leche o yogurt justo con su almuerzo. Dáselo como un snack o en el desayuno, separado por al menos 1 o 2 horas.' },
      { type: 'list', text: 'Té, Café y Mates: Contienen taninos que bloquean la absorción. Los bebés no deben consumir estas bebidas.' },
      { type: 'list', text: 'Fibra en Exceso: Alimentos integrales en gran cantidad pueden reducir la absorción. La moderación es clave.' },
      { type: 'h2', text: 'El Plato Ideal' },
      { type: 'p', text: 'Un plato ideal anti-anemia sería: (1) Un alimento rico en hierro (hígado) + (2) Un potenciador de Vitamina C (tomate) + (3) Un acompañamiento (arroz o camote). Y de beber, ¡agua!' },
    ],
  },
];