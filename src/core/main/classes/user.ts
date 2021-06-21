import { getData } from "../utils/request";

export class getUser {
  name: string;
  // var name = null
  constructor(name: string) {
    this.name = name
  }
  async readData() {
    var data = await getData(this.name);
    data = JSON.stringify(data)
    data = JSON.parse(data)
    return data;
  }
}