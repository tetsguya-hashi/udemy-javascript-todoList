const addText = document.getElementById("add-text");
const onClickAdd = () => {
  const inputText = addText.value;
  addText.value = "";
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
