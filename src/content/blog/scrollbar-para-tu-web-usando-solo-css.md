---
id: 'a1'
picture: '/pictureCarlosSegura.jpeg'
socialLinkMain: 'https://www.linkedin.com/in/casvaru/'
title: 'Scrollbar para tu web usando solo CSS'
description: 'Cres un fácil y sencillo scrollbar usando solo HTML y CSS gracias a la propiedad de animation-timeline'
pubDate: 'Jan 06 2024'
author: 'Carlos Segura'
timeToRead: 3
---

## scroll-timeline
Esta nueva propiedad de CSS ``animation-timeline`` nos ayuda con la animación de elementos usando el control de progresión.

## Syntaxis
```css
/* Keyword */
animation-timeline: none;
animation-timeline: auto;

/* Single animation named timeline */
animation-timeline: --timeline_name;

/* Single animation anonymous scroll progress timeline */
animation-timeline: scroll();
animation-timeline: scroll(scroller axis);

/* Single animation anonymous view progress timeline */
animation-timeline: view();
animation-timeline: view(axis inset);

/* Multiple animations */
animation-timeline: --progressBarTimeline, --carouselTimeline;
animation-timeline: none, --slidingTimeline;

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;

```

## Compatibilidad
Al día de hoy la compatibilidad de esta propiedad es de un **69.08%** en CanIUse, lo puedes ver directamente [AQUÍ](https://caniuse.com/?search=animation-timeline)

## HTML

```html
<div class="scrollWatcher"></div>
```

## CSS

```css
.scrollWatcher{
  width: 100%;
  height: 6px;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  scale:0 1;
  animation: scrollTimeline linear;
  animation-timeline: scroll();
  transform-origin: left;
}
@keyframes scrollTimeline{
  to{scale: 1 1;}
}
```
## Referencias y recursos
- [MDN animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)