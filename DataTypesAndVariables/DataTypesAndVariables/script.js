var object = {
    array: [true, 1, 'Пешо плет плете, през пет плета преплита.', 1.234],
    bool: true,
    integer: 5,
    floating: 0.123,
    func: function() {alert("I'm a function.")},
    string: 'Hello, "JavaScript"!',
    nullable: null,
    undefined: undefined
};

document.body.innerHTML += '<div>var object = {</div>';
for (var key in object) {
    if (object.hasOwnProperty(key)) {
        document.body.innerHTML += '<div>' + key + ': ' + object[key] + ',</div>';
    }
}
document.body.innerHTML += '<div>};</div>';

document.body.innerHTML += '<div>Type of object is "' + typeof object + '".</div>';
for (var key in object) {
    if (object.hasOwnProperty(key)) {
        document.body.innerHTML += '<div>Type of object.' + key + ' is "' + typeof object[key] + '".</div>';
    }
}