import axios from 'axios';

export async function getData(username: string) {
  const url: string = 'https://api.github.com/users/' + username;
  try {
    const response = await axios.get(url);
    return response.data
  } catch (exception) {
    process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
  }
}