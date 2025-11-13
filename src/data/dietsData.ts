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
    id: 'ejemplo-menu-6-meses',
    title: 'Menú Ejemplo: 6-7 Meses',
    subtitle: 'Inicio (Papillas y Purés)',
    description: 'Un día de ejemplo para bebés que recién inician la alimentación complementaria.',
    imageUrl: 'https://placehold.co/600x400/ffe4e6/c51a4a?text=Menú+6+Meses',
    detailedContent: [
      { type: 'h2', text: 'Ejemplo de Menú: Bebé de 6-7 Meses (Papillas)' },
      { type: 'p', text: 'A esta edad, la leche (materna o fórmula) sigue siendo el alimento principal. La comida es para explorar y complementar. Se recomienda empezar con 1 o 2 comidas al día.' },
      { type: 'h2', text: 'Ejemplo de Almuerzo (Comida Principal):' },
      { type: 'list', text: 'Alimento Formador (Proteína + Hierro): 1-2 cucharadas de puré de hígado de pollo O sangrecita bien aplastada.' },
      { type: 'list', text: 'Alimento Energético: 2-3 cucharadas de papilla de camote, papa amarilla o zapallo.' },
      { type: 'list', text: 'Alimento Regulador (Vitamina C): 1-2 cucharadas de papilla de fruta, como naranja, mandarina o papaya (dado como postre).' },
      { type: 'p', text: 'Idea: Mezcla el puré de hígado directamente en la papilla de zapallo para un "súper puré" anti-anemia.' },
      { type: 'h2', text: 'Ejemplo de Cena (Opcional):' },
      { type: 'list', text: 'Una papilla suave de fruta (ej. manzana al vapor) o una mazamorra de quinua (sin azúcar).' },
    ],
  },
  {
    id: 'ejemplo-menu-8-meses',
    title: 'Menú Ejemplo: 8-9 Meses',
    subtitle: 'Avanzando (Grumos y Picados)',
    description: 'Un día de ejemplo para bebés que ya aceptan más texturas, como grumos y picados finos.',
    imageUrl: 'https://placehold.co/600x400/fff7ed/c2410c?text=Menú+8+Meses',
    detailedContent: [
      { type: 'h2', text: 'Ejemplo de Menú: Bebé de 8-9 Meses (Grumos)' },
      { type: 'p', text: '¡Hora de dejar el licuado! A esta edad, el bebé necesita practicar la masticación. La comida debe ser aplastada con tenedor o picada finamente. Usualmente son 3 comidas al día.' },
      { type: 'h2', text: 'Ejemplo de Desayuno:' },
      { type: 'list', text: 'Papilla de avena con 1 cucharada de puré de sangrecita (¡la sangrecita no es solo para el almuerzo!).' },
      { type: 'list', text: 'Media taza de fruta picada o aplastada (ej. plátano).' },
      { type: 'h2', text: 'Ejemplo de Almuerzo:' },
      { type: 'list', text: 'Proteína + Hierro: Pollo desmenuzado (muy fino) o guiso de lentejas bebé (solo aplastadas).' },
      { type: 'list', text: 'Energético: Arroz bien cocido (puede ser el arroz de la familia, pero sin sal y un poco aplastado) o puré de papa.' },
      { type: 'list', text: 'Regulador: Verduras picadas finamente (ej. brócoli al vapor, zanahoria rallada cocida).' },
      { type: 'h2', text: 'Ejemplo de Cena:' },
      { type: 'list', text: 'Sémola con leche (materna o fórmula) y un toque de canela.' },
      { type: 'list', text: 'Trocitos de pescado (sin espinas) al vapor.' },
    ],
  },
  {
    id: 'ejemplo-menu-12-meses',
    title: 'Menú Ejemplo: 10-12 Meses',
    subtitle: 'Trocitos y Comida Familiar',
    description: 'Un día de ejemplo para bebés que ya comen trocitos y (casi) se unen a la mesa familiar.',
    imageUrl: 'https://placehold.co/600x400/dcfce7/15803d?text=Menú+12+Meses',
    detailedContent: [
      { type: 'h2', text: 'Ejemplo de Menú: Bebé de 10-12 Meses (Trocitos)' },
      { type: 'p', text: 'A esta edad, el bebé ya debería comer 3 comidas principales y 1 o 2 snacks. Puede comer (casi) lo mismo que la familia, pero picado y sin sal, azúcar añadida o condimentos fuertes.' },
      { type: 'h2', text: 'Ejemplo de Desayuno:' },
      { type: 'list', text: 'Panqueque de avena y sangrecita (cortado en tiras que pueda agarrar).' },
      { type: 'list', text: 'Trocitos de fruta (ej. palta, fresas picadas).' },
      { type: 'h2', text: 'Ejemplo de Almuerzo (Plato de Fondo):' },
      { type: 'p', text: '¡Hora del plato de fondo! Separa una porción del guiso familiar (ej. estofado de res) ANTES de añadir la sal y los condimentos. Pica la carne y las verduras en trocitos seguros.' },
      { type: 'list', text: 'Proteína + Hierro: Trocitos de carne de res del estofado.' },
      { type: 'list', text: 'Energético: Papitas del guiso, bien cocidas.' },
      { type: 'list', text: 'Regulador: Zanahorias y arvejas del guiso.' },
      { type: 'h2', text: 'Ejemplo de Cena:' },
      { type: 'list', text: '"Arroz tapado" de quinua con carne molida (sin sal) y verduras picadas (tomate, cebolla).' },
      { type: 'list', text: 'Trocitos de camote al horno.' },
    ],
  },
  {
    id: 'plato-anti-anemia',
    title: 'Guía: El Plato Ideal',
    subtitle: 'La Combinación Perfecta',
    description: 'Aprende a estructurar cada comida para maximizar la absorción de hierro.',
    imageUrl: 'https://placehold.co/600x400/e0e7ff/4338ca?text=El+Plato+Ideal',
    detailedContent: [
      { type: 'h2', text: 'El Plato Ideal Anti-Anemia (La Combinación 1-2-3)' },
      { type: 'p', text: 'Para asegurar una comida nutritiva, cada plato principal (almuerzo y cena) debe contener estos tres componentes esenciales:' },
      { type: 'h2', text: '1. Alimento Formador (Rico en Hierro y Proteína)' },
      { type: 'p', text: 'Es el componente "constructor" y el más importante para la anemia. Debe ocupar 1/4 del plato.' },
      { type: 'list', text: 'Ejemplos: Hígado, sangrecita, bazo, carnes rojas, pescado, pollo, quinua, menestras.' },
      { type: 'h2', text: '2. Alimento Energético (Carbohidratos y Grasas)' },
      { type: 'p', text: 'Da la energía que el bebé necesita para moverse, crecer y jugar. Debe ocupar 1/2 del plato.' },
      { type: 'list', text: 'Ejemplos: Arroz, papa, camote, yuca, fideos, pan, palta, aceite de oliva.' },
      { type: 'h2', text: '3. Alimento Regulador (Vitaminas y Minerales)' },
      { type: 'p', text: 'Contiene la Vitamina C que "activa" la absorción del hierro. Debe ocupar 1/4 del plato.' },
      { type: 'list', text: 'Ejemplos: Naranja, mandarina, limón, fresa, papaya, brócoli, tomate, pimiento.' },
      { type: 'h2', text: 'Ejemplo Práctico:' },
      { type: 'p', text: 'Guiso de lentejas (Formador + Energético) con arroz (Energético) y una ensalada pequeña de tomate (Regulador). De postre, una mandarina (Regulador).' },
    ],
  },
  {
    id: 'desayunos-con-hierro',
    title: 'Desayunos Poderosos',
    subtitle: 'Empezar el día con Hierro',
    description: 'Ideas creativas para incluir hierro en la primera comida del día (no solo en el almuerzo).',
    imageUrl: 'https://placehold.co/600x400/fefce8/a16207?text=Desayunos',
    detailedContent: [
      { type: 'h2', text: 'Desayunos Poderosos con Hierro' },
      { type: 'p', text: '¡No dejes el hierro solo para el almuerzo! Empezar el día con una buena dosis es una estrategia excelente.' },
      { type: 'h2', text: 'Ideas Prácticas:' },
      { type: 'list', text: 'Panqueques de Sangrecita: Mezcla 1-2 cucharadas de sangrecita cocida y licuada en tu mezcla regular de panqueques (avena y plátano). Quedan oscuros y con un sabor suave.' },
      { type: 'list', text: 'Avena "Fortificada": Prepara la avena de tu bebé y mézclala con 1 cucharada de puré de hígado. El sabor dulce de la avena suele enmascarar bien el sabor.' },
      { type: 'list', text: 'Pudín de Chía y Kiwicha: La kiwicha (amaranto) es una buena fuente de hierro vegetal. Prepara un pudín de chía y mézclalo con kiwicha cocida y puré de frutas.' },
      { type: 'list', text: 'Revuelto de Huevo y Espinaca: A partir de los 8-9 meses, puedes ofrecer huevo picado (yema y clara) con espinaca cocida y picada finamente.' },
    ],
  },
  {
    id: 'blw-con-hierro',
    title: 'BLW y Hierro',
    subtitle: 'Alimentación Autorregulada',
    description: 'Cómo ofrecer alimentos ricos en hierro de forma segura para que tu bebé coma solo.',
    imageUrl: 'https://placehold.co/600x400/fff7ed/c2410c?text=BLW+Hierro',
    detailedContent: [
      { type: 'h2', text: 'Baby-Led Weaning (BLW) con Hierro' },
      { type: 'p', text: 'El BLW, o alimentación autorregulada, es un método excelente para que los bebés exploren texturas. Sin embargo, los padres a menudo se preocupan por el hierro. ¡Es fácil ofrecerlo de forma segura!' },
      { type: 'h2', text: 'Alimentos Seguros (Forma y Textura)' },
      { type: 'list', text: 'Hígado de Pollo: Bien cocido y ofrecido en tiras grandes (del tamaño de un dedo de adulto) que el bebé pueda agarrar.' },
      { type: 'list', text: 'Sangrecita: Cocínala y mézclala con un poco de avena o puré de papa para hacer "torrejas" o "panqueques" que pueda sujetar.' },
      { type: 'list', text: 'Carne de Res/Cordero: En tiras grandes y bien cocidas (como carne mechada) para que el bebé pueda "chupar" los jugos ricos en hierro.' },
      { type: 'list', text: 'Brócoli al Vapor: Los "arbolitos" son fáciles de agarrar y su alta Vitamina C ayuda a absorber el hierro de otras comidas.' },
      { type: 'list', text: 'Hamburguesas de Lentejas: Prepara pequeñas hamburguesas caseras de lentejas (sin sal) para que pueda comerlas con la mano.' },
    ],
  },
];