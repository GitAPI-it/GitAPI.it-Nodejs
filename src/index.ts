import { getUser } from "./core/entry";

(async () => {
  var user = new getUser("yourToken", "darkdarcool");
  var userdata = await user.readData();
  console.log(userdata)
})();