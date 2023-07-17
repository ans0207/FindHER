# FindHER

This web application is designed to support women on career breaks. It leverages the MERN (MongoDB, Express.js, React.js, Node.js) stack for the development of both the front-end and back-end components.

## Features
The application includes the following key features:

* Job Openings: Mentees can access job openings relevant to their fields of interest, helping them explore career opportunities.
* Assignments: Mentees can upload assignments related to their career development, which can be reviewed and commented on by mentors.
  Additionally, the following advanced features have been implemented:
* Video Calling: WebRTC and Socket.io have been integrated to enable video calling functionality between mentors and mentees during mentoring sessions.

## Technologies
The application is built using the following technologies:

* MongoDB: A NoSQL database used for storing mentee profiles, job openings, assignments, and progress tracking data.
* Express.js: A back-end web application framework for Node.js that handles server-side routing and logic.
* React.js: A JavaScript library for building user interfaces, used for the front-end development of the application.
* Node.js: A JavaScript runtime environment used for server-side development.
* WebRTC: A real-time communication technology used for implementing video calling functionality between mentors and mentees.
* Socket.io: A library that enables real-time, bidirectional communication between web clients and servers, used in conjunction with WebRTC for video calling.

## Installation
To install and set up the application locally, follow these steps:

1. Clone the repository: git clone https://github.com/ans0207/FindHER.git
2. Navigate to the project directory.
3. Install the dependencies for both the server and client:
- For the server, run npm install in the server directory.
- For the client, run npm install in the client directory.
4. Set up the MongoDB database: Create a MongoDB database and obtain the connection URI.
5. Start the server and client:
- In the server directory, run npm start to start the back-end server.
- In the client directory, run yarn start to start the front-end client.


## Usage
Once the application is set up and running, you can access it by navigating to http://localhost:3000 in your web browser. From there, you can explore the various features and functionalities provided by the application.

## License
The project is licensed under the MIT License. Feel free to use and modify the code according to the terms of this license.

