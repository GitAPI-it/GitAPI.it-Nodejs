import { getUser } from "./core/entry";

(async () => {
  var user = new getUser("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", "darkdarcool");
  var userdata = await user.readData("dfkfjdfjdfjdfkjdfkjdfjdfjdkfjk");
  console.log(userdata)
})();