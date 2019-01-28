var cookieParser = require("cookie-parser");
const createError = require("http-errors");
// expressの呼び込み
const express = require("express");
// PORTの設定
// もしenvにportが確立したらそのポートを、していなかったら8080を使う
const port = process.env.PORT || 8080;
// express()のインスタンス
const app = express();
app.use(require("connect-history-api-fallback")());
// どこにアクセスさせるかの設定
// distフォルダ：コンパイルされたファイルが入る場所
app.use(express.static(__dirname + "/dist/"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// SPAの時、ルーティングがうまくいかない時があるので以下の設定
// これをしていないと、https://~~~/aboutとかに行った時にリロードするとエラーがでる
// SPAだとaboutファイルを直で読み込んでいないから
// これでルート以外でリロードしてもindex.htmlを読み込んでちゃんとルーティングをしてくれる
// /.*/で全てのルートを指定。req(request), res(response)
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

app.use(function(req, res, next) {
  next(createError(404));
});
// 一番上で指定したportをlisten
app.listen(port);

// 動いてるかどうかconsoleで見る
console.log("Server is up!!");
