import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

function domElementGetter() {
    /**
     * We create a new element and attach it to the dom. 
     * This is to prevent the chance that the element 
     * we want to mount to is not in the dom
     */
    var ordersAppContainer = document.createElement('div');
    ordersAppContainer.setAttribute('id', 'appOne');
    document.body.appendChild(ordersAppContainer);
    return document.getElementById("appOne");
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter,
});

export const bootstrap = [
    () => {
        return Promise.resolve()
    },
    reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];