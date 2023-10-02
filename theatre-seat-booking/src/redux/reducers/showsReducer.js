// src/redux/reducers/showsReducer.js

// Define initial state
const initialState = [
  {
    id: 1,
    name: "Inception",
    description: "A mind-bending sci-fi thriller",
    creator: "Christopher Nolan",
    timings: ["10:00 AM", "02:00 PM", "06:00 PM"],
    image: "inception.jpg", // Assume images are stored in public folder
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    description: "A powerful drama about hope and redemption",
    creator: "Frank Darabont",
    timings: ["11:30 AM", "03:30 PM", "07:30 PM"],
    image: "shawshank_redemption.jpg",
  },
  {
    id: 3,
    name: "The Dark Knight",
    description: "A thrilling superhero film",
    creator: "Christopher Nolan",
    timings: ["09:00 AM", "01:00 PM", "05:00 PM"],
    image: "dark_knight.jpg",
  },
  {
    id: 4,
    name: "Pulp Fiction",
    description: "A non-linear crime drama",
    creator: "Quentin Tarantino",
    timings: ["12:00 PM", "04:00 PM", "08:00 PM"],
    image: "pulp_fiction.jpg",
  },
  {
    id: 5,
    name: "Forrest Gump",
    description: "A heartwarming tale of a simple man",
    creator: "Robert Zemeckis",
    timings: ["10:30 AM", "02:30 PM", "06:30 PM"],
    image: "forrest_gump.jpg",
  },
  {
    id: 6,
    name: "The Matrix",
    description: "A cyberpunk action film",
    creator: "Lana Wachowski, Lilly Wachowski",
    timings: ["11:00 AM", "03:00 PM", "07:00 PM"],
    image: "matrix.jpg",
  },
  {
    id: 7,
    name: "Gladiator",
    description: "An epic historical drama",
    creator: "Ridley Scott",
    timings: ["09:30 AM", "01:30 PM", "05:30 PM"],
    image: "gladiator.jpg",
  },
  {
    id: 8,
    name: "Fight Club",
    description: "A psychological thriller",
    creator: "David Fincher",
    timings: ["12:30 PM", "04:30 PM", "08:30 PM"],
    image: "fight_club.jpg",
  },
  {
    id: 9,
    name: "Schindler's List",
    description: "A historical drama about the Holocaust",
    creator: "Steven Spielberg",
    timings: ["10:45 AM", "02:45 PM", "06:45 PM"],
    image: "schindlers_list.jpg",
  },
  {
    id: 10,
    name: "The Godfather",
    description: "A crime drama about a powerful mafia family",
    creator: "Francis Ford Coppola",
    timings: ["11:15 AM", "03:15 PM", "07:15 PM"],
    image: "godfather.jpg",
  },
];

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle specific actions related to shows if needed in the future
    default:
      return state;
  }
};

export default showsReducer;
