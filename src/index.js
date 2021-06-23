import { getUser } from "./core/entry.js";

(async () => {
  var user = new getUser("", "darkdarcool");
  var userdata = await user.getSmallGraphqlData("darkdarcool", 10);
  console.log(userdata)
})();