import { getUser } from "./core/entry";
(async () => {
  var myData = await getUser("darkdarcool")
  console.log(myData.login)
})();