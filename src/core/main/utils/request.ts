import axios from 'axios';
import chalk from 'chalk'
import { checkPrime } from 'crypto';
export async function getData(username: string) {
  const url: string = 'https://api.github.com/users/' + username;
  try {
    const response = await axios.get(url);
    var check = response.data;
    /*
    if (check.gravatar_id == "") {
      check["gravatar_id"] = null;
    }
  
    if (check.blog == "") {
      check["blog"] = null;
    }
    */
    return check;
  } catch (exception) {
      throw new Error(chalk.red.bold(`User not found`));
  }
}
export async function getRepoData(username: string, repo_name: string) {
  const url: string = `https://api.github.com/repos/${username}/${repo_name}`;
  try {
    const response = await axios.get(url);
    var check = response.data;
    return check
  } catch (exception) {
    throw new Error(chalk.red.bold("User or repo name not found"))
  }
}
export async function getRepoIdData(id: number) {
  const url: string = `https://api.github.com/repositories/${id}`
  try {
    const response = await axios.get(url)
    var check = response.data
    return check
  } catch (exception) {
    throw new Error(chalk.red.bold("Invalid ID"))
  }
}