---
id: 'a4'
picture: '/pictureCarlosSegura.jpeg'
socialLinkMain: 'https://www.linkedin.com/in/casvaru/'
title: 'Winget Instala programas en Windows de forma rápida y sencilla'
description: 'Winget es una herramienta de línea de comadnos que te permite instalar y administrar programas de manera eficiente en Windows. Con Winget, puedes ver una lista completa de todos los paquetes disponibles y filtrarlos para encontrar el que estás buscando, ver información detallada sobre un paquete específico y actualizar todos tus paquetes de manera sencilla.'
pubDate: 'Feb 05 2023'
author: 'Carlos Segura'
timeToRead: 6
---

## Introdución

¿Estás cansado de buscar por cada web e instalar manualmente programas en tu sistema operativo Windows? ¿Quieres una forma más rápida y eficiente de hacerlo? Entonces, debes conocer Winget, el administrador de paquetes de software para Windows.

Winget es un empaquetador de programas que usa la línea de comandos y permite buscar, instalar, desinstalar y actualizar programas de manera rápida y sencilla. Es una herramienta de código abierto y se encuentra disponible en [GitHub](https://github.com/microsoft/winget-cli).

Con Winget ya olvídate de ir a la página oficial y descargar el programa manualmente uno por uno, ahora solo necesitas abrir tu terminal y descargarlo con winget ya que cuenta con una gran librería de programas que puedes descargar utilizando la línea de comandos y sin exponerte a descargar algún programa con posible virus, por entrar accidentalmente a otra web, cabe recalcar que winget solo cuenta con programas gratuitos o de paga, pero en su versión de prueba, así que no cuentes con que puedas descargar Adobe Photoshop u otro programa de paga o suscripción.

## Instalación de Winget
  1. Descarga el archivo de instalación de Winget desde el sitio web de GitHub o desde la Microsoft Store que es la opción recomendada por los desarrolladores.
  2. Ejecuta el archivo de instalación descargado y sigue las instrucciones en pantalla para instalar Winget en tu sistema operativo Windows.
  3. Abre la ventana de comandos de Windows (cmd) o PowerShell y escribe el siguiente comando para verificar que Winget está instalado correctamente:

```
  winget -v
```

Si después de ejecutar el comando te muestra la versión y no un error de que no encuentra el comando en su path, entonces quiere decir que todo salió bien.
## Comandos escenciales

Vamos a hacer un repaso de los comandos más importantes que vas a hacer con winget una vez instalado, el primero buscar programas para instalar.

```
  winget search [name]
```

comentando un poco lo que hicimos fue acceder a winget seguido del método search y después el nombre del programa que desees buscar por ejemplo si quisieramos descargar blender, un programa gratuito para hacer modelación 3D sería lo siguiente: `winget search blender`
![Winget instalar paquete](/230205wingetinstall.webp)

Winget buscará en su repertorio todo los programas que lleven en su nombre la palabra que buscamos, se desplegarán todos los programas que coincidan con la búsqueda, como vemos hay 2 programas que nos sirve, el primero y el último, como podrás detallar son los mismos, solo cambian 2 factores que los diferencia y es el id y el Version Source, el id es el identificativo único, y el Source es la fuente donde lo va a descargar, si dice msstore significa que lo va a descargar desde la Microsoft Store, mientras que si dice Winget lo descargará desde su librería que está conectada a la página oficial, en este caso pueden escoger la que deseen, en mi caso esogeré la versión de winget y para la instalación solo necesitamos copiar el ID del programa y usar el comando.

```
  winget install BlenderFoundation.Blender 3.4.1
```
## Actualizar programas

Para ver las actualizaciones que tienes disponible para tus programas, sigue estos pasos:

  1. Abre la ventana de PowerShell.
  2. Escribe el siguiente comando:

```
  winget upgrade
```

Al ejecutar ese comando se mostrará todos los programas que tengas instalado y que winget los tenga en su base de datos, los comparará y te mostrará si hay una nueva versión para los programas que tengas instalado. Si deseas actualizar un programa en específico de la lista que se te va a desplegar, solo insertas `winget update [id_name]` en el ID_name copias el ID del programa así como hicimos anteriormente, si de lo contrario deseas actualizar todos los programas, escribe `winget upgrade -all` o `winget update`

## Desinstalar un programa

Si llegado el caso queremos desinstalar un programa que ya no estémos usando, puedes desinstalarlo desde tu panel de control como siempre se ha hecho, o si deseas hacerlo desde la terminal solo basta con escribir:

```
  winget uninstall [program_name]
```

Si llevamos este ejemplo a lo que hemos hecho hoy, sería. `winget uninstall blender`.


Muy bien, ya has conocido los comandos básicos de Winget, si quieres abarcar más opciones te dejo una lista para repasar lo aprendido y otros comandos que te van a ayudar con el gestor de paquetes más confiable para Windows.
Estos son los comandos básicos de Winget. Para obtener más información, consulte la documentación oficial en [https://docs.microsoft.com/en-us/windows/package-manager/winget/](https://docs.microsoft.com/en-us/windows/package-manager/winget/)