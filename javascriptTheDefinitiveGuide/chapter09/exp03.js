// 表示复数的类；
function Complex(real, imaginary) {
    if(isNaN(real) || isNaN(imaginary)){
        throw new TypeError();
    }
    this.r = real;
    this.i = imaginary
}
/**
 * 实例方法：复数加法
 */
Complex.prototype.add = function(that){
    return new Complex(this.r+ that.r, this.i+ that.i)
};
/**
 * 实例方法：复数减法
 */
Complex.prototype.sub = function(that){
    return new Complex(this.r- that.r, this.i- that.i)
}

Complex.prototype.mul = function(that){
    return new Complex(this.r*that.r - this.i * that.i, this.r*that.i+this.i*that.r)
}

Complex.prototype.mag = function(){
    return Math.sqrt(this.r*this.r + this.i*this.i);
}
Complex.prototype.neg = function(){
    return new Complex(-this.r, -this.i);
}
Complex.prototype.toString = function(){
    return "{" + this.r + "," + this.i + "}";
}
Complex.prototype.equals = function(that){
    return that != null && that.constructor === Complex && this.r === that.r && this.i === that.i;
}
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

Complex.parse = function(s){
    try{
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[1]), parseFloat(m[2]));
    }catch(x){
        throw new TypeError("Can't parse '" + s + "' as a complex number.");
    }
}
Complex._format = /^\{([^,]+),([^}]+)\}$/;


var c = new Complex(2,3);
var d = new Complex(c.i, c.r);
console.log(c.add(d).toString())
console.log(Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO))

// 可以模拟，但不推荐
Complex.prototype.toString = function(){
    with(this){
        return "{" + r + "," + i + "}";
    }
}