
# Before

Make sure you have installed nodejs & npm

# Run Test

1. cd the-project-dir

2. install dependencies

``` shell
npm install
```
3. run test cases

``` shell
npm test
```

By using [cypress-grep](https://www.npmjs.com/package/cypress-grep), we can run the test by tags:

``` shell
npx cypress run -C ./cypress.config.ts --env grepTags=@smoke
```
Which will run the test we tagged for the smoke test. 


# Report

You will find the test reports in the reports folder.

* The index.html is a html report for checking the test result quickly.

* The files in junit folder are for CI/CD platforms. 

[Report Demo](https://drive.google.com/file/d/1xvj4UtD5rEFtYrZ5RNpX9rRIwgrcyVk4/view)
