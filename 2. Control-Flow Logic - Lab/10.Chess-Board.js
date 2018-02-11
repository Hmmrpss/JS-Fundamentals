function printBoard(n){
  let html = '';
  let color = '';
  html += '<div class="chessboard">\n';
    for (var i = 1; i <= n; i++) {
      html += ' <div>\n';
      for (var j = 1; j <= n; j++) {
        if((i+j) % 2 == 0){
          color = 'black';
        } else {
          color = 'white';
        }
        html += `   <span class="${color}"></span>\n`;
      }
      html += ' </div>\n';
    }
    html += '</div>';
    return html;
}
