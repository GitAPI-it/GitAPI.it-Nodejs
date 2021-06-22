import { getRepoById, id } from "./core/entry";

(async () => {
  var input: id = 377859462;
  var myData = await new getRepoById(input).readData();
  console.log(myData)
})();