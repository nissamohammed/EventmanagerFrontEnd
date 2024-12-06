Event Management App

An intuitive and responsive web application designed to simplify event planning and management.
Users can create, manage, and participate in events with ease. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the app provides a seamless user experience with robust backend support.

Features:

User Authentication: Secure login and registration (JWT Authentication).

Event Creation: Create events with details like date, time, venue, and description.

Event Management & Dashboard: Edit or delete ,view events and view all events created by other users , search fuctionality is there by Location.

Responsive Design: Fully functional across devices.

Installation & Setup Instructions
Prerequisites
   Node.js
   Express.js
   MongoDB


Install Dependencies
      npm install -y 
      cd client  
      npm i cors dotenv express mongoose
      npm i jsonwebtoken  
      Environment Variables
      Create a .env file in the root directory with the following variables:

      MONGO_URI=<Your MongoDB Connection String>  
      JWT_SECRET=<Your JWT Secret Key>  
      PORT=<Server Port>  


Run the Application

Open two terminals:

Start the backend server:
nodemon index.js  

Start the frontend development server:

cd project_namefrontend  
npm run dev
npm i axios

 
Access the App
Open http://localhost:4000 <PORT> in your browser.

API Documentation
Base URL:
http://localhost:<PORT>/api

Endpoints

User Routes
POST /register
Register a new user.

Body:
{  
  "name": "string",  
  "email": "string",  
  "password": "string"  
}
  
POST /login
Authenticate user and return a token.
Body:
{  
  "email": "string",  
  "password": "string"  
}  

Event Routes
GET /events
Retrieve all events.

POST /addevents
Create a new event.
Body:

{  
  "title": "string",  
  "date": "YYYY-MM-DD",  
  "time": "HH:mm",  
  "location": "string",  
  "description": "string"  
}  

PUT /events/:id
Update event details.

DELETE /events/:id
Delete an event by ID.

Technologies Used:

Frontend: React.js, Bootstrap, CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT

Contributors
Nissa Mohammed
