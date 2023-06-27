// BEGIN
const text = document.body.innerHTML.trim().split("\n").map(el => `<p>${el.trim()}</p>`).join("");
document.body.innerHTML = text;
// END