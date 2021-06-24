import GITAPI from "./core/entry.js";

var gitapi = GITAPI({
  token: process.env['token'],
  requester: "darkdarcool",
  simplify: true
});
var jbData = new gitapi.User("amazon");
async function getBio() {
  var jbBio = await jbData.getLargeGraphqlData();
  console.log(jbBio);
}
getBio()