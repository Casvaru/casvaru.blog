---
id: 'a1'
title: 'Crea shortcuts para tu PowerShell'
description: 'Mejora tu eficiencia al momento de navegar y escribir en la terminal de Windows, utilizando la shell que más te guste, ya que sea el PowerShell u otra, solo necesitaremos instalar Windows terminal de la Microsoft Store.'
pubDate: 'Nov 15 2022'
author: 'Carlos Segura'
timeToRead: 2
---

Si hablamos de ser más productivo en la línea de comandos de Windows, algo que nos puede ayudar mucho es poder saber y manejar los atajos de teclado que nos proporciona la terminal de Microsoft, y en este artículo no solo los vas a saber sino aún más importante los vas a poder personalizar a tu gusto simplemente editando un archivo .JSON

Lo primero que vamos a hacer es dirigirnos a la Microsoft Store y buscamos [Windows Terminal](https://www.microsoft.com/store/productId/9N0DX20HK701), la primera que nos aparece y que haya sido desarrollada por Microsoft, la descargan e instalan. Una vez instalada la abren y algo genial de esa terminal es que en la parte superior podremos contar con pestañas de navegación como en Firefox u otro navegador. Pero lo más importante y a lo que venimos es a crear atajos para esta terminal de Windows, nos dirigimos a la parte superior de la terminal y al lado donde abrimos las pestañas, encontrarás una flecha hacia abajo, le damos clic, se abriran más opciones, le damos a ajustes y allí en la parte inferior izquierda verás un engranaje con el texto Abrir archivo JSON le damos clic y nos abrirá la configuración de la terminal en nuestro editor de texto, en mi caso es visual studio code.

<picture>
  <video loop autoplay muted src="/public/221115demo.webm">
</picture>

Nos dirigimos al apartado de acciones y comandos en el JSON, de manera predeterminada estará en las primeras líneas, y como todo formato JSON estará estructurado con llaves, una clave y un valor, lo único que deseamos es crear un nuevo atajo. Para eso solo deben asignarle el comando y al frente de keys escribir el atajo de teclado que deseen. A continuación les dejaré una pequeña lista de comandos.
![Lista de comandos para shortcuts en powershell](/public/221115comandos.webp)