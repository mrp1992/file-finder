# TODO Search

**Small Application to fetch all the files with its absolute path where TODO is present**

## Prerequisites

First, if you have not done so already, install [Homebrew](http://brew.sh/):

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Next, install [Node.js](https://nodejs.org/en/):

```bash
$ brew install node
# Tip! Run this on a regular basis:
$ brew doctor && brew update && brew upgrade && brew cleanup && brew prune && brew doctor
```

Or you can download node from the following site:
```
https://nodejs.org/en/download/
```

and follow the steps as mentioned


Once the above steps are complete, and your system is happy …


## TODO Installations

Please be in the directory where you want to run the search.
Then follow below steps in your command line:

### Git Repo 
Clone the following repo:\
``` 
git clone https://github.com/mrp1992/todoSearch.git
```

Enter the cloned repo:\
```
cd todoSearch
```

### Install External Dependencies
To install all the external dependencies:\
```
npm install
```

### Build Your Application
First build the app to create a production bundle:\
```npm run build```

### Start Your Application
To start the app to find all the files with TODOs:\
```
npm start
```

All the files with their absolute paths will be printed on your console.

#### Example Output:
```
/usr/test/sourceDirectory/TextFileWithTodo.js
```

## Test cases

To run test cases, we first need to install the test data in the same directory where todoSearch has been cloned.

### Git Repo
Clone the following repo:\
```
git clone https://github.com/mrp1992/testData.git
```

### Test The Application
Go to todoSearch and run the following command:
```
npm test
```

## External Dependencies
* jest: For running test cases
* webpack: To bundle the application


