import { getData } from "../utils/request";

export async function getUser(name: string) {
  var data = await getData(`${name}`);
  data = JSON.stringify(data)
  data = JSON.parse(data)
  return data;
}