import { registerApplication, start } from 'single-spa';
import * as serviceWorker from './serviceWorker';

registerApplication(
    'one',
    () => import('./app.one.js'),
    () => true
);

start();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
