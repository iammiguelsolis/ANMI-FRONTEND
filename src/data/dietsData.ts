// Esta interfaz define la estructura de cada "dieta"
export interface DietInfo {
  id: string; // Para la URL
  title: string;
  subtitle: string;
  description: string; // Para la tarjeta del carrusel
  imageUrl: string; // Usaremos placeholders
  // Contenido detallado para la página de detalles
  detailedContent: {
    type: 'h2' | 'p' | 'list';
    text: string;
  }[];
}

export const dietsData: DietInfo[] = [
  // --- GUÍAS EXISTENTES ---
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

  // --- ¡NUEVAS GUÍAS! ---

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
  {
    id: 'transicion-texturas',
    title: 'De Papilla a Trocitos',
    subtitle: 'Evolución de Texturas',
    description: 'El paso a paso para dejar las papillas y empezar con alimentos picados y sólidos.',
    imageUrl: 'https://placehold.co/600x400/f3e8ff/7e22ce?text=Texturas',
    detailedContent: [
      { type: 'h2', text: 'La Aventura de las Texturas' },
      { type: 'p', text: 'No tener miedo a avanzar con las texturas es clave para evitar problemas de alimentación a futuro. La ventana de aceptación (7-10 meses) es corta, ¡hay que aprovecharla!' },
      { type: 'h2', text: 'Guía por Edad (Aproximada)' },
      { type: 'list', text: '6-7 Meses: Papillas y purés suaves. (Ej. puré de camote con hígado aplastado).' },
      { type: 'list', text: '7-8 Meses: Purés más espesos y con grumos. (Ej. papilla de lenteja solo aplastada con tenedor, no licuada).' },
      { type: 'list', text: '8-10 Meses: Alimentos picados finamente o desmenuzados. (Ej. sangrecita guisada y picada, arroz bien cocido, pollo desmenuzado).' },
      { type: 'list', text: '10-12 Meses: Trocitos pequeños que pueda coger con sus dedos (pinza fina). ¡Ya puede empezar a comer (casi) lo mismo que la familia, pero picado y sin sal/azúcar añadida!' },
    ],
  },
  {
    id: 'mitos-anemia',
    title: 'Mitos y Verdades',
    subtitle: 'Información Clara',
    description: 'Separando la ficción de la realidad sobre la anemia y la nutrición infantil.',
    imageUrl: 'https://placehold.co/600x400/fafafa/1c1917?text=Mitos+y+Verdades',
    detailedContent: [
      { type: 'h2', text: 'Mitos y Verdades sobre la Anemia' },
      { type: 'list', text: 'MITO: "La espinaca es el mejor alimento anti-anemia." VERDAD: Es un mito (de Popeye). La espinaca tiene hierro, pero es "no-hemo" (difícil de absorber) y tiene oxalatos que lo bloquean. Es mucho mejor el hígado o la sangrecita.' },
      { type: 'list', text: 'MITO: "La beterraga (remolacha) cura la anemia." VERDAD: La beterraga es saludable, pero su aporte de hierro es muy bajo. Su color rojo no tiene que ver con la sangre. No cura la anemia.' },
      { type: 'list', text: 'MITO: "Mi bebé está gordito, no puede tener anemia." VERDAD: La anemia no tiene que ver con el peso. Un bebé con sobrepeso puede tener anemia si su dieta (ej. mucha fórmula o fideos) no es rica en hierro.' },
      { type: 'list', text: 'VERDAD: "El hierro de la leche materna ya no es suficiente a los 6 meses." CIERTO. A partir de los 6 meses, las reservas de hierro del bebé se acaban y la leche materna no es suficiente. Por eso es CRUCIAL iniciar la alimentación complementaria con alimentos ricos en hierro.' },
    ],
  },
];