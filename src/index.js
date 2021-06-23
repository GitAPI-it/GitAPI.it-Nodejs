import { GITAPI } from "./core/entry.js";
var gitapi = GITAPI({
  token: process.env['token'],
  requester: "darkdarcool"
});
const user = new gitapi.User("darkdarcool");
async function getBio() {
  var userData = await user.getAllGraphqlFollowerData(10);
  console.log(userData);
}
getBio()