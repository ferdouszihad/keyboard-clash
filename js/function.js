function getIdText(id) {
  const data = document.getElementById(id);
  const text = data.innerText;
  return text;
}
function getIdNumber(id) {
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
  const number = getIdNumber(id);
  number++;
  setInnerText(id);
}
function decrementCount(id) {
  const number = getIdNumber(id);
  number--;
  setInnerText(id);
}
