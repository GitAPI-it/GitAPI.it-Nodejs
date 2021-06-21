import axios from 'axios';
import chalk from 'chalk'
import { exit } from 'process';
export async function getData(username: string) {
  const url: string = 'https://api.github.com/users/' + username;
  try {
    const response = await axios.get(url);
    return response.data
  } catch (exception) {
    throw new Error(`${username} is not a valid GitHub username`)
  }
}