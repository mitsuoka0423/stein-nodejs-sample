require('dotenv').config();
const SteinStore = require("stein-js-client");
const store = new SteinStore(process.env.API_URL);

store.edit("Sheet1", {
  search: { UserId: "5" },
  set: { Name: "updated" }
}).then(res => {
  console.log(res);
});