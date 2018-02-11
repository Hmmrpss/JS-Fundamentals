function calculateArea(a, b, c){
let hp = (a + b + c) / 2;
return Math.sqrt(hp * (hp - a) * (hp - b) * (hp - c));
}
