const handshake = new Postmate.Model({
    write: (data) => {
      const input = document.querySelector("[data-focused='true']");
      if (!input) return
      input.value = data
    }
  });

  handshake.then(parent => {
    window.addEventListener('focusin', e => {
      const input = document.querySelector("[data-focused='true']");
      if (input) {
        input.removeAttribute('data-focused');
      }
      const el = e.target
      const type = el.type;
      if (type !== 'text' && type !== 'password' && type !== 'textarea') return
      el.setAttribute('data-focused', true);
      parent.emit('iframe-focus', el.value);
    });
  });