
function toUpper(input){
    return String(input).toUpperCase().split(/\W+/).filter(x => x !== '').join(', ');
}
