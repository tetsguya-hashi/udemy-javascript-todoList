const addText = document.getElementById("add-text");
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化
  const inputText = addText.value;
  addText.value = "";
  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  //ulタグの子要素にdiv
  document.getElementById("inconmplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
