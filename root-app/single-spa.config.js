import { registerApplication, start } from 'single-spa';
import 'core-js';
import 'regenerator-runtime/runtime';


registerApplication(
  'one',
  async () => await SystemJS.import('http://localhost:3032/static/js/main.js').default,
  () => location.pathname === '/' || location.pathname.startsWith('/one')
);

registerApplication(
  'two',
  async () => await SystemJS.import('http://localhost:3031/static/js/main.js').default,
  () => location.pathname.startsWith('/two')
);

registerApplication(
  'three',
  async () => await SystemJS.import('http://localhost:3033/static/js/main.js').default,
  () => location.pathname.startsWith('/three')
);


start();