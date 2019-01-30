# Trov Subreddit Application

## Installation
To run this application locally, clone this repo, `cd` into it and run either `yarn install` or `npm install`
. Note that I used yarn to build this and npm will create a package-lock file and warn you about it.

To run the application locally, run either `yarn start` or `npm run start` which will start up an instance of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server).

To create an optimized production build run either `yarn build:prod` or `npm run build:prod`. This will create a static build in the `/build` directory, which is ignored by `git` on purpose. A live example of a prod build [can be viewed here](https://trov-subreddit.netlify.com/).

Many other useful/intersting scripts can be seen in the `scripts` section of the [`package.json`](package.json#L5) file. An example would be `yarn build:stage` which will use environment variables from [`.env.staging`](.env.staging) for use in the build. Although I am not using it in this example, this is part of my starter kit and very useful for testing the application against different API versions.

## Technology used

### React
I started this project based on my own personal react starter kit, which itself is based off of [`create-react-app`](https://github.com/facebook/create-react-app). I use this approach primarily to handle the burden of managing build processes and configurations which it accomplishes by abstracting a lot of the heavy lifting into a package called [`react-scripts`](https://www.npmjs.com/package/react-scripts).

I structured the project in the fashion I have seen in many other projects with the majority of the important files in [`/src/containers`](/src/containers) and  [`/src/components`](/src/components). I use [Stateless Functional Components](https://reactjs.org/docs/components-and-props.html) wherever possible and really only had to use a stateful class-based container for the main subreddit container, [`/src/containers/subreddit-container.jsx`](/src/containers/subreddit-container.jsx), in order to take advantage of React's [lifecycle events](https://reactjs.org/docs/state-and-lifecycle.html).

### Redux
Although I actually found that I didn't really need to use it, I imcorporated a redux store for global state management as per the instructions for this test. If you have the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) installed, you can view state changes as seen below:

![redux-devtools](doc-images/redux-devtools.png)

### CSS
For CSS I am using a combination of scss via [`node-sass`](https://github.com/sass/node-sass) and [`styled-components`](https://www.styled-components.com/). I find working with `styled-components` very useful, and it plays well with other technology like `storybook`, which I will get into later in this document.

### Testing
For unit testing, I used [`jest`](https://jestjs.io/), which comes bundled with [`create-react-app`](https://github.com/facebook/create-react-app).

To run int tests, run `yarn test` or `npm run test`. To view code coverage run `yarn test:coverage` or `npm run test:watch`. This will create an html coverage report in `/coverage/lcov-report`. I am also publishing this report automatically as part of the CI/CD flow [as seen here](https://trov-reddit-code-coverage.netlify.com/).

### Continous Integration/Deployment
![circleci](doc-images/circle-ci.png)
![github-integration](doc-images/github-integration.png)
![netlify](doc-images/netlify.png)
![redux-devtools](doc-images/redux-devtools.png)