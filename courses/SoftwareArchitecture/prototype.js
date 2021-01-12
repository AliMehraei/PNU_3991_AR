let FamilyCar = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
}

FamilyCar.prototype = function() {

    let go = function() {
        // حرکت چرخهای خودرو - حرکت خودرو
    };

    let stop = function() {
        // ترمز گرفتن - توقف
    };

    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    }
}();