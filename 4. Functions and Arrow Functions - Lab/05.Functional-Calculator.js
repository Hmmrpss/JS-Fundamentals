function calculate(a, b, operator){
switch (operator) {
  case '+': return +a + +b; break;
  case '-': return a - b; break;
  case '*': return a * b; break;
  case '/': return a / b; break;
  case '%': return a % b; break;
}
}
