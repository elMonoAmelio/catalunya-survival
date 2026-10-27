# Andana · app iOS (MonkiSoft)

App no oficial de Rodalies. Lleva dentro la misma web que `rodalies.html`: cuando la web cambia (o se actualizan los horarios cada día), GitHub actualiza también la copia de la app (`ios/App/App/public/index.html`).

## Primera vez (en el Mac)
1. Clonar el repositorio:
   `git clone https://github.com/elMonoAmelio/catalunya-survival.git`
2. Abrir en Xcode el archivo `andana/ios/App/App.xcodeproj`.
3. Xcode descarga solo Capacitor (Swift Package Manager): no hace falta CocoaPods ni Node.
4. En **Signing & Capabilities**: Team = tu Apple ID (cuenta gratuita sirve para probar en tu iPhone).
5. Conectar el iPhone, elegirlo arriba y pulsar ▶.
   La primera vez, en el iPhone: Ajustes → General → VPN y gestión de dispositivos → confiar en tu Apple ID.

## Cada vez que haya cambios
`git pull` en la carpeta del repositorio y ▶ en Xcode.

## Datos
- Identificador: `com.monkisoft.andana` (fijo para siempre desde la primera subida a App Store Connect).
- Idiomas: català (principal), castellano, English.
- Con la cuenta gratuita de Apple la app caduca a los 7 días: vuelve a pulsar ▶.
