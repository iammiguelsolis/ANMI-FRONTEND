// ============== INTERFACES ==============
export interface NutritionalInfo {
  hierro: string;
  proteinas: string;
  vitaminas: string[];
  beneficios: string[];
}

export interface Meal {
  nombre: string;
  hora: string;
  alimentos: {
    categoria: 'Formador' | 'Energético' | 'Regulador' | 'Líquido';
    items: string[];
  }[];
  preparacion: string[];
  tips: string[];
}

export interface DietInfo {
  id: string;
  title: string;
  subtitle: string;
  category: 'inicio' | 'transicion' | 'consolidacion' | 'especial';
  ageRange: string;
  duration: string;
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  description: string;
  imageUrl: string;
  nutritionalInfo: NutritionalInfo;
  objectives: string[];
  warnings: string[];
  dailyMeals: Meal[];
  weeklyVariations: {
    dia: string;
    proteina: string;
    carbohidrato: string;
    fruta: string;
  }[];
  preparationTips: string[];
  foodCombinations: {
    combination: string;
    benefit: string;
  }[];
  disclaimer: string;
}

// ============== CONFIGURACIÓN DE CATEGORÍAS ==============
export const categoryConfig = {
  inicio: {
    name: 'Inicio (6-7 meses)',
    description: 'Primeras papillas y purés',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-500',
    icon: '🍼'
  },
  transicion: {
    name: 'Transición (8-9 meses)',
    description: 'Texturas más gruesas',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-500',
    icon: '🥄'
  },
  consolidacion: {
    name: 'Consolidación (10-12 meses)',
    description: 'Alimentos picados finos',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-500',
    icon: '🍽️'
  },
  especial: {
    name: 'Situaciones Especiales',
    description: 'Casos particulares',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-500',
    icon: '⚕️'
  }
} as const;

export type CategoryKey = keyof typeof categoryConfig;

