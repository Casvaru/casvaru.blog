---
id: 'a2'
picture: '/pictureCarlosSegura.jpeg'
socialLinkMain: 'https://www.linkedin.com/in/casvaru/'
title: 'Subtítulos en vídeos HTML'
description: 'Mejora la accesibilidad de tu web agregando subtítulos a tus vídeos de manera sencilla.'
pubDate: 'Mar 29 2024'
author: 'Carlos Segura'
timeToRead: 8
---
## Introducción
Mejorar la accesibilidad a tu sitio web es muy importante para que el motor de búsqueda te indexe más arriba en los resultados de búsqueda, o para mejorar la interacción con tus visitantes o para personas que tienen alguna discapacidad o no cuentan con algún equipo que pueda brindarles la experiencia completa a visitar tu web, por ejemplo si algún visitante no cuenta con un equipo de sonido para escuchar el vídeo y tenga que apoyarse de los subtítulos.

## Etiqueta Track

```html
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español">
```
La etiqueta ``<track>`` se utiliza como elemento hijo de las etiquetas ``<video>`` y ``<audio>`` esto permite crear pistas de texto cronometradas desde un archivo de texto gracias al formato <strong>Web Video Text Tracks Format (WebVTT)</strong> este formato ya desde hace mucho tiempo y es soportado por la gran mayoría de navegadores, al día de hoy cerca del <b>98%</b> de los navegadores según <a href="https://caniuse.com/webvtt" target="_blank">mdn</a>.

## Atributos

``default``:
Este atributo indica que la pista debe habilitarse a menos que las preferencias del usuario indiquen que otra pista es más apropiada. Esto solo se puede usar en un elemento ``track`` por elemento multimedia.<br><br>
``kind``:
Cómo debe usarse la pista de texto. Si se omite, el tipo predeterminado es ``subtitles``. Si el atributo contiene un valor no válido, utilizará ``metadata`` (las versiones de Chrome anteriores a la 52 trataron un valor no válido como ``subtitles``). Se permiten las siguientes palabras clave:<br><br>
<ul>
  <li><code>subtitles</code>
      <ul>
      <li>Los subtítulos proporcionan traducción de contenido que el espectador no puede entender. Por ejemplo, habla o texto que no está en inglés en una película en inglés.</li>
      <li>Los subtítulos pueden contener contenido adicional, generalmente información de fondo adicional. Por ejemplo, el texto al comienzo de las películas de Star Wars, o la fecha, la hora y la ubicación de una escena.</li>
      </ul>
    <li><code>captions</code>
      <ul>
        <li>Los subtítulos ofrecen una transcripción y posiblemente una traducción del audio.</li>
        <li>Puede incluir información no verbal importante, como pistas musicales o efectos de sonido. Puede indicar la fuente de la señal (por ejemplo, música, texto, personaje).</li>
        <li>Adecuado para usuarios sordos o cuando el sonido está silenciado.</li>
      </ul>
    </li>
      <li><code>descriptions</code>
      <ul>
        <li>Descripción textual del contenido del video.</li>
        <li>Apto para usuarios ciegos o cuando no se puede ver el vídeo.</li>
      </ul>
      </li>
      <li><code>chapters</code>
      <ul>
        <li>Los títulos de los capítulos están destinados a ser utilizados cuando el usuario navega por el recurso multimedia.</li>
      </ul>
      </li>
      <li><code>metadata</code>
        <ul>
          <li>Pistas utilizadas por los scripts. No visible para el usuario.</li>
        </ul>
      </li>
  </li>
</ul>

``label``:
Un título legible por el usuario de la pista de texto que utiliza el navegador cuando enumera las pistas de texto disponibles.

``src``
Dirección de la pista (archivo .vtt). Debe ser una URL válida. Este atributo debe especificarse y su valor de URL debe tener el mismo origen que el documento, a menos que el elemento principal <audio> o <video> del elemento track tenga un atributo de origen cruzado.

``srclang``
Idioma del texto de la pista. Debe ser una etiqueta de idioma BCP 47 válida. Si el atributo kind se establece en subtitles, se debe definir srclang.

