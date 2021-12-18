class Dom {
    _listeners = {};

    addEventListener(eventName, handler) {
        if (!this._listeners[eventName]) {
            this._listeners[eventName] = [ ];
        }

        this._listeners[eventName].push(handler);
    }

    trigger(eventName, ...values) {

    }
}

const dom = new Dom();

dom.addEventListener('click', (ev) => {
    console.log(`Click on ${ev.target}!`);
});
dom.addEventListener('hover', (ev) => {
    console.log(`Hover on: ${ev.target}!`);
});

dom.addEventListener('click', (ev) => {
    console.log(`Click but, this is another action for: ${ev.target}!`);
});

dom.trigger('click', { target: 'button' });
dom.trigger('hover', { target: 'div' });
