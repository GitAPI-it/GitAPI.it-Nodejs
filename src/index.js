import { getUser } from "./core/entry.js";

(async () => {
  var user = new getUser("yourToken", "darkdarcool");
  var userdata = await user.readData("darkdarcool");
  console.log(userdata)
})();