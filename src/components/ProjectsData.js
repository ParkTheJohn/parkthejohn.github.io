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




const projectList = [
    {
        "name": "FitRecur",
        "shortDescription": "FitRecur is a fitness tracking mobile application that focuses on simplicity and allow users to keep track, record, and display their workouts and progress.",
        "longDescription": "1lD",
        "logo": fitRecurLogo,
        "image1": fitRecurHome,
        "image2": fitRecurExercise,
        "image3": fitRecurPlan,
        "demo": fitRecurDemo,
    },
    {
        "name": "Full Stack Email Web Application",
        "shortDescription": "An E-Mail system as a Single page Full Stack Web Application using the NERP Stack: Node.js, Express, React, and PostgreSQL.",
        "longDescription": "2lD",
        "logo": emailLogo,
        "image1": emailHome,
        "image2": emailMail,
        "image3": emailFull,
        "demo": emailDemo,
    },
    {
        "name": "ChefQuest",
        "shortDescription": "ChefQuest is a gamified cooking app designed to make cooking feel less intimidating and fun for people who don't cook regularly but want to learn how to cook at home during the COVID-19 Pandemic.",
        "longDescription": "3lD",
        "logo": chefLogo,
    },
    {
        "name": "PacAI",
        "shortDescription": "Multi-Agent Reinforcement Learning Pac-Man that calculates the best action over the given iterations, as well as many pacman variants such as multi-player capture-the-flag that involves adversarial search, Q-learning.",
        "longDescription": "4lD",
        "logo": pacLogo,
    },
];

export default projectList;