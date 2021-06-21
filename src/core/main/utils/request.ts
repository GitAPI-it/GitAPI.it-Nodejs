import axios from 'axios';
import chalk from 'chalk'
export async function getData(username: string) {
  const url: string = 'https://api.github.com/users/' + username;
  try {
    const response = await axios.get(url);
    var check = response.data;
    if (check.gravatar_id == "") {
      check["gravatar_id"] = null;
    }
  
    if (check.blog == "") {
      check["blog"] = null;
    }
    return check;
  } catch (exception) {
      throw new Error(chalk.red.bold(`User not found`));
  }
}