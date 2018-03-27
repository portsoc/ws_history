(() => {
    let r, g, b, main, headline, remember;

    function toHex(elem) {
        return `0${parseInt(elem.value).toString(16)}`.substr(-2);
    }

    function switchCol() {
        let color = parseInt(r.value) + parseInt(g.value) + parseInt(b.value) < 384 ? 'white' : 'black';
        current = toHex(r) + toHex(g) + toHex(b);
        main.style = `background-color: #${current}; color: ${color}`;
        headline.textContent = current;
        document.title = `ColorServer/${current}`;
    }

    function initValues(col) {
        r.value = parseInt(col.slice(0, 2), 16);
        g.value = parseInt(col.slice(2, 4), 16);
        b.value = parseInt(col.slice(4, 6), 16);
    }

    function pushIt() {
        history.pushState(current, `ColorServer/${current}`, current);
    }

    function popIt(e) {
        console.log('popped');
        //        initValues(event.state);
        initValues(window.location.pathname.slice(1, 7));
        switchCol();
    }

    function init() {
        // prepare vars
        r = document.querySelector('#r');
        g = document.querySelector('#g');
        b = document.querySelector('#b');
        main = document.querySelector('body');
        remember = document.querySelector('#remember');
        headline = document.querySelector('#headline');

        // listen for changes to ranges
        let ranges = document.querySelectorAll('[type=range]');
        for (let range of ranges) {
            range.addEventListener('input', switchCol);
        }

        remember.addEventListener('click', pushIt);

        window.addEventListener('popstate', popIt);

        initValues(window.location.pathname.slice(1, 7));
        switchCol();
    }

    window.addEventListener('load', init);
})();
