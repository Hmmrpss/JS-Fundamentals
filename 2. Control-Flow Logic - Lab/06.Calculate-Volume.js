function calculateCone(radius, height){
let d = 2 * radius;
let volume = (Math.PI * d * d * height) / 12;
let area = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
console.log(`volume = ${volume.toFixed(4)} \n area = ${area.toFixed(4)}`)
}
