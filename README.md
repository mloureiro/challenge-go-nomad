# Go Nomad


**Disclaimer:** couldn't finish within 4 hours, if I had stopped at that point I would only have the API clients, and the UI for the weather forecast almost finished, but none of the integration, nor the flight details UI, to _"finish"_ the project I took somewhere **from 6 to 8 hours** to finish it.


### How to run the project

Install dependencies and set environment variables:

1. Install dependencies:
    ```bash
    $ cd path/to/app/directory
    $ npm install
    ```
2. Copy the environment variables file:
    ```bash
    $ cp src/.env.json.dist src/.env.json
    ```
3. Open the file and add your AccuWeather key

For **development** mode:

1. Start server
    ```bash
    $ npm start
    ```
2. Open [localhost:3000](http://localhost:3000) (if it didn't open automatically)


For **production** mode we need a few extra steps:

1. Build production code:
    ```bash
    $ npm run build
    ```
2. Go to directory:
    ```bash
    $ cd build
    ```
3. Serve build directory:
    ```bash
    # with NodeJS
    $ npx http-sever . -p 3000

    # with Python
    $ python -m SimpleHTTPServer 3000

    # with PHP
    $ php -S localhost:3000
    ```
4. open [localhost:3000](http://localhost:3000)


### Technology Decisions

React - most experienced with (I wanted build it with Vue, but I was concerned I wouldn't have time, and looking back that was a good decision)

Bulma CSS - to move faster I've used a CSS framework (although I didn't have any experience with Bulma before). I've ended up mixing some Bulma classes and custom style for some components that would deserve a cleaner approach, either using Bulma SASS directly, so that I could use the design system variables, or make my own design system on top of Bulma.

API ports - I've created a layer on top of each external API, so that if we want to change the API provider, we just need to adapt that layer, and the rest of the application would still work without any change.

Project structure - the project is structured in a way where the external APIs are only in [`src/api`](src/api), the UI (HTML + CSS) is done within [`src/ui`](src/ui), and the page controllers in [`src/pages`](src/pages). For the latter, the state management could be extracted to it's own section (skipped due to time constraints)

I didn't add a few things due to time constraints and size of the app:
- state management: I've considered, but it would require extra time for small benefits
- router: there's only 1 page
- typisation: although I prefer a properly typed application, this would cost extra time, and the main benefits of typisation are on the long run


### Missing app features

Dynamic destinations - my initial idea was to make an app where the user could choose any destination, but I underestimated the amount of work required. Since I started from the API perspective, that's done, but didn't actually implement in the UI

Flight details - allow the user to set extra filters, like departure date range, total persons, etc...

Improved flights UI - by default hide all flights, and show the lowest flight price under each forecast day with a button to show more details that presents all the flights for that day.

Make search dropdown keyboard accessible - the title says it all, current it shows a list while typing in the search box, and it would be great to press up and down to move in the list.

Forecast metric - allow the user to change between Celsius and Fahrenheit.

Localization - it wouldn't be a big deal to extract all text used in the app to a `eng.json` and the API's already support localization which means that having the app in a different language would be a simple thing to do, besides language the remaining would be the temperature unit, the price format, and the date format, for the price and date, would have to resort to a library.

Load more flights - due to the way I've built the app, having 3 flights per location already makes the page long, but it would be nice to have a load more functionality (this could be easily added to [`destination handler`](src/pages/Home/Destination.js) with a callback passed to the inner component, and for the API those are simple query parameters.


### Missing technology features

Tests - this is a basic one, I was already way over time so I decided to skip them, the UI components would be simple to test, and the API clients the same if we mock the fetch results, the only thing more complex to test would be the contents of [`src/pages/Home`](src/pages/Home) but for these we could use e2e tests once again by mocking the APIs.

Debounce API requests - although the API is blazing fast, for each character we type in the search box it is making a request, this could be debounced (or throttled depending on the preference).

Compress assets - the assets I'm using are already compressed, but things like Font Awesome are heavy, and I'm only using a single icon with it, so either get a version with only the required icons, or drop it and make the icons in a different way.

Properly handle errors - currently API errors are being logged to the console, and if the state ends in that way there is a generic message on the components they should be presented, ideally we should interpret the error and act accordingly.

Webpack alias - this is a small benefit, but relative imports can become hard to read.

Avoid prop drilling - use `useContext` to avoid prop drilling, but once again the time was a big constraint
