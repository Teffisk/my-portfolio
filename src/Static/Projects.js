import IndyImg from "../Images/IndyImg.png";
import HabitsImg from "../Images/HabitsImg.png";
import TankImg from "../Images/TankImg.png";
import WoofImg from "../Images/WoofImg.png";

const PROJECTS = [
  {
    name: "Indy's Taco Truck",
    tech: "HTML, CSS, Javascript",
    description:
      "This game uses vanilla Javascript to bring basic HTML and CSS to life with a fun economics game. Indy is a black-lab mix who runs a taco truck for dogs! But he needs help keeping his truck in business. The player trys to sell more tacos and keep their customers happy by buying ingredients and upgrading the tacos as more revenue is made. This simple game demonstrates DOM manipulation and the power of pure Javascript. Creating this game with gifs and images was a lot of fun. I hope you have fun playing it!",
    deployedLink: "https://teffisk.github.io/project1/",
    githubLink: "https://github.com/Teffisk/project1",
    img: IndyImg
  },
  {
    name: "Xbox Tank Companion App",
    tech: "Javascript, Node, Express, PostgreSQL, Sequelize, EJS",
    description:
      "This site using the Wargaming API to access in game assets and statistics, as well as player performance statistics over time. A player can see in-depth stats about any of the 600+ vehicles in the game. Players can also search friends on the platform to see their career performance stats, and the stats of vehicles they have played. The site also uses backend logic to show tanks that any user is actively 'grinding' which helps connect players and allows players with similar interests to play together. This is completely unique functionality to this site!",
    deployedLink: "https://xbox-tank-companion.herokuapp.com/",
    githubLink: "https://github.com/Teffisk/tank-app",
    img: TankImg
  },
  {
    name: "Habits Tracks App",
    tech: "React, Node, Express, MongoDB",
    description:
      "This site is built on the MERN stack. The backend is a RESTful API built with Node and Express that accesses a MongoDB database. The client side is built with React and functions as a single-page application. This app uses a user login system built with JWT tokens. People use this app to help build healthy habits that stick over time with daily tracking and graphical data representations to display progress. Users can add a new habit and track each time within a day they accomplish that goal!",
    deployedLink: "https://habits-track.herokuapp.com/",
    githubLink: "https://github.com/Teffisk/habit-app-client",
    img: HabitsImg
  },
  {
    name: "The Neighborhood Woof",
    tech: "React, Node, Express, Sequelize, PostgreSQL",
    description:
      "This app creates a way for people to search and review for places in the Seattle area by dog friendliness! It uses Mapbox to allow users to fly around from location to location on a responsive map, and uses the Yelp API to find location, information, and reviews for thousands of businesses and other locations in the Seattle area. Users can then find reviews and ratings of dog friendliness to find the right spot to chill with their pup.",
    deployedLink: "https://neighborhood-woof.herokuapp.com/",
    githubLink: "https://github.com/Teffisk/woof-client",
    img: WoofImg
  }
];

const brandStatement =
  "My name is Brad McKnight and I am a full stack software engineer with a professional background in merchandising. I am always looking to learn the next cool thing to take my developer skills to the next level. My merchandising background means I come with a customer-first perspective to any project.";

export default PROJECTS;
