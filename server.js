const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 同じフォルダにある index.html を表示する設定
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`サーバーが起動しました！ http://localhost:${port} にアクセスしてください`);
});