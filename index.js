const express = require('express');
const app = express();
const port = 5000

app.get('/', (req, res) => {
  res.send(`🚀 Docker + Express 서버가 정상 동작합니다! 포트번호 ${port}`);
});

app.listen(port, () => {
  console.log(`서버 ${port}번 포트에서 실행중입니다!`);
});