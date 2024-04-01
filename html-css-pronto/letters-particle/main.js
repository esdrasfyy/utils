function anim1(path) {
    path.style.transitionDelay = `${Math.random() * 200}ms`;
    path.style.transformOrigin = `${Math.random() * 50 + 25}% 0%`;
    path.style.transform = `scale(0) rotate(${Math.random() * 100 - 50}deg)`;
    path.style.fill = '#777';
    path.style.stroke = '#555';
  }
  
  function reset1(path) {
    path.style.transitionDelay = 0;
    path.style.transformOrigin = `50%`;
    path.style.transform = `scale(1) rotate(0)`;
    path.style.fill = '#273439';
    path.style.stroke = '#273439';
  }
  
  function anim2(path, i) {
    path.style.transitionDuration = '1000ms';
    path.style.transitionDelay = `${i * 50}ms`;
    path.style.transformOrigin = `50%`;
    path.style.transform = `scale(0) translateX(${100 + i * 20}px)`;
    path.style.fill = '#777';
    path.style.stroke = '#555';
  }
  
  
  function reset2(path) {
    path.style.transitionDuration = 0;
    path.style.transitionDelay = 0;
    path.style.transformOrigin = `50%`;
    path.style.transform = `scale(1) translateX(0)`;
    path.style.fill = '#273439';
    path.style.stroke = '#273439';
  }
  
  const anims = [anim1, anim2, anim1],
        resets = [reset1, reset2, reset1],
        buttons = Array.from(document.querySelectorAll('.button')),
        refresh = document.querySelector('.refresh')
  buttons.forEach((button, i) => {
    const submit = button.querySelector('.submit');
    let paths = button.querySelectorAll('path')
    submit.addEventListener('click', () => {
      paths.forEach((path, j) => {
        anims[i](path, j);
      });
      submit.style.backgroundColor = 'transparent';
      submit.style.opacity = '0';
    })
  })
  
  refresh.addEventListener('click', (e) => {
    buttons.forEach((button, i) => {
      const submit = button.querySelector('.submit');
      let paths = button.querySelectorAll('path')
      paths.forEach((path, j) => {
        resets[i](path, j);
      });
      setTimeout(() => {
        submit.style.backgroundColor = '#273439';
        submit.style.opacity = '1';
      }, 500)
    })
  })