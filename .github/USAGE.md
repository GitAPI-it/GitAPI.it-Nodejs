# Usage

Welcome to our usage page! Here you will learn how to use the module!

## Initialization

To start the module, please install it via npm. If you do not have npm, you can download it [here](https://nodejs.org/en/) via node. 

When you have it installed, please do:

``` bash
npm i --save-dev gitapi.it
```

Congratulations! You just got the package installed! But... nothing really happend, no data was given. Well, let's get the enviornment set up!

Find your prefered spot to set up the enviornment, then do the following:

``` bash
mkdir gitapi-test
cd gitapi-test 
touch index.js 
```
Then, type `npm init` into the termianl, and then fill out the prompts. In the pacakge.json, add the following:

``` json
"type": "module",
```

Then, install the package again if needed, open up `index.js` in your prefered IDE or text editor. 

When that is open, add the following code:

``` js
import { getUser } from 'gitapi.it';
async function getBio() {
  let data = await new getUser("token, we'll fill this out later!", "your Git Username").getSmallGraphqlData("your Git Username");
  let bio = data.user.bio;
  console.log("Bio": " + bio);
}
getBio();
```

Right now, it'll throw and error at you, but we can fix that in the next section! But right now, your enviornment is set up!


## Code Usage

Now that you have your enviornment, you can start coding! But there are a couple preperations to do before actually doing it!

1. You need a github auth token 

The token will grant you access into the API! This isn't requiered by the module, it's requiered by GitHub to use their graphql endpoint! So, to get a token, you can follow the steps [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). 

Once you have your token, you can open your code, and where it says to put your token, you can put it in! And you will have completed the mose important step!

2. You have to give your GitHub Username

This is so the module knows who is requesting this info! You can put your GitHub username in it, but it doesn't really matter, so you can put anything in there.

3. You need a user to query! 

Now you need a user to query data on! This can be yourself, or anyone else on GitHub! Put tht username into the textbox.

Once you have the usernae of the user you are querying, you are done! When you run:

``` bash
node index.js 
``` 

You should see a bunch of data on the user! And you will have succesfully made your first GitAPI query!

That's it for the tutorial! The list of all of the function for returning data is coming soon!