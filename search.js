require('dotenv').config();
const SteinStore = require("stein-js-client");
const store = new SteinStore(process.env.API_URL);

store.read("Sheet1", {
  search: {
    UserID: '5'
  }
}).then(data => {
  console.log(data);
});
