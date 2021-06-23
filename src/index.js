import { getUser } from "./core/entry.js";

(async () => {
  var user = new getUser("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", "darkdarcool");
  var userdata = await user.getSmallGraphqlData("darkdarcool", 10);
  console.log(userdata)
})();