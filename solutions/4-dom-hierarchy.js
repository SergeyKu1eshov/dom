// BEGIN
export default elementDOM => Array.from(elementDOM.querySelectorAll("p"), el => el.textContent.trim());
// END