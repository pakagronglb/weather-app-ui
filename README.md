# weather-app-ui
This is a simple demo/showcase built and learnt from geeksforgeeks.org of a simple but functional real-time weather data. In this project, React was used for building user interfaces. Tailwind CSS, a utility-first CSS framework. Weather API was also used to gather and display data. 

## Prerequisite
- ReactJS
- Tailwind CSS
- React Hooks

## Approach:
**1. State Management:**
   - Used the useState hook to manage two pieces of state:
   -    city: Stores the user-inputted city name.
   -    weatherData: Stores the fetched weather data from the API.

**2. API Data Fetching:**
   - Created an asynchronous function fetchWeatherData to handle the API call using the fetch function.
   - Constructed the API endpoint using the weatherapi.com service, including the API key and the user-inputted city.
   - Used a try-catch block to handle errors during the API call.
   - Updated the weatherData state with the fetched data if the API call was successful.
   - Logged the data to the console for debugging purposes.

**3. User Interface (UI):**
   - Designed a simple UI using JSX with a flex container for centering content vertically and horizontally.
   - Included an input field for users to enter the city name and a button to trigger the weather data fetching.
   - Styled the UI elements using Tailwind CSS classes for a clean and responsive design.

**4. Displaying Weather Information:**
   - Conditionally rendered a section to display weather information only if weatherData is available.
   - Showed relevant weather details such as location, country, current condition, temperature, “feels like” temperature, and wind information.
   - Used Tailwind CSS classes for styling to enhance the visual presentation of the weather information.


## Steps to Create a React Application:
**Step 1:** Create a react application by using this command

```npx create-react-app weather-app```

**Step 2:** After creating your project folder, i.e. PalindromeApp, use the following command to navigate to it:

```cd  weather-app```

**Step 3:** Install Tailwind CSS

By using below command we will Install the required packages for Tailwind CSS

```npm install tailwindcss```

Now, Let’s create the configuration files for tailwindcss

```npx tailwindcss init``` 


**API Response**
Here we used weatherapi.com API for getting weather data of different city. so for that you simply need to signup on that API platform, you will get API Key to use in project. then we will hit the url “https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}” to get a specific city weather data.

**Step to run the Application:**

```npm start```


### Big credits to GeeksforGeeks!!
