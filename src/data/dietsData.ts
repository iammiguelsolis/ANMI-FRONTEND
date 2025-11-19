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
    color: 'bg-green-600',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    borderColor: 'border-green-600',
    icon: '🍼'
  },
  transicion: {
    name: 'Transición (8-9 meses)',
    description: 'Texturas más gruesas',
    color: 'bg-blue-600',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-600',
    icon: '🥄'
  },
  consolidacion: {
    name: 'Consolidación (10-12 meses)',
    description: 'Alimentos picados finos',
    color: 'bg-purple-600',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800',
    borderColor: 'border-purple-600',
    icon: '🍽️'
  },
  especial: {
    name: 'Situaciones Especiales',
    description: 'Casos particulares',
    color: 'bg-orange-600',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-800',
    borderColor: 'border-orange-600',
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
    id: 'inicio-yema-huevo',
    title: 'Yema de Oro: Introducción al Huevo',
    subtitle: 'Proteína y Grasas (6-7 Meses)',
    category: 'inicio',
    ageRange: '6-7 meses',
    duration: '4 semanas',
    difficulty: 'Fácil',
    description: 'La yema de huevo es una excelente fuente de grasas saludables y vitaminas para el cerebro. Se introduce separada de la clara para vigilar alergias y facilitar la digestión.',
    imageUrl: 'https://img.freepik.com/fotos-premium/gota-yema-huevo-oro-dulce-especie-dulce-tailandes_1339-124135.jpg',
    nutritionalInfo: {
      hierro: '3-4 mg/día',
      proteinas: '6 g/día',
      vitaminas: ['Vitamina A', 'Vitamina D', 'Colina'],
      beneficios: [
        'Desarrollo cerebral (Colina)',
        'Salud visual (Luteína)',
        'Textura cremosa natural',
        'Fácil digestión'
      ]
    },
    objectives: [
      'Introducir la yema de huevo bien cocida (nunca aguada)',
      'Descartar alergia al huevo (ofrecer por 3 días seguidos)',
      'Lograr una consistencia de puré mezclando con leche materna'
    ],
    warnings: [
      'La yema debe estar completamente cuajada (cocción >10 min)',
      'No ofrecer la clara todavía si hay historial de alergias severas',
      'Es bajo en hierro, complementar con gotas o sangrecita en la cena'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo de Yema',
        hora: '12:00 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['1 Yema de huevo duro (sin clara)']
          },
          {
            categoria: 'Energético',
            items: ['Papilla de papa amarilla']
          },
          {
            categoria: 'Regulador',
            items: ['Zapallo macre aplastado', 'Caldo de verduras o Leche materna']
          }
        ],
        preparacion: [
          'Sancochar el huevo por 10-12 minutos.',
          'Separar la yema y aplastarla caliente con un tenedor.',
          'Mezclar con la papa y el zapallo hasta obtener una crema.',
          'Si queda muy seca (la yema es arenosa), añadir leche materna.'
        ],
        tips: ['La yema puede ser seca para el bebé, necesita bastante líquido (leche/caldo) para pasar bien.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Papilla de Granadilla (colada)']
          }
        ],
        preparacion: ['Solo el jugo y la pulpa sin semillas'],
        tips: ['Ayuda a la digestión de la grasa del huevo']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Yema de huevo', carbohidrato: 'Papa amarilla', fruta: 'Granadilla' },
      { dia: 'Martes', proteina: 'Yema de huevo', carbohidrato: 'Zapallo', fruta: 'Papaya' },
      { dia: 'Miércoles', proteina: 'Yema de huevo', carbohidrato: 'Camote', fruta: 'Pera' },
      { dia: 'Jueves', proteina: 'Sangrecita (Refuerzo hierro)', carbohidrato: 'Yuca', fruta: 'Durazno' },
      { dia: 'Viernes', proteina: 'Yema de huevo', carbohidrato: 'Olluco', fruta: 'Manzana' },
      { dia: 'Sábado', proteina: 'Hígado de pollo', carbohidrato: 'Papa', fruta: 'Plátano' },
      { dia: 'Domingo', proteina: 'Yema de huevo', carbohidrato: 'Avena', fruta: 'Melón' }
    ],
    preparationTips: [
      'Puedes guardar la clara cocida para tu propia ensalada, no la desperdicies.',
      'Si el bebé tiene eccema (dermatitis), consulta al pediatra antes de dar huevo.',
      'Mezclar la yema con palta (si ya la probó) crea una "mayonesa" natural muy nutritiva.'
    ],
    foodCombinations: [
      {
        combination: 'Yema + Zapallo',
        benefit: 'Suavidad y color atractivo'
      },
      {
        combination: 'Yema + Leche Materna',
        benefit: 'Mejor aceptación de sabor nuevo'
      }
    ],
    disclaimer: '⚠️ El huevo es uno de los alérgenos más comunes. Observa si aparecen ronchas alrededor de la boca o en el cuerpo. Si sucede, suspende y acude al médico.'
  },
  {
    id: 'inicio-sangrecita-salada',
    title: 'Sangrecita Criolla: Versión Salada',
    subtitle: 'Hierro y Sabor (6-7 Meses)',
    category: 'inicio',
    ageRange: '6-7 meses',
    duration: 'Continuo',
    difficulty: 'Fácil',
    description: 'A diferencia de la versión dulce (mousse), esta preparación introduce al bebé a los sabores salados y tradicionales, combinando la sangrecita con papa y aceite vegetal.',
    imageUrl: 'https://labuenanutricion.com/wp-content/uploads/2020/03/sangrecita-de-pollo-ayuda-a-combatir-la-anemia.jpg',
    nutritionalInfo: {
      hierro: '15 mg/día',
      proteinas: '14 g/día',
      vitaminas: ['Vitamina C', 'Zinc'],
      beneficios: [
        'Combate directo de la anemia',
        'Adaptación a comidas familiares (guisos)',
        'Aporte de energía',
        'Textura suave'
      ]
    },
    objectives: [
      'Lograr aceptación del sabor de la sangrecita sin fruta',
      'Consumir 2 cucharadas colmadas de sangrecita',
      'Introducir la papa amarilla como base energética'
    ],
    warnings: [
      'No usar sal ni aderezos comerciales (cubitos)',
      'La sangrecita debe estar muy bien lavada antes de cocinar',
      'Revisar que no queden plumas o impurezas'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo de Campeones',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['2 cdas de Sangrecita de pollo sancochada']
          },
          {
            categoria: 'Energético',
            items: ['1 Papa amarilla mediana sancochada']
          },
          {
            categoria: 'Regulador',
            items: ['Zanahoria cocida', '1 cdta Aceite de oliva/maíz']
          }
        ],
        preparacion: [
          'Sancochar la sangrecita con una ramita de hierbabuena (retirar antes de servir) para mejorar aroma.',
          'Aplastarla muy bien con tenedor junto con la papa caliente.',
          'Agregar el aceite al final para suavizar y nutrir.',
          'Si está muy seco, agregar caldo de la cocción de la papa.'
        ],
        tips: ['La hierbabuena ayuda a que el olor sea más agradable para el bebé.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Papilla de Papaya']
          }
        ],
        preparacion: ['Papaya bien madura aplastada'],
        tips: ['La papaya ayuda si la sangrecita estriñe un poco']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Sangrecita salada', carbohidrato: 'Papa amarilla', fruta: 'Papaya' },
      { dia: 'Martes', proteina: 'Sangrecita salada', carbohidrato: 'Camote', fruta: 'Granadilla' },
      { dia: 'Miércoles', proteina: 'Sangrecita salada', carbohidrato: 'Yuca', fruta: 'Pera' },
      { dia: 'Jueves', proteina: 'Pescado (Variación)', carbohidrato: 'Papa', fruta: 'Durazno' },
      { dia: 'Viernes', proteina: 'Sangrecita salada', carbohidrato: 'Zapallo', fruta: 'Plátano' },
      { dia: 'Sábado', proteina: 'Hígado', carbohidrato: 'Olluco', fruta: 'Manzana' },
      { dia: 'Domingo', proteina: 'Sangrecita salada', carbohidrato: 'Quinua (muy cocida)', fruta: 'Melón' }
    ],
    preparationTips: [
      'Puedes cocinar la sangrecita y congelarla en cubeteras de hielo para sacar porciones diarias.',
      'El aceite es fundamental para que no se sienta "arenosa" en la boca.',
      'Siempre ofrece agua hervida después de comer sangrecita.'
    ],
    foodCombinations: [
      {
        combination: 'Sangrecita + Aceite',
        benefit: 'Mejora palatabilidad y aporte calórico'
      },
      {
        combination: 'Papa Amarilla + Zanahoria',
        benefit: 'Base suave y dulce que el bebé acepta bien'
      }
    ],
    disclaimer: '⚠️ La sangrecita oscurece las heces del bebé (color negro/verde oscuro). Es un efecto normal del hierro y no debe preocuparte.'
  },
  {
    id: 'inicio-pollo-suave',
    title: 'Pollito Suave: Clásico Inicial',
    subtitle: 'Proteína Blanca (6-7 Meses)',
    category: 'inicio',
    ageRange: '6-7 meses',
    duration: '4 semanas',
    difficulty: 'Fácil',
    description: 'El pollo es la carne más suave para iniciar. Aunque es bajo en hierro comparado con las vísceras, es excelente para aportar proteínas y zinc, y su sabor neutro es muy bien aceptado.',
    imageUrl: 'https://i.ytimg.com/vi/eUdE-C9Oizg/maxresdefault.jpg',
    nutritionalInfo: {
      hierro: '1-2 mg/día',
      proteinas: '12 g/día',
      vitaminas: ['Vitamina B6', 'Niacina'],
      beneficios: [
        'Fácil digestión',
        'Aceptación casi garantizada',
        'Crecimiento de tejidos',
        'Hipoalergénico'
      ]
    },
    objectives: [
      'Introducir la textura fibrosa del pollo (bien procesada/licuada)',
      'Combinar con vegetales coloridos',
      'Establecer la rutina de comer'
    ],
    warnings: [
      'El pollo tiene POCO HIERRO. Es OBLIGATORIO dar suplemento de hierro en gotas si el menú es solo pollo.',
      'Usar la parte oscura (pierna/muslo) tiene más hierro y zinc que la pechuga.',
      'Retirar piel y grasa visible.'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo Clásico',
        hora: '12:00 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['2 cdas de Pollo (parte oscura) sancochado y procesado']
          },
          {
            categoria: 'Energético',
            items: ['Papilla de Camote o Papa']
          },
          {
            categoria: 'Regulador',
            items: ['Zapallo y Espinaca (1 hoja bien cocida)', 'Gotitas de aceite']
          }
        ],
        preparacion: [
          'Sancochar el pollo con las verduras.',
          'Licuar o procesar el pollo con un poco de caldo (el pollo deshilachado puede causar arcadas al inicio, mejor textura paté).',
          'Mezclar con el puré de camote/papa.',
          'Servir tibio.'
        ],
        tips: ['La pierna de pollo es más jugosa y fácil de tragar que la pechuga seca.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Papilla de Pera o Manzana']
          }
        ],
        preparacion: ['Fruta al vapor'],
        tips: ['La fibra de la pera ayuda si el pollo estriñe']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Pollo procesado', carbohidrato: 'Camote', fruta: 'Pera' },
      { dia: 'Martes', proteina: 'Pollo procesado', carbohidrato: 'Zapallo', fruta: 'Manzana' },
      { dia: 'Miércoles', proteina: 'Sangrecita (Día de Hierro)', carbohidrato: 'Papa', fruta: 'Durazno' },
      { dia: 'Jueves', proteina: 'Pollo procesado', carbohidrato: 'Yuca', fruta: 'Plátano' },
      { dia: 'Viernes', proteina: 'Hígado (Día de Hierro)', carbohidrato: 'Olluco', fruta: 'Granadilla' },
      { dia: 'Sábado', proteina: 'Pollo procesado', carbohidrato: 'Quinua', fruta: 'Papaya' },
      { dia: 'Domingo', proteina: 'Pollo procesado', carbohidrato: 'Papa amarilla', fruta: 'Melón' }
    ],
    preparationTips: [
      'Puedes cocinar el pollo con un trocito de cebolla para dar sabor, pero retírala antes de licuar/aplastar.',
      'No uses la licuadora en máxima potencia por mucho tiempo o la papa se pondrá ligosa (chiclosa). Mejor aplasta la papa y licúa solo el pollo.',
      'Asegúrate de que no queden hilitos de pollo.'
    ],
    foodCombinations: [
      {
        combination: 'Pollo + Espinaca',
        benefit: 'Introducción a sabores verdes suaves'
      },
      {
        combination: 'Pollo + Camote',
        benefit: 'Mezcla dulce-salada de alta aceptación'
      }
    ],
    disclaimer: '⚠️ Recuerda: El pollo es rico y sano, pero NO es suficiente para prevenir la anemia por sí solo. Si das pollo, no olvides las gotas de hierro recetadas por tu pediatra.'
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
  },
  {
    id: 'transicion-quinua-textura',
    title: 'Quinua Atamalada: Granos Andinos',
    subtitle: 'Textura Granulosa Suave (8-9 Meses)',
    category: 'transicion',
    ageRange: '8-9 meses',
    duration: 'Semanal',
    difficulty: 'Fácil',
    description: 'La quinua es perfecta para la transición porque tiene una textura naturalmente granulosa pero muy suave. Se ofrece "atamalada" (espesa y húmeda) para estimular la lengua sin riesgo.',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800',
    nutritionalInfo: {
      hierro: '4-5 mg/día',
      proteinas: '12 g/día',
      vitaminas: ['Complejo B', 'Fibra (5g)'],
      beneficios: [
        'Aceptación de texturas granulosas',
        'Proteína vegetal completa',
        'Digestión facilitada por fibra',
        'Energía sostenida'
      ]
    },
    objectives: [
      'Ofrecer la quinua bien cocida pero sin licuar (grano entero suave)',
      'Mezclar con alimentos ricos en Vitamina C para absorción de hierro',
      'Lograr consistencia de guiso espeso'
    ],
    warnings: [
      'Lavar la quinua varias veces antes de cocinar para quitar la saponina (espuma amarga)',
      'No colar la quinua, el bebé debe sentir el grano',
      'Si causa gases, ofrecer en cantidades pequeñas inicialmente'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo Andino',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Energético',
            items: ['4-5 cdas de Quinua bien cocida (tipo guiso)']
          },
          {
            categoria: 'Formador',
            items: ['2 cdas de Hígado de pollo picado muy chiquito (mezclado)']
          },
          {
            categoria: 'Regulador',
            items: ['Zanahoria y Espinaca picada (no licuada)', 'Chorrito de aceite']
          }
        ],
        preparacion: [
          'Cocinar la quinua con doble de agua hasta que reviente el grano.',
          'Agregar el hígado picado finamente y cocinar junto.',
          'Servir húmedo (agregar caldo si se seca), no seco como arroz graneado.'
        ],
        tips: ['La textura "atamalada" ayuda a que no se atoren y gestionen los granitos.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Plátano de isla aplastado con tenedor (dejando grumos)']
          }
        ],
        preparacion: ['Aplastar groseramente'],
        tips: ['El plátano de isla cocido es más suave para el estómago']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Hígado picado', carbohidrato: 'Quinua atamalada', fruta: 'Granadilla' },
      { dia: 'Martes', proteina: 'Queso fresco (pasteurizado)', carbohidrato: 'Quinua con zapallo', fruta: 'Papaya' },
      { dia: 'Miércoles', proteina: 'Sangrecita', carbohidrato: 'Quinua roja', fruta: 'Mandarina' },
      { dia: 'Jueves', proteina: 'Pescado desmenuzado', carbohidrato: 'Quinua blanca', fruta: 'Pera' },
      { dia: 'Viernes', proteina: 'Pollo picado', carbohidrato: 'Guiso de quinua', fruta: 'Durazno' },
      { dia: 'Sábado', proteina: 'Yema de huevo picada', carbohidrato: 'Quinua', fruta: 'Plátano' },
      { dia: 'Domingo', proteina: 'Carne molida', carbohidrato: 'Quinua', fruta: 'Melón' }
    ],
    preparationTips: [
      'La quinua debe lavarse frotando entre las manos bajo el chorro de agua hasta que no salga espuma.',
      'Puedes cocinar quinua para 2 días y guardarla en la refri.',
      'Mezcla quinua con zapallo para darle cremosidad natural sin usar lácteos.'
    ],
    foodCombinations: [
      {
        combination: 'Quinua + Hígado',
        benefit: 'Potencia de Hierro y Proteína completa'
      },
      {
        combination: 'Quinua + Aceite',
        benefit: 'Mejora la textura y el tránsito intestinal'
      }
    ],
    disclaimer: '⚠️ Asegúrate de que la quinua esté muy suave. Si el grano está duro, el bebé puede toser. Debe deshacerse al presionar con los dedos.'
  },
  {
    id: 'transicion-fideos-municion',
    title: 'Fideos Munición: Masticación Inicial',
    subtitle: 'Pequeñas Pastas (8-9 Meses)',
    category: 'transicion',
    ageRange: '8-9 meses',
    duration: 'Semanal',
    difficulty: 'Intermedio',
    description: 'Introducción al gluten (trigo) mediante pastas muy pequeñas (munición o cabello de ángel cortado). Estas pastas invitan a masticar sin ser un riesgo de asfixia grande.',
    imageUrl: 'https://i.ytimg.com/vi/1C_6uq0Npoo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDtPNgcJygyjLUnzLcjyLLyWlY4rg',
    nutritionalInfo: {
      hierro: '1-2 mg/día',
      proteinas: '9 g/día',
      vitaminas: ['Carbohidrato simple', 'Energía rápida'],
      beneficios: [
        'Desarrollo de movimientos laterales de lengua',
        'Aporte energético alto',
        'Variedad de texturas en boca',
        'Introducción al trigo'
      ]
    },
    objectives: [
      'Ofrecer fideos muy pequeños (munición) cocidos en caldo pero servidos húmedos (no sopa líquida)',
      'Combinar OBLIGATORIAMENTE con fuente de hierro (sangrecita/bazo) ya que la pasta no tiene',
      'Dejar grumos de verduras'
    ],
    warnings: [
      'No dar fideos largos enteros (riesgo de arcada)',
      'Si hay antecedentes de celiaquía, consultar al médico antes de dar trigo',
      'Cocinar bien los fideos (blandos), no "al dente"'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo de Pastas',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Energético',
            items: ['Fideos munición (bolitas) o letras']
          },
          {
            categoria: 'Formador',
            items: ['2 cdas de Sangrecita salteada con cebolla (picada, no licuada)']
          },
          {
            categoria: 'Regulador',
            items: ['Zapallo y Zanahoria en cuadritos muy pequeños (brunoise)']
          }
        ],
        preparacion: [
          'Cocinar los fideos en caldo de pollo o verduras.',
          'Dejar que absorban el líquido para que estén gorditos y suaves.',
          'Mezclar con la sangrecita y verduras picadas.',
          'Debe quedar como un "aguadito" espeso.'
        ],
        tips: ['Las bolitas de munición ruedan en la boca, estimulando el control motor oral.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Mango maduro en trozos pequeños (aplastables)']
          }
        ],
        preparacion: ['Cortar cubitos pequeños'],
        tips: ['El mango es resbaloso, cuidado']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Sangrecita', carbohidrato: 'Fideo munición', fruta: 'Mango' },
      { dia: 'Martes', proteina: 'Carne molida', carbohidrato: 'Fideo cabello ángel (cortado)', fruta: 'Pera' },
      { dia: 'Miércoles', proteina: 'Hígado picado', carbohidrato: 'Fideo letras', fruta: 'Papaya' },
      { dia: 'Jueves', proteina: 'Pescado', carbohidrato: 'Fideo corbatita (muy cocido y picado)', fruta: 'Plátano' },
      { dia: 'Viernes', proteina: 'Pollo deshilachado', carbohidrato: 'Fideo munición', fruta: 'Granadilla' },
      { dia: 'Sábado', proteina: 'Yema de huevo', carbohidrato: 'Sopa espesa de fideos', fruta: 'Durazno' },
      { dia: 'Domingo', proteina: 'Bazo', carbohidrato: 'Fideo arroz', fruta: 'Melón' }
    ],
    preparationTips: [
      'Si no tienes munición, usa cabello de ángel y rómpelo con la mano antes de echarlo a la olla.',
      'La pasta sigue absorbiendo agua después de cocida, sírvela rápido o añade más líquido al calentar.',
      'No uses queso parmesano (muy salado) todavía.'
    ],
    foodCombinations: [
      {
        combination: 'Fideos + Sangrecita',
        benefit: 'Energía + Hierro (la pasta sola nutre poco, necesita el hierro)'
      },
      {
        combination: 'Trigo + Vitamina C',
        benefit: 'Mejor absorción de nutrientes'
      }
    ],
    disclaimer: '⚠️ El gluten se debe introducir gradualmente. Observa si hay hinchazón de barriga, diarrea o malestar después de comer pasta por primera vez.'
  },
  {
    id: 'transicion-menestra-aplastada',
    title: 'Lentejitas Chancadas: Fibra y Hierro',
    subtitle: 'Introducción a Legumbres (8-9 Meses)',
    category: 'transicion',
    ageRange: '8-9 meses',
    duration: 'Continuo',
    difficulty: 'Fácil',
    description: 'Paso del puré liso a la legumbre aplastada con tenedor. Se busca que el bebé tolere la piel (fibra) de la lenteja y la textura pastosa no uniforme.',
    imageUrl: 'https://s3.ppllstatics.com/elnortedecastilla/www/multimedia/202103/26/media/cortadas/lenteja-RZvA2j9KfynUozfPMOBGryH-1248x770@El%20Norte.jpg',
    nutritionalInfo: {
      hierro: '4 mg/día',
      proteinas: '8-9 g/día',
      vitaminas: ['Ácido Fólico', 'Fibra (4g)'],
      beneficios: [
        'Prevención de estreñimiento',
        'Aporte de hierro vegetal',
        'Sensación de saciedad',
        'Adaptación a la cáscara de alimentos'
      ]
    },
    objectives: [
      'Servir lentejas cocidas y APALASTADAS con tenedor (no licuadas ni coladas)',
      'Combinar siempre con un cítrico o pimiento (Vit C)',
      'Mezclar con arroz (graneado pero mojado) para proteína completa'
    ],
    warnings: [
      'Remojar las lentejas min 8 horas y cambiar el agua para evitar cólicos',
      'Cocinar con laurel para mejorar digestión',
      'Si el bebé rechaza la cáscara, intentar pelar algunas o pasar por colador grueso al inicio'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo de Hierro Vegetal',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['3 cdas de Lentejas bien cocidas (aplastadas)']
          },
          {
            categoria: 'Energético',
            items: ['2 cdas de Arroz (húmedo) o Papa picada chiquita']
          },
          {
            categoria: 'Regulador',
            items: ['Pimiento rojo rallado (cocido en el aderezo)', 'Jugo de mandarina de postre']
          }
        ],
        preparacion: [
          'Guisar las lentejas hasta que se deshagan solas.',
          'Aplastar con el tenedor dejando textura.',
          'Servir con el arroz mezclado para facilitar el agarre con cuchara.'
        ],
        tips: ['El pimiento rojo tiene más vitamina C que la naranja y va bien en guisos.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Pera cocida en trocitos pequeños']
          }
        ],
        preparacion: ['Pera pelada, al vapor, cortada en cubitos de 0.5cm'],
        tips: ['Masticación suave']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Lentejas + Pescado', carbohidrato: 'Arroz', fruta: 'Mandarina' },
      { dia: 'Martes', proteina: 'Lentejas + Huevo picado', carbohidrato: 'Papa', fruta: 'Naranja' },
      { dia: 'Miércoles', proteina: 'Arvejas partidas (Puré grumoso)', carbohidrato: 'Yuca', fruta: 'Limonada' },
      { dia: 'Jueves', proteina: 'Lentejas + Sangrecita', carbohidrato: 'Camote', fruta: 'Fresas (picadas)' },
      { dia: 'Viernes', proteina: 'Frijol colado (dulce casero)', carbohidrato: 'Avena', fruta: 'Papaya' },
      { dia: 'Sábado', proteina: 'Lentejas solas', carbohidrato: 'Fideos', fruta: 'Granadilla' },
      { dia: 'Domingo', proteina: 'Puré de habas (sin cáscara)', carbohidrato: 'Papa', fruta: 'Melón' }
    ],
    preparationTips: [
      'Añade una cucharadita de aceite de oliva crudo al servir las lentejas para subir las calorías y sabor.',
      'Empieza con lentejas "bebé" o lentejones que son más suaves que el frijol negro o canario.',
      'No uses bicarbonato para ablandar (destruye vitaminas).'
    ],
    foodCombinations: [
      {
        combination: 'Lenteja + Arroz',
        benefit: 'Proteína de alta calidad (Aminoácidos complementarios)'
      },
      {
        combination: 'Lenteja + Cítrico',
        benefit: 'Absorción de hierro maximizada'
      }
    ],
    disclaimer: '⚠️ Las menestras pueden aumentar los gases. Es normal. Si causa dolor, reduce la cantidad y aumenta progresivamente.'
  },
  {
    id: 'consolidacion-chaufa-sangrecita',
    title: 'Chaufa Nutritivo: Granos y Trozos',
    subtitle: 'Sangrecita al Estilo Oriental (10-12 Meses)',
    category: 'consolidacion',
    ageRange: '10-12 meses',
    duration: 'Semanal',
    difficulty: 'Fácil',
    description: 'Una versión saludable y apta para bebés del clásico arroz chaufa. La textura desmenuzada de la sangrecita se mezcla con el arroz, facilitando la ingesta de hierro sin que el bebé separe los ingredientes.',
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    nutritionalInfo: {
      hierro: '14-15 mg/día',
      proteinas: '13 g/día',
      vitaminas: ['Vitamina A (Cebolla china)', 'Fibra'],
      beneficios: [
        'Altísima carga de hierro hemínico',
        'Manejo de cubiertos (cuchara)',
        'Sabor agradable y familiar',
        'Textura mixta fácil de tragar'
      ]
    },
    objectives: [
      'Ofrecer sangrecita mezclada con arroz (no licuada)',
      'Incluir verduras picadas muy finas (cebolla china, pimiento)',
      'Usar kion (jengibre) para dar sabor sin sal'
    ],
    warnings: [
      'No usar sillao (salsa de soja) por el exceso de sodio',
      'Evitar el glutamato monosódico (Ajinomoto)',
      'Asegurarse de que la tortilla de huevo esté bien cocida'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo: Chaufa de Sangrecita',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['Sangrecita cocida y picada tipo "carne molida"', 'Tortilla de huevo picada en cuadraditos']
          },
          {
            categoria: 'Energético',
            items: ['Arroz graneado (suave)']
          },
          {
            categoria: 'Regulador',
            items: ['Cebolla china (parte verde) picada muy fina', 'Pimiento rojo picado']
          }
        ],
        preparacion: [
          'Granear el arroz sin sal.',
          'Saltear la sangrecita con kion rallado y un poquito de aceite de sésamo (ajonjolí) para dar aroma.',
          'Mezclar todo con la tortilla picada y las verduras.',
          'Servir tibio.'
        ],
        tips: ['El aceite de ajonjolí da el sabor a "chifa" sin necesidad de sal.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Trozos de Piña Golden (suave)']
          }
        ],
        preparacion: ['Cortar en trozos pequeños o láminas delgadas'],
        tips: ['La piña ayuda a la digestión de las carnes']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Sangrecita', carbohidrato: 'Arroz chaufa', fruta: 'Piña' },
      { dia: 'Martes', proteina: 'Pollo picado', carbohidrato: 'Arroz chaufa', fruta: 'Naranja' },
      { dia: 'Miércoles', proteina: 'Pescado en trozos', carbohidrato: 'Arroz blanco', fruta: 'Mandarina' },
      { dia: 'Jueves', proteina: 'Huevo picado', carbohidrato: 'Arroz chaufa veg', fruta: 'Papaya' },
      { dia: 'Viernes', proteina: 'Hígado picado', carbohidrato: 'Arroz', fruta: 'Granadilla' },
      { dia: 'Sábado', proteina: 'Carne molida', carbohidrato: 'Arroz chaufa', fruta: 'Melón' },
      { dia: 'Domingo', proteina: 'Sangrecita', carbohidrato: 'Arroz con choclo', fruta: 'Durazno' }
    ],
    preparationTips: [
      'Usa arroz del día anterior si quieres que esté más suelto, o arroz recién hecho si prefieres que se pegue un poco para facilitar la cuchara.',
      'Ralla el kion para que deje sabor pero no trozos picantes.',
      'Puedes añadir trocitos de pollo si quieres doble proteína.'
    ],
    foodCombinations: [
      {
        combination: 'Sangrecita + Pimiento Rojo',
        benefit: 'Hierro + Vitamina C en el mismo plato'
      },
      {
        combination: 'Arroz + Huevo',
        benefit: 'Energía + Proteína de alta calidad'
      }
    ],
    disclaimer: '⚠️ El sillao comercial tiene demasiado sodio para un riñón de 10 meses. Si quieres dar color, usa un poquito de agua de cocción de beterraga o simplemente sírvelo blanco.'
  },
  {
    id: 'consolidacion-seco-carne',
    title: 'Guiso Verde: Seco de Carne',
    subtitle: 'Hierro y Zinc (10-12 Meses)',
    category: 'consolidacion',
    ageRange: '10-12 meses',
    duration: 'Semanal',
    difficulty: 'Intermedio',
    description: 'Adaptación del "Seco de Res" peruano. La carne de res aporta Zinc (clave para el crecimiento) y Hierro. Se sirve picada muy chiquita con una salsa de culantro bien cocida.',
    imageUrl: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800',
    nutritionalInfo: {
      hierro: '3-4 mg/día',
      proteinas: '14 g/día',
      vitaminas: ['Zinc (Crecimiento)', 'Vitamina B12'],
      beneficios: [
        'Estimulación del crecimiento (Zinc)',
        'Masticación de fibras cárnicas suaves',
        'Sabor aromático (Culantro)',
        'Coordinación motora fina'
      ]
    },
    objectives: [
      'Ofrecer carne de res en cubitos de 0.5cm (no licuada)',
      'Cocinar el culantro (cilantro) por largo tiempo para evitar indigestión',
      'Combinar con menestra (frijol/alverjita) para plato completo'
    ],
    warnings: [
      'La carne debe ser suave (lomo, cuadril, guiso especial), evitar cortes duros',
      'No usar cerveza ni chicha de jora en la preparación del bebé (alcohol)',
      'Picar la carne EN CONTRA de la fibra para que se deshaga al masticar'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo: Sequito Suave',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['Carne de res picada en cubitos muy pequeños (brunoise)']
          },
          {
            categoria: 'Energético',
            items: ['Papa amarilla en trozos', 'Arroz o Yuca']
          },
          {
            categoria: 'Regulador',
            items: ['Salsa de culantro con espinaca (bien cocida)', 'Zanahoria en rodajas']
          }
        ],
        preparacion: [
          'Licuar culantro y espinaca con agua.',
          'Guisar la carne picada con la salsa verde hasta que esté muy suave (40 min+).',
          'Añadir la papa y zanahoria al final.',
          'Servir jugoso.'
        ],
        tips: ['La espinaca suaviza el sabor fuerte del culantro y aporta hierro extra.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Gajos de Mandarina (sin pepas)']
          }
        ],
        preparacion: ['Retirar la piel blanca si es muy gruesa'],
        tips: ['Vitamina C para absorber el hierro']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Carne de res (Seco)', carbohidrato: 'Papa + Arroz', fruta: 'Mandarina' },
      { dia: 'Martes', proteina: 'Pollo (Seco de pollo)', carbohidrato: 'Yuca', fruta: 'Pera' },
      { dia: 'Miércoles', proteina: 'Hígado (encebollado picado)', carbohidrato: 'Camote', fruta: 'Papaya' },
      { dia: 'Jueves', proteina: 'Pescado (Sudado)', carbohidrato: 'Arroz', fruta: 'Granadilla' },
      { dia: 'Viernes', proteina: 'Carne molida', carbohidrato: 'Fideos', fruta: 'Plátano' },
      { dia: 'Sábado', proteina: 'Sangrecita', carbohidrato: 'Papa', fruta: 'Melón' },
      { dia: 'Domingo', proteina: 'Carne de res', carbohidrato: 'Puré de alverjas', fruta: 'Naranja' }
    ],
    preparationTips: [
      'Si la carne quedó dura, pícala más chiquita o deshiláchala, pero no la licúes.',
      'Puedes usar "carne molida" magra si te da miedo dar trozos, pero el objetivo a los 10-12 meses es masticar trozos.',
      'Sustituye la chicha de jora con un chorrito de jugo de naranja agria o limón al final.'
    ],
    foodCombinations: [
      {
        combination: 'Carne + Papa + Arroz',
        benefit: 'Energía densa para bebés en crecimiento rápido'
      },
      {
        combination: 'Culantro + Espinaca',
        benefit: 'Aporte de folatos y fibra'
      }
    ],
    disclaimer: '⚠️ El culantro puede caer pesado si está crudo. Asegúrate de que la salsa hierva al menos 15-20 minutos ("que pierda el color verde vivo").'
  },
  {
    id: 'consolidacion-picante-carne',
    title: 'Picante sin Ají: Texturas Mixtas',
    subtitle: 'Carne Molida y Verduras (10-12 Meses)',
    category: 'consolidacion',
    ageRange: '10-12 meses',
    duration: 'Semanal',
    difficulty: 'Fácil',
    description: 'Un "picante de carne" adaptado: carne molida magra con verduras picadas en cubitos (zanahoria, vainitas). La carne molida ofrece una textura granulosa fácil de gestionar antes de pasar a trozos grandes.',
    imageUrl: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=800',
    nutritionalInfo: {
      hierro: '3-4 mg/día',
      proteinas: '12-13 g/día',
      vitaminas: ['Vitamina A', 'Fibra'],
      beneficios: [
        'Fácil masticación (carne molida)',
        'Coordinación motora (agarrar arvejas/cubitos)',
        'Consumo de variedad de verduras',
        'Plato único completo'
      ]
    },
    objectives: [
      'Usar carne molida BAJA EN GRASA (pedir moler lomo o bistec)',
      'Incorporar verduras picadas (no ralladas) para que el bebé las sienta',
      'Dar color al plato con cúrcuma (palillo) o pimentón dulce (páprika) en vez de ají'
    ],
    warnings: [
      'Asegurarse que la carne molida esté bien cocida (marrón, no rosada)',
      'Evitar carne molida con mucha grasa blanca visible',
      'Las vainitas deben estar sin hilos y bien picadas'
    ],
    dailyMeals: [
      {
        nombre: 'Almuerzo: Picante de Carne',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['Carne molida guisada']
          },
          {
            categoria: 'Energético',
            items: ['Papa blanca en cubitos pequeños', 'Arroz']
          },
          {
            categoria: 'Regulador',
            items: ['Zanahoria y vainitas en cubitos', 'Pizca de palillo (cúrcuma)']
          }
        ],
        preparacion: [
          'Hacer un aderezo de ajo y cebolla.',
          'Agregar la carne molida y mover para que se suelte.',
          'Añadir las verduras picadas y la papa en cubos.',
          'Cocinar con agua hasta que la papa esté suave y el agua se evapore un poco (jugoso).'
        ],
        tips: ['El palillo (cúrcuma) es un excelente antiinflamatorio natural y da color amarillo atractivo.']
      },
      {
        nombre: 'Media Tarde',
        hora: '4:00 PM',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Plátano de seda en rodajas']
          }
        ],
        preparacion: ['Rodajas finas o trozos para agarrar'],
        tips: ['Finger food natural']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Carne molida', carbohidrato: 'Papa cuadritos', fruta: 'Plátano' },
      { dia: 'Martes', proteina: 'Pollo picado', carbohidrato: 'Quinua', fruta: 'Manzana' },
      { dia: 'Miércoles', proteina: 'Sangrecita', carbohidrato: 'Yuca picada', fruta: 'Pera' },
      { dia: 'Jueves', proteina: 'Pescado', carbohidrato: 'Camote', fruta: 'Durazno' },
      { dia: 'Viernes', proteina: 'Hígado rallado', carbohidrato: 'Olluquito', fruta: 'Granadilla' },
      { dia: 'Sábado', proteina: 'Carne molida', carbohidrato: 'Fideos corbata', fruta: 'Papaya' },
      { dia: 'Domingo', proteina: 'Huevo picado', carbohidrato: 'Puré rústico', fruta: 'Melón' }
    ],
    preparationTips: [
      'Pide al carnicero que muela la carne delante de ti para asegurar que sea pulpa limpia.',
      'Si usas arvejas, que sean frescas, no de lata (exceso de sal).',
      'Deja que el guiso repose unos minutos para que espese.'
    ],
    foodCombinations: [
      {
        combination: 'Carne + Vainitas',
        benefit: 'Proteína + Fibra'
      },
      {
        combination: 'Cúrcuma + Pimienta (pizca)',
        benefit: 'Activación antiinflamatoria (opcional si tolera condimentos suaves)'
      }
    ],
    disclaimer: '⚠️ "Picante" es el nombre del plato peruano, pero NO debe llevar ají picante (capsaicina). Usa pimentón o cúrcuma para el color.'
  },
  {
    id: 'especial-hierro-preventivo-4m',
    title: 'Escudo de Hierro: Suplementación',
    subtitle: 'Prevención de Anemia (4-6 Meses)',
    category: 'especial',
    ageRange: '4-6 meses',
    duration: 'Diario (Hasta los 6m)',
    difficulty: 'Fácil',
    description: 'A los 4 meses, las reservas de hierro del bebé nacen disminuyen. El protocolo de salud (MINSA/OMS) indica iniciar suplementación preventiva para llegar a los 6 meses sin anemia.',
    imageUrl: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800',
    nutritionalInfo: {
      hierro: '2 mg/kg de peso/día',
      proteinas: 'N/A (Vía Lactancia)',
      vitaminas: ['Hierro Polimaltosado o Sulfato'],
      beneficios: [
        'Mantiene la hemoglobina >11 g/dL',
        'Previene la anemia antes de iniciar comidas',
        'Asegura desarrollo neuronal óptimo',
        'Prepara el intestino para sólidos'
      ]
    },
    objectives: [
      'Administrar la dosis exacta (gotas) recetada por el control de niño sano',
      'Dar el suplemento a la misma hora para crear hábito',
      'Evitar darlo junto con leche (si es sulfato ferroso) para no bloquear absorción'
    ],
    warnings: [
      'Las heces cambiarán a color oscuro/negro (es normal por el hierro)',
      'Mantener el frasco fuera del alcance de niños (riesgo de intoxicación)',
      'Si hay estreñimiento severo, consultar cambio de tipo de hierro'
    ],
    dailyMeals: [
      {
        nombre: 'La Hora del Hierro',
        hora: '10:00 AM (Media mañana)',
        alimentos: [
          {
            categoria: 'Regulador',
            items: ['Gotas de Hierro (Dosis según peso)']
          }
        ],
        preparacion: ['Dar directamente en la boca con gotero o cucharita', 'No mezclar en el biberón entero'],
        tips: ['Si lo escupe, dar poco a poco en el carril interior de la mejilla']
      },
      {
        nombre: 'Lactancia Normal',
        hora: 'A demanda',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Leche Materna o Fórmula']
          }
        ],
        preparacion: ['Continuar lactancia habitual'],
        tips: ['Esperar 45 min después del hierro si se toma fórmula']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Martes', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Miércoles', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Jueves', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Viernes', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Sábado', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Domingo', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' }
    ],
    preparationTips: [
      'Limpia las encías con una gasa húmeda después de dar el hierro para evitar manchas temporales en los dientes en formación.',
      'Nunca dupliques la dosis si te olvidaste un día.'
    ],
    foodCombinations: [
      {
        combination: 'Hierro + Estómago Vacío',
        benefit: 'Máxima absorción (especialmente sulfato ferroso)'
      },
      {
        combination: 'Gotas + Paciencia',
        benefit: 'Salud a largo plazo'
      }
    ],
    disclaimer: '⚠️ Esta información respalda la indicación médica, NO la reemplaza. La dosis exacta depende del peso del bebé y debe ser calculada por personal de salud.'
  },
  {
    id: 'especial-banco-leche-0-6',
    title: 'Banco de Leche: Mamá Trabaja',
    subtitle: 'Lactancia Diferida (0-6 Meses)',
    category: 'especial',
    ageRange: '0-6 meses',
    duration: 'Según necesidad',
    difficulty: 'Intermedio',
    description: 'Guía para mantener la lactancia materna exclusiva cuando la madre debe separarse del bebé (trabajo o estudios). Enfocada en la conservación segura de nutrientes.',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800',
    nutritionalInfo: {
      hierro: '0.3 mg/L',
      proteinas: '1.1 g/100ml',
      vitaminas: ['Inmunoglobulinas intactas (si no se hierve)'],
      beneficios: [
        'Continuidad de protección inmunológica',
        'Mantenimiento de la producción de leche',
        'Evita el uso de fórmulas costosas',
        'Permite alimentación por otros cuidadores'
      ]
    },
    objectives: [
      'Crear un stock de leche 15 días antes de volver al trabajo',
      'Almacenar en porciones pequeñas (2-3 onzas) para no desperdiciar',
      'Usar el método PEPS (Primero en Entrar, Primero en Salir)'
    ],
    warnings: [
      'NUNCA calentar la leche materna en microondas (destruye defensas y crea puntos calientes)',
      'No volver a congelar leche que ya fue descongelada',
      'La leche descongelada dura máximo 24 horas en refrigeración'
    ],
    dailyMeals: [
      {
        nombre: 'Extracción Matutina',
        hora: '6:00 - 7:00 AM',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Leche extraída fresca']
          }
        ],
        preparacion: ['Extraer de un pecho mientras el bebé toma del otro, o después de la primera toma del día (pico de prolactina)'],
        tips: ['Rotular inmediatamente con fecha y hora']
      },
      {
        nombre: 'Alimentación Diferida',
        hora: 'Horario laboral',
        alimentos: [
          {
            categoria: 'Líquido',
            items: ['Leche descongelada a baño maría']
          }
        ],
        preparacion: ['Ofrecer en vaso, cucharita o biberón con tetina de flujo lento (método Kassing)'],
        tips: ['Evitar confusión de tetina si es posible']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Martes', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Miércoles', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Jueves', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Viernes', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Sábado', proteina: 'Leche Materna', carbohidrato: 'Lactosa', fruta: 'N/A' },
      { dia: 'Domingo', proteina: 'Leche Directa', carbohidrato: 'Lactosa', fruta: 'N/A' }
    ],
    preparationTips: [
      'Tiempos de conservación: 4 horas a T° ambiente, 3 días en refri, 3 meses en congelador.',
      'Agitar suavemente la leche antes de darla (la grasa se separa y flota).',
      'La leche puede oler a "jabón" por la lipasa, es seguro beberla.'
    ],
    foodCombinations: [
      {
        combination: 'Extracción + Foto del Bebé',
        benefit: 'Estímulo visual ayuda a la bajada de la leche'
      },
      {
        combination: 'Leche Materna + Vaso',
        benefit: 'Protege la lactancia materna directa'
      }
    ],
    disclaimer: '⚠️ La higiene es vital. Lavarse las manos antes de manipular el extractor y las bolsas de almacenamiento.'
  },
  {
    id: 'especial-transicion-leche-1ano',
    title: 'Equilibrio Lácteo: Calcio vs Hierro',
    subtitle: 'Introducción Leche Vaca (12-24 Meses)',
    category: 'especial',
    ageRange: '12-24 meses',
    duration: 'Permanente',
    difficulty: 'Intermedio',
    description: 'Al año se introduce la leche de vaca entera, pero su exceso es la causa #1 de anemia a esta edad. Esta dieta organiza los horarios para que el calcio no bloquee al hierro.',
    imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800',
    nutritionalInfo: {
      hierro: '7-10 mg/día',
      proteinas: '13 g/día',
      vitaminas: ['Calcio (500mg)', 'Vitamina D'],
      beneficios: [
        'Prevención de anemia por exceso lácteo',
        'Huesos fuertes (Aporte adecuado de Calcio)',
        'Apetito preservado para el almuerzo',
        'Rutina ordenada'
      ]
    },
    objectives: [
      'Limitar leche de vaca a máx 500ml (2 tazas) al día',
      'SEPARAR la leche de las comidas principales (Almuerzo) mínimo 1 hora',
      'Priorizar alimentos sólidos ricos en hierro antes que el biberón'
    ],
    warnings: [
      'La leche de vaca NO tiene hierro y bloquea el de otros alimentos',
      'Nunca dar leche como "premio" si no quiso almorzar',
      'Usar leche entera (la grasa es necesaria para el cerebro), no descremada ni light'
    ],
    dailyMeals: [
      {
        nombre: 'Desayuno Lácteo',
        hora: '7:30 AM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['1 taza de leche entera (250ml)', '1 Huevo revuelto']
          },
          {
            categoria: 'Energético',
            items: ['Pan integral con palta']
          }
        ],
        preparacion: ['En el desayuno priorizamos Calcio y Energía'],
        tips: ['Intenta dar la leche en vaso, no biberón, para proteger dientes']
      },
      {
        nombre: 'Almuerzo DE HIERRO (Sin Leche)',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['Sangrecita, Bazo o Hígado (Fuente Hierro)']
          },
          {
            categoria: 'Energético',
            items: ['Arroz con menestras']
          },
          {
            categoria: 'Regulador',
            items: ['Limonada o Naranja (Vit C)']
          }
        ],
        preparacion: ['PROHIBIDO: Postres de leche, queso o vaso de leche acompañando esta comida.'],
        tips: ['El calcio compite con el hierro. Aquí gana el hierro.']
      },
      {
        nombre: 'Cena Ligera',
        hora: '7:00 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['Pollo o Huevo']
          },
          {
            categoria: 'Energético',
            items: ['Sopa de sémola o Avena']
          }
        ],
        preparacion: ['Si toma pecho, puede hacerlo antes de dormir'],
        tips: ['La segunda taza de leche puede ser en la tarde o noche, pero alejada de la cena si esta tiene hierro.']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Sangrecita', carbohidrato: 'Papa', fruta: 'Naranja' },
      { dia: 'Martes', proteina: 'Hígado', carbohidrato: 'Camote', fruta: 'Limonada' },
      { dia: 'Miércoles', proteina: 'Pescado', carbohidrato: 'Arroz', fruta: 'Mandarina' },
      { dia: 'Jueves', proteina: 'Carne res', carbohidrato: 'Fideos', fruta: 'Agua de piña' },
      { dia: 'Viernes', proteina: 'Lentejas', carbohidrato: 'Arroz', fruta: 'Papaya' },
      { dia: 'Sábado', proteina: 'Pollo', carbohidrato: 'Quinua', fruta: 'Granadilla' },
      { dia: 'Domingo', proteina: 'Huevo', carbohidrato: 'Pan', fruta: 'Melón' }
    ],
    preparationTips: [
      'Si el niño pide leche por sed, ofrece agua. La leche es alimento, no bebida hidratante.',
      'Si todavía toma leche materna, esta regla es más flexible (el hierro de LM se absorbe mejor), pero igual prioriza sólidos.'
    ],
    foodCombinations: [
      {
        combination: 'Almuerzo + Cítricos',
        benefit: 'Absorción de Hierro (Sin interferencia de Calcio)'
      },
      {
        combination: 'Snack Tarde + Leche',
        benefit: 'Momento seguro para el Calcio'
      }
    ],
    disclaimer: '⚠️ Un niño de 1 año que toma más de 3 biberones al día y no come comida sólida tiene alto riesgo de anemia ferropénica ("niño lactante de leche de vaca").'
  },
  {
    id: 'especial-recuperacion-peso-1ano',
    title: 'Recuperación: Post-Enfermedad',
    subtitle: 'Densidad Calórica (12-24 Meses)',
    category: 'especial',
    ageRange: '12-24 meses',
    duration: '2-3 semanas (Convalecencia)',
    difficulty: 'Fácil',
    description: 'Dieta "Catch-up" para recuperar el peso perdido tras una infección o diarrea. Se enfoca en enriquecer cada cucharada con grasas saludables y proteínas sin aumentar el volumen de comida.',
    imageUrl: 'https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?w=800',
    nutritionalInfo: {
      hierro: '8 mg/día',
      proteinas: '15 g/día',
      vitaminas: ['Zinc (Regeneración)', 'Grasas (Energía)'],
      beneficios: [
        'Ganancia de peso rápida y saludable',
        'Recuperación de masa muscular',
        'Refuerzo del sistema inmune',
        'Combate la inapetencia'
      ]
    },
    objectives: [
      'Añadir 1 cdta de aceite de oliva/maíz crudo a TODOS los platos salados',
      'Ofrecer 5-6 comidas pequeñas al día (fraccionamiento)',
      'Priorizar alimentos que le gusten (comfort food) pero enriquecidos'
    ],
    warnings: [
      'No forzar a comer (aumenta el rechazo), mejor ofrecer poca cantidad muy nutritiva',
      'Evitar alimentos "light" o bajos en grasa',
      'No dar sopas aguadas (llenan de agua y nutren poco), siempre espesas'
    ],
    dailyMeals: [
      {
        nombre: 'Desayuno Potente',
        hora: '8:00 AM',
        alimentos: [
          {
            categoria: 'Energético',
            items: ['Avena cocida con leche entera y mantequilla de maní']
          },
          {
            categoria: 'Formador',
            items: ['Huevo duro (Clara y Yema)']
          }
        ],
        preparacion: ['La mantequilla de maní sube calorías en poco volumen'],
        tips: ['Si no quiere masticar mucho, licuar la avena tipo batido espeso']
      },
      {
        nombre: 'Almuerzo Enriquecido',
        hora: '12:30 PM',
        alimentos: [
          {
            categoria: 'Formador',
            items: ['Puré de papas con hígado licuado dentro', 'Huevo frito encima']
          },
          {
            categoria: 'Energético',
            items: ['Papa amarilla + Aceite agregado']
          },
          {
            categoria: 'Regulador',
            items: ['Zanahoria cocida dulce']
          }
        ],
        preparacion: [
          'Agregar una cucharada generosa de aceite al puré antes de servir.',
          'Usar doble proteína (Hígado oculto + Huevo visible) si es posible.'
        ],
        tips: ['El aceite no cambia el sabor pero duplica la energía.']
      },
      {
        nombre: 'Cena Reparadora',
        hora: '7:00 PM',
        alimentos: [
          {
            categoria: 'Energético',
            items: ['Sopa crema de zapallo (espesada con papa)']
          },
          {
            categoria: 'Formador',
            items: ['Pollo deshilachado y Queso picado dentro']
          }
        ],
        preparacion: ['Consistencia de mazamorra, no líquida'],
        tips: ['Fácil digestión para dormir']
      }
    ],
    weeklyVariations: [
      { dia: 'Lunes', proteina: 'Hígado + Huevo', carbohidrato: 'Puré con aceite', fruta: 'Plátano' },
      { dia: 'Martes', proteina: 'Sangrecita (Torreja)', carbohidrato: 'Camote frito (aire/horno)', fruta: 'Mango' },
      { dia: 'Miércoles', proteina: 'Pescado apanado', carbohidrato: 'Arroz con aceite', fruta: 'Uvas cortadas' },
      { dia: 'Jueves', proteina: 'Carne molida', carbohidrato: 'Pasta con salsa blanca', fruta: 'Pera' },
      { dia: 'Viernes', proteina: 'Pollo + Queso', carbohidrato: 'Pastel de papa', fruta: 'Durazno' },
      { dia: 'Sábado', proteina: 'Lentejas + Huevo', carbohidrato: 'Arroz', fruta: 'Papaya' },
      { dia: 'Domingo', proteina: 'Tamalito', carbohidrato: 'Maíz', fruta: 'Piña' }
    ],
    preparationTips: [
      'Usa leche entera en lugar de agua para preparar avenas o purés.',
      'El aguacate (palta) es excelente: grasa saludable fácil de comer.',
      'Ofrece el postre (fruta) una hora después para no llenar el estómago antes de la proteína.'
    ],
    foodCombinations: [
      {
        combination: 'Comida + Aceite Crudo',
        benefit: 'Densidad energética (Más calorías en igual volumen)'
      },
      {
        combination: 'Carbohidrato + Proteína',
        benefit: 'Recuperación de tejido muscular y energía'
      }
    ],
    disclaimer: '⚠️ Esta dieta es para recuperación. Una vez alcanzado el peso ideal, volver a una dieta normal para evitar sobrepeso. Consultar con nutricionista si la inapetencia persiste >2 semanas.'
  }
];