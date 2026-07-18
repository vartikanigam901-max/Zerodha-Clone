# Zerodha Clone

Final Interview Explanation

The main objective of this project was to gain hands-on experience in full-stack web development using the MERN stack by building a stock market dashboard inspired by Zerodha.

I first developed the frontend using React.js, where I designed multiple responsive pages including the Home, About, Products, Pricing, Support, Signup, and Login pages. I also developed the trading dashboard, which consists of Holdings, Positions, Orders, Funds, Watchlist, and Applications modules.

For the backend, I used Node.js and Express.js to build RESTful APIs for user registration, login authentication, retrieving holdings and positions, and creating new orders.

For security, I implemented user authentication using bcrypt. During signup, passwords are hashed before being stored in MongoDB Atlas, and during login, bcrypt compares the entered password with the hashed password stored in the database.

The frontend communicates with the backend using Axios HTTP requests. Whenever a user logs in or accesses the dashboard, React sends API requests to the backend, which interacts with MongoDB Atlas to retrieve or store data and returns the appropriate response.

I also integrated Chart.js to visualize stock holdings through interactive graphs, making the dashboard more informative and user-friendly.

Throughout the development process, I used Git and GitHub for version control. I also explored deploying the application using AWS Amplify for the frontend and EC2 for the backend to understand the deployment workflow.

Through this project, I gained practical experience in React.js, Node.js, Express.js, MongoDB Atlas, REST API development, authentication, frontend-backend integration, responsive UI design, data visualization, Git/GitHub, and cloud deployment concepts.
```