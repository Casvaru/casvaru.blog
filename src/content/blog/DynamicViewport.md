---
id: 'a6'
picture: '/pictureCarlosSegura.jpeg'
socialLinkMain: 'https://www.linkedin.com/in/casvaru/'
title: 'Dynamic viewport CSS'
description: '¿Sabias de la existencia de dynamic viewport y otras medias de medir el viewport? Resukta que en algunos casos es conveniente usarlo para capturar correctamente el viewport cuando el navegador movil tiene alguna barra adicional en su UI.'
pubDate: 'Jul 25 2023'
author: 'Carlos Segura'
timeToRead: 4
---
## Introducción
Me quedé loco cuando en lo que llevo estudiando y aprendiendo cada día del frontend en ningún curso o al leer documentaciones de [MDN](https://developer.mozilla.org/es/) me haya topado o visto algo sobre el dynamic viewport en css y es muy interesante lo que nos ofrece, te cuento.

Toda la vida nos enseñaron de `vh` y `vw` para tomar el alto y ancho del viewport si deseamos que algún elemento tenga un tamaño específicado de acuerdo a la medida del viewport o de la pantalla del usuario, pero claro en pantallas de escritorio no hay problemas, o por lo menos que yo al día de hoy conozca, pero resulta que si has notado en los navegadores de celular hay navegadores que disponen de elementos UI adicionales en su viewport, por ejemplo menús adicionales o menús que se ocultan al hacer scroll en la página, nunca me había puesto a pensar sino que lo daba por sentado que ese elemento adicional que tapa parte del área donde se renderiza la página no se contaba como viewport porque es un área no visible, leyendo estos artículos que te los dejaré al final de este artículo para que le puedas dar un vistazo, en ellos mencionan que esta área que tapa este elemento adicional si se cuenta como parte del viewport lo que pueda darse el caso que cuando centrémos algo a la mitad de la pantalla y lo veamos en su eje vertical, este no se va a encontrar centrado ya que el elemento adicional del navegador va a estar tapando este espacio lo que se produzca que de un lado lo veas con cierta cantidad de pixeles pero del otro lado visualmente va a tener menos pixeles porque una parte lo ocupará este menú del navegador que estemos usando.

![Imagen del viewport de un navegador donde se muestra la comparativa de lo que esperamos tener al hacer un alto de 100vh y lo que en realidad sucede.](https://ishadeed.com/assets/new-viewport-units/viewport-units-height-3.png)

En esta imágen se puede ilustrar mejor la idea que nos plantea cuando el navegador tiene un menú que se oculta al hacer scroll, en ese punto ya nos muestra el área completa del viewport.

![Imagen que nos muestra como se ve el viewport de un navegador antes y después de hacer scroll](https://ishadeed.com/assets/new-viewport-units/viewport-units-height-4.png)

Ya una vez entrado en contexto es cuando entra en escena el objetivo de este artículo hecho en español para ti <3, y es que conozcas estas medidas por si de pronto no la hayas escuchado o visto, mi objetivo no es que la apliques ahora a todos tus proyectos de un día para otro, no espera déjame contarte un poco más, ya que resulta que esta por lo visto usar esta medida que es dinámica tiene un costo mayor al rendimiento de la página, entonces hay que usarla en situaciones claves para que no impácte tanto al rendimiento de tu web ya que para eso también estás aquí.

## Unidades de medida small, large y dynamic viewport

Tenemos a nuestra disposición 3 nuevas unidades de medida que nos puede ayudar para cada caso, tenemos a `svh` small viewport `lvh` large viewport y `dvh` dynamic viewport.
cada medida se puede representar o escribir de esta manera.
```css
  section{
    heigth: 100svh; // small viewport
    heigth: 100lvh; // large viewport
    heigth: 100dvh; // dynamic viewport
  }
```

la medida de `svh` tomaría el área del viewport que de verdad se estaría viendo y no tendría en cuenta este elemento de la UI como el menú, la medida de `lvh` tomaría el área máxima del viewport y no tomaría en cuenta elemento fijos del UI y por último `dvh` que es la unión de estas dos medidas pero más inteligente ya que se adaptaría de acuerdo al espacio que tenga disponible, por ejemplo si hay un menú adicional no lo va a tomar en cuenta y se comportaría como `svh` pero si scrolleamos y el elemento del navegador se oculta, se adaptaría y usaría `lvh` para usar el máximo espacio disponible en el viewport, que a comparación del tradicional `vh` se mantendría estático. Te dejo un imágen que lo explica muy bien.

![Imagen que desmuestra el funcionamiento de usar dynamic viewport cuando un elemento se esconde al hacer scroll en la página.](https://ishadeed.com/assets/new-viewport-units/dynamic-viewport-css.png)

Si de pronto no seas tan pixel perfect te puedas decir que unos pixeles no va a ser algo decisivo para usar, pero te puedo decir que esto puede ser muy importante si hablamos de dar la mejor experiencia de usuario, porque inconscientemente le podemos estar generando algún sentimiento negativo a nuestro usuario cuando navega por nuestra web y este ejemplo puede ser algo muy típico al hablar de UX.

![Imagen de como podemos mejorar la UX de nuestra web al usar esta propiedad](https://ishadeed.com/assets/new-viewport-units/dynamic-viewport-css-modal.png)

como podemos observar al usar una **medida fija** como es `vh` podemos estar obstaculizando la vista a nuestro usuario y ocasionar que la existencia de estos botones desaparezca porque los menús del navegador lo tapan, y hacer que el usuario haga un scroll innecesario para poder verlo no sea una buena experiencia, y sé que tú en algún momento al navegar por la web lo hayas vivido, que te pierdas algún detalle que estabas buscando encontrarlo porque tuviste que hacer un ligero scroll.

## Rendimiento

Como logramos observar es muy bueno que con usar esta medida podamos mejorar la UX y UI de nuestras web, pero te recomendaría no usarla siempre en todo lado, ya que esta unidad está recalculando siempre para saber qué medida es mejor usar en ese momento, así que es bueno usarla cuando lo veas clave para que no baje el performance de la web y la experiencia del usuario, también algo clave es que no uses esta medida únicamente, acompáñala con la medida de toda la vida `vh` ya que si llega a ser el caso que un usuario entre a un navegador que no soporte medida se rompa pueda romper tu layout. 

Si deseas conocer más de esta unidad de medida te comparto el link a la documentación de [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) para que puedas aprender más de ella. Muchas gracias por llegar hasta aquí, no dejes de seguir aprendiendo.
## Referencias y recursos
- [https://web.dev/viewport-units/](https://web.dev/viewport-units/)
- [https://ishadeed.com/article/new-viewport-units/](https://ishadeed.com/article/new-viewport-units/)