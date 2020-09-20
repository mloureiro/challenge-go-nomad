# Go Nomad


## How to run the project

Just serve the contents in `build/` and open the server ([localhost:3000](http://localhost:3000) in the examples bellow)

- with NodeJS
    ```bash
    $ npx http-sever ./build -p 3000
    ```
- with Python
    ```bash
    $ python -m SimpleHTTPServer 3000
    ```
- with PHP
    ```bash
    $ php -S localhost:3000
    ```

To run the development mode:

1. install dependencies
    ```bash
    $ npm install
    ```
2. install dependencies
    ```bash
    $ npm start
    ```
3. open [localhost:3000](http://localhost:3000

> **Note**: normally `build/` is ignored and not included in the project, this is just to make it easier for anyone to test the app without having to install all the build tools, if you prefer, you can build the app by running `npm install && npm run build`.
