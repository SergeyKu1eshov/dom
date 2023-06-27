// BEGIN
export default function convertTextToParagraphs(document) {
    const divs = Array.from(document.querySelectorAll('div'));
    divs.forEach(div => {
    const childNodes = Array.from(div.childNodes);
    childNodes.forEach(node => {
    if (node instanceof Text) {
    const text = node.textContent.trim();
    if (text) {
    const p = document.createElement('p');
    p.textContent = text;
    node.replaceWith(p);
    }
    }
    });
    });
    }
// END