# Playground for Hotjar Activation Squad

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to install and run?

Once you have clones the repo, open a terminal a run the following

 `npm i`

Install the dependencies

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to push changes to fcartier.github.io?
First ask Florian Cartier to add you as a contributor on this project.
Then you can deploy the page using the following commands:

 `npm run deploy -- -m "HJ-[number] [Enter your deployment message here]"`

Builds the app for production to the `build` folder then uploads it to the gh-pages branch which automatically updates fcartier.github.io. The changes can take 10-20 minutes to appear.

The build is minified and the filenames include the hashes.\

## Where to find the Tracking code?

The TC is located at `public/index.html`

![image](https://github.com/FCartier/fcartier.github.io/assets/18403658/f17c06b4-4c2e-46ad-af5b-e79f2b9288ce)


To change the code, you just need replace the value of `hjid`, currently set to `3706273` and deploy the site again.
