import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App.js';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter,
});

export function bootstrap(props) {
    return reactLifecycles.bootstrap(props);
}

export function mount(props) {
    return reactLifecycles.mount(props);
}

export function unmount(props) {
    return reactLifecycles.unmount(props);

}

function domElementGetter() {
    /**
     * We create a new element and attach it to the dom. 
     * This is to prevent the chance that the element 
     * we want to mount to is not in the dom
     */
    let el = document.getElementById('app3');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app3';
        document.body.appendChild(el);
    }

    return el;
}