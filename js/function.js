function getTextById(id) {
  const data = document.getElementById(id);
  const text = data.innerText;
  return text;
}
function getNumberById(id) {
  const data = document.getElementById(id);
  const textofData = data.innerText;
  const number = parseInt(textofData);
  return number;
}
function setInnerText(id, value) {
  const data = document.getElementById(id);
  data.innerText = value;
}

function incrementCount(id) {
  let number = getNumberById(id);
  number++;
  setInnerText(id, number);
}

function decrementCount(id) {
  let number = getNumberById(id);
  number--;
  setInnerText(id, number);
}
