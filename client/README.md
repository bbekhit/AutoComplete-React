This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory(client) run npm install to get all dependencies then you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Brief description`

This application lets users search for a city or book title in a provided list.<br>
I used static local data but you can use a data fetched from a database using http request(e.g Axios)

### `Approach`

implemented actions (getBooks, getCities), reducers(cityReducer,bookReducer).<br>
using the {connect} to connect the components to my store and by calling the actions were able
to fetch data in my components(CitySearch) and then mapped the state to props then extracting
{cities} from the props and passing it to the presentational component(Cities) as props

### `npm run eject`
Ejected the project to configure the node-sass and sass-loader

watch live on (https://afternoon-basin-86628.herokuapp.com/)




