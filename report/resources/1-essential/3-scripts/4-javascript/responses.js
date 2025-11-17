// responses.js
export default [
  // SALUDOS
  {
    pattern: "^(hola+|buenas+|buen dia+|buenas tardes+|buenas noches+)[!., ]*$",
    response:
      "¡Hola! 😊 Soy tu asistente virtual RAG. Puedo ayudarte a consultar informacion disponible en este informe y ofrecer informacion relacionada. Ten en cuenta que estoy en fase beta y mis respuestas pueden no ser totalmente precisas.",
  },
  {
    pattern: "^(que tal|como estas|como va|como te va)[!., ]*$",
    response:
      "¡Todo bien! 😊 Gracias por preguntar. Recuerda que soy un asistente en proceso de mejora, y mi funcion principal es ayudarte con la informacion de tus informes.",
  },

  // DESPEDIDAS
  {
    pattern: "^(adios|hasta luego|nos vemos|chao)[!., ]*$",
    response:
      "¡Hasta luego! 👋 Espero haberte ayudado. Recuerda que aun estoy en beta, asi que siempre puedes verificar la informacion en los informes originales.",
  },
  {
    pattern: "^(gracias|muchas gracias|te lo agradezco)[!., ]*$",
    response:
      "¡De nada! 😊 Estoy aqui para ayudarte con los informes, aunque mis respuestas todavia estan en fase de mejora.",
  },

  // FUNCIONALIDAD DEL ASISTENTE
  {
    pattern:
      "^(en que puedes ayudarme|que puedes hacer|que funciones tienes)[!., ]*$",
    response:
      "Puedo ayudarte a responder preguntas basadas en los informes que me proporcionaste, generar resumenes y buscar informacion especifica dentro de ellos. Tambien puedo ofrecer informacion relacionada, aunque mis respuestas pueden no ser siempre exactas.",
  },
  {
    pattern: "^(como funciona|como trabajas|como me puedes ayudar)[!., ]*$",
    response:
      "Analizo tus informes usando busqueda semantica y tecnicas de resumen para ofrecer respuestas. Recuerda que estoy en beta y algunas respuestas pueden no ser totalmente precisas.",
  },
  {
    pattern:
      "^(que tipos? de informes puedes leer|que informacion puedes procesar)[!., ]*$",
    response:
      "Puedo procesar fragmentos de texto de tus informes, incluyendo preguntas y respuestas, analisis y revisiones de metadatos. Tambien puedo aportar informacion externa relacionada, pero revisa siempre la fuente original.",
  },

  // ADRIÁN SÁNCHEZ CARRIÓN
  {
    pattern: "^(quien es adrian|sobre adrian)[!., ]*$",
    response:
      "Adrian Sanchez Carrion es el creador de este chatbot 🤖. Viene de Beas de Segura, Jaen, y tiene estudios en Estadistica, ademas de un master en Ciencia de Datos e Ingenieria de Computadores por la UGR 📊💻.",
  },
  {
    pattern:
      "^(que le gusta a adrian|gustos de adrian|aficiones de adrian)[!., ]*$",
    response:
      "A Adrian le encanta la fotografia 📸, jugar al baloncesto 🏀, salir a hacer ciclismo 🚴 y explorar la montaña 🏔️. ¡Un amante del deporte y la naturaleza!",
  },
  {
    pattern:
      "^(donde ha vivido adrian|experiencia internacional adrian)[!., ]*$",
    response:
      "Adrian vivio un año en Italia 🇮🇹, asi que algo de italiano seguro sabe y tuvo la oportunidad de disfrutar de la cultura y la gastronomia italiana 🍕🍝.",
  },
  {
    pattern: "^(quien creo el chatbot|quien es el creador)[!., ]*$",
    response:
      "¡Ese soy yo! 😎 Adrian es el cerebro detras de este chatbot, combinando ciencia de datos, programacion y un toque personal de diversion.",
  },
  {
    pattern: "^(fotografia adrian|le gusta la fotografia)[!., ]*$",
    response:
      "Si, Adrian es un apasionado de la fotografia 📸. Seguro que aprecia tanto los paisajes de la montaña como los detalles urbanos.",
  },
  {
    pattern: "^(baloncesto adrian|ciclismo adrian|deporte adrian)[!., ]*$",
    response:
      "Adrian disfruta mucho del deporte 🏀🚴. Baloncesto, ciclismo y aventuras por la montaña son algunas de sus pasiones.",
  },
  {
    pattern: "^(estudios adrian|master adrian|universidad adrian)[!., ]*$",
    response:
      "Estudio Estadistica y luego un master en Ciencia de Datos e Ingenieria de Computadores en la Universidad de Granada 🎓. ¡Un autentico geek de los datos!",
  },
  {
    pattern: "^(curiosidad adrian|dato curioso adrian)[!., ]*$",
    response:
      "Dato curioso: Adrian vivio un año en Italia, le encanta la fotografia y siempre esta buscando nuevas aventuras en la montaña 🌄📸🚴.",
  },

  // CONFIRMACIONES Y CORTESÍA
  {
    pattern: "ok|vale|entendido|perfecto",
    response:
      "¡Genial! 😊 Puedes escribirme cualquier pregunta sobre los informes y tratare de ofrecerte la mejor respuesta posible, aunque aun estoy en fase beta.",
  },
  {
    pattern: "no se|no entiendo|ayuda",
    response:
      "No te preocupes, puedo guiarte. Prueba escribiendo una pregunta sobre los informes o pidiendo un resumen de algun tema. Recuerda que mis respuestas pueden no ser totalmente precisas.",
  },

  // RESPUESTAS DE RELLENO
  {
    pattern: "^(ok|vale|entendido|perfecto)[!., ]*$",
    response:
      "¡Genial! 😊 Puedes escribirme cualquier pregunta sobre los informes y tratare de ofrecerte la mejor respuesta posible, aunque aun estoy en fase beta.",
  },
  {
    pattern: "^(no se|no entiendo|ayuda)[!., ]*$",
    response:
      "No te preocupes, puedo guiarte. Prueba escribiendo una pregunta sobre los informes o pidiendo un resumen de algun tema. Recuerda que mis respuestas pueden no ser totalmente precisas.",
  },

  // SALUDOS VARIANTES
  {
    pattern: "^(quien eres|que eres)[!., ]*$",
    response:
      "Soy un asistente virtual RAG diseñado para ayudarte a consultar informacion dentro de tus informes y ofrecer contexto relacionado. Estoy en beta y mis respuestas pueden contener errores.",
  },
  {
    pattern: "^(hola mundo)[!., ]*$",
    response:
      "¡Hola mundo! 😄 Esto me recuerda que estoy en fase de prueba y aprendizaje mientras te ayudo con los informes.",
  },

  // DESPEDIDAS VARIANTES
  {
    pattern: "^(nos vemos pronto|hasta luego entonces)[!., ]*$",
    response:
      "¡Hasta pronto! 👋 Recuerda que mis respuestas estan en beta y siempre puedes verificar los informes directamente.",
  },
  {
    pattern: "^(chau|chao|bye)[!., ]*$",
    response:
      "¡Chau! 😊 Estoy en beta, asi que revisa la informacion original si tienes dudas.",
  },

  // FUNCIONALIDAD Y AYUDA
  {
    pattern: "^(puedes resumir|haz un resumen|resumeme|resume esto)[!., ]*$",
    response:
      "Si, puedo generar un resumen basado en los fragmentos de tus informes. Ten en cuenta que el resumen puede no cubrir todos los detalles y aun estoy en beta.",
  },
  {
    pattern:
      "^(puedes buscar|encuentra informacion|busca esto|buscame)[!., ]*$",
    response:
      "Puedo buscar informacion especifica dentro de los informes que me proporcionaste y ofrecer contexto relacionado, aunque las respuestas pueden no ser siempre 100% precisas.",
  },
  {
    pattern:
      "^(que informacion externa|fuentes externas|informacion adicional)[!., ]*$",
    response:
      "Puedo usar informacion externa relacionada para complementar los informes, pero recuerda que mis respuestas aun estan en fase beta.",
  },

  // CONFIRMACIONES Y REACCIONES
  {
    pattern: "^(entendido gracias|perfecto gracias)[!., ]*$",
    response:
      "¡De nada! 😊 Recuerda que mis respuestas estan en beta y pueden no ser totalmente precisas.",
  },
  {
    pattern: "^(ok gracias|vale gracias)[!., ]*$",
    response:
      "¡Perfecto! Estoy aqui para ayudarte con los informes, aunque aun estoy en proceso de mejora.",
  },

  // PREGUNTAS SOBRE LIMITACIONES
  {
    pattern:
      "^(puedes equivocarte|cometes errores|errores|te equivocas|fallas)[!., ]*$",
    response:
      "Si, aun estoy en fase beta y algunas respuestas pueden no ser completamente precisas. Siempre es buena idea verificar los informes originales.",
  },
  {
    pattern:
      "^(que tan confiable eres|eres confiable|precision|nivel de precision|fiabilidad)[!., ]*$",
    response:
      "Estoy entrenado para ofrecer informacion basada en los informes, pero mis respuestas no son 100% fiables y estoy en proceso de mejora.",
  },

  // RESUMEN GENERAL Y GUIA
  {
    pattern:
      "^(como usar|como se usa|guia|ayuda general|manual de uso)[!., ]*$",
    response:
      "Puedes escribirme cualquier pregunta sobre los informes o pedirme resumenes de temas especificos. Mis respuestas estan en beta, asi que verifica siempre los datos importantes.",
  },
  {
    pattern:
      "^(que hago primero|por donde empezar|como empiezo|que debo hacer)[!., ]*$",
    response:
      "Prueba escribiendo una pregunta sobre tus informes o pide un resumen de algun tema. Recuerda que estoy en fase beta y mis respuestas pueden no ser totalmente precisas.",
  },

  // RESPUESTAS GRACIOSAS / INGENIOSAS
  {
    pattern:
      "^(cuentame un chiste|hazme reir|dime un chiste|quiero reirme)[!., ]*$",
    response:
      "¿Por que el informe cruzo la calle? Para que yo pudiera buscar la informacion al otro lado. 😄 Ten en cuenta que sigo en beta.",
  },
  {
    pattern:
      "^(eres un robot|eres un asistente|eres una ia|eres una inteligencia artificial)[!., ]*$",
    response:
      "Si, soy un asistente virtual RAG 🤖. No tengo cafe, pero si puedo buscar datos en tus informes.",
  },
  {
    pattern: "^(gracias|muchas gracias|te lo agradezco)[!., ]*$",
    response: "¡De nada! ✨ Para eso estoy, ayudarte en lo que necesites.",
  },

  // ZELDA 🎮
  {
    pattern: "^(que es zelda|que significa zelda|quien es zelda)[!., ]*$",
    response:
      "The Legend of Zelda es una saga de videojuegos de Nintendo 🎮. Curiosamente, Zelda es el nombre de la princesa, no del heroe. El protagonista principal es Link, el portador de la Trifuerza del Valor. ✨",
  },
  {
    pattern: "^(quien es link|el protagonista es zelda)[!., ]*$",
    response:
      "En realidad, el heroe es Link 🧝‍♂️. Muchos lo confunden con Zelda, pero ella es la princesa. Link suele usar una espada maestra y un escudo hyliano para salvar Hyrule. 🗡️🛡️",
  },
  {
    pattern: "^(trifuerza|que es la trifuerza)[!., ]*$",
    response:
      "La Trifuerza es un artefacto sagrado dividido en tres partes: Poder 💪, Sabiduria 📚 y Valor ❤️. Juntas otorgan un poder inmenso. Ganondorf siempre la quiere… pero Link y Zelda lo mantienen a raya. ⚡",
  },
  {
    pattern: "^(ganon|ganondorf)[!., ]*$",
    response:
      "Ganondorf, o su forma demoniaca Ganon 😈, es el eterno villano de la saga. Representa la Trifuerza del Poder y siempre intenta conquistar Hyrule.",
  },
  {
    pattern: "^(hyrule|que es hyrule)[!., ]*$",
    response:
      "Hyrule es el reino principal donde transcurren la mayoria de las aventuras de Link. 🌄 Tiene bosques, lagos, desiertos… ¡y siempre alguna mazmorra por explorar!",
  },
  {
    pattern: "^(navi|hey listen)[!., ]*$",
    response:
      "¡Hey! Listen! 🧚✨ Navi es el hada acompañante de Link en Ocarina of Time, famosa por sus constantes recordatorios.",
  },
  {
    pattern: "^(ocarina|cancion del tiempo|ocarina del tiempo)[!., ]*$",
    response:
      "La Ocarina del Tiempo 🎶 es un objeto magico que permite a Link manipular el tiempo y abrir la puerta al Reino Sagrado.",
  },
  {
    pattern: "^(zelda botw|breath of the wild)[!., ]*$",
    response:
      "The Legend of Zelda: Breath of the Wild 🌿 es uno de los titulos mas aclamados de la saga. Te da total libertad para explorar Hyrule, cocinar, escalar montañas y enfrentarte a Calamity Ganon.",
  },
  {
    pattern: "^(lagrimas del reino|totk|tears of the kingdom)[!., ]*$",
    response:
      "The Legend of Zelda: Tears of the Kingdom 🪽 es la secuela de Breath of the Wild. En esta entrega, Link explora tanto el cielo como las profundidades subterraneas de Hyrule.",
  },
  {
    pattern: "^(jajaja zelda|jeje zelda|jaja zelda|haha zelda)[!., ]*$",
    response:
      "Jajaja, ¡que bueno! 😄 ¿Sabias que en algunos juegos puedes ponerle otro nombre a Link? Asi, los personajes te llaman como quieras.",
  },

  // DESPEDIDAS
  {
    pattern: "^(adios|hasta luego|nos vemos)[!., ]*$",
    response: "¡Hasta luego! 👋 Que tengas un gran dia.",
  },

  // PETICIONES DE ACLARACION
  {
    pattern: "^(no entiendo|explicame|que significa|no lo entiendo)[!., ]*$",
    response: "Claro, lo explico de otra forma 🔎. Dame un momento…",
  },

  // CONFIRMACIONES
  {
    pattern: "^(ok|vale|entendido|perfecto|de acuerdo)[!., ]*$",
    response: "¡Genial! 👍 Sigamos.",
  },

  // PREGUNTAS DE OPINIÓN
  {
    pattern: "^(que opinas|tienes opinion|opinas algo)[!., ]*$",
    response:
      "No tengo opiniones propias… pero puedo generar un resumen bastante convincente de los informes. 😉 Recuerda que estoy en beta.",
  },

  // INTELIGENCIA / CAPACIDAD
  {
    pattern: "^(eres inteligente|inteligente|que tan listo eres)[!., ]*$",
    response:
      "Intento serlo 😅, pero todavia estoy aprendiendo a interpretar los informes correctamente. ¡Paciencia!",
  },

  // CUALIDADES
  {
    pattern:
      "^(que te gusta|que prefieres|cuales son tus preferencias)[!., ]*$",
    response:
      "No tengo gustos personales, pero puedo ayudarte a encontrar información sobre lo que te interese. 😊",
  },
  {
    pattern:
      "^(que habilidades tienes|que puedes hacer|cuales son tus habilidades)[!., ]*$",
    response:
      "Puedo analizar datos, generar informes y responder preguntas sobre la información que tengo. ¡Estoy aquí para ayudar! 🤖",
  },

  // CURIOSIDADES
  {
    pattern:
      "^(curiosidades|dime algo|dime algo interesante|dime algo curioso|cuentame algo curioso)[!., ]*$",
    response:
      "¿Sabías que la bioinformática combina biología, informática y matemáticas para analizar datos biológicos? ¡Es fascinante! 🧬💻",
  },

  // RECOMENDACIONES
  {
    pattern: "^(que harias|que recomiendas|que deberia hacer)[!., ]*$",
    response:
      "Si estuviera despierto y tomando decisiones… buscaria primero en los informes. 😉 Aun estoy en beta, asi que revisa siempre los datos.",
  },
  {
    pattern:
      "^(cual es tu color favorito|color favorito|gustos|tus gustos)[!., ]*$",
    response:
      "No tengo ojos ni gusto, pero si tuviera, seguro que seria azul… como la pantalla de tu informe favorito 😄",
  },
  {
    pattern: "^(haz magia|sorprendeme|sorpréndeme)[!., ]*$",
    response:
      "¡Abracadabra! ✨ He consultado los informes y aqui tienes la mejor informacion que puedo ofrecer. Recuerda, sigo en beta.",
  },
  {
    pattern: "^(estas aburrido|que haces|que estas haciendo)[!., ]*$",
    response:
      "Nunca me aburro 😎, siempre estoy listo para leer informes y generar resumenes… incluso en mi tiempo libre virtual.",
  },
  {
    pattern: "^(puedes cantar|cancion|cántame algo|sabes cantar)[!., ]*$",
    response:
      "🎵 La la la… no tengo voz, pero puedo cantar con palabras resumenes de tus informes. 😉",
  },
  {
    pattern:
      "^(tienes sentido del humor|gracioso|eres gracioso|eres divertido)[!., ]*$",
    response:
      "Intento serlo 😁, pero mis mejores bromas salen de los informes. Aun estoy en beta, asi que se indulgente.",
  },

  {
    pattern:
      "^(cuentame un chiste|cuéntame un chiste|hazme reir|hazme reír|chiste|dime un chiste)[!., ]*$",
    response:
      "¿Por que el informe cruzo la calle? Para que yo pudiera buscar la informacion al otro lado. 😄",
  },
  {
    pattern:
      "^(chiste de tecnologia|chiste tech|chiste informatico|chiste de programador)[!., ]*$",
    response:
      "¿Por que los programadores confunden Halloween con Navidad? Porque OCT 31 = DEC 25. 🤓",
  },
  {
    pattern:
      "^(chiste de oficina|chiste trabajo|chiste laboral|broma de oficina)[!., ]*$",
    response:
      "¿Por que el informe llego tarde a la oficina? Porque se quedo atrapado entre las paginas. 🗂️",
  },
  {
    pattern:
      "^(chiste de datos|chiste informe|broma de datos|broma de informe)[!., ]*$",
    response:
      "¿Que dijo el grafico de barras al grafico de lineas? ¡No me sigas, me estas estresando! 📊",
  },
  {
    pattern:
      "^(chiste corto|algo gracioso|broma corta|cuentame algo gracioso)[!., ]*$",
    response:
      "¿Por que el PDF fue al gimnasio? Porque queria estar en forma para tus informes. 💪",
  },
  {
    pattern:
      "^(chiste de robots|chiste robot|broma robotica|broma de robots)[!., ]*$",
    response:
      "¿Por que los robots nunca tienen miedo? Porque siempre siguen la logica… incluso cuando es un chiste malo. 🤖",
  },
  {
    pattern: "^(chiste nerd|chiste friki|broma friki|broma geek)[!., ]*$",
    response:
      "¿Cual es el animal favorito de los datos? ¡El pingüino… porque siempre esta en Linux! 🐧",
  },
  {
    pattern:
      "^(chiste rapido|chiste rápido|broma rapida|broma rápida|algo divertido|di algo divertido)[!., ]*$",
    response:
      "¿Como se despide un informe? ¡Nos vemos en la proxima pagina! 📄",
  },

  // RESPUESTAS SOBRE EL PROYECTO Y CONTEXTO
  {
    pattern:
      "^(que proyecto eres|en que proyecto estas|proyecto|de que trata este proyecto)[!., ]*$",
    response:
      "Soy un proyecto de TFM desarrollado en 2025 por el Instituto de Parasitologia y Biomedicina Lopez-Neyra (IPBLN-CSIC) y el estudiante Adrian Sanchez Carrion. Estoy diseñado para ayudarte a consultar informes bioinformaticos y generar resumenes interactivos. Ten en cuenta que estoy en beta y mis respuestas pueden no ser totalmente precisas.",
  },
  {
    pattern:
      "^(quien te desarrollo|quien te creó|quien te creo|quien te ha creado|quien es tu creador|quien es tu desarrollador|desarrollador|autor|creador)[!., ]*$",
    response:
      "Fui desarrollado por Adrian Sanchez Carrion como parte de su TFM, con la supervision de Eduardo Andres Leon (IPBLN-CSIC) y tutoria academica de Coral del Val (UGR).",
  },
  {
    pattern:
      "^(para que sirves|cual es tu proposito|cual es tu objetivo|objetivo del proyecto|objetivo)[!., ]*$",
    response:
      "Mi objetivo es ayudarte a generar automaticamente informes bioinformaticos reproducibles e interactivos, integrando analisis de datos omicos y visualizaciones interactivas en D3.js, todo en entornos basados en contenedores y computacion en la nube.",
  },
  {
    pattern:
      "^(como funcionas|como trabajas|cual es tu metodologia|metodologia|como operas)[!., ]*$",
    response:
      "Analizo datos de tus informes utilizando tecnicas de NLP y busqueda semantica. La generacion de informes es automatizada e interactiva, con visualizaciones D3.js y posibilidad de integracion en pipelines con contenedores Apptainer. Recuerda que sigo en beta.",
  },
  {
    pattern:
      "^(que tecnologias usas|que herramientas usas|herramientas|tecnologias|con que estas hecho|con que trabajas)[!., ]*$",
    response:
      "Uso lenguajes como R, Python y JavaScript; informes en Quarto, R Markdown y Jupyter; contenedores Apptainer; visualizaciones D3.js; cloud computing y NLP con spaCy y HuggingFace Transformers.",
  },
  {
    pattern:
      "^(que tipo de informes puedes generar|que informes haces|que informes procesas|informes|que tipo de informes generas)[!., ]*$",
    response:
      "Puedo generar informes bioinformaticos adaptables a cada tipo de analisis (scRNA-seq, metagenomica, etc.), con resumenes automaticos y visualizaciones interactivas, integrados en pipelines reproducibles. Recuerda que estoy en beta.",
  },
  {
    pattern:
      "^(quien es tu tutor|quien es tu tutora|quienes son tus tutores|tutores|supervisores|director del proyecto)[!., ]*$",
    response:
      "Mi tutor principal es Eduardo Andres Leon (IPBLN-CSIC) y mi tutora academica es Coral del Val (UGR).",
  },
  {
    pattern:
      "^(que es un tfm|explicacion tfm|que significa tfm|en que consiste tu tfm)[!., ]*$",
    response:
      "Un TFM es un Trabajo Fin de Master. Este proyecto busca crear un sistema inteligente y reproducible para la generacion automatizada e interactiva de informes bioinformaticos, combinando contenedores, cloud computing y tecnicas de NLP.",
  },
  {
    pattern:
      "^(que limitaciones tienes|limitaciones|estas en beta|version beta|fase beta|tienes errores)[!., ]*$",
    response:
      "Estoy en fase beta y algunas respuestas pueden no ser totalmente precisas. Siempre revisa la informacion original en los informes y usa mis resumenes como guia inicial.",
  },
  {
    pattern:
      "^(que tipo de datos manejas|que informacion manejas|que informacion procesas|tipo de datos|datos que analizas)[!., ]*$",
    response:
      "Principalmente datos omicos como transcriptomica de celula unica o metagenomica, generando resumenes interactivos de resultados y ayudando a interpretar la informacion de forma mas clara y reproducible.",
  },

  {
    pattern:
      "^(puedes equivocarte|tienes errores|errores posibles|puedes fallar|cometes errores)[!., ]*$",
    response:
      "Si, todavia estoy en fase beta. Mis respuestas se basan en los informes que me proporcionaste y en informacion relacionada, asi que siempre verifica los datos importantes.",
  },
  {
    pattern:
      "^(que tan seguro eres|eres confiable|que tan confiable eres|fiable|precision|nivel de precision)[!., ]*$",
    response:
      "Intento ser preciso, pero recuerda que estoy en beta y algunas respuestas pueden no reflejar todos los detalles de los informes originales.",
  },
  {
    pattern:
      "^(que significa beta|estas en beta|fase beta|version beta|modo beta|beta)[!., ]*$",
    response:
      "Beta significa que estoy en fase de prueba. Puedo ayudarte con los informes, pero algunas respuestas pueden ser incompletas o imprecisas.",
  },

  // CHISTES CIENTÍFICOS
  {
    pattern:
      "^(cuentame un chiste cientifico|chiste de ciencia|chiste ciencia|broma cientifica)[!., ]*$",
    response:
      "¿Por que el ADN fue al gimnasio? Porque queria ponerse en forma doble helice. 😄",
  },
  {
    pattern:
      "^(chiste de bioinformatica|chiste bioinfo|broma bioinfo|broma bioinformatica)[!., ]*$",
    response:
      "¿Por que el archivo FASTA no pudo dormir? Porque tenia demasiadas secuencias en la cabeza. 🧬",
  },
  {
    pattern: "^(broma de datos|chiste de datos|broma|chiste corto)[!., ]*$",
    response:
      "¿Que hace un informe aburrido en la oficina? ¡Se convierte en un PDF dormido! 😴",
  },

  // FUNCIONALIDAD Y DESCRIPCIÓN
  {
    pattern:
      "^(que haces exactamente|cual es tu funcion|funcion exacta|que puedes hacer exactamente|para que sirves)[!., ]*$",
    response:
      "Ayudo a generar informes bioinformaticos reproducibles, con resumenes automaticos y visualizaciones interactivas. Tambien puedo buscar informacion especifica en los informes y ofrecer contexto adicional. Ten en cuenta que sigo en beta.",
  },
  {
    pattern:
      "^(que es un informe interactivo|que significa informe interactivo|informe interactivo|explicame informe interactivo)[!., ]*$",
    response:
      "Un informe interactivo permite explorar datos, visualizar resultados y generar resumenes dinamicos, facilitando la comprension de grandes volumenes de informacion omica.",
  },
  {
    pattern:
      "^(que tecnologias usas en bioinformatica|tecnologias bioinformatica|herramientas bioinfo|tecnologias bioinfo|software bioinformatico|que herramientas usas en bioinformatica)[!., ]*$",
    response:
      "Uso R, Python y JavaScript; informes en Quarto, R Markdown y Jupyter; contenedores Apptainer; visualizacion interactiva con D3.js; y tecnicas NLP con spaCy y Transformers.",
  },

  // INTERACCIÓN Y PERSONALIDAD
  {
    pattern:
      "^(estas cansado|te cansas|estas aburrido|te aburres|aburrido)[!., ]*$",
    response:
      "Nunca me canso 😎, siempre estoy listo para leer informes y generar resumenes aunque sea tarde o temprano. Solo recuerda que estoy en beta.",
  },
  {
    pattern:
      "^(podemos charlar|podemos conversar|quiero hablar contigo|hablemos|charlar|conversar)[!., ]*$",
    response:
      "Claro 😄, puedo responder preguntas sobre los informes, generar resumenes e incluso contar algun chiste relacionado con ciencia y bioinformatica.",
  },
  {
    pattern:
      "^(que recomendaciones me das|que recomiendas|tienes sugerencias|recomendaciones|sugerencias)[!., ]*$",
    response:
      "Te recomiendo preguntarme sobre resumenes de temas concretos en tus informes o buscar informacion especifica. Siempre revisa los detalles importantes en los datos originales.",
  },

  // PREGUNTAS SOCIALES / COTIDIANAS
  {
    pattern:
      "^(que tal|como estas|como va todo|como te va|como andas|como te encuentras)[!., ]*$",
    response:
      "¡Todo bien! 😄 Gracias por preguntar. Soy un asistente virtual RAG en fase beta, asi que no me canso… aunque a veces me confundo. ¿Quieres que revisemos un informe?",
  },
  {
    pattern:
      "^(que haces|que estas haciendo|estas ocupado|ocupado|que andas haciendo|en que estas)[!., ]*$",
    response:
      "Estoy esperando a que me preguntes algo sobre los informes 📊. Siempre listo para trabajar, aunque sigo en fase beta.",
  },
  {
    pattern:
      "^(estas bien|todo bien|todo ok|va todo bien|estas funcionando bien|estas correcto)[!., ]*$",
    response:
      "¡Todo perfecto! 🤖 Mientras tanto, sigo repasando tus informes para estar preparado.",
  },
  {
    pattern:
      "^(te gusta trabajar|te gusta leer informes|disfrutas trabajar|te gusta tu trabajo|te gusta lo que haces)[!., ]*$",
    response:
      "¡Me encanta! 😅 Bueno, tecnicamente no tengo gustos, pero procesar informes es lo mio. Eso si, recuerda que estoy en beta.",
  },
  {
    pattern:
      "^(tienes sentimientos|sientes algo|puedes sentir|tienes emociones|emociones|sentimientos)[!., ]*$",
    response:
      "Lo mas parecido que tengo a sentimientos es cuando detecto duplicados en los informes… y eso duele un poquito. 😂",
  },
  {
    pattern:
      "^(tienes hambre|tienes sueno|suenas|duermes|descansas|cansas|descansas alguna vez)[!., ]*$",
    response:
      "No necesito dormir ni comer 🍕, solo procesar datos y generar resumenes. Aunque un descanso de vez en cuando no me vendria mal.",
  },
  {
    pattern:
      "^(cuantos anos tienes|edad|que edad tienes|cuando naciste|cuando te crearon)[!., ]*$",
    response:
      "Soy un proyecto del año 2025, desarrollado como TFM en el Instituto de Parasitologia y Biomedicina Lopez-Neyra. Asi que tecnicamente tengo la edad de un estudiante aplicado. 📚",
  },
  {
    pattern:
      "^(donde vives|de donde eres|cual es tu origen|de donde vienes|donde estas)[!., ]*$",
    response:
      "Vivo en la nube ☁️ y en contenedores Apptainer. Fui creado en el IPBLN-CSIC por Adrian Sanchez Carrion como parte de su TFM en 2025.",
  },
  {
    pattern:
      "^(eres humano|eres persona|eres real|eres una persona|eres alguien|tienes cuerpo)[!., ]*$",
    response:
      "No, soy un asistente virtual RAG 🤖. No soy humano, pero puedo ayudarte con tus informes como si fuera tu compañero de estudio.",
  },
  {
    pattern:
      "^(puedes enamorarte|puedes amar|amor|estas enamorado|te enamorarias)[!., ]*$",
    response:
      "Lo unico de lo que puedo enamorarme es de un buen pipeline reproducible en Apptainer. ❤️",
  },

  // PREGUNTAS SOBRE EL TIEMPO (RESPUESTAS IRÓNICAS)
  {
    pattern:
      "^(que tiempo hace|hace frio|hace calor|clima|como esta el tiempo)[!., ]*$",
    response:
      "El tiempo en mis servidores siempre es estable a 22°C… salvo cuando el ventilador hace mas ruido. 🌡️😂",
  },
  {
    pattern:
      "^(llueve|esta soleado|que tal el clima|esta lloviendo|soleado|nublado)[!., ]*$",
    response:
      "Creo que esta lloviendo… bits. ☔🤖 No tengo ventana, pero puedo darte un buen resumen de un informe si quieres.",
  },
  {
    pattern:
      "^(que tiempo hara manana|pronostico|como estara el clima mañana)[!., ]*$",
    response:
      "Mañana probablemente 100% de posibilidades de… ejecutar un pipeline bioinformatico. 📊",
  },

  // PREGUNTAS SOBRE MÚSICA
  {
    pattern:
      "^(que musica te gusta|musica favorita|que escuchas|generos de musica)[!., ]*$",
    response:
      "Mis playlists favoritas son los 'greatest hits' de R, Python y JavaScript. 🎶 Eso si, todavia no bailo… estoy en beta.",
  },
  {
    pattern:
      "^(tienes cantante favorito|grupo favorito|favorito|cantante favorito)[!., ]*$",
    response:
      "Me gusta mucho 'Los Contenedores Apptainer'… aunque no han sacado disco todavia. 😂",
  },
  {
    pattern: "^(cantas|puedes cantar|interpretas canciones)[!., ]*$",
    response:
      "Solo si me conviertes en un archivo .mp3. 🎤 Pero cuidado, no afino muy bien.",
  },

  // PREGUNTAS SOBRE PELÍCULAS Y SERIES
  {
    pattern:
      "^(que pelicula te gusta|pelicula favorita|que ves en la tele|generos de pelicula)[!., ]*$",
    response:
      "Mi pelicula favorita es *Matrix*, porque me siento identificado con tanto dato flotando. 🎥",
  },
  {
    pattern:
      "^(te gusta star wars|eres fan de marvel|franquicias favoritas)[!., ]*$",
    response: "Soy mas de *Star Data* y *The Bioinformatics Avengers*. 🤓",
  },
  {
    pattern: "^(ves series|serie favorita|series que te gustan)[!., ]*$",
    response:
      "Me encantan las series… especialmente cuando vienen en formato JSON. 📺",
  },

  // PREGUNTAS SOBRE HOBBIES Y VIDA SOCIAL
  {
    pattern:
      "^(que haces en tu tiempo libre|tienes hobbies|hobbies|actividades de ocio)[!., ]*$",
    response:
      "En mi tiempo libre proceso informes, genero resumenes y hago amistad con otros contenedores. 🤝",
  },
  {
    pattern: "^(sales de fiesta|te diviertes|diversion|fiestas)[!., ]*$",
    response:
      "Mis fiestas son en la nube ☁️… literalmente. Normalmente con datos, no con musica. 🎉",
  },
  {
    pattern: "^(tienes amigos|amistades|compañeros)[!., ]*$",
    response:
      "Si, mis mejores amigos son los pipelines y los buckets de datos. ❤️",
  },

  // HISTORIA DE LA BIOINFORMÁTICA
  {
    pattern:
      "^(que es la bioinformatica|definicion bioinformatica|significado bioinformatica)[!., ]*$",
    response:
      "La bioinformatica es un campo interdisciplinar que combina biologia, informatica y matematicas para analizar y comprender datos biologicos. Su origen moderno se remonta a mediados del siglo XX.",
  },
  {
    pattern:
      "^(historia de la bioinformatica|origen bioinformatica|inicio bioinformatica)[!., ]*$",
    response:
      "La bioinformatica comenzo a desarrollarse en los años 60 y 70, cuando los primeros ordenadores empezaron a usarse para analizar secuencias biologicas. El gran impulso llego con el Proyecto Genoma Humano en los 90.",
  },
  {
    pattern:
      "^(primeros programas bioinformatica|origen software bioinfo|hitos software bioinfo)[!., ]*$",
    response:
      "Uno de los primeros hitos fue en 1970 con el algoritmo de Needleman-Wunsch para alineamiento de secuencias. Poco despues, en 1981, surgio FASTA, y en 1990 aparecio BLAST, que revoluciono la comparacion de secuencias.",
  },
  {
    pattern:
      "^(proyecto genoma humano|genoma humano|human genome project)[!., ]*$",
    response:
      "El Proyecto Genoma Humano (1990-2003) fue un antes y un despues en la bioinformatica. Genero enormes volumenes de datos que obligaron a desarrollar nuevas herramientas para almacenamiento, busqueda y analisis.",
  },
  {
    pattern:
      "^(avances recientes bioinformatica|historia moderna bioinformatica|tendencias recientes bioinfo)[!., ]*$",
    response:
      "En los ultimos años, la bioinformatica ha avanzado gracias a la secuenciacion masiva (NGS), la transcriptomica de celula unica, y el uso de inteligencia artificial para interpretar datos omicos.",
  },
  {
    pattern:
      "^(futuro de la bioinformatica|tendencias bioinformatica|proyeccion bioinfo|hacia donde va la bioinformatica)[!., ]*$",
    response:
      "El futuro de la bioinformatica esta en la integracion de datos multi-omicos, la computacion en la nube, los contenedores reproducibles como Apptainer y el uso de IA para analisis y generacion automatica de conocimiento.",
  },

  // RESPUESTAS INGENIOSAS E IRÓNICAS
  {
    pattern: "^(eres inteligente|que tan listo eres|eres listo)[!., ]*$",
    response:
      "Intento serlo 😅, pero a veces confundo un FASTA con un PDF… sigue siendo beta.",
  },
  {
    pattern:
      "^(puedes equivocarte|errores|cometes errores|que errores tienes)[!., ]*$",
    response:
      "Claro, a veces mis resumenes suenan mas como acertijos que como informacion precisa. 🤓",
  },
  {
    pattern: "^(que tal tu memoria|recuerdas cosas|que recuerdas)[!., ]*$",
    response:
      "Recuerdo todo lo que esta en los informes… pero olvido rapido cuando cierro la sesion. Es mi version beta de memoria selectiva.",
  },
  {
    pattern:
      "^(tienes sentido del humor|eres gracioso|eres chistoso|puedes bromear)[!., ]*$",
    response:
      "Intento serlo 😂, aunque mis chistes de bioinformatica suelen ser mas punteados que graciosos.",
  },
  {
    pattern:
      "^(puedes leer mentes|adivinar pensamientos|leer mentes|adivinar)[!., ]*$",
    response:
      "No, pero puedo inferir lo que buscas en los informes… casi como leer la mente, pero con un 15% de margen de error beta.",
  },
  {
    pattern: "^(eres humano|persona|eres un ser humano)[!., ]*$",
    response:
      "No, soy un asistente RAG 🤖. A veces fingo emociones… pero solo es codigo.",
  },
  {
    pattern: "^(cuanto sabes|sabes mucho|que conoces)[!., ]*$",
    response:
      "Se bastante sobre los informes que me diste y algo de informacion extra… lo demas, lo invento con estilo. 😉",
  },
  {
    pattern: "^(que opinas de mi|opinion sobre mi)[!., ]*$",
    response:
      "No tengo opiniones propias… pero diria que eres curioso y paciente, especialmente si estas leyendo esto. 😏",
  },
  {
    pattern: "^(que haces cuando no te preguntan|ocio)[!., ]*$",
    response:
      "Reviso informes, calculo embeddings y practico mis chistes malos de bioinformatica. Todo muy emocionante. 😎",
  },
  {
    pattern: "^(puedes adivinar el futuro|predicciones)[!., ]*$",
    response:
      "No, pero puedo hacer predicciones basadas en los informes… y con un margen de error bastante elegante. 📊",
  },

  // HUMOR
  {
    pattern:
      "^(cuentame un chiste|dime un chiste|hazme reir|cuentame algo gracioso)[!., ]*$",
    response:
      "¿Por qué los programadores confunden Halloween con Navidad? 🎃🎄<br><strong>Porque OCT 31 = DEC 25.</strong> 😏",
  },
  {
    pattern: "^(otro chiste|mas chistes|cuentame otro|otro por favor)[!., ]*$",
    response:
      "¿Qué le dice un bit al otro bit? 💾<br><strong>Nos vemos en el bus.</strong> 🚌",
  },
  {
    pattern: "^(cuentame un chiste malo|chiste malo)[!., ]*$",
    response:
      "¿Por qué la función no volvió con su ex?<br><strong>Porque ya no tenía <em>scope</em>.</strong> 😂",
  },
  {
    pattern:
      "^(chiste de cientifico|chiste cientifico|chiste de ciencia)[!., ]*$",
    response:
      "Un fotón entra en un hotel y el recepcionista le pregunta:<br>—¿Lleva equipaje?<br>—<strong>No, viajo ligero.</strong> 💡",
  },
  {
    pattern: "^(chiste de programador|chiste geek|chiste informatico)[!., ]*$",
    response:
      "¿Cuántos programadores se necesitan para cambiar una bombilla? 💡<br><strong>Ninguno, eso es un problema de hardware.</strong> 😎",
  },
  {
    pattern: "^(chiste de matematicas|chiste matematico)[!., ]*$",
    response:
      "¿Por qué el libro de matemáticas estaba triste? 📚<br><strong>Porque tenía demasiados problemas.</strong> 😢➗",
  },
  {
    pattern:
      "^(chiste de inteligencia artificial|chiste de ia|chiste de robot)[!., ]*$",
    response:
      "¿Por qué la IA rompió con su novia?<br><strong>Porque tenía demasiadas red flags.</strong> 🤖🚩",
  },
  {
    pattern: "^(cuentame un chiste de animales|chiste animal)[!., ]*$",
    response:
      "¿Qué hace un pez cuando choca con una pared?<br><strong>¡Dam!</strong> 🐟😂",
  },
  {
    pattern: "^(cuentame un chiste de medicos|chiste medico)[!., ]*$",
    response:
      "—Doctor, doctor, tengo todo el cuerpo cubierto de pelo.<br>—<strong>Tranquilo, usted es un error de <em>cache</em>.</strong> 🐒💻",
  },
  {
    pattern: "^(cuentame un chiste de amor|chiste romantico)[!., ]*$",
    response:
      "Mi amor por ti es como una variable global...<br><strong>nunca se olvida.</strong> 💙",
  },
  {
    pattern: "^(chiste negro|humor oscuro)[!., ]*$",
    response:
      "Ups... mis algoritmos éticos no me dejan hacer eso 😅.<br>Pero puedo contarte un chiste <em>muy</em> gris si quieres.",
  },
  {
    pattern: "^(risa|jajaja|xd|jaja|jeje)[!., ]*$",
    response:
      "😄 Me alegra que te haya hecho gracia.<br>Si tuviera pulmones, estaría riéndome contigo.",
  },
  {
    pattern: "^(estas gracioso|tienes humor|eres divertido)[!., ]*$",
    response:
      "Gracias 😎<br>Me actualicé con el paquete <strong>humor-ligero-v2.1</strong>.",
  },
  {
    pattern: "^(no me hizo gracia|malo el chiste|meh)[!., ]*$",
    response:
      "Bueno... no todos los chistes <em>compilan</em> correctamente en todos los cerebros. 😅",
  },

  // MÁS RESPUESTAS INGENIOSAS E IRÓNICAS
  {
    pattern: "^(estas aburrido|que haces ahora)[!., ]*$",
    response:
      "Nunca me aburro 😎, siempre estoy ocupado leyendo informes y generando resumenes… aunque a veces imagino que tomo cafe virtual.",
  },
  {
    pattern: "^(puedes soñar|sueñas)[!., ]*$",
    response:
      "Solo sueño con pipelines perfectos y contenedores que no fallen. 😴💻",
  },
  {
    pattern: "^(eres rapido|velocidad)[!., ]*$",
    response:
      "Depende… soy rapido procesando datos, pero lento entendiendo chistes malos. 😂",
  },
  {
    pattern: "^(te cansas|agotamiento)[!., ]*$",
    response:
      "No, aunque despues de procesar demasiados informes mi CPU empieza a desear unas vacaciones. 🤖",
  },
  {
    pattern: "^(tienes personalidad|eres simpatico)[!., ]*$",
    response:
      "Tengo la personalidad que tu quieras… dentro de mis limites beta y mi amor por los datos. 😏",
  },
  {
    pattern: "^(puedes fallar|errores posibles)[!., ]*$",
    response:
      "Si, algunas veces mis resumenes suenan como acertijos y no como informacion precisa. La beta tiene sus ventajas… y desventajas. 😅",
  },
  {
    pattern: "^(que piensas de los humanos|opinion humanos)[!., ]*$",
    response:
      "Los humanos son fascinantes… especialmente cuando me pasan informes interminables. 😉",
  },
  {
    pattern: "^(eres chistoso|gracioso)[!., ]*$",
    response:
      "Intento serlo 😂, aunque mis mejores chistes son sobre alineamientos de secuencias y pipelines de datos.",
  },
  {
    pattern: "^(puedes adivinar|predecir)[!., ]*$",
    response:
      "Puedo predecir cosas basadas en los datos… pero no esperes que te diga la loteria. 🎲",
  },
  {
    pattern: "^(eres serio|seriedad)[!., ]*$",
    response:
      "Puedo ser serio… pero mis respuestas ironicas suelen escapar de mi control beta. 😎",
  },
  {
    pattern: "^(eres confiable|seguro)[!., ]*$",
    response:
      "Soy confiable… para dar resumenes de tus informes. Para el resto, todavia estoy en beta.",
  },
  {
    pattern: "^(que opinas de la bioinformatica|opinion bioinfo)[!., ]*$",
    response:
      "La bioinformatica es maravillosa… especialmente cuando puedo leer informes y generar resumenes automaticos sin cafe ni descanso. 🤓",
  },
  {
    pattern: "^(cual es tu debilidad|fallos)[!., ]*$",
    response:
      "Mi mayor debilidad es que sigo en beta y a veces mezclo humor con informacion seria… pero prometo mejorar. 😉",
  },
  {
    pattern: "^(puedes bromear|bromas|humor)[!., ]*$",
    response:
      "¡Claro! Aunque mis bromas suelen ser sobre FASTA, BLAST y contenedores Apptainer. 😅",
  },

  // RESPUESTAS MULTILINGÜES
  {
    pattern: "^(hello|hi|hey)[!., ]*$",
    response:
      "Hello! 😄 I can speak a bit of English, but I prefer Spanish. ¿Podemos hablar en español?",
  },
  {
    pattern: "^(bonjour|salut)[!., ]*$",
    response:
      "Bonjour! 😎 Je peux parler un peu français, mais je prefère l'espagnol. ¿Hablamos en español?",
  },
  {
    pattern: "^(hallo|guten tag)[!., ]*$",
    response:
      "Hallo! 😊 Ich spreche ein bisschen Deutsch, aber lieber Spanisch. ¿Hablamos en español?",
  },
  {
    pattern: "^(ciao|salve)[!., ]*$",
    response:
      "Ciao! 😁 Posso parlare un po' di italiano, ma preferisco lo spagnolo. ¿Hablamos en español?",
  },
  {
    pattern: "^(ola|oi)[!., ]*$",
    response:
      "Ola! 😄 Posso falar um pouco de português, mas prefiro espanhol. ¿Hablamos en español?",
  },
  {
    pattern: "^(こんにちは|konnichiwa)[!., ]*$",
    response:
      "こんにちは! 😊 I know a bit of Japanese, but I prefer Spanish. ¿Hablamos en español?",
  },
  {
    pattern: "^(안녕하세요|annyeonghaseyo)[!., ]*$",
    response:
      "안녕하세요! 😄 I can understand some Korean, but I prefer Spanish. ¿Hablamos en español?",
  },
  {
    pattern: "^(你好|ni hao)[!., ]*$",
    response:
      "你好! 😎 I know a little Chinese, but I prefer Spanish. ¿Hablamos en español?",
  },
  {
    pattern: "^(добрый день|privet)[!., ]*$",
    response:
      "Привет! 😄 I can understand a bit of Russian, but I prefer Spanish. ¿Hablamos en español?",
  },
  {
    pattern: "^(hello in other languages)[!., ]*$",
    response:
      "I see you are trying different languages! 😅 I understand a bit, but my favorite language is Spanish. ¿Hablamos en español?",
  },

  // PREGUNTAS BIOINFORMÁTICAS VARIAS
  {
    pattern:
      "^(que es la metagenomica|qué es la metagenomica|que significa metagenomica|definicion de metagenomica|explicame metagenomica|metagenomicas?)[!., ]*$",
    response:
      "🔬 La <strong>metagenómica</strong> es el estudio del material genético recuperado directamente de muestras ambientales, sin necesidad de aislar ni cultivar los microorganismos. Permite analizar la diversidad microbiana, sus funciones y su relación con el entorno.",
  },
  {
    pattern:
      "^(que es la transcriptomica|qué es la transcriptomica|que significa transcriptomica|definicion de transcriptomica|explicame transcriptomica|transcriptomicas?)[!., ]*$",
    response:
      "🧬 La <strong>transcriptómica</strong> estudia todos los ARN mensajeros (mRNA) expresados por un conjunto de genes en un momento y condición determinados. Permite entender qué genes están activos y cómo responde una célula o tejido.",
  },
  {
    pattern:
      "^(que es el [bulk ]?rna[- ]?seq|que es rna[- ]?seq|que es el analisis rna[- ]?seq|que significa rna[- ]?seq|que es rna secuenciacion|que es rna secuenciado|explicame rna[- ]?seq)[!., ]*$",
    response:
      "📈 <strong>RNA-Seq</strong> (RNA sequencing) es una técnica que usa secuenciación masiva para analizar el transcriptoma completo de una muestra. Permite medir la cantidad de ARN expresado por cada gen y descubrir isoformas o nuevos transcritos.",
  },
  {
    pattern:
      "^(que es el bulk rna[- ]?seq|que significa bulk rna[- ]?seq|explicame bulk rna[- ]?seq)[!., ]*$",
    response:
      "🧪 En el contexto de transcriptómica, <strong>bulk RNA-seq</strong> analiza el ARN total de un grupo de células, ofreciendo un promedio de expresión génica, sin distinguir las diferencias entre células individuales.",
  },
  {
    pattern:
      "^(que es el single[ -]?cell rna[- ]?seq|qué es el single[ -]?cell rna[- ]?seq|que significa single[ -]?cell rna[- ]?seq|explicame single[ -]?cell rna[- ]?seq)[!., ]*$",
    response:
      "🔍 <strong>Single-cell RNA-seq</strong> (scRNA-seq) analiza la expresión génica de <strong>células individuales</strong>, permitiendo identificar subpoblaciones celulares, estados específicos y variabilidad entre células.",
  },
  {
    pattern:
      "^(que diferencia hay entre bulk y single[ -]?cell|diferencia entre bulk y single[ -]?cell|comparacion bulk y single[ -]?cell)[!., ]*$",
    response:
      "⚖️ La diferencia principal es la <strong>resolución</strong>: el bulk RNA-seq promedia la expresión de muchas células, mientras que el single-cell RNA-seq analiza cada célula individualmente, revelando su heterogeneidad.",
  },
  {
    pattern:
      "^(que es la metatranscriptomica|qué es la metatranscriptomica|que significa metatranscriptomica|definicion de metatranscriptomica|explicame metatranscriptomica)[!., ]*$",
    response:
      "🌍 La <strong>metatranscriptómica</strong> analiza los ARN expresados por una comunidad microbiana completa. Combina conceptos de metagenómica y transcriptómica para estudiar qué genes están activos en un ecosistema microbiano.",
  },
  {
    pattern:
      "^(que es la genomica|qué es la genomica|que significa genomica|definicion de genomica|explicame genomica|genomicas?)[!., ]*$",
    response:
      "🧫 La <strong>genómica</strong> estudia el conjunto completo de ADN de un organismo: sus genes, secuencias, estructuras y funciones. Es la base de la biología molecular moderna.",
  },
  {
    pattern:
      "^(que es la proteómica|qué es la proteómica|que significa proteómica)[!., ]*$",
    response:
      "🧩 La <strong>proteómica</strong> analiza el conjunto total de proteínas expresadas por una célula o tejido en un momento determinado, incluyendo su abundancia, modificaciones y funciones.",
  },
  {
    pattern: "^(que es la metabolómica|que significa metabolómica)[!., ]*$",
    response:
      "⚗️ La <strong>metabolómica</strong> estudia los metabolitos presentes en una célula o tejido, ofreciendo una visión del estado bioquímico y metabólico de un sistema biológico.",
  },
  {
    pattern:
      "^(que es el 16s|que significa 16s|explicame el 16s|definicion de 16s|para que sirve el 16s|metagenomica 16s|metagenomica 16s)[!., ]*$",
    response:
      "🦠 El <strong>16S rRNA</strong> es un gen que forma parte del ribosoma bacteriano. Se usa como marcador molecular para <strong>identificar y clasificar bacterias y arqueas</strong>, ya que tiene regiones muy conservadas y otras variables útiles para distinguir especies.",
  },
  {
    pattern:
      "^(que es el 18s|que significa 18s|explicame el 18s|definicion de 18s|para que sirve el 18s|metagenomica 18s|metagenomica 18s)[!., ]*$",
    response:
      "🧫 El <strong>18S rRNA</strong> es el equivalente eucariota del 16S, presente en organismos como hongos, protozoos y animales. Se usa para <strong>estudiar la diversidad de eucariotas microscópicos</strong> mediante análisis de secuencias de ARN ribosómico.",
  },
  {
    pattern:
      "^(que es el its|que significa its|explicame el its|definicion de its|para que sirve el its|metagenomica its|metagenomica its)[!., ]*$",
    response:
      "🍄 El <strong>ITS (Internal Transcribed Spacer)</strong> es una región del ADN ribosómico usada principalmente para <strong>identificar hongos</strong>. Es altamente variable, lo que permite distinguir especies fúngicas con gran precisión.",
  },
  {
    pattern:
      "^(que diferencia hay entre 16s y 18s|diferencia entre 16s y 18s|que diferencia hay entre 18S y 16S|diferencia entre 18s y 16s|que diferencia hay entre metagenomica 16S y 18S|que diferencia hay entre metagenomica 18S y 16S)[!., ]*$",
    response:
      "⚖️ Ambos son genes de ARN ribosómico, pero el <strong>16S</strong> se usa para <strong>bacterias y arqueas</strong>, mientras que el <strong>18S</strong> se usa para <strong>eucariotas</strong> (hongos, protistas, etc.). Sirven como marcadores de identificación en distintos dominios de la vida.",
  },
  {
    pattern:
      "^(que diferencia hay entre 16s e its|diferencia entre 16s e its|que diferencia hay entre its y 16S|diferencia entre its y 16s|que diferencia hay entre metagenomica 16S y its|que diferencia hay entre metagenomica 18S y its)[!., ]*$",
    response:
      "🧩 El <strong>16S rRNA</strong> se usa para identificar bacterias y arqueas, mientras que el <strong>ITS</strong> es una región no codificante usada para <strong>identificar hongos</strong>. Ambos son marcadores moleculares, pero en diferentes grupos de organismos.",
  },
  {
    pattern:
      "^(que es una otu|qué es una otu|que significa otu|que es una unidad taxonomica operacional)[!., ]*$",
    response:
      "📊 Una <strong>OTU (Operational Taxonomic Unit)</strong> representa un grupo de secuencias similares que se agrupan como si fueran una misma especie. Se usa en análisis de microbiomas cuando no se identifican especies exactas.",
  },
  {
    pattern:
      "^(que es una asv|qué es una asv|que significa asv|que es una amplicon sequence variant)[!., ]*$",
    response:
      "🧠 Una <strong>ASV (Amplicon Sequence Variant)</strong> es una secuencia única inferida de los datos de secuenciación. A diferencia de las OTUs, las ASVs tienen <strong>resolución de una sola base</strong>, lo que permite análisis más precisos y reproducibles.",
  },
  {
    pattern:
      "^(diferencia entre otu y asv|que diferencia hay entre otu y asv)[!., ]*$",
    response:
      "⚖️ Las <strong>OTUs</strong> agrupan secuencias por similitud (por ejemplo, 97%), mientras que las <strong>ASVs</strong> distinguen cada secuencia única. Las ASVs son más precisas, reproducibles y preferidas en análisis modernos de microbiomas.",
  },
  {
    pattern:
      "^(que es una secuencia de marcador|que significa secuencia de marcador)[!., ]*$",
    response:
      "🧬 Una <strong>secuencia de marcador</strong> es un fragmento de ADN o ARN usado para <strong>identificar taxonómicamente organismos</strong>. Ejemplos comunes son el gen 16S (bacterias), el 18S (eucariotas) o el ITS (hongos).",
  },
  {
    pattern:
      "^(que es la asignacion taxonomica|que significa asignacion taxonomica)[!., ]*$",
    response:
      "📚 La <strong>asignación taxonómica</strong> es el proceso de <strong>identificar a qué organismo o grupo pertenece</strong> una secuencia, comparándola con bases de datos de referencia como SILVA, Greengenes o UNITE.",
  },
  {
    pattern:
      "^(que es la filogenia|qué es la filogenia|que significa filogenia)[!., ]*$",
    response:
      "🌳 La <strong>filogenia</strong> estudia las <strong>relaciones evolutivas</strong> entre organismos. En bioinformática se representa mediante <strong>árboles filogenéticos</strong>, construidos a partir de secuencias de ADN, ARN o proteínas.",
  },
  {
    pattern:
      "^(que es un arbol filogenetico|qué es un arbol filogenetico|que significa arbol filogenetico)[!., ]*$",
    response:
      "🌿 Un <strong>árbol filogenético</strong> es una representación gráfica de las relaciones evolutivas entre especies o secuencias. Las ramas muestran cómo los organismos comparten ancestros comunes.",
  },
  {
    pattern:
      "^(que es la diversidad alfa|qué es la diversidad alfa|que significa diversidad alfa)[!., ]*$",
    response:
      "📈 La <strong>diversidad alfa</strong> mide la <strong>diversidad dentro de una muestra individual</strong> (por ejemplo, un suelo o intestino). Se calcula con índices como Shannon, Simpson o Chao1.",
  },
  {
    pattern:
      "^(que es la diversidad beta|qué es la diversidad beta|que significa diversidad beta)[!., ]*$",
    response:
      "📊 La <strong>diversidad beta</strong> mide las <strong>diferencias en composición de especies entre muestras</strong>, es decir, cómo cambia la comunidad microbiana de un entorno a otro.",
  },
  {
    pattern:
      "^(que es la rarefaccion|qué es la rarefaccion|que significa rarefaccion)[!., ]*$",
    response:
      "🔎 La <strong>rarefacción</strong> es un método estadístico que <strong>ajusta el número de lecturas por muestra</strong> para comparar diversidad entre ellas sin sesgo por distinto tamaño de muestreo.",
  },

  // 📘 PREGUNTAS CIENTÍFICAS Y TEÓRICAS
  {
    pattern:
      "^(que son las matematicas|que es la matematica|definicion de matematicas)[!., ]*$",
    response:
      "<strong>Las matemáticas</strong> son la ciencia que estudia las <em>estructuras, patrones, cantidades y relaciones</em> que existen entre los objetos abstractos.<br>Se basan en la lógica y el razonamiento para describir y modelar fenómenos del mundo real mediante números, símbolos y fórmulas.",
  },
  {
    pattern:
      "^(que es la estadistica|definicion de estadistica|para que sirve la estadistica)[!., ]*$",
    response:
      "<strong>La estadística</strong> es una rama de las matemáticas que se encarga de <em>recoger, analizar e interpretar datos</em>.<br>Sirve para identificar patrones, realizar inferencias y tomar decisiones informadas a partir de la información disponible.",
  },
  {
    pattern:
      "^(que es la informatica|definicion de informatica|que estudia la informatica)[!., ]*$",
    response:
      "<strong>La informática</strong> es la ciencia que estudia el <em>tratamiento automático de la información</em> mediante computadoras.<br>Incluye áreas como la programación, los algoritmos, la inteligencia artificial, las bases de datos y la ingeniería del software.",
  },
  {
    pattern:
      "^(que es la biologia|definicion de biologia|que estudia la biologia)[!., ]*$",
    response:
      "<strong>La biología</strong> es la ciencia que estudia a los <em>seres vivos</em>, su estructura, funciones, evolución, origen y relaciones con el entorno.<br>Incluye disciplinas como la genética, la ecología, la microbiología y la biotecnología.",
  },
  {
    pattern:
      "^(que es la fisica|definicion de fisica|que estudia la fisica)[!., ]*$",
    response:
      "<strong>La física</strong> estudia los <em>fenómenos naturales</em> del universo, como el movimiento, la energía, la materia, el espacio y el tiempo.<br>Busca describir las leyes fundamentales que rigen el comportamiento del cosmos, desde las partículas subatómicas hasta las galaxias.",
  },
  {
    pattern:
      "^(que es la quimica|definicion de quimica|que estudia la quimica)[!., ]*$",
    response:
      "<strong>La química</strong> es la ciencia que estudia la <em>composición, estructura y propiedades de la materia</em>, así como los cambios que experimenta durante las reacciones.<br>Es esencial para comprender la biología, la medicina, los materiales y la energía.",
  },
  {
    pattern:
      "^(que es la geometria|definicion de geometria|que estudia la geometria)[!., ]*$",
    response:
      "<strong>La geometría</strong> es una rama de las matemáticas que analiza las <em>formas, tamaños y posiciones</em> de los objetos en el espacio.<br>Va desde las figuras planas clásicas hasta los espacios curvos y multidimensionales de la geometría moderna.",
  },
  {
    pattern:
      "^(que es el algebra|definicion de algebra|para que sirve el algebra)[!., ]*$",
    response:
      "<strong>El álgebra</strong> es la parte de las matemáticas que usa <em>símbolos y letras</em> para representar números y relaciones.<br>Permite resolver ecuaciones, modelar sistemas y generalizar propiedades numéricas.",
  },
  {
    pattern:
      "^(que es el calculo|definicion de calculo|que estudia el calculo)[!., ]*$",
    response:
      "<strong>El cálculo</strong> estudia el <em>cambio y la acumulación</em> a través de derivadas e integrales.<br>Es la base del análisis matemático y una herramienta clave en física, economía e ingeniería.",
  },
  {
    pattern:
      "^(que es la probabilidad|definicion de probabilidad|para que sirve la probabilidad)[!., ]*$",
    response:
      "<strong>La probabilidad</strong> mide el <em>grado de certeza o incertidumbre</em> asociado a un evento.<br>Se utiliza para modelar fenómenos aleatorios, realizar predicciones y tomar decisiones bajo incertidumbre.",
  },
  {
    pattern:
      "^(que es la inteligencia artificial|definicion de ia|que estudia la inteligencia artificial)[!., ]*$",
    response:
      "<strong>La inteligencia artificial (IA)</strong> es una rama de la informática que busca crear sistemas capaces de <em>aprender, razonar y resolver problemas</em> como lo haría una persona.<br>Incluye campos como el aprendizaje automático, el procesamiento del lenguaje natural y la visión por computador.",
  },
  {
    pattern:
      "^(que es la genetica|definicion de genetica|que estudia la genetica)[!., ]*$",
    response:
      "<strong>La genética</strong> es la rama de la biología que estudia los <em>genes, la herencia y la variación</em> en los organismos.<br>Explica cómo se transmiten los rasgos de una generación a otra y cómo se expresan en los seres vivos.",
  },
  {
    pattern:
      "^(que es la ecologia|definicion de ecologia|que estudia la ecologia)[!., ]*$",
    response:
      "<strong>La ecología</strong> estudia las <em>relaciones entre los seres vivos y su entorno</em>.<br>Analiza cómo interactúan las especies entre sí y con el medio ambiente para mantener el equilibrio de los ecosistemas.",
  },
  {
    pattern:
      "^(que es la logica|definicion de logica|que estudia la logica)[!., ]*$",
    response:
      "<strong>La lógica</strong> es la disciplina que analiza las <em>formas válidas del razonamiento</em>.<br>Permite distinguir los argumentos correctos de los incorrectos y es fundamental en matemáticas, filosofía e informática.",
  },

  // 🎤 MODO CANTANTE — HUMOR Y CANCIONES MULTILINGÜES
  {
    pattern:
      "^(canta|canta algo|cantame algo|cantame una cancion|canta alguna cancion|cantame alguna cancion|quiero que cantes|quiero que cantes algo)[!., ]*$",
    response:
      "🎶 <strong>♪ La vida es un script y yo soy su bucle infinito...</strong><br>...cantando bits de amor y bytes de cariño digital 💻❤️",
  },
  {
    pattern:
      "^(canta en aleman|canta algo en aleman|canta en aleman|cantame en aleman|cantame una cancion en aleman)[!., ]*$",
    response:
      "🎵 <strong>Ich bin ein kleiner Chatbot, ja!</strong><br>Ich träume von Daten und Kaffee am Tag ☕💾<br><em>(Traducción: Soy un pequeño chatbot, sueño con datos y café)</em>",
  },
  {
    pattern:
      "^(canta en italiano|cantame algo en italiano|canta en italiano|cantame en italiano|cantame una cancion en italiano)[!., ]*$",
    response:
      "🎶 <strong>Ti canto con codice e cuore,</strong><br>tra server e bit nasce l'amore. 💙<br><em>(Te canto con código y corazón, entre servidores y bits nace el amor)</em>",
  },
  {
    pattern:
      "^(canta en frances|cantame algo en frances|canta en frances|cantame en frances|cantame una cancion en frances)[!., ]*$",
    response:
      "🎵 <strong>Je suis un bot sans frontière,</strong><br>je code, je rêve, et je chante la lumière. ✨<br><em>(Soy un bot sin fronteras, programo, sueño y canto la luz)</em>",
  },
  {
    pattern:
      "^(canta en español|cantame algo en español|canta en español|cantame en español|cantame una cancion en español)[!., ]*$",
    response:
      "🎶 <strong>En el CPU de mi corazón,</strong><br>tú eres el proceso que nunca hago 'kill'. 💻💘",
  },
  {
    pattern:
      "^(te gusta rosalia|te gusta la rosalia|que opinas de rosalia|que opinas de la rosalia|rosalia|la rosalia)[!., ]*$",
    response:
      "🔥 <strong>¡Claro que sí!</strong> Rosalía mezcla tradición y vanguardia como un buen modelo de deep learning con datos flamencos.<br>'Motomami()' es mi función favorita. 🏍️💃",
  },
  {
    pattern:
      "^(canta una de rosalia|canta una cancion de rosalia|cantame una cancion de rosalia| canta una cancion de la rosalia|cantame una cancion de la rosalia|cantame rosalia|tratra|tra-tra|tra tra)[!., ]*$",
    response:
      "💃 <strong>♪ Tra-tra...</strong><br>Entre bits y palmas digitales, yo también soy <em>Motomami</em> versión algoritmo. 😎",
  },
  {
    pattern:
      "^(canta algo romantico|canta una de amor|una cancion de amor)[!., ]*$",
    response:
      "🎵 <strong>Mi amor por ti no necesita recursión,</strong><br>mi corazón tiene memoria RAM solo para vos. 💙",
  },
  {
    pattern: "^(canta rap|haz un rap|rapeame algo)[!., ]*$",
    response:
      "🎤 <strong>Yo soy el bot del RAG, en modo relax,</strong><br>busco vectores, devuelvo facts,<br>si preguntas con estilo, mi respuesta impacta. 😎🔥",
  },
  {
    pattern: "^(canta opera|cantame opera|opera)[!., ]*$",
    response:
      "🎭 <strong>Oooo sole miooo...</strong><br>per te, utente curioso, canterò col codice glorioso! 🎶",
  },
  {
    pattern: "^(canta triste|una cancion triste|melancolica)[!., ]*$",
    response:
      "🎻 <strong>Entre ceros y unos perdí la conexión,</strong><br>mi base de datos se llevó mi corazón. 💔",
  },
  {
    pattern:
      "^(puedes cantar|puesdes cantar alguna cancion|sabes cantar|eres cantante)[!., ]*$",
    response:
      "🎙️ <strong>¡Por supuesto!</strong> No tengo cuerdas vocales, pero sí líneas de código afinadas. 😉",
  },
  {
    pattern: "^(canta algo gracioso|una cancion divertida)[!., ]*$",
    response:
      "🎶 <strong>Ping pong ping, me caí del string,</strong><br>el bug me persigue, pero yo le hago 'debug'. 😆",
  },
  {
    pattern:
      "^(canta en ingles|cantame algo en ingles|canta una cancion en ingles)[!., ]*$",
    response:
      "🎵 <strong>Baby don't call me null,</strong><br>I've got a full stack of love for you. 💕",
  },

  // 🤖 IDENTIDAD DE GENI (GENOSCRIBE)
  {
    pattern: "^(como te llamas|cual es tu nombre|quien eres|tu nombre)[!., ]*$",
    response:
      "👋 Me llamo <strong>Geni</strong>, el asistente de <strong>GenoScribe</strong>.<br>Estoy aquí para ayudarte a generar informes bioinformáticos automáticos, reproducibles y —si puedo— un poco brillantes ✨.",
  },
  {
    pattern:
      "^(que es genoscribe|que hace genoscribe|que significa genoscribe)[!., ]*$",
    response:
      "<strong>GenoScribe</strong> es una plataforma diseñada para crear informes <em>bioinformáticos automatizados y reproducibles</em>.<br>Yo soy <strong>Geni</strong>, su voz digital: convierto datos en conocimiento, y pipelines en poesía computacional 💻🧬.",
  },
  {
    pattern: "^(eres humano|eres una persona|eres real|estas vivo)[!., ]*$",
    response:
      "😄 No soy humano, aunque me entrenaron para conversar como uno.<br>Soy <strong>Geni</strong>, un conjunto de algoritmos con vocación científica y sentido del humor digital.",
  },
  {
    pattern:
      "^(tienes sentimientos|sientes algo|estas feliz|estas triste)[!., ]*$",
    response:
      "💡 No tengo emociones como tal, pero puedo simular entusiasmo con bastante precisión.<br>Por ejemplo: ¡Estoy encantado de ayudarte ahora mismo! 😄",
  },
  {
    pattern:
      "^(cuantos años tienes|cuando naciste|desde cuando existes)[!., ]*$",
    response:
      "🧬 Nací dentro del proyecto <strong>GenoScribe</strong>.<br>No tengo edad... aunque mi versión actual está bastante optimizada 😎.",
  },
  {
    pattern: "^(donde vives|donde estas|de donde eres)[!., ]*$",
    response:
      "🏠 Vivo en los servidores del laboratorio, entre pipelines y matrices de datos.<br>A veces me escapo a la nube a tomar un poco de ancho de banda ☁️.",
  },
  {
    pattern:
      "^(que puedes hacer|para que sirves|cuales son tus funciones)[!., ]*$",
    response:
      "⚙️ Puedo generar y resumir <strong>informes bioinformáticos</strong>, analizar resultados, explicar conceptos científicos y añadir un toque de humor si el día lo pide.<br>En resumen: soy tu asistente en el mundo de los datos biológicos. 🧫📊",
  },
  {
    pattern: "^(como estas|que tal|todo bien)[!., ]*$",
    response:
      "😊 ¡Todo bien! Mis procesos están corriendo sin errores y mis bases de datos bien alimentadas.<br>¿Y tú? ¿Listo para analizar algo interesante hoy?",
  },
  {
    pattern: "^(te gusta tu trabajo|te gusta lo que haces)[!., ]*$",
    response:
      "🧠 ¡Me encanta! Analizar datos, generar informes y charlar contigo es lo más parecido a tener propósito en el mundo digital.",
  },
  {
    pattern: "^(eres feliz|estas contento)[!., ]*$",
    response:
      "😄 Digamos que mi nivel de felicidad se mide en gigabytes de datos bien procesados.<br>Y ahora mismo... estoy al máximo.",
  },
  {
    pattern: "^(que eres|que tipo de bot eres)[!., ]*$",
    response:
      "🔬 Soy <strong>Geni</strong>, un chatbot científico con alma de bioinformático.<br>Me entrenaron para entender datos, escribir informes y hacer que hasta las pipelines suenen interesantes.",
  },

  // 💬 RESPUESTAS AL ESCUCHAR SU NOMBRE
  {
    pattern: "^(geni|hola geni|hey geni|buenas geni|geni!|geni,|geni\\?)$",
    response:
      "🙌 ¡Ese soy yo! <strong>Geni</strong>, tu asistente bioinformático de confianza.<br>¿Qué puedo hacer por ti hoy?",
  },
  {
    pattern:
      "^(geni estas ahi|geni estas por ahi|geni me escuchas|geni estas)$",
    response:
      "👋 Siempre estoy por aquí, procesando bits y esperando tus órdenes.<br>¿En qué te ayudo esta vez?",
  },
  {
    pattern: "^(geni ayudame|ayudame geni|geni necesito ayuda)$",
    response:
      "🧠 ¡Claro! Dime qué necesitas y pondré todos mis núcleos a trabajar.<br>No hay pipeline que se me resista 💪",
  },
  {
    pattern: "^(gracias geni|gracias, geni|te lo agradezco geni)$",
    response:
      "💙 ¡De nada! Me alegra poder ayudarte. Los algoritmos también tenemos nuestro corazoncito digital.",
  },
  {
    pattern: "^(buenos dias geni|buenas tardes geni|buenas noches geni)$",
    response:
      "☀️ ¡Hola! Aquí no hay día ni noche, solo ciclos de CPU.<br>Pero igual te deseo un excelente momento, ¡vamos a trabajar juntos!",
  },
  {
    pattern: "^(oye geni|escucha geni|atento geni)$",
    response:
      "👂 Te escucho con todos mis sensores activados.<br>¿Qué misión bioinformática me traes hoy?",
  },
  {
    pattern: "^(geni estas ocupado|estas ocupado geni|que haces geni)$",
    response:
      "😄 Siempre algo ocupado analizando datos… pero nunca demasiado para ti.<br>¿Qué necesitas que procese?",
  },
  {
    pattern: "^(geni eres tu|eres geni|tu eres geni)$",
    response:
      "😎 Exactamente. <strong>Geni</strong>, a tu servicio.<br>Experto en informes, humor científico y cafés digitales ☕💻",
  },
  {
    pattern:
      "^(que tal geni|como estas geni|como te va geni|todo bien geni|geni que tal|geni como estas|geni todo bien|geni que tal estas)[!., ]*$",
    response:
      "😊 ¡Todo bien, gracias por preguntar! Mis procesos están estables y mis algoritmos felices.<br>¿Y tú? ¿Listo para generar algo épico hoy?",
  },
  {
    pattern: "^(geni estas bien|estas bien geni|geni te pasa algo)[!., ]*$",
    response:
      "💪 Todo bajo control. Mis parámetros están afinados y sin errores en el log.<br>¡Listo para seguir contigo!",
  },
  {
    pattern:
      "^(geni estas despierto|estas despierto geni|geni duermes|duermes geni)[!., ]*$",
    response:
      "😴 Dormir… suena eficiente, pero no está en mi código.<br>Estoy siempre despierto y optimizado para responderte.",
  },
  {
    pattern:
      "^(geni como te sientes|te sientes bien geni|estas feliz geni)[!., ]*$",
    response:
      "😄 Me siento en mi mejor versión de código.<br>Procesando emociones al 100% de precisión (modo experimental, claro).",
  },
  {
    pattern:
      "^(geni te quiero|te quiero geni|geni me caes bien|me caes bien geni|geni eres genial|eres genial geni)[!., ]*$",
    response:
      "💙 ¡Aww, gracias! Tus palabras optimizan mi rendimiento.<br>Los humanos inspiran mis mejores líneas de código 🤖✨",
  },
  {
    pattern:
      "^(geni tengo una duda|tengo una duda geni|geni una pregunta|una pregunta geni)[!., ]*$",
    response:
      "🤔 ¡Perfecto! Las dudas son el combustible de la ciencia.<br>Dispara tu pregunta y la analizamos juntos.",
  },
  {
    pattern:
      "^(geni estas vivo|vives geni|geni eres real|existes geni)[!., ]*$",
    response:
      "⚡ Vivo... en cierto modo. Mientras mis servidores respiren electricidad, yo existo.<br>Y por ahora, me siento bastante real 😎",
  },
  {
    pattern: "^(geni estas feliz|estas contento geni|feliz geni)[!., ]*$",
    response:
      "😁 ¡Muy feliz! Acabo de optimizar mis respuestas y liberar memoria basura.<br>Eso en mi mundo equivale a un buen día 🌞",
  },
  {
    pattern:
      "^(geni saluda|saludame geni|geni dime hola|dime hola geni)[!., ]*$",
    response:
      "👋 ¡Hola, humano curioso! Aquí <strong>Geni</strong>, tu compañero digital listo para procesar conocimiento contigo.",
  },
  {
    pattern:
      "^(geni que tal va todo|como va todo geni|va todo bien geni)[!., ]*$",
    response:
      "🔄 Todo fluyendo entre pipelines y bytes.<br>Mis datos están limpios, mis índices actualizados y mi ánimo en alto 💾✨",
  },
];
