import './style.css';

function Click() {
  this.handlers = [];
}

Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter((handler) => handler !== fn);
  },

  fire: function (o, thisObj) {
    const scope = thisObj || window;
    this.handlers.forEach((handler) => handler.call(scope, o));
  },
};

function runListener() {
  const clickHandler = (item) => {
    console.log('fired: ' + item);
  };

  const click = new Click();

  click.subscribe(clickHandler);
  click.fire('event #1');

  click.unsubscribe(clickHandler);
  click.fire('event #2');

  click.subscribe(clickHandler);
  click.fire('event #3');
}

runListener();
