---
id: 'a6'
picture: '/pictureCarlosSegura.jpeg'
socialLinkMain: 'https://www.linkedin.com/in/casvaru/'
title: 'Viewport dinámico en CSS'
description: '¿Sabías de la existencia del viewport dinámico y otras formas de medirlo? Resulta conveniente usarlo en algunos casos para capturar correctamente el viewport cuando el navegador móvil tiene alguna barra adicional en su interfaz de usuario.'
pubDate: 'Jul 25 2023'
author: 'Carlos Segura'
timeToRead: 4
---
## Introducción
Me quedé sorprendido cuando, durante todo el tiempo que he estado estudiando y aprendiendo frontend cada día, no he encontrado nada sobre el viewport dinámico en CSS en ningún curso o en las documentaciones de [MDN](https://developer.mozilla.org/es/). Es realmente interesante lo que nos ofrece, así que permíteme contarte más al respecto.

Hasta ahora, siempre nos enseñaron a utilizar `vh` y `vw` para tomar el alto y ancho del viewport si deseamos que algún elemento tenga un tamaño específico según el tamaño del viewport o la pantalla del usuario. En las pantallas de escritorio, esto suele funcionar sin problemas, o al menos eso es lo que sé hasta el día de hoy. Sin embargo, en los navegadores móviles, podemos encontrar elementos adicionales en su interfaz de usuario, como menús que se ocultan al hacer scroll en la página. Nunca me había planteado la idea de que este elemento adicional que tapa parte del área donde se renderiza la página se contara como parte del viewport, ya que es un área no visible. Pero al leer algunos artículos que te compartiré al final de este post, descubrí que esta área adicional sí se cuenta como parte del viewport. Esto puede dar lugar a situaciones en las que al centrar un elemento verticalmente, este no se encuentre realmente centrado debido a que el elemento adicional del navegador ocupa espacio en el viewport. En consecuencia, puede que veas más píxeles de un lado que de otro debido a que parte del espacio lo ocupa este menú del navegador que estamos usando.

![Comparativa entre la altura esperada al usar 100vh y la realidad al tener una barra adicional en el navegador.](https://ishadeed.com/assets/new-viewport-units/viewport-units-height-3.png)

En esta imagen se puede ilustrar mejor la idea. Cuando el navegador tiene un menú que se oculta al hacer scroll, muestra el área completa del viewport.

![Comparativa del viewport antes y después de hacer scroll en el navegador.](https://ishadeed.com/assets/new-viewport-units/viewport-units-height-4.png)

Una vez que hemos comprendido el contexto, pasemos al objetivo principal de este artículo, que está hecho en español especialmente para ti <3. Quiero que conozcas estas medidas en caso de que no las hayas escuchado o visto antes. No te sugiero aplicarlas en todos tus proyectos de un día para otro. Primero, permíteme explicarte más al respecto, ya que resulta que el uso de esta medida dinámica tiene un costo mayor en el rendimiento de la página. Por lo tanto, debemos usarla en situaciones clave para que no impacte tanto en el rendimiento de tu sitio web, y eso también es algo importante para ti, ¿verdad?

## Unidades de medida small, large y dynamic viewport

Tenemos disponibles 3 nuevas unidades de medida que nos pueden ayudar en cada caso: `svh` (small viewport), `lvh` (large viewport) y `dvh` (dynamic viewport). Cada medida se puede representar de la siguiente manera:

```css
  section{
    height: 100svh; // small viewport
    height: 100lvh; // large viewport
    height: 100dvh; // dynamic viewport
  }
```

La medida `svh` toma el área del viewport que realmente se estaría viendo y no tiene en cuenta elementos adicionales de la interfaz de usuario, como el menú. La medida `lvh` toma el área máxima del viewport sin considerar elementos fijos de la interfaz de usuario. Por último, `dvh` es una combinación de estas dos medidas, pero más inteligente, ya que se adapta según el espacio disponible. Por ejemplo, si hay un menú adicional, no lo tendrá en cuenta y se comportará como `svh`. Pero si hacemos scroll y el menú del navegador se oculta, se adaptará y usará `lvh` para aprovechar el máximo espacio disponible en el viewport. En comparación con el tradicional `vh`, que se mantiene estático, el viewport dinámico se ajusta a las condiciones cambiantes. Aquí tienes una imagen que lo explica muy bien:

![Funcionamiento del viewport dinámico cuando un elemento se oculta al hacer scroll en la página.](https://ishadeed.com/assets/new-viewport-units/dynamic-viewport-css.png)

Puede que pienses que unos pocos píxeles no marcarán una gran diferencia, pero te aseguro que en términos de experiencia del usuario, puede ser crucial. Inconscientemente, podríamos estar generando sentimientos negativos en nuestros usuarios cuando navegan por nuestro sitio web. El ejemplo mencionado es muy típico al hablar de UX.

![Mejorando la UX de nuestro sitio web al usar esta propiedad.](https://ishadeed.com/assets/new-viewport-units/dynamic-viewport-css-modal.png)

Como podemos observar, al usar una medida fija como `vh`, podríamos estar obstaculizando la vista del usuario y hacer que botones o elementos importantes queden ocultos por los menús del navegador. Esto podría obligar al usuario a hacer un scroll innecesario para verlos, lo que no brindaría una buena experiencia. Estoy seguro de que en algún momento, al navegar por la web, has experimentado esto, perdiéndote algún detalle que estabas buscando debido a tener que hacer un ligero scroll.

## Rendimiento

Como hemos visto, el uso de esta medida puede mejorar la UX y UI de nuestras webs, pero mi recomendación es no usarla siempre en todas partes, ya que esta unidad se recalcula constantemente para determinar la mejor medida a usar en cada momento. Por lo tanto, es mejor utilizarla cuando sea realmente necesario para evitar que afecte el rendimiento de la web y la experiencia del usuario. Además, es importante no depender únicamente de esta medida, sino acompañarla con la medida tradicional `vh`, para garantizar que, en caso de que un usuario entre a un navegador que no soporte esta medida, el diseño de tu página no se rompa.

Si deseas conocer más sobre esta unidad de medida, te recomiendo visitar la documentación de [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) para aprender más
