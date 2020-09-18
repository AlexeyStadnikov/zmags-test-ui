This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Application Description

The application displays random stories from the [Hacker News API](https://github.com/HackerNews/API).

In the `config.json` you can configure the number of the visible stories 
and the URLs of the Hacker News API.

Using the `Try again` button in the application you can update the list and show other random stories.
This case application uses the cached data and does not load stories and users' details are they previously already have been loaded.

The brief logic of the application is the following:
1. Show a loading screen.
2. Load the list of the top stories IDs if needed.
3. Select the list of random stories IDs to show.
4. Load content of not cached stories with the previously selected IDs.
5. Load details of the users from the selected stories if they are not already cached.
6. Display the list of the selected stories.        