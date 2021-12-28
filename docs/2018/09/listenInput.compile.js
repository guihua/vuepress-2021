'use strict';

function listenInput(dom, callback) {
  const _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const _ref$timeout = _ref.timeout;
  const timeout = _ref$timeout === undefined ? 300 : _ref$timeout;
  const _ref$useCompositionEv = _ref.useCompositionEvent;
  const useCompositionEvent = _ref$useCompositionEv === undefined ? true : _ref$useCompositionEv;

  let value = '';
  let inInputEvent = false;
  let inCompositionEvent = false;
  const trigger = createDelayFunction(valueChanged, timeout);

  // Return a function that can remove listeners added here.
  return enabledEvent(dom);

  function valueChanged(val) {
    if (val === value) {
      return;
    } else {
      value = val;
    }

    callback(value, {
      dom,
    });
  }

  function enabledEvent(dom) {
    dom.addEventListener('keyup', keyup);
    dom.addEventListener('input', input);

    useCompositionEvent && dom.addEventListener('compositionstart', compositionstart);
    useCompositionEvent && dom.addEventListener('compositionend', compositionend);

    return function () {
      dom.removeEventListener('keyup', keyup);
      dom.removeEventListener('input', input);

      useCompositionEvent && dom.removeEventListener('compositionstart', compositionstart);
      useCompositionEvent && dom.removeEventListener('compositionend', compositionend);
    };

    function keyup() {
      if (inInputEvent) {
        dom.removeEventListener('keyup', keyup);
      } else {
        trigger(this.value);
      }
    }

    function input() {
      if (!inInputEvent) {
        inInputEvent = true;
      }

      if (!inCompositionEvent) {
        trigger(this.value);
      }
    }

    function compositionstart() {
      inCompositionEvent = true;
    }

    function compositionend() {
      inCompositionEvent = false;
      trigger(this.value);
    }
  }
}

function createDelayFunction(fn) {
  const timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  let timeoutId = -1;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, timeout);
  };
}
