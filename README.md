# Duck Tracks

Duck Tracks is a modern full stack web application designed to aggregate crowd-sourced information from the public.

# Features

- Submit record of a duck feeding
- View a specific duck feeding record
- View all duck feeding records

### Tech

Duck Tracks uses various packages to function:

- React
- Redux
- Styled-Components
- Express
- Sequelize
- Node
- MySQL
- And more, refer to package.json for a complete list of dependencies

### Requirements

![Node Version](https://img.shields.io/badge/node-v10.15.3-blue) ![MySQL Version](https://img.shields.io/badge/mysql-v5.7-blue) ![NPM Version](https://img.shields.io/badge/npm-v6.13-blue)

### Installation

```sh
$ git clone https://github.com/arranw/duck_tracks.git
```

Database configuration `config/default.json`: 
```json
"dbConfig": {
  "HOST": "<host_address>",
  "USER": "<db_username>",
  "PASSWORD": "<db_password>",
  "DATABASE": "duck_tracks"
}
```

Create the database through MySQL

```mysql
CREATE DATABASE duck_tracks;
```

Install dependencies and run the development server:

```sh
$ cd duck_tracks
$ npm i
$ cd client
$ npm i
& cd ..
$ npm run dev
```

For production environments:

```sh
$ cd duck_tracks
$ npm run build
$ NODE_ENV=production node index
```

### Development

This project was developed largely in one stretch over a period of approximately 10 hours. I used this project as an opportunity to use MySQL with Node for the first time. Time spent learning the Sequelize library took up a large amount of the back end development. Similarly, this is my first time using the Redux-Toolkit on the front end.

I greatly enjoyed the experience of combining different areas of knowledge along with new information to create this project.

Time spent was roughly divided as follows:

| Section   | Time (h) |
| --------- | -------- |
| Back End  | 4.0h       |
| Design    | 1.0h       |
| Front End | 4.0h       |

### Deficiencies

There are a few deficiencies I would address with a larger time budget.

- Front End Testing
- Proper error passing from server to client
- Design is too simple
- Data Export
