import { repository } from '../utils/type';
import { getRepoData } from '../utils/request';
import * as fs from 'fs'
import * as chalk from 'chalk'
import { id } from '../utils/type'
import { getRepoIdData } from '../utils/request';
export class getRepo {
  username: string;
  repo_name: string;
  constructor(data: repository = {username: "", repo_name: ""}) {
    this.username = data.username;
    this.repo_name = data.repo_name;
  }
  async readData() {
    var data = await getRepoData(this.username, this.repo_name);
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
  }
  async writeData(filepath: string = "gitrepodata.json") {
    var data = await getRepoData(this.username, this.repo_name);
    data = JSON.stringify(data);
    try {
      fs.writeFileSync(filepath, data);
    }
    catch {
      throw new Error(chalk.red.bold("Error when writing data"))
    }
  }
}
export class getRepoById {
  repo_id: number
  constructor(data: id) {
    this.repo_id = data
  }
  async readData() {
    var data = await getRepoIdData(this.repo_id);
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data
  }
}