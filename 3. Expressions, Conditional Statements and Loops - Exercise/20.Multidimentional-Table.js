function printTable(size){
  let html = `<table border="1"><tr><th>x</th>`;

  for (var i = 1; i <= size; i++) {
    html += `<th>${i}</th>`;
  }
  html += `</tr>`;

  for (var i = 1; i <= size; i++) {
    html += `<tr><th>${i}</th>`;

    for (var j = 1; j <= size; j++) {
      html += `<td>${i*j}</td>`;
    }
    html += `</tr>`;
  }
  html += `</table>`;

  return html;
}
