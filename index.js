var l = document.querySelectorAll('.drum').length;
for (var i = 0; i < l; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var d = this.innerHTML;
        makeSound(d);
        buttonanimation(d);
    });
}
document.addEventListener('keypress', function (event) {
    makeSound(event.key);
    buttonanimation(event.key);
}
);
function makeSound(d) {
    switch (d) {
        case 'w':
            var a = new Audio('sounds/tom-1.mp3');
            a.play();
            break;

        case 'a':
            var a = new Audio('sounds/tom-2.mp3');
            a.play();
            break;

        case 's':
            var a = new Audio('sounds/tom-3.mp3');
            a.play();
            break;

        case 'd':
            var a = new Audio('sounds/tom-4.mp3');
            a.play();
            break;

        case 'j':
            var a = new Audio('sounds/snare.mp3');
            a.play();
            break;

        case 'k':
            var a = new Audio('sounds/crash.mp3');
            a.play();
            break;

        case 'l':
            var a = new Audio('sounds/kick-bass.mp3');
            a.play();
            break;


        default:
            console.log();
    }
}
function buttonanimation(key)
{
    var activebutton = document.querySelector('.' + key);
    activebutton.classList.add('pressed');
    setTimeout(function() 
    {
        activebutton.classList.remove('pressed');
    },100);
}