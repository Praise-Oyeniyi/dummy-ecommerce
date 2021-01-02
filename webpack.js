import "core-js/stable";
import "regenerator-runtime/runtime";
import './assets/css/main.css';
import './assets/js/main.js';
import './assets/js/fetch.js';

requireAll(require.context('./assets/images/', true, /\.(svg|gif|png)$/));

// UTILITY FUNCTION: to require contents of a whole directory
function requireAll(r) { r.keys().forEach(r); }
