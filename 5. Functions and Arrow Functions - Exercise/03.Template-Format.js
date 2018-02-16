function generateQuizTemplateXML(input){
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>\n`;
  for (let i = 0; i < input.length; i+=2) {
    let question = input[i];
    let answer = input[i+1];
    xml += `<question>\n\t\t${question}\n\t</question>\n\t<answer>\n\t\t${answer}\n\t</answer>\n`;
  }
  xml += `</quiz>`;
  return xml;
}
