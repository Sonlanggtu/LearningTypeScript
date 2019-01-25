function testfunc(check) {
    var debug = 'chvc';
    if (check === "test") {
        debug = 'Yes';
    }
    else {
        debug = 'No';
    }
    console.log(debug);
}
testfunc('tt');
