// src/redux/reducers/showsReducer.js

// Define initial state
const initialState = [
  {
    id: 1,
    name: "Inception",
    description: "A mind-bending sci-fi thriller",
    creator: "Christopher Nolan",
    timings: ["10:00 AM", "02:00 PM", "06:00 PM"],
    image:
      "https://www.shutterstock.com/shutterstock/photos/1048909238/display_1500/stock-photo-totem-spinning-top-spinning-wobbling-and-stopping-spinning-top-on-mirror-surface-with-toned-smoke-1048909238.jpg", // Assume images are stored in public folder
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    description: "A powerful drama about hope and redemption",
    creator: "Frank Darabont",
    timings: ["11:30 AM", "03:30 PM", "07:30 PM"],
    image: "https://m.media-amazon.com/images/I/91Kok2Tk8fL._SX679_.jpg",
  },
  {
    id: 3,
    name: "The Dark Knight",
    description: "A thrilling superhero film",
    creator: "Christopher Nolan",
    timings: ["09:00 AM", "01:00 PM", "05:00 PM"],
    image:
      "https://m.media-amazon.com/images/I/51XBDnEr3qL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    id: 4,
    name: "Pulp Fiction",
    description: "A non-linear crime drama",
    creator: "Quentin Tarantino",
    timings: ["12:00 PM", "04:00 PM", "08:00 PM"],
    image:
      "https://c4.wallpaperflare.com/wallpaper/552/652/9/pulp-fiction-mia-wallace-uma-thurman-artwork-wallpaper-preview.jpg",
  },
  {
    id: 5,
    name: "Forrest Gump",
    description: "A heartwarming tale of a simple man",
    creator: "Robert Zemeckis",
    timings: ["10:30 AM", "02:30 PM", "06:30 PM"],
    image:
      "https://c4.wallpaperflare.com/wallpaper/539/710/449/movies-forrest-gump-wallpaper-preview.jpg",
  },
];

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default showsReducer;
