import { getData } from "../utils/request";
import * as fs from 'fs'
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
  async writeData(path: string="./gitdata.json") {
    var data = await getData(this.name)
    data = JSON.stringify(data)
    // data = JSON.parse(data)
    try {
      fs.writeFileSync(path, data);
    } catch {
      throw new Error("Error when writing data")
    }
  }
}