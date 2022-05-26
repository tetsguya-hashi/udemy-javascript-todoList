const addText = document.getElementById("add-text");

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化
  const inputText = addText.value;
  addText.value = "";
  createIncompleteList(inputText);
};
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (buttonName) => {
  const deleteTarget = buttonName.parentNode;
  document.getElementById("inconmplete-list").removeChild(deleteTarget);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  //button(完了)ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //完了ボタンクリックされたら
  completeButton.addEventListener("click", () => {
    //完了ボタン->親宅を未完了リストから削除
    deleteFromIncompleteList(completeButton);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //上記要素の中の最初の要素の中のテキスト取得
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    console.log(addTarget);
    //完了リストへテキスト追加
    const li = document.createElement("li");
    li.innerText = text;
    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //完了したTODOから戻すボタンで未完了へ戻す
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    div.appendChild(li);
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(div);
    // document.getElementById("conmplete-list").appendChild(div);
  });
  //button(削除)ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //親要素を削除
    deleteFromIncompleteList(deleteButton);
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
