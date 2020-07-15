// console.log('hello')

var count;
// const countDisplay = document.getElementById("count");
// countDisplay.innerHTML = count;
function Counter() {}

Counter.prototype = {
    count: 0,
    hasLimit: false,
    countUp: () => { this.count += 1 },
    countDown: () => { this.count == 0 ? count = 0 : count -= 1 },
    clear: () => { this.count = 0 }
}


$(document).ready(() => {
    count = localStorage.getItem('count') || 0

    $('#count').text(count)

    $('#count-up').on('click', () => {
        count = parseInt(count) + parseInt(1)
    })

    $('#count-down').on('click', () => {
        (count == 0) ? 0 : count -= 1
    })

    $('#clear').on('click', () => {
        count = 0
    })

    $('.controls button').on('click', () => {
        $('#count').text(count)
        localStorage.setItem('count', count);
    })

    // function starFlicker() {
    //     console.log('stars will flicker')
    //     $('.star').css('animation', )
    // }
})
