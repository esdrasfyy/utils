(function () {
    const links = document.querySelectorAll('.hover-me');
    const cursor = document.querySelector('.cursor');

    const animateMe = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this;

        move = 20;
        xMove = x / width * (move * 2) - move;
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    links.forEach(link => link.addEventListener('mousemove', animateMe));
    links.forEach(link => link.addEventListener('mouseleave', animateMe));
    window.addEventListener('mousemove', editCursor);
})();