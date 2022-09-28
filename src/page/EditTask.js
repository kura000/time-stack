import React from 'react';

const EditTask = () => (
  <div>
    <h2>This is register and edit page</h2>
    <p>以下の項目を設定・編集しタスクを登録/更新することができる</p>
    <ol>
      <li>タスク名</li>
      <li>目標時間</li>
      <li>メモ</li>
    </ol>
    <form>
      <ul>
        <li>
          <label for="taskName">タスク名：</label>
          <input type="text" name="taskName" />
        </li>
        <li>
          <label for="targetTime">目標時間：</label>
          <input type="number" name="targetTime" />H
        </li>
        <li>
          <label for="memo">メモ：</label>
          <textarea name="memo" />
        </li>
      </ul>
      <button>登録/更新</button>
    </form>
  </div>
);

export default EditTask;