# Andana

Trenes de Rodalies en directo. Diseño de andén: negro, gris neutro y un único acento ámbar, como la línea de seguridad del andén. Fuente de la verdad: `template.html` (bloque de tema al final del `<head>`) y `rail.js`, versión 1.295.

## Principios

- **Un solo acento.** El ámbar (`accent`) marca lo que es *tuyo*: el tren fijado, la pestaña activa, el botón principal. Si todo es ámbar, nada lo es.
- **Neutros, no azules.** Fondos y superficies son grises puros (`bg`, `surface`, `surface-2`). La paleta navy anterior está retirada.
- **El color significa estado, nunca decoración.** Verde (`ok`) llegas, naranja (`warn`) retraso o servicios mínimos, rojo (`bad`) no hay tren. Una huelga con servicios mínimos es naranja, no roja.
- **Sólido, sin cristal.** Sin `backdrop-filter` (retirado en 1.295 por batería). Sin degradados salvo los del bloque "Sal en".
- **Las líneas usan su color oficial** (`line-R1`…): solo en chips, trazado del mapa y columnas 3D, nunca como fondo de texto largo.

## Tipografía

Familia `Andana` = Barlow Semi Condensed 500 / 600 / 700, embebida (latin + latin-ext para el catalán). Cifras siempre `font-variant-numeric: tabular-nums` para que las horas no bailen.

- Nombres de estación en MAYÚSCULAS, `letter-spacing: .02em` (estilo `estacion`, 19px).
- Pestañas en MAYÚSCULAS, `.06em`, 11px (estilo `pestana`).
- El tamaño sigue el texto dinámico del iPhone (`window.__txt`); estos valores son el tamaño base.

## Forma y espacio

- `radius-md` 8px para todo lo rectangular; `radius-pill` para chips y el número de tren.
- Bordes de 1px en `line`; sin sombras.
- Espaciado en pasos de 4: `space-1` 4px, `space-1-5` 6px (el hueco más común), `space-2` 8px, `space-3` 12px.

## Iconografía

27 iconos SVG de trazo, `stroke: currentColor`, que sustituyen a los emojis mediante el iconizador (`ICP` + `iconize()` en `rail.js`). Nunca emojis en la interfaz.

## Icono y pantalla de carga

- Icono oficial: **vía en perspectiva**. Fondo `bg` oscuro (#0a0a0a), raíles en `ink` (#ececec) que se estrechan hasta juntarse arriba, cuatro traviesas en `accent` que se acortan. Variante 1B «profundidad»: raíles en degradado de #6b6b6b (horizonte) a #f5f5f5 (delante) y traviesas de #a35c00 a #ffc233, como la luz que se apaga con la distancia. Es la única excepción a «sin degradados»: solo en el icono. Sin texturas, cuadrado de 1024 px sin esquinas (iOS pone la máscara). Archivo: `icono-1024.png`.
- Alternativa guardada: el mismo dibujo en negro sobre fondo ámbar.
- Pantalla de carga: el mismo dibujo, 120 pt, centrado sobre #0a0a0a. Se quita en cuanto llegan los datos en directo, como mucho a los 4 s.

## Contraste (WCAG 2.1)

- `ink` sobre `bg`: 16,8:1 oscuro, 16,3:1 claro.
- `accent` claro (#a35c00) sobre `bg`: 4,5:1, aprobado justo.
- **Falla:** `muted` claro (#7a7a7a) da 3,8:1 sobre `bg`. Cambiar a #6b6b6b (4,7:1) en el próximo retoque.
- **Ojo:** `bad` oscuro (#dc2626) da 3,8:1 como texto; válido solo en iconos o texto ≥18px.
- Texto blanco sobre `ok-fill` claro (#16a34a): 3,3:1, válido solo porque el "Sal en" es ≥19px negrita.

## Cómo retocar

Cambia el valor aquí y en el bloque de tema de `template.html` (variables `--acc2`, `--tabbg` y los hex neutros) a la vez, y pasa la prueba de contraste `t89` antes de publicar.
