[![issues](https://img.shields.io/github/issues/darkdarcool/GitData-Typescript?logoColor=blue&style=for-the-badge)](https://github.com/darkdarcool/GitData-Typescript/issues)
[![forks](https://img.shields.io/github/forks/darkdarcool/GitData-Typescript?style=for-the-badge)](https://github.com/darkdarcool/GitData-Typescript/fork)
[![stars](https://img.shields.io/github/stars/darkdarcool/GitData-Typescript?logoColor=blue&style=for-the-badge)](https://github.com/darkdarcool/GitData-Typescript/stargazers)
[![license](https://img.shields.io/github/license/darkdarcool/GitData-Typescript?color=blue&style=for-the-badge)](https://github.com/darkdarcool/GitData-Typescript/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/gitapi.it?style=for-the-badge)](https://www.npmjs.com/package/gitapi.it)
> ⚠️ This is currently a work in progress and should ***not*** be put into code as none of the features you may see now and in the future are in the package ⚠️ 

<br />

<h1 align = "center" style = "display: block"> GitData </h1>

<h3 align = "center"><a href = "https://www.npmjs.com/package/gitapi.it"> View NPM package »</a></h1>
<h4 align = "center"><a href = "https://github.com/darkdarcool/GitAPI.it/issues">Open issue</a>  • <a href = "https://github.com/darkdarcool/GitAPI.it/pulls">Open pull request</a></h4>

<details>
  <summary style = "display: inline-block"><h2>Table of contents</summary>
  <br>
  <br>
  <li>
    <a href = "#about-the-module">About the module</a>
    <ul>
      • <a href = "#built-with"> Built with </a>
    </ul>
    • <a href = "#usage"> Usage </a>
    <ul>
      • <a href = "#installation"> Installation </a>
      <br>
      • <a href = "#code-usage"> Code usage </a>
    </ul>
    • <a href = "#contributing">Contributing</a>
    <br>
    • <a href = "#license">License</a>
  </li>
</details>

## About the module

This is an API that gets GitHub data on users, and so much about them! It allows you to make _powerful_ apps without going through the hassle of getting an auth! Just have the user enter in their GitHub username and you can get simple data about them! 

###  Built with 

This is built with [nodejs](https://nodejs.dev)

## Usage

Obviously, this is a module and we need instructions on how to use it, so the following is on how to use the module!

### Installation 

To import the module into npm, please do:

``` sh
npm i gitapi.it
```

And you will have succesfuly imported the package! Then in your typescript code:

``` javascript
import * as git from 'gitapi.it';
```

### Code usage

And you have the module in your code now! Now, let's move on to how to _use_ the function in the module!

Here is a sample on how to get simple data on a user:

```
import * as git from 'gitapi.it';
async function getData() {
  let data = await git.getUser("yourGitUsernameHere").readData();
  console.log(data);
}
```

And then you should see basic(non-sensitive) user data that you can use! But that's not all. We also have a function that allows you to write the data to a file that can be read by _ANY_ other language!
## Contributing

Contributing is welcome here! If you feel like contributing, please read our [contributing](https://github.com/darkdarcool/GitAPI.it/blob/master/.github/CONTRIBUTING.md) guide!

## License

This is a module that is currently under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license, see the [license](https://github.com/darkdarcool/GitData-Typescript/blob/master/LICENSE) page for more information on how the MIT license is used here.