Un elemento multimedia no puede tener más de un ``<track>`` con el mismo ``kind``, ``srclang`` y ``label``.
## Ejemplo HTML
```html
<video controls poster="/images/sample.webp">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.webm" type="video/webm" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  ...
</video>
```

## Comentar tus archivos vtt
Si desear agregar comentarios en tus archivos <b>WebVTT</b> lo puedes hacer como se muestra a continuación.

<ul>
  <li>Una sola línea</li>
  <pre><code>NOTE Esta es una nota</code></pre>
  <li>Múltiples líneas</li>
  <pre><code>NOTE Esta es una nota <br>en múltiples líneas</code></pre>
</ul>

## Ejemplo subtitles_es.vtt
```vtt
1
00:00:00,000 --> 00:00:05,000
¡Bienvenidos a nuestra aventura de viaje!

2
00:00:05,500 --> 00:00:10,000
Explora los impresionantes paisajes del Himalaya.

3
00:00:10,500 --> 00:00:15,000
Contempla el amanecer sobre el Monte Everest.

...
```

## Ejemplo de descriptions_es.vtt

```
WEBVTT

1
00:00:00,000 --> 00:00:05,000
Un documental sobre la cumbre más alta del mundo.

2
00:00:05,500 --> 00:00:10,000
Descubre los desafíos enfrentados por los alpinistas.

...

```

## Ejemplo de chapters_es.vtt

```
WEBVTT

1
00:00:00,000 --> 00:00:05,000
Introducción: Comienza la travesía

2
00:00:05,500 --> 00:00:10,000
Capítulo 1: Preparación en el Campamento Base

...
```

## Estila tus sutítulos

Algo que tal vez no te lo esperabas pero es posible, es estilar los subtítulos que acabas de crear, si deseas diferenciarte de los estilos por defecto del navegador entonces sigue estos pasos.

Puedes estilizar tus subtítulos desde css usando el pseudo-element `::cue` a la etiqueta ``video``

```css
// Estiliza tus subtítulos desde un archivo css.
video::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}

video::cue(b) {
  color: peachpuff;
}
```

Tmabién tienes la posibilidad de agregar los estilos en el mismo archivo `.vtt` utilizando como regla la palabra ``STYLE`` en tu archivo así como se muestra en el siguiente ejemplo.

```vtt
WEBVTT

STYLE
::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}
/* Style blocks cannot use blank lines nor "dash dash greater than" */

NOTE comment blocks can be used between style blocks.

STYLE
::cue(b) {
  color: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- Hello <b>world</b>.

NOTE style blocks cannot appear after the first cue.
```
También podemos utilizar identificadores dentro del archivo WebVTT, que se pueden utilizar para definir un nuevo estilo para algunas claves particulares en el archivo.

```vtt
WEBVTT

1
00:00.000 --> 00:02.000
That's an, an, that's an L!

crédit de transcription
00:04.000 --> 00:05.000
Transcrit par Célestes™
```
<br>

```css
::cue(#\31) {
  color: lime;
}
::cue(#crédit\ de\ transcription) {
  color: red;
}
```

## Demo sin subtítulos
<video mute controls>
  <source src="/subtitleDemo.mp4">
</video>

## Demo con subtítulos
Activa los subtítulos usando el botón de captions dentro de los controladores del vídeo.

<video mute controls >
  <source src="/subtitleDemo.mp4">
  <track kind="subtitles" src="/subtitlesDemo.vtt" srclang="es" label="Español" />
</video>

## Archivo demo.vtt
```vtt
WEBVTT

STYLE
::cue {
  background: rgba(0,0,0,.5);
}

00:00.000 --> 00:05.000
Esto son subtítulos de ejemplo usando <b>webvtt</b>.

00:05.000 --> 00:10.000
Muchas gracias por llegar hasta este punto en el artículo.

00:10.000 --> 00:14.000
<b>Sigueme en mis redes sociales un abrazo.</b>
```

## Referencias
<ul>
<li><a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/track" target="_blank">track: El elemento pista de texto incrustado</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API" target="_blank">Web Video Text Tracks Format (WebVTT)</a></li>
</ul>
