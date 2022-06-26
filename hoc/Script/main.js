
var x = 2;
const z = 2.5;

function add(a, b) {
    return a + b
}

function display() {
    document.writeln('tong 2 so: ' + add(10, 5))
}

display()

var input = 'owowoowoowow.jpg'

var pattern = /\.(jpg|png|gif)$/

if (pattern.test(input)) {
    document.writeln('hop le')
} else document.writeln('ko hop le')