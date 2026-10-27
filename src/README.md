# Código fuente · MonkiSoft

Todo lo publicado en `rodalies.html` e `index.html` se genera desde aquí.

## Rodalies (`src/rodalies`)
- `rail.js`: trenes, paneles, estadísticas, avisos.
- `app.js`: mapa 3D (three.js).
- `template.html`: página y estilos.
- `i18n/`: idiomas. `t1.py` y `t2.py` tienen las traducciones (castellano → català, English). `build.js` las aplica al compilar.
- `worker.js`: puente de Cloudflare.
- `tests/`: pruebas con Chromium (Playwright) y datos de prueba.

Compilar:

    cd src/rodalies && npm install && python3 mk.py    # genera rodalies.html de prueba

La versión publicada la monta `rodalies-build/` (horarios del día incluidos), y la tarea diaria de GitHub la regenera.

## Catalunya Survival (`src/survival`)
Mapa de emergencia: `app.js`, `template.html`, `mk.py`, datos en `surv_data.json`.
