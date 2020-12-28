# stein-nodejs-sample

[Stein](https://steinhq.com/) + Node.js でGoogleスプレッドシートに読み書きをするサンプルソースです。

## インストール

```
npm install
```

## 準備

### API URLを発行

https://steinhq.com/ からサインアップ、スプレッドシートを登録し、`API URL`を発行する。

```
https://api.steinhq.com/v1/storages/xxxxxxxxxxxxxxxxxxxxxxxx
```

### `.env`ファイルを作成

`.env.sample`をコピーし、`.env`を作成する。

`API_URL`を上記で発行したURLに書き換える。

## 実行

```
node example/read.js
```
