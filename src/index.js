import { getUser } from "./core/entry.js";

(async () => {
  var user = new getUser("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", "darkdarcool");
  var userdata = await user.readData("darkdarcool");
  console.log(userdata)
})();