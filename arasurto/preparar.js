// MonkiSoft · copia la web de Rodalies (rodalies.html) dentro de la app
const fs = require('fs'), path = require('path');
fs.mkdirSync(path.join(__dirname, 'www'), { recursive: true });
fs.copyFileSync(path.join(__dirname, '..', 'rodalies.html'), path.join(__dirname, 'www', 'index.html'));
console.log('www/index.html actualizado');
