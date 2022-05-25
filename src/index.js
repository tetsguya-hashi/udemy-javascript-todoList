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
  //button(完了)ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const div = document.createElement("div");
    const conpleteList = document
      .getElementById("complete-list")
      .appendChild(div);

    console.log(conpleteList);
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("inconmplete-list").removeChild(deleteTarget);
  });
  //button(削除)ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //親要素を削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("inconmplete-list").removeChild(deleteTarget);
  });
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //ulタグの子要素にdiv
  document.getElementById("inconmplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
