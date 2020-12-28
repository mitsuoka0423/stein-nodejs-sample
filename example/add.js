require('dotenv').config();
const SteinStore = require("stein-js-client");
const store = new SteinStore(process.env.API_URL);

store.append("Sheet1", [
  {
    UserId: "11",
  }
])
.then(res => {
  console.log(res);
});