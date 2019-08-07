# Tag Checker

## Installing dependencies

Open a terminal window and navigate to the project folder

Run `npm install` or `yarn install` to install dependencies

## Starting the program

The program uses babel to transpile the javascript to the latest ES version.

Simply run the following command to transpile the code

`npm run build`

Then run the command to read csv file and generate payslips to the output path

`npm run TagChecker CheckTags -i "src/data/input.txt"`

`--inputFile` accepts relative and absolute paths

## Extra commands

`npm run TagChecker help` to display a list of commands

`npm run TagChecker version` to display the current version of the app

## Test the program

The program uses jest for unit testing
To run the tests run the following command in your terminal:

`npm run test`
