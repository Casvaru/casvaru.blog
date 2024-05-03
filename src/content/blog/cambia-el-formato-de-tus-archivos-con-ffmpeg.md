---
picture: '/pictureCarlosSegura.jpeg'
socialLinkMain: 'https://www.linkedin.com/in/casvaru/'
title: 'Cambia el formato de tus archivos con ffmpeg'
description: 'Mejora tu eficiencia al momento de navegar y escribir en la terminal de Windows, utilizando la shell que más te guste, ya que sea el PowerShell u otra, solo necesitaremos instalar Windows terminal de la Microsoft Store.'
pubDate: 'Nov 22 2022'
author: 'Carlos Segura'
timeToRead: 5
---

## ¿Qué es ffmpeg?
Ffmpeg es un software libre que se utiliza para grabar, convertir y transmitir audio y vídeo. Incluye programas de línea de comando para realizar tareas de procesamiento de audio y vídeo, como codificar y decodificar archivos, convertir formatos, editar metadatos, capturar pantalla y crear imágenes fijas. Es utilizado en varias aplicaciones de edición de vídeo, transcodificación, streaming y grabación de pantalla. Es compatible con varios formatos de audio y vídeo, es desarrollado por una comunidad de desarrolladores y se distribuye bajo licencia GPL, [clic aquí](https://www.github.com/FFmpeg/FFmpeg) para ir al repositorio.

## Instalación

En tu buscador favorito buscamos **ffmpeg** puedes hacer [click aquí](https://ffmpeg.org/) para ir al sitio oficial, una vez en el sitio, clic en descargar, y escoges el sistema operativo de tu computadora.

## Windows

Pasamos el mouse por la imagen de windows y debajo hacemos clic en Windows builds from gyan.dev, nos llevará a la web donde tienes las últimas builds, bajamos un poco y le damos al segundo link ffmpeg-git-full.7z. Una vez tengas descargado el archivo .zip, lo descomprimes y renombras la carpeta como ffmpeg, ahora vamos a mover esa carpeta con Ctr+X y nos vamos a nuestro disco local C/: y allí pegamos la carpeta. Ahora para poder acceder a este fichero desde la consola necesitamos agregarlo como una variable de entorno en nuestra terminal, para ello presionamos la tecla de Windows y escribimos Variables de entorno Damos clic en Path y en el botón de editar, buscamos el botón que dice Nuevo te permitirá escribir una nueva variable de entorno para tu terminal, simplemente escribimos la ruta donde pegamos nuestra carpeta, en mi caso es `C:\ffmpeg\bin` así que la escribo tal cual en ese espacio con las mismas barras inclinadas, no confundir con las otras barras inclinadas e importante en la ruta que escribimos le damos acceso a la carpeta bin y listo.
<picture>
  <video loop autoplay muted src="/221122variables.webm">
</picture>

## Linux

Para la mayoría de distribuciones simplemente con descargar el archivo desde la página e instalarlo es suficiente, pero si deseas hacerlo desde la terminal puedes ejecutar el comando ``$ sudo apt install ffmpeg`` y con ``$ ffmpeg -version`` podrás ver la versión y confirmar que la instalación haya sido correcta.

## Mac

Descargas el archivo .zip directamente de la página, pasas el mouse por la imagen de apple y le das clic al link Static builds for macOS te redireccionara a otra página, bajas y clic en descargar zip, lo descomprimes, mueves el archivo al directorio de su elección y toma nota de ruta. Ya por último agregaremos el directorio a la ruta de variables, por ejemplo, si el binario de FFmpeg está en ``Users/test/local``, pruebe la instalación invocando ffmpeg desde la terminal.

## Tutorial

Una vez tengamos instalado en nuestro equipo ffmpeg ya dispondremos de esta herramienta para hacer muchas cosas desde la terminal, ya sea cambiar el aspect ratio de un vídeo, recortar, exportar algunos frames del vídeo entre muchas otras. En este artículo veremos como cambiar el formato de un archivo multimedia por otro.

Tendremos 2 caminos, abrir la terminal y navegador a la ruta donde se encuentren los archivos utilizando el comando `cd` o si tenemos la oportunidad clic derecho en la carpeta donde tenemos los archivos y abrimos la terminal para que nos deje en esa ruta. Una vez ahí es tan sencillo como escribir
```
$ ffmpeg -i entrada.mp4 salida.mp3
```

Lo que acabamos de escribir se traduce en primero llamar al programa ffmpeg seguido de un espacio -i que representa el input o entra da de nuestro archivo, seguido del nombre del archivo que deseamos tocar, y posteriormente el output o salida, le indicamos el nombre y la extensión a la que lo queremos cambiar, en este caso es de un .mp4 a un .mp3, pero lo podemos hacer con prácticamente cualquier formato de vídeo o imagen, solo le indicamos el archivo de entrada y el archivo de salida, este proceso va a tardar dependiendo de la duración del vídeo o el peso de tu imagen, no debe llevar más de 5 segundos si es una imagen estandar, pero si es una foto de alta resolución o un vídeo muy largo esto puede tardar un poco más, si deseas ver todos los formatos que soporta esta herramienta, en la consola escribe.

```
$ ffmpeg -formats
```