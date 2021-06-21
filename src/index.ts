import { getUser } from "./core/entry";

(async () => {
  var myData = await new getUser("darkdarcool").readData();
  console.log(myData)
  if (myData.gravatar_id == "") {
    myData["gravatar_id"] = null;
  }

  if (myData.blog == "") {
    myData["blog"] = null;
  }

  console.log(myData);
})();