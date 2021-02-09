/*//FILTER
document.addEventListener('DOMContentLoaded', function() {
    const SELECTS = document.querySelectorAll('select.linked__data, input.linked__data');
    console.log(SELECTS);
    const LIST = document.querySelectorAll('#result .filtered');
    let currentIndex = 0;

    function filterList(event, index) {
        const query = [];
        const filtered = new Set();
        currentIndex = index;

        SELECTS.forEach(function(select, index) {
            if (index > currentIndex) select.value = '';
            if (select.value) query.push(select.value);
        });

        LIST.forEach(function(product, index) {
            if (query.every(prop => product.classList.contains(prop))) {
                product.classList.forEach(item => filtered.add(item));
                product.classList.remove('hide');
            } else {
                product.classList.add('hide');
            }
        });

        let i = currentIndex + 1;

        for (i; i < SELECTS.length; i++) {
            Array.from(SELECTS[i].options)
                .forEach(function(option) {
                    if ('' == option.value || filtered.has(option.value)) {
                        option.hidden = '';
                    } else {
                        option.hidden = 'hidden';
                    }
                });
        }
    }

    SELECTS.forEach(function(item, index) {
        item.addEventListener('input', (event) => filterList(event, index));
    });
});
 */
document.addEventListener('DOMContentLoaded', function() {
    const SELECTS = document.querySelectorAll('select.linked__data, input.linked__data');
    console.log(SELECTS);
    const LIST = document.querySelectorAll('#result .filtered');
    let currentIndex = 0;

    function filterList(event, index) {
        const query = [];
        const filtered = new Set();
        currentIndex = index;

        SELECTS.forEach(function(select, index) {
            if (index > currentIndex) select.value = '';
            if (select.value) query.push(select.value);
        });

        LIST.forEach(function(product, index) {
            if (query.every(prop => product.classList.contains(prop))) {
                product.classList.forEach(item => filtered.add(item));
                product.classList.remove('hide');
            } else {
                product.classList.add('hide');
            }
        });

        let i = currentIndex + 1;

        for (i; i < SELECTS.length; i++) {
            Array.from(SELECTS[i].options)
                .forEach(function(option) {
                    if ('' == option.value || filtered.has(option.value)) {
                        option.hidden = '';
                    } else {
                        option.hidden = 'hidden';
                    }
                });
        }
    }

    SELECTS.forEach(function(item, index) {
        item.addEventListener('input', (event) => filterList(event, index));
    });
});