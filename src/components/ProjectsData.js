import fitRecurHome from "./images/fitRecurHome.png";
import fitRecurExercise from "./images/fitRecurExercise.png";
import fitRecurPlan from "./images/fitRecurPlan.png";
import fitRecurLogo from "./images/fitRecurTestLogo.jpg";
import emailLogo from "./images/emailLogo.jpg";
import chefLogo from "./images/chefLogo.jpg";
import pacLogo from "./images/pacLogo.png";
import fitRecurDemo from "./videos/FitRecurDemo.mp4";
import emailHome from "./images/emailHome.png";
import emailMail from "./images/emailMail.png";
import emailFull from "./images/emailFull.png";
import emailDemo from "./videos/emailDemo.mp4";

import chefLog from "./images/chefQuestLog.png";
import chefHome from "./images/chefQuestMain.png";
import chefQ from "./images/chefQuestQuest.png";

import pacDiscount from "./images/pacDiscount.png";
import pacReflex from "./images/pacReflex.gif";
import pacCapture from "./images/pacCapture.gif";



const projectList = [
    {
        "name": "FitRecur",
        "shortDescription": "FitRecur is a fitness tracking mobile application that focuses on simplicity and allow users to keep track, record, and display their workouts and progress.",
        "longDescription": "FitRecur is a fitness tracking mobile application that focuses on simplicity and allows users to keep track, record, and display their workouts and progress.The problem that we wanted to solve by developing this app was that most fitness apps have too much unrelated information and are bloated with advertisements. FitRecur was developed by a 5-member team, incorporating the Agile Software Development methodology for a disciplined management process to encourage teamwork. The application utilized Flutter as the frontend framework to allow cross-platform framework data synchronization for UI rendering for both Android and iOS, and FireStore as backend to store multi-user authentication as well as respective user progression exercise data. We had three weekly Scrum Meetings and integrated Miro as an extensive Scrum board for release plans, sprint plans, sprint retrospectives, etc. ",
        "description1": "FitRecur is a fitness tracking mobile application that focuses on simplicity and allows users to track, record, and display their workouts and progress. We developed FitRecur because most fitness apps have unneccessary information and are bloated with advertisements. FitRecur was developed by a 5-member team, incorporating the Agile Software Development methodology for a disciplined management process to encourage teamwork. ",
        "description2": "FitRecur utilized Flutter as the frontend framework to allow cross-platform framework data synchronization for UI rendering for both Android and iOS, and FireStore as the backend database to store multi-user authentication as well as respective user progression exercise data. We had three weekly Scrum Meetings and integrated Miro as an extensive Scrum board for release plans, sprint plans, sprint retrospectives, etc. ",
        "logo": fitRecurLogo,
        "image1": fitRecurHome,
        "image2": fitRecurExercise,
        "image3": fitRecurPlan,
        "demo": fitRecurDemo,
    },
    {
        "name": "Full Stack Email Web Application",
        "shortDescription": "An E-Mail system as a Single page Full Stack Web Application using the NERP Stack: Node.js, Express, React, and PostgreSQL.",
        "longDescription": "This project is an E-Mail system as a Single page Full Stack Web Application individually developed using the NERP Stack: Node.js, Express, React, and PostgreSQL. One of the biggest challenges that I managed to accomplish in this project was incorporating a “mobile first” approach with React Hooks for responsive web design to adapt to the user’s environment. The project also presented a server with OpenAPI constrained API to the single page web application running in the browser, while storing data in the PostgreSQL database. Another main feature of this project that was challenging was implementing the multi-user login authentication feature. This required the use of Express.js as a middleware for session and JSON Web Token. Furthermore, for each user that was authenticated in the multi-user authentication, OpenAPI schema along with Node.js and Express RESTful API backed by PostgreSQL database  was utilized for CRUD validation for each user on the multi-user authentication. ",
        "description1": "This project is an E-Mail system as a Single page Full Stack Web Application individually developed using the NERP Stack: Node.js, Express, React, and PostgreSQL. One of the biggest accomplishments in this project was incorporating a “mobile first” approach with React Hooks for responsive web design to adapt to the user’s environment. The project also presented a server with OpenAPI, constraining API to the single page web application running in the browser while storing data in the PostgreSQL database.",
        "description2": "Another challenging main feature of this project was implementing the multi-user login authentication feature. This required the use of Express.js as a middleware for session and JSON Web Token. Furthermore, for each user that was authenticated in the multi-user authentication, PostgreSQL database backed Open API schema, Node.js, and Express RESTful API were utilized for CRUD validation.",
        "logo": emailLogo,
        "image1": emailHome,
        "image2": emailMail,
        "image3": emailFull,
        "demo": emailDemo,
    },
    {
        "name": "ChefQuest",
        "shortDescription": "ChefQuest is a gamified cooking app designed to make cooking feel less intimidating and fun for people who don't cook regularly but want to learn how to cook at home during the COVID-19 Pandemic.",
        "longDescription": "ChefQuest is a gamified cooking app designed to make cooking feel less intimidating and fun for people who don't cook regularly but want to learn how to cook at home during the COVID-19 Pandemic. The motivation for developing this app was to help people that are in need of help during the COVID-19 lockdown, where ordering delivery food all the time may become financially overwhelming, and home cooking may become essential. One of the main goals of this application was creating an appealing and intuitive UI/UX for users. With weekly design sprints and scrum meetings, Agile methodology was incorporated in the development and design process. ChefQuest was developed using React Native as frontend framework for cross-platform deployment in both Android and iOS, and FireBase as backend database to store individual user information and progress in the game. Different from other projects, ChefQuest had many attempts at creating a better UI/UX, which involved prototyping and wireframing many different versions of our application. This included A/B testing and many usability tests observations.",
        "description1": "ChefQuest is a gamified cooking app designed to make cooking feel less intimidating and more fun for people who don't cook regularly but want to learn how to cook at home during the COVID-19 pandemic. The motivation for developing this app was to help people during the COVID-19 lockdown, when ordering delivery frequently became financially overwhelming and home cooking was the more affordable alternative.",
        "description2": "One of the main goals of this application was creating an appealing and intuitive UI/UX for users. With weekly design sprints and scrum meetings, Agile methodology was incorporated in the development and design process. ChefQuest was developed using React Native as the frontend framework for cross-platform deployment in both Android and iOS, and FireBase as the backend database to store individual user information and progress in the game. Unlike the other projects, there were many attempts at creating a better UI/UX for ChefQuest, which involved prototyping and wireframing many different versions of our application. This included A/B testing and many usability tests observations.",   
        "logo": chefLogo,
        "image1": chefLog,
        "image2": chefHome,
        "image3": chefQ,
    },
    {
        "name": "PacAI",
        "shortDescription": "Multi-Agent Reinforcement Learning Pac-Man that calculates the best action over the given iterations, as well as many pacman variants such as multi-player capture-the-flag that involves adversarial search, Q-learning.",
        "longDescription": "PacAI is a Multi-Agent Reinforcement Learning Pac-Man that calculates the best action over the given iterations. This project included many pacman variants such as multiplayer capture-the-flag that involves adversarial search and Q-learning. The main goal of this project was to learn and understand how artificial intelligence works in many different areas in our lives. One of the first ways to understand how artificial intelligence learns through experience and data was through games. Pacman was one of the more complex games among other turn-based games, such as chess or go. The minimax PacAI calculated the best course of actions based on the Minimax search and alpha-beta pruning, which calculates the outcome of all available decisions at a point in game by a Minimax tree stretching out. The Multi-Agent Reinforcement Learning PacAI incorporated adversarial search algorithms to calculate and create non-deterministic probabilistic decisions, which allowed the Pac-Man to “think for itself” upon many iterations of trials and data.",
        "description1": "PacAI is a Multi-Agent Reinforcement Learning Pac-Man that calculates the best action over the given iterations. This project included many pacman variants developed in Python, such as multiplayer capture-the-flag that involves adversarial search and Q-learning. The primary goal of this project was to learn and understand how artificial intelligence works in different areas in our lives. One of the first ways to understand how artificial intelligence learns through experience and data was through games. Pacman was one of the more complex games among other turn-based games, such as chess or go. ",
        "description2": "The minimax PacAI calculated the best course of actions based on the Minimax search and alpha-beta pruning, which calculates the outcome of all available decisions at a point in game by a stretching Minimax tree. The Multi-Agent Reinforcement Learning PacAI incorporated adversarial search algorithms to calculate and create non-deterministic probabilistic decisions, which allowed the Pac-Man to “think for itself” upon many iterations of trials and data.",
        "logo": pacLogo,
        "image1": pacDiscount,
        "image2": pacReflex,
        "image3": pacCapture,
    },
];

export default projectList;