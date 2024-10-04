
# Mobile Testing with CodeceptJS using PlayWright

This is the guidance on how to run this appilication testing with CodeceptJS using PlayWright.

## About the App

This application is a calculator that determines the amount of salt needed for a pond. Users input the pond's volume in liters, and the type of salt. Based on these inputs, the app provides a recommended amount of salt for your pond.

## Setup

### Prerequisites

- Install React by installing Node.js: [Node.js Installation Guide](https://nodejs.org/en/download/package-manager/current)

### Starting the Server

1. Open a terminal and navigate to the `saltcalc` directory:
   ```
   cd saltcalc
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

### Running the Tests

1. Open a terminal and navigate to the `salttest` directory:
   ```
   cd salttest
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install Playwright:
   ```
   npm install @codeceptjs/configure playwright --save-dev
   ```
   
4. Run the tests:
   ```
   npx codeceptjs run --steps
   ```




# Test your own application with CodeceptJS Mobile Testing 

This is a guidance on how to run your application testing with Codeceptjs using Playwright.

## Setup

### Prerequisites

1. Install Node.js: [Node.js Installation Guide](https://nodejs.org/en/download/package-manager/current)

2. Install React globally:
   ```
   npm install -g create-react-app
   ```

### Project Structure

Create a main folder.

## Starting the Server

### React Application

1. Navigate to the main folder:
   ```
   cd <main-folder>
   ```

2. Create a new React app (this will create a folder):
   ```
   npx create-react-app <app-name>
   
   ```
3. Navigate to the React app:
   ```
   cd <app-name>
   ```
   
4. Start the React development server:
   ```
   npm start
   ```

### Writing functions

1. Open Visual Studio Code and open the main folder

2. In the React folder, create a (your-app-name).js and a (your-app-name).css

3. Write your functions in JavaScript using React.

4. In the App.js, delete the entire header

5. Import your function and (your-app-name).css into the App.js

6. Run the command to see if your function works
   ```
   npm start
   ```

## Setting Up Tests
In the main folder, create a test-folder.

1. Navigate to the test folder:
   ```
   cd <test-folder>
   ```

2. Initialize a new Node.js project:
   ```
   npm init -y
   ```

3. Install Playwright
   ```
   npm install @codeceptjs/configure playwright --save-dev
   ```

4. Set up CodeceptJS:
   ```
   npx codeceptjs init
   ```
   - Deny TypeScript

   - Choose Playwright when prompted


## Running Tests

1. Write your tests in the test file you just created ending with _test.js

2. Navigate to the test folder
   ```
   cd <test-folder>
   ```

3. Run the tests:
   ```
   npx codeceptjs run --steps
   ```
