# GitHub API Task

In this repository you may ssee a simple Node.JS code for retrieving data from GitHub API

A simple API is develped to search within GitHub repositories for a specific keyword and return the results as JSON objects.

To use the code, after downloading the repository, navigate to **backend** directory in a terminal (command prompt) and install dependencies using the command:
```
npm install
```
Then, to run the backend server, run this comand in the teminal in the backend directory:
```
node ./index.js
```
After the server started, you may see the message:
```
The server starts on local host and port: 3000
```
Simple http "get" queries can be sent to the URL
```
127.0.0.1:3000/search
```
Queries must have three mandatory parameters:
```
keyword: can be anything
sort_by: can be chosen from 'stars', 'forks', or 'updated'
order: can be 'asc' for 'ascending' or 'desc' for descending
```
A sample get query will look like:
```
127.0.0.1:3000/search/?keyword=ahp&sorted_by=updated&order=asc
```
In this version, if the sort_by parameter is missing or is not correct, th default value 'updated' will be use. similarly, if the order parameter is missing or not correct, the defailt value 'asc' will be used.

A very simple and incomplete front end is also developed. the file are available in the **frontend** folder.
While the server is runnign, the front end can be seen in the URL
```
127.0.0.1:3000/
```
