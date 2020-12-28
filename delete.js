require('dotenv').config();
const SteinStore = require("stein-js-client");
const store = new SteinStore(process.env.API_URL);

store.delete("Sheet1", {
  search: { UserId: "6" },
}).then(res => {
  console.log(res);
});