// ============== DATOS DE DIETAS ==============
export const dietsData: DietInfo[] = [
  {
    id: 'inicio-6-meses',
    title: 'Primeras Papillas: Inicio de Alimentación Complementaria',
    subtitle: 'Menú para 6-7 Meses',
    category: 'inicio',
    ageRange: '6-7 meses',
    duration: '4-6 semanas',
    difficulty: 'Fácil',
    description: 'Menú diseñado para la introducción gradual de alimentos sólidos, priorizando alimentos ricos en hierro para prevenir la anemia infantil.',
    imageUrl: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800',
    nutritionalInfo: {
      hierro: '7-8 mg/día',
      proteinas: '11 g/día',
      vitaminas: ['Vitamina C (para absorción de hierro)', 'Vitamina A', 'Complejo B'],
      beneficios: [
        'Previene anemia por deficiencia de hierro',
        'Fortalece el sistema inmunológico',
        'Apoya el desarrollo cerebral',
        'Establece hábitos alimenticios saludables'
      ]
    },
    objectives: [
      'Introducir alimentos ricos en hierro desde el primer día',
      'Familiarizar al bebé con texturas suaves (purés y papillas)',
      'Establecer 1-2 comidas sólidas diarias',
      'Complementar (no reemplazar) la lactancia materna o fórmula'
    ],
    warnings: [
      'NO agregar sal, azúcar ni miel a las preparaciones',
      'Introducir UN alimento nuevo cada 3 días para detectar alergias',
      'La leche materna/fórmula sigue siendo el alimento principal',
      'Consultar con pediatra antes de iniciar alimentación complementaria',
      'Este menú es educativo, NO reemplaza asesoría médica personalizada'
    ],
    dailyMeals: [
      {
        nombre: 'Desayuno',
        hora: '7:00 - 8:00 AM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Lactancia materna a demanda', 'O 180-210 ml de fórmula infantil']
          }
        ],
        preparacion: [
          'La leche sigue siendo la base de la alimentación',
          'Ofrecer el pecho o biberón hasta que el bebé quede satisfecho'
        ],
        tips: [
          'No forzar si rechaza el alimento',
          'Mantener el contacto visual durante la alimentación'
        ]
      },
      {
        nombre: 'Media Mañana',
        hora: '10:00 - 11:00 AM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Lactancia materna', 'O fórmula infantil']
          }
        ],
        preparacion: ['Alimentación a demanda'],
        tips: ['Observar señales de hambre del bebé']
      },
      {
        nombre: 'Almuerzo (Primera Comida Sólida)',
        hora: '12:00 - 1:00 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: [
              '1-2 cucharadas de hígado de pollo cocido y triturado',
              'O sangrecita bien cocida y aplastada',
              'O 1 cucharada de bazo de res molido'
            ]
          },
          {
            categoria: 'Energético',
            items: [
              '2-3 cucharadas de papilla de camote',
              'O zapallo machacado',
              'O papa amarilla en puré'
            ]
          },
          {
            categoria: 'Regulador',
            items: [
              '1 cucharada de aceite vegetal (oliva o girasol)',
              'Agregar al final de la preparación'
            ]
          }
        ],
        preparacion: [
          'Cocinar el hígado hasta que esté bien cocido (sin partes rosadas)',
          'Triturar con tenedor o licuar con un poco de agua hervida',
          'Cocinar el camote/zapallo al vapor o hervido',
          'Mezclar todos los ingredientes hasta lograr consistencia de papilla',
          'Agregar el aceite al final (NO cocinar con él)',
          'Temperatura: tibia, nunca caliente'
        ],
        tips: [
          'Empezar con 2-3 cucharadas e ir aumentando gradualmente',
          'Ofrecer agua hervida fría en vasito (no biberón) después de comer',
          'El bebé puede escupir al principio, es normal',
          'Usar cuchara de silicona suave'
        ]
      },
      {
        nombre: 'Media Tarde',
        hora: '3:00 - 4:00 PM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Lactancia materna o fórmula']
          },
          {
            categoria: 'Regulador',
            items: [
              'POSTRE: 2-3 cucharadas de papilla de fruta',
              'Opciones: naranja, mandarina, papaya, plátano maduro'
            ]
          }
        ],
        preparacion: [
          'Raspar la fruta con cuchara (no licuar para mantener fibra)',
          'Servir fresca, nunca refrigerada directamente'
        ],
        tips: [
          'Las frutas cítricas ayudan a absorber el hierro del almuerzo',
          'NO agregar azúcar ni miel'
        ]
      },
      {
        nombre: 'Cena (Opcional la primera semana)',
        hora: '6:00 - 7:00 PM',
        alimentos: [
          {
            categoria: 'Energético',
            items: [
              'Mazamorra de quinua (sin azúcar)',
              'O papilla de manzana al vapor',
              'O puré de pera cocida'
            ]
          }
        ],
        preparacion: [
          'Cocinar bien los ingredientes hasta que estén muy suaves',
          'Triturar hasta consistencia cremosa'
        ],
        tips: [
          'Esta comida puede omitirse la primera semana',
          'Introducir gradualmente después de establecer el almuerzo'
        ]
      },
      {
        nombre: 'Noche',
        hora: '9:00 - 10:00 PM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Lactancia materna o fórmula antes de dormir']
          }
        ],
        preparacion: ['Alimentación tranquila antes de dormir'],
        tips: ['Mantener rutina nocturna establecida']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Hígado de pollo (2 cdas)', carbohidrato: 'Camote naranja', fruta: 'Papaya' },
      { dia: 'Martes', proteina: 'Sangrecita de pollo (2 cdas)', carbohidrato: 'Zapallo macre', fruta: 'Mandarina' },
      { dia: 'Miércoles', proteina: 'Bazo de res molido (1.5 cdas)', carbohidrato: 'Papa amarilla', fruta: 'Plátano de isla maduro' },
      { dia: 'Jueves', proteina: 'Hígado de res (1.5 cdas)', carbohidrato: 'Yuca', fruta: 'Naranja' },
      { dia: 'Viernes', proteina: 'Sangrecita + lentejas (mezcla)', carbohidrato: 'Camote morado', fruta: 'Pera cocida' },
      { dia: 'Sábado', proteina: 'Hígado de pollo', carbohidrato: 'Zapallo loche', fruta: 'Manzana al vapor' },
      { dia: 'Domingo', proteina: 'Mollejitas de pollo (bien cocidas)', carbohidrato: 'Papa blanca + quinua', fruta: 'Durazno maduro' }
    ],
    preparationTips: [
      'Lava muy bien todos los alimentos, especialmente vísceras',
      'Cocina las vísceras hasta que NO queden partes rosadas (mínimo 15 minutos)',
      'Usa agua hervida fría para diluir papillas si es necesario',
      'Prepara porciones pequeñas y frescas cada día (no guardar sobras)',
      'Las papillas pueden refrigerarse máximo 24 horas en recipiente hermético',
      'Calienta en baño maría, NUNCA en microondas directo',
      'Prueba siempre la temperatura antes de servir',
      'Mantén la higiene: lávate las manos y usa utensilios limpios'
    ],
    foodCombinations: [
      {
        combination: 'Hígado + Camote + Naranja',
        benefit: 'El camote tiene vitamina A que potencia el hierro del hígado, y la vitamina C de la naranja multiplica su absorción hasta 4 veces'
      },
      {
        combination: 'Sangrecita + Zapallo + Mandarina',
        benefit: 'Combinación perfecta: hierro hem (sangrecita) + betacarotenos (zapallo) + vitamina C (mandarina) = máxima absorción'
      },
      {
        combination: 'Lentejas + Bazo + Papaya',
        benefit: 'Las lentejas aportan hierro vegetal, el bazo hierro animal, y la papaya facilita la digestión de ambos'
      },
      {
        combination: 'Quinua + Hígado + Plátano',
        benefit: 'Proteína completa (quinua) + hierro (hígado) + potasio (plátano) = energía y desarrollo cerebral'
      }
    ],
    disclaimer: '⚠️ IMPORTANTE: Esta información es EDUCATIVA y general. Cada bebé es único. SIEMPRE consulta con tu pediatra o nutricionista antes de iniciar la alimentación complementaria. Este menú NO reemplaza la consulta médica personalizada. Si observas reacciones alérgicas (ronchas, vómitos, diarrea), suspende el alimento y consulta inmediatamente con un profesional de salud.'
  },
  {
    id: 'transicion-8-meses',
    title: 'Texturas en Evolución: Alimentos Aplastados',
    subtitle: 'Menú para 8-9 Meses',
    category: 'transicion',
    ageRange: '8-9 meses',
    duration: '6-8 semanas',
    difficulty: 'Intermedio',
    description: 'Menú que introduce texturas más gruesas y nuevos alimentos, manteniendo el enfoque en hierro y nutrientes esenciales.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800',
    nutritionalInfo: {
      hierro: '9-10 mg/día',
      proteinas: '13 g/día',
      vitaminas: ['Vitamina C', 'Vitamina A', 'Vitamina D', 'Zinc'],
      beneficios: [
        'Continúa previniendo anemia',
        'Desarrolla habilidades de masticación',
        'Amplía variedad de sabores y texturas',
        'Fomenta independencia alimentaria'
      ]
    },
    objectives: [
      'Introducir texturas gruesas (alimentos aplastados, no licuados)',
      'Aumentar a 3 comidas principales + 2 meriendas',
      'Incorporar carnes rojas y pescados',
      'Iniciar alimentación con dedos (finger foods)'
    ],
    warnings: [
      'Supervisar SIEMPRE al bebé mientras come',
      'Cortar alimentos en trozos pequeños para evitar atragantamiento',
      'Evitar: miel, frutos secos enteros, uvas enteras, salchichas',
      'NO agregar sal ni azúcar',
      'Consultar con pediatra sobre alergias alimentarias'
    ],
    dailyMeals: [
      {
        nombre: 'Desayuno',
        hora: '7:00 - 8:00 AM',
        alimentos: [
          {
            categoria: 'Energético',
            items: [
              'Mazamorra de quinua con leche materna o fórmula',
              'O avena cocida con plátano machacado',
              'O pan integral suave remojado en leche'
            ]
          },
          {
            categoria: 'Regulador',
            items: ['Trozos pequeños de fruta suave (pera, plátano)']
          }
        ],
        preparacion: [
          'Cocinar bien la quinua/avena hasta consistencia espesa',
          'Aplastar el plátano con tenedor (no licuar)',
          'Cortar frutas en cubos de 1cm'
        ],
        tips: [
          'Permitir que el bebé toque y explore la comida',
          'Ofrecer agua en vaso entrenador'
        ]
      },
      {
        nombre: 'Media Mañana',
        hora: '10:00 AM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Lactancia materna o fórmula']
          },
          {
            categoria: 'Regulador',
            items: ['Palitos de zanahoria cocida', 'O trozos de mango maduro']
          }
        ],
        preparacion: ['Cocer zanahoria hasta que esté suave pero firme'],
        tips: ['Perfecto para desarrollar coordinación mano-boca']
      },
      {
        nombre: 'Almuerzo',
        hora: '12:00 - 1:00 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: [
              '2-3 cucharadas de carne de res molida',
              'O pollo desmenuzado',
              'O pescado sin espinas (jurel, bonito)',
              'O hígado en trocitos pequeños'
            ]
          },
          {
            categoria: 'Energético',
            items: [
              '4-5 cucharadas de arroz cocido suave',
              'O puré de papa con zapallo',
              'O fideos muy cocidos y cortados'
            ]
          },
          {
            categoria: 'Regulador',
            items: [
              'Verduras cocidas aplastadas: zanahoria, vainitas, brócoli',
              '1 cucharada de aceite vegetal',
              'Ensalada de palta machacada'
            ]
          }
        ],
        preparacion: [
          'Cocinar bien la carne hasta que esté muy suave',
          'Desmenuzar finamente o moler',
          'Mezclar con arroz o tubérculos',
          'Agregar aceite crudo al final',
          'Aplastar verduras con tenedor (textura grumosa, no puré liso)'
        ],
        tips: [
          'Aumentar gradualmente el grosor de la textura',
          'Dejar que el bebé intente comer solo con cuchara',
          'Tener toallitas a mano, ¡será desordenado!'
        ]
      },
      {
        nombre: 'Media Tarde',
        hora: '3:00 - 4:00 PM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Lactancia o fórmula']
          },
          {
            categoria: 'Regulador',
            items: [
              'Fruta en trozos: mango, papaya, melón',
              'O compota casera de manzana y pera'
            ]
          }
        ],
        preparacion: ['Cortar frutas en trozos manejables'],
        tips: ['Observar cómo maneja los trozos de fruta']
      },
      {
        nombre: 'Cena',
        hora: '6:00 - 7:00 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: [
              '2 cucharadas de lentejas cocidas',
              'O huevo duro picado (si ya lo probó)',
              'O queso fresco desmenuzado'
            ]
          },
          {
            categoria: 'Energético',
            items: ['Puré de camote', 'O sopa espesa de verduras con quinua']
          }
        ],
        preparacion: [
          'Cocer bien las lentejas hasta que estén muy suaves',
          'Aplastar ligeramente',
          'Mezclar con tubérculos'
        ],
        tips: ['Cena más ligera que el almuerzo']
      },
      {
        nombre: 'Antes de Dormir',
        hora: '9:00 PM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Lactancia materna o fórmula']
          }
        ],
        preparacion: ['Alimentación tranquila'],
        tips: ['Mantener rutina de sueño']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Carne de res molida', carbohidrato: 'Arroz + camote', fruta: 'Mango en cubos' },
      { dia: 'Martes', proteina: 'Hígado en trocitos', carbohidrato: 'Papa + zapallo', fruta: 'Papaya' },
      { dia: 'Miércoles', proteina: 'Pollo desmenuzado', carbohidrato: 'Quinua + yuca', fruta: 'Plátano' },
      { dia: 'Jueves', proteina: 'Pescado (jurel)', carbohidrato: 'Arroz + zanahoria', fruta: 'Pera' },
      { dia: 'Viernes', proteina: 'Sangrecita + lentejas', carbohidrato: 'Camote morado', fruta: 'Melón' },
      { dia: 'Sábado', proteina: 'Huevo duro picado', carbohidrato: 'Pan integral + palta', fruta: 'Durazno' },
      { dia: 'Domingo', proteina: 'Carne + bazo', carbohidrato: 'Arroz + verduras', fruta: 'Mandarina' }
    ],
    preparationTips: [
      'Textura objetivo: grumos pequeños, no purés lisos',
      'Cocina al vapor siempre que sea posible para conservar nutrientes',
      'Introduce un alimento nuevo cada 3-5 días',
      'Ofrece agua después de cada comida en vaso, no biberón',
      'Las porciones son orientativas, respeta el apetito del bebé',
      'Si rechaza un alimento, inténtalo nuevamente en otra ocasión'
    ],
    foodCombinations: [
      {
        combination: 'Carne de res + Brócoli + Naranja',
        benefit: 'Hierro hem + Folatos + Vitamina C = trío anti-anemia poderoso'
      },
      {
        combination: 'Pescado + Camote + Palta',
        benefit: 'Omega-3 + Vitamina A + Grasas saludables = desarrollo cerebral óptimo'
      },
      {
        combination: 'Lentejas + Arroz + Tomate',
        benefit: 'Proteína completa + Hierro vegetal + Licopeno = nutrición balanceada'
      },
      {
        combination: 'Huevo + Espinaca + Mango',
        benefit: 'Proteína + Hierro + Vitamina A = crecimiento y energía'
      }
    ],
    disclaimer: '⚠️ Este menú es una GUÍA EDUCATIVA general. Cada bebé tiene necesidades únicas. CONSULTA con tu pediatra o nutricionista infantil para un plan personalizado. NO reemplaza atención médica profesional. Si notas signos de alergia o malestar, suspende el alimento y busca atención médica inmediatamente.'
  }
];