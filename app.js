const liveAppUrls = {
  letsCook: "#lets-cook",
  findTheBeat: "#find-the-beat",
  beu: "#beu",
  secondChance: "#second-chance"
};

let categories = [
  "Southern Comfort",
  "Quick Weeknight Meals",
  "Global Flavors",
  "Family Dinners",
  "Beginner Basics",
  "Party & Hosting",
  "Kid-Friendly Cooking"
];

const ecosystemApps = [
  {
    id: "lets-cook",
    title: "Let's Cook Ya'll",
    accent: "gold",
    image: "assets/logo.png",
    tagline: "Cooking confidence for real families, real kitchens, and warm tables.",
    description: "Southern fresh meets global flavor through recipes, Cook 101 lessons, Shay's Kitchen, hosting ideas, and meal planning.",
    route: "#lets-cook",
    externalUrl: liveAppUrls.letsCook,
    status: "Launch ready",
    links: [
      ["Open Let's Cook", "#lets-cook"],
      ["Shay's Kitchen", "#kitchen"]
    ]
  },
  {
    id: "find-the-beat",
    title: "Find the Beat",
    accent: "orange",
    image: "assets/find-the-beat-logo.svg",
    tagline: "Music energy, creative rhythm, and discovery for artists and listeners.",
    description: "A music-centered app with bold orange movement, playlists, lessons, community showcases, and creative tools.",
    route: "#find-the-beat",
    externalUrl: liveAppUrls.findTheBeat,
    status: "Render pending",
    links: [
      ["Preview Here", "#find-the-beat"]
    ]
  },
  {
    id: "beu",
    title: "BEU",
    accent: "blue",
    image: "assets/beu-logo.jpg",
    tagline: "A cultural compass for people, places, cuisine, and community rhythm.",
    description: "A polished blue navigation app for cultural discovery: promoter spotlights, cuisine features, places to visit, and a yearly community calendar.",
    route: "#beu",
    externalUrl: liveAppUrls.beu,
    status: "Render pending",
    links: [
      ["Preview Here", "#beu"]
    ]
  },
  {
    id: "second-chance",
    title: "Second Chance Careers",
    accent: "career",
    image: "assets/second-chance-logo.svg",
    tagline: "Uplifting career support built with dignity, clarity, and practical momentum.",
    description: "A supportive professional app for jobs, training, resumes, resources, and people rebuilding with purpose.",
    route: "#second-chance",
    externalUrl: liveAppUrls.secondChance,
    status: "Render pending",
    links: [
      ["Preview Here", "#second-chance"]
    ]
  }
];

const beuSections = [
  {
    id: "north-star",
    label: "North Star",
    title: "Promoter of the Month",
    direction: "N",
    text: "A monthly spotlight for the person moving culture forward: the connector, host, organizer, DJ, curator, or community builder people should know.",
    detail: "Feature profile, event links, interview clips, social handles, and a Brent & Co. spotlight card.",
    cta: "View Spotlight"
  },
  {
    id: "essence",
    label: "Essence",
    title: "Cuisine of the Month",
    direction: "S",
    text: "A cultural food feature that connects restaurants, home cooking, history, and the flavors that make a place feel alive.",
    detail: "Pair this with Let's Cook Ya'll recipes, restaurant picks, creator notes, and a monthly food story.",
    cta: "Taste the Feature"
  },
  {
    id: "scene",
    label: "Scene",
    title: "Places to Visit",
    direction: "E",
    text: "Curated destinations and local gems: lounges, museums, neighborhoods, pop-ups, cultural events, and weekend stops.",
    detail: "Map cards, saved places, trip ideas, and community-submitted recommendations.",
    cta: "Explore Places"
  },
  {
    id: "waypoint",
    label: "Waypoint",
    title: "Yearly Calendar",
    direction: "W",
    text: "A clear annual calendar for festivals, tastings, shows, markets, cultural moments, and Brent & Co. gatherings.",
    detail: "Monthly planning, featured dates, reminders, and links out to each app in the ecosystem.",
    cta: "Open Calendar"
  }
];

const appHubSections = {
  "find-the-beat": [
    { title: "Artist Discovery", text: "A future home for local artists, producers, DJs, playlists, and creative spotlights." },
    { title: "Creative Sessions", text: "A section for workshops, listening parties, studio nights, and community music events." },
    { title: "Sound Map", text: "A city-based discovery layer that can connect music scenes to BEU cultural listings." }
  ],
  "second-chance": [
    { title: "Job Pathways", text: "Career tracks, listings, training links, and supportive employment resources." },
    { title: "Resume Support", text: "A practical space for profile building, resume drafts, interview prep, and confidence." },
    { title: "Community Partners", text: "Verified organizations, mentors, employers, and local support networks." }
  ]
};

const paths = [
  {
    id: "kid-chefs",
    title: "Kid Chefs",
    eyebrow: "Small hands, big confidence",
    level: "Beginner",
    image: "assets/kid-friendly.jpeg",
    description: "Short, safe lessons for young cooks and families cooking together.",
    steps: ["Wash hands and set up a clean station", "Practice measuring and mixing", "Build no-fear snacks and simple dinners"],
    recipes: ["deviled-eggs", "orange-chicken", "charcuterie-boards"]
  },
  {
    id: "amateur-home-chef",
    title: "Amateur Home Chef",
    eyebrow: "Dinner gets easier from here",
    level: "Beginner to Intermediate",
    image: "assets/cooking-family.jpeg",
    description: "Everyday cooking skills for the person who wants dinner to feel less stressful.",
    steps: ["Learn seasoning and timing", "Cook proteins without guessing", "Plan two or three meals ahead"],
    recipes: ["shrimp-and-grits", "cajun-cream-pasta", "chicken-parmesan"]
  },
  {
    id: "professional-mode",
    title: "Professional Mode",
    eyebrow: "Cook like you mean it",
    level: "Advanced",
    image: "assets/ingredients.jpeg",
    description: "Technique-driven recipes, hosting flow, plating, prep lists, and stronger kitchen rhythm.",
    steps: ["Prep like a line cook", "Build sauces and braises", "Plate and host with calm"],
    recipes: ["oxtails", "yakamein", "bourbon-praline-bread-pudding"]
  }
];

const cuisines = [
  { id: "southern", name: "Southern Classics", image: "assets/fresh-bread.jpeg", blurb: "Comforting dishes, porch-table sides, slow braises, and big hospitality." },
  { id: "creole", name: "Creole & Cajun", image: "assets/pasta.jpeg", blurb: "New Orleans flavor, seafood, spice, rice, roux, and soulful one-pot meals." },
  { id: "asian-inspired", name: "Asian Inspired", image: "assets/beautiful-chicken.jpeg", blurb: "Crisp, saucy, family-friendly dinners with bold pantry flavor." },
  { id: "italian", name: "Italian Comfort", image: "assets/pasta.jpeg", blurb: "Pasta nights, red sauce, baked mains, and beginner-friendly classics." },
  { id: "hosting", name: "Party & Hosting", image: "assets/recipe-book.jpeg", blurb: "Boards, bites, desserts, and dinner-party helpers that make people feel cared for." },
  { id: "global", name: "Global Flavors", image: "assets/indian-food.jpeg", blurb: "A warm bridge from Southern kitchens to flavors from everywhere." }
];

let recipes = [
  {
    id: "yakamein",
    title: "Yakamein",
    cuisine: "creole",
    category: "Southern Comfort",
    image: "assets/recipe-book.jpeg",
    time: "50 min",
    level: "Intermediate",
    servings: 4,
    path: "professional-mode",
    description: "A New Orleans-style beef noodle bowl with broth, egg, green onion, and cozy spice.",
    ingredients: ["Beef chuck or stew meat", "Spaghetti noodles", "Beef broth", "Boiled eggs", "Green onions", "Creole seasoning"],
    steps: ["Simmer beef with broth and seasoning until tender.", "Boil noodles separately.", "Build bowls with noodles, broth, beef, egg, and green onion.", "Taste and adjust seasoning before serving."]
  },
  {
    id: "shrimp-and-grits",
    title: "Shrimp and Grits with Green Beans",
    cuisine: "southern",
    category: "Southern Comfort",
    image: "assets/american-food.jpeg",
    time: "35 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "Creamy grits, juicy shrimp, peppers, and green beans for the kind of plate that feels cooked with care.",
    ingredients: ["Shrimp", "Stone-ground grits", "Green beans", "Chicken stock", "Butter", "Bell pepper", "Garlic", "Lemon"],
    steps: ["Cook grits low and slow with stock.", "Saute peppers, garlic, and green beans.", "Cook shrimp until just pink.", "Spoon shrimp and vegetables over creamy grits."]
  },
  {
    id: "oxtails",
    title: "Braised Oxtails",
    cuisine: "southern",
    category: "Family Dinners",
    image: "assets/german-food.jpeg",
    time: "3 hr",
    level: "Advanced",
    servings: 6,
    path: "professional-mode",
    description: "Tender oxtails braised with aromatics until the gravy turns deep, glossy, and rich.",
    ingredients: ["Oxtails", "Onion", "Carrots", "Celery", "Garlic", "Beef stock", "Thyme"],
    steps: ["Season and brown oxtails well.", "Cook aromatics in the same pot.", "Add stock and thyme.", "Braise covered until tender and reduce the gravy."]
  },
  {
    id: "orange-chicken",
    title: "Orange Chicken",
    cuisine: "asian-inspired",
    category: "Kid-Friendly Cooking",
    image: "assets/beautiful-chicken.jpeg",
    time: "30 min",
    level: "Beginner",
    servings: 4,
    path: "kid-chefs",
    description: "Crispy chicken bites tossed in a sweet orange glaze that kids can help mix.",
    ingredients: ["Chicken breast", "Cornstarch", "Orange juice", "Soy sauce", "Honey", "Garlic", "Rice"],
    steps: ["Coat chicken pieces with cornstarch.", "Pan-cook until crisp and cooked through.", "Simmer orange juice, soy sauce, honey, and garlic.", "Toss chicken in sauce and serve over rice."]
  },
  {
    id: "cajun-cream-pasta",
    title: "Cajun Cream Salmon Rotini Pasta",
    cuisine: "creole",
    category: "Quick Weeknight Meals",
    image: "assets/pasta.jpeg",
    time: "30 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A creamy, lightly spicy rotini pasta with salmon, Cajun seasoning, and a sauce that comes together fast.",
    ingredients: ["Rotini pasta", "Salmon", "Cajun seasoning", "Cream", "Parmesan", "Bell pepper"],
    steps: ["Boil rotini in salted water.", "Sear salmon with Cajun seasoning.", "Add pepper, cream, and parmesan.", "Toss pasta with sauce and flaked salmon."]
  },
  {
    id: "chicken-parmesan",
    title: "Chicken Parmesan",
    cuisine: "italian",
    category: "Family Dinners",
    image: "assets/beautiful-chicken.jpeg",
    time: "45 min",
    level: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Crisp breaded chicken layered with marinara and cheese for a family-dinner favorite.",
    ingredients: ["Chicken cutlets", "Breadcrumbs", "Eggs", "Marinara", "Mozzarella", "Parmesan"],
    steps: ["Bread chicken with flour, egg, and breadcrumbs.", "Pan-fry until golden.", "Top with marinara and cheese.", "Bake until bubbly and cooked through."]
  },
  {
    id: "crab-rangoon",
    title: "Crab Rangoon",
    cuisine: "asian-inspired",
    category: "Party & Hosting",
    image: "assets/recipe-book.jpeg",
    time: "35 min",
    level: "Intermediate",
    servings: 8,
    path: "professional-mode",
    description: "Crispy wontons filled with creamy crab, scallions, and a little sweetness.",
    ingredients: ["Wonton wrappers", "Cream cheese", "Crab meat", "Green onion", "Garlic powder", "Sweet chili sauce"],
    steps: ["Mix filling until smooth.", "Spoon into wonton wrappers.", "Seal with water.", "Fry or air-fry until crisp and serve with sauce."]
  },
  {
    id: "deviled-eggs",
    title: "Deviled Eggs",
    cuisine: "southern",
    category: "Beginner Basics",
    image: "assets/ingredients.jpeg",
    time: "25 min",
    level: "Beginner",
    servings: 12,
    path: "kid-chefs",
    description: "A party-table classic that teaches boiling, peeling, mixing, and seasoning.",
    ingredients: ["Eggs", "Mayonnaise", "Mustard", "Relish", "Paprika", "Salt"],
    steps: ["Boil and cool eggs.", "Peel and halve them.", "Mix yolks with mayo, mustard, relish, and salt.", "Pipe or spoon filling back into whites."]
  },
  {
    id: "charcuterie-boards",
    title: "Charcuterie Boards",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/fresh-bread.jpeg",
    time: "20 min",
    level: "Beginner",
    servings: 8,
    path: "kid-chefs",
    description: "A no-stress hosting board with cheese, fruit, crackers, dips, and easy visual balance.",
    ingredients: ["Cheese", "Crackers", "Fruit", "Nuts", "Pickles", "Jam", "Cured meat"],
    steps: ["Place bowls and cheeses first.", "Add crackers in small rivers.", "Fill gaps with fruit and nuts.", "Finish with color and height."]
  },
  {
    id: "bourbon-praline-bread-pudding",
    title: "Bourbon Praline Bread Pudding",
    cuisine: "southern",
    category: "Party & Hosting",
    image: "assets/fresh-bread.jpeg",
    time: "1 hr 15 min",
    level: "Intermediate",
    servings: 10,
    path: "professional-mode",
    description: "Custardy bread pudding with pecans and a buttery praline-style sauce.",
    ingredients: ["Day-old bread", "Eggs", "Cream", "Brown sugar", "Pecans", "Vanilla", "Bourbon extract"],
    steps: ["Soak bread in custard.", "Fold in pecans.", "Bake until set and golden.", "Spoon warm praline sauce over the top."]
  }
];

let personalRecipeIds = [
  "orange-chicken",
  "crab-rangoon",
  "yakamein",
  "shrimp-and-grits",
  "oxtails",
  "cajun-cream-pasta",
  "roasted-vegetable-tray",
  "white-chicken-chili",
  "general-tso-chicken",
  "cashew-chicken",
  "fried-rice",
  "chicken-parmesan",
  "deviled-eggs",
  "rotel-dip",
  "party-meatballs",
  "charcuterie-boards",
  "dessert-charcuterie-board",
  "bourbon-praline-bread-pudding",
  "blackened-fish",
  "tuscan-chicken",
  "garlic-wings",
  "pineapple-fried-rice",
  "lamb-bone-broth-soup"
];

recipes.push(
  {
    id: "roasted-vegetable-tray",
    title: "Roasted Broccoli, Zucchini, Red Onion, Cherry Tomatoes, and Sweet Potatoes",
    cuisine: "global",
    category: "Beginner Basics",
    image: "assets/ingredients.jpeg",
    time: "40 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A colorful sheet-pan vegetable tray from Shay's real kitchen rotation: simple, flexible, and good with almost anything.",
    ingredients: ["Broccoli", "Zucchini", "Red onion", "Cherry tomatoes", "Sweet potatoes", "Olive oil", "Garlic seasoning"],
    steps: ["Cut vegetables into similar sizes.", "Toss with oil and seasoning.", "Roast sweet potatoes first, then add tender vegetables.", "Finish when browned at the edges."]
  },
  {
    id: "white-chicken-chili",
    title: "White Chicken Chili / Southwest Chicken Soup",
    cuisine: "southern",
    category: "Family Dinners",
    image: "assets/cooking-family.jpeg",
    time: "45 min",
    level: "Beginner",
    servings: 6,
    path: "amateur-home-chef",
    description: "A cozy planned soup with chicken, beans, corn, green chiles, and southwest flavor.",
    ingredients: ["Chicken", "White beans", "Corn", "Green chiles", "Chicken broth", "Cream cheese", "Cumin"],
    steps: ["Simmer chicken with broth, beans, corn, and chiles.", "Season with cumin and salt.", "Shred chicken.", "Stir in cream cheese until creamy."]
  },
  {
    id: "general-tso-chicken",
    title: "General Tso-Style Chicken",
    cuisine: "asian-inspired",
    category: "Global Flavors",
    image: "assets/beautiful-chicken.jpeg",
    time: "35 min",
    level: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Sweet, tangy, lightly spicy chicken bites inspired by takeout but made for a home kitchen.",
    ingredients: ["Chicken thighs", "Cornstarch", "Soy sauce", "Rice vinegar", "Brown sugar", "Garlic", "Chili flakes"],
    steps: ["Coat chicken with cornstarch.", "Cook until crisp.", "Simmer sauce until glossy.", "Toss chicken in sauce and serve with rice."]
  },
  {
    id: "cashew-chicken",
    title: "Cashew Chicken",
    cuisine: "asian-inspired",
    category: "Quick Weeknight Meals",
    image: "assets/beautiful-chicken.jpeg",
    time: "30 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A planned weeknight stir-fry with tender chicken, cashews, vegetables, and a savory sauce.",
    ingredients: ["Chicken breast", "Cashews", "Bell pepper", "Soy sauce", "Honey", "Garlic", "Rice"],
    steps: ["Cook chicken pieces until browned.", "Add peppers and garlic.", "Stir in sauce.", "Finish with cashews and serve over rice."]
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    cuisine: "asian-inspired",
    category: "Quick Weeknight Meals",
    image: "assets/recipe-book.jpeg",
    time: "20 min",
    level: "Beginner",
    servings: 4,
    path: "kid-chefs",
    description: "A practical leftover-rice meal that teaches timing, high heat, and seasoning.",
    ingredients: ["Cold rice", "Eggs", "Peas and carrots", "Soy sauce", "Green onion", "Oil"],
    steps: ["Scramble eggs and set aside.", "Cook vegetables.", "Add cold rice and soy sauce.", "Fold eggs back in and finish with green onion."]
  },
  {
    id: "rotel-dip",
    title: "Rotel Dip",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/fresh-bread.jpeg",
    time: "20 min",
    level: "Beginner",
    servings: 10,
    path: "kid-chefs",
    description: "A familiar party dip for the Brent & Co. table: creamy, easy, and made for gathering.",
    ingredients: ["Velveeta or melting cheese", "Rotel tomatoes", "Ground beef or sausage", "Tortilla chips"],
    steps: ["Brown meat if using.", "Melt cheese with tomatoes.", "Stir everything together.", "Keep warm and serve with chips."]
  },
  {
    id: "party-meatballs",
    title: "Party Meatballs",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/german-food.jpeg",
    time: "35 min",
    level: "Beginner",
    servings: 10,
    path: "amateur-home-chef",
    description: "Saucy bite-size meatballs for hosting, potlucks, and game nights.",
    ingredients: ["Meatballs", "Chili sauce", "Grape jelly", "Worcestershire", "Parsley"],
    steps: ["Warm sauce ingredients together.", "Add meatballs.", "Simmer until glossy and hot.", "Serve with toothpicks."]
  },
  {
    id: "dessert-charcuterie-board",
    title: "Dessert Charcuterie Board",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/fresh-bread.jpeg",
    time: "25 min",
    level: "Beginner",
    servings: 10,
    path: "kid-chefs",
    description: "A sweet board idea with fruit, cookies, chocolate, dips, and pretty little bites.",
    ingredients: ["Cookies", "Chocolate", "Berries", "Marshmallows", "Caramel dip", "Pretzels"],
    steps: ["Place dips first.", "Group cookies and fruit.", "Add chocolate and salty bites.", "Fill gaps so the board feels abundant."]
  },
  {
    id: "blackened-fish",
    title: "Blackened Fish",
    cuisine: "creole",
    category: "Quick Weeknight Meals",
    image: "assets/ingredients.jpeg",
    time: "25 min",
    level: "Intermediate",
    servings: 4,
    path: "professional-mode",
    description: "A bold skillet fish idea with blackened seasoning and a fast weeknight feel.",
    ingredients: ["White fish fillets", "Blackened seasoning", "Butter", "Lemon", "Rice or vegetables"],
    steps: ["Pat fish dry.", "Season generously.", "Sear in a hot skillet.", "Finish with lemon and serve right away."]
  },
  {
    id: "tuscan-chicken",
    title: "Tuscan Chicken",
    cuisine: "italian",
    category: "Family Dinners",
    image: "assets/beautiful-chicken.jpeg",
    time: "40 min",
    level: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Creamy chicken with spinach, tomatoes, garlic, and parmesan for a polished dinner.",
    ingredients: ["Chicken cutlets", "Spinach", "Sun-dried tomatoes", "Cream", "Parmesan", "Garlic"],
    steps: ["Sear chicken.", "Build cream sauce with garlic and tomatoes.", "Add spinach.", "Return chicken and simmer until done."]
  },
  {
    id: "garlic-wings",
    title: "Garlic Wings",
    cuisine: "southern",
    category: "Party & Hosting",
    image: "assets/beautiful-chicken.jpeg",
    time: "50 min",
    level: "Beginner",
    servings: 6,
    path: "kid-chefs",
    description: "Crispy wings tossed in buttery garlic flavor for parties, dinner, or a snack table.",
    ingredients: ["Chicken wings", "Garlic", "Butter", "Parsley", "Lemon pepper", "Salt"],
    steps: ["Season and bake or air-fry wings.", "Melt butter with garlic.", "Toss wings in garlic butter.", "Finish with parsley."]
  },
  {
    id: "pineapple-fried-rice",
    title: "Pineapple Fried Rice",
    cuisine: "asian-inspired",
    category: "Global Flavors",
    image: "assets/recipe-book.jpeg",
    time: "25 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A bright fried rice idea with pineapple, vegetables, egg, and a sweet-savory finish.",
    ingredients: ["Cold rice", "Pineapple", "Eggs", "Peas", "Soy sauce", "Green onion"],
    steps: ["Scramble eggs.", "Cook vegetables and pineapple.", "Add rice and sauce.", "Fold eggs back in and serve."]
  },
  {
    id: "lamb-bone-broth-soup",
    title: "Lamb Bone Broth / Soup Idea",
    cuisine: "global",
    category: "Family Dinners",
    image: "assets/ingredients.jpeg",
    time: "2 hr",
    level: "Advanced",
    servings: 6,
    path: "professional-mode",
    description: "A planned soup idea built from lamb bones, aromatics, herbs, and slow simmered broth.",
    ingredients: ["Lamb bones", "Onion", "Carrots", "Celery", "Garlic", "Bay leaf", "Herbs"],
    steps: ["Roast or brown bones for flavor.", "Simmer with aromatics.", "Strain broth.", "Build soup with vegetables, meat, or noodles."]
  }
);

const lessons = [
  { id: "knife-skills", title: "Knife Skills", image: "assets/kid-friendly.jpeg", text: "Practice safe grips, stable cutting boards, and beginner-friendly cuts." },
  { id: "seasoning", title: "Seasoning Without Fear", image: "assets/ingredients.jpeg", text: "Learn salt, acid, fat, heat, herbs, and tasting as you go." },
  { id: "rice-grits-pasta", title: "Rice, Grits, and Pasta", image: "assets/pasta.jpeg", text: "Master the everyday bases that make dinner feel possible." },
  { id: "hosting-flow", title: "Hosting Flow", image: "assets/fresh-bread.jpeg", text: "Prep lists, timing, serving pieces, and keeping guests comfortable." }
];

const hostingIdeas = [
  { title: "Sunday Comfort Supper", text: "Braised oxtails, deviled eggs, greens, and bread pudding.", recipes: ["oxtails", "deviled-eggs", "bourbon-praline-bread-pudding"] },
  { title: "Game Night Bites", text: "Crab rangoon, charcuterie, orange chicken bites, and sparkling lemonade.", recipes: ["crab-rangoon", "charcuterie-boards", "orange-chicken"] },
  { title: "Beginner Dinner Party", text: "Shrimp and grits with a board to start and bread pudding to finish.", recipes: ["shrimp-and-grits", "charcuterie-boards", "bourbon-praline-bread-pudding"] }
];

const app = document.querySelector("#app");
const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");

let saved = readJSON("letsCookSaved", []);
let planned = readJSON("letsCookPlanned", []);
let submissions = readJSON("letsCookSubmissions", []);
let beuListings = [];
let beuCities = [];
let beuCommunity = {
  currentUser: null,
  reviews: [],
  recommendations: [],
  savedPlaces: [],
  reports: []
};
let beuState = {
  origin: null,
  country: "all",
  selectedCity: "all",
  locationLabel: "Global",
  radiusMiles: 25,
  compass: "all",
  category: "all",
  tag: "all",
  query: "",
  status: "Showing global BEU sample data. Choose a country, select a city, or use your location to personalize results."
};

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("hashchange", render);
document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("input", handleSearch);
document.addEventListener("change", handleSearch);

function routeParts() {
  const [route, id] = (window.location.hash.replace("#", "") || "beu").split("/");
  return { route, id };
}

function render() {
  const { route, id } = routeParts();
  setActive(route);
  updateAppChrome(route);
  if (route === "home") return renderPlatformHome();
  if (route === "lets-cook") return renderLetsCookHome();
  if (route === "find-the-beat") return renderFindTheBeatHome();
  if (route === "beu") return renderBeuHome();
  if (route === "beu-section") return renderBeuSection(id);
  if (beuSections.some((section) => section.id === route)) return renderBeuSection(route);
  if (route === "beu-place") return renderBeuPlace(id);
  if (route === "beu-profile") return renderBeuProfile();
  if (route === "beu-saved") return renderBeuSaved();
  if (route === "beu-admin") return renderBeuAdmin();
  if (route === "second-chance") return renderSecondChanceHome();
  if (route === "community") return renderCommunity();
  if (route === "kitchen") return renderKitchen();
  if (route === "cook101") return id ? renderLesson(id) : renderCook101();
  if (route === "recipes") return id ? renderRecipe(id) : renderRecipes();
  if (route === "paths") return id ? renderPath(id) : renderPaths();
  if (route === "planner") return renderPlanner();
  if (route === "hosting") return renderHosting();
  if (route === "about") return renderAbout();
  if (route === "account") return renderAbout();
  if (route === "search") return renderRecipes();
  if (route === "cuisine") return renderCuisine(id);
  renderPlatformHome();
}

function setActive(route) {
  const cookingRoutes = ["kitchen", "cook101", "recipes", "paths", "planner", "hosting", "about", "account", "search", "cuisine"];
  const beuRoutes = ["beu-section", "beu-place", "beu-profile", "beu-saved", "beu-admin", ...beuSections.map((section) => section.id)];
  const normalizedRoute = cookingRoutes.includes(route) ? "lets-cook" : beuRoutes.includes(route) ? "beu" : route;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === normalizedRoute);
  });
}

function activeAppForRoute(route) {
  const cookingRoutes = ["lets-cook", "kitchen", "cook101", "recipes", "paths", "planner", "hosting", "about", "account", "search", "cuisine"];
  const beuRoutes = ["beu", "beu-section", "beu-place", "beu-profile", "beu-saved", "beu-admin", ...beuSections.map((section) => section.id)];
  if (cookingRoutes.includes(route)) return ecosystemApps.find((item) => item.id === "lets-cook");
  if (beuRoutes.includes(route)) return ecosystemApps.find((item) => item.id === "beu");
  if (route === "find-the-beat") return ecosystemApps.find((item) => item.id === "find-the-beat");
  if (route === "second-chance") return ecosystemApps.find((item) => item.id === "second-chance");
  return { title: "Brent & Co.", image: "assets/brent-co-logo.svg", accent: "platform" };
}

function updateAppChrome(route) {
  const activeApp = activeAppForRoute(route);
  const mark = document.querySelector(".active-app-mark");
  if (!mark || !activeApp) return;
  mark.className = `active-app-mark ${activeApp.accent || "platform"}`;
  mark.innerHTML = `<img src="${activeApp.image}" alt="" /><span>${activeApp.title}</span>`;
}

function linkAttrs(href) {
  const safeHref = href || "#home";
  const external = safeHref.startsWith("http");
  return `href="${safeHref}"${external ? ' target="_blank" rel="noreferrer"' : ""}`;
}

function hero(title, text, image = "assets/logo.png", actions = "") {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Brent & Co. / Let's Cook Ya'll</p>
        <h1>${title}</h1>
        <p>${text}</p>
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
      <figure class="hero-media"><img src="${image}" alt="" /></figure>
    </section>
  `;
}

function platformHero() {
  return `
    <section class="platform-hero">
      <div>
        <img class="platform-wordmark" src="assets/brent-co-wordmark.png" alt="Brent & Co." />
        <p class="eyebrow">Brent & Co. ecosystem</p>
        <h1>One welcoming home for every Brent & Co. platform.</h1>
        <p>Start here, then move into cooking, music, cultural discovery, or career support. Live launch links stay private until each Render service points at the correct app.</p>
        <div class="hero-actions">
          <a class="small-button" href="#storefront">View All Platforms</a>
          <a class="small-button secondary" href="#lets-cook">Preview Let's Cook</a>
        </div>
      </div>
      <div class="ecosystem-preview">
        ${ecosystemApps.map((app) => `<a class="mini-app ${app.accent}" ${linkAttrs(app.externalUrl || app.route)}><span>${app.title}</span><strong>${app.status}</strong></a>`).join("")}
      </div>
    </section>
  `;
}

function renderPlatformHome() {
  app.innerHTML = `
    ${platformHero()}
    <section class="cream-section landing-links" id="storefront">
      <div class="section-heading">
        <p class="eyebrow">Launch pad</p>
        <h2>Choose where you want to go</h2>
        <p>Each platform keeps its own personality, but every path starts from this Brent & Co. home base.</p>
      </div>
      <div class="app-grid">${ecosystemApps.map(appCard).join("")}</div>
    </section>
    <section class="cream-section direct-link-section">
      <div class="section-heading">
        <p class="eyebrow">Launch status</p>
        <h2>Deployment destinations</h2>
      </div>
      <div class="direct-link-grid">
        ${ecosystemApps.map(platformLinkCard).join("")}
      </div>
    </section>
    <section class="gold-section">
      <div class="section-heading">
        <p class="eyebrow">Connected structure</p>
        <h2>A platform family, not random separate projects</h2>
      </div>
      <div class="system-grid">
        <article><strong>Live app first</strong><span>Storefront cards will open the deployed apps once the correct Render services are connected.</span></article>
        <article><strong>Preview preserved</strong><span>The Brent & Co. prototype still includes local previews for visual direction and future planning.</span></article>
        <article><strong>Private source</strong><span>Repository links stay out of the public app experience while development stays organized behind the scenes.</span></article>
      </div>
    </section>
  `;
}

function renderLetsCookHome() {
  app.innerHTML = `
    ${hero(
      "Cook With Confidence",
      "A warm cooking-skills app for kid chefs, home cooks, and hosts who want food to feel welcoming, not intimidating.",
      "assets/logo.png",
      `<a class="small-button" href="#paths">Find Your Path</a><a class="small-button secondary" href="#recipes">Browse Recipes</a>`
    )}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="feature-grid">
        ${paths.map(pathCard).join("")}
      </div>
    </section>
    <section class="green-section personal-band">
      <div class="section-heading">
        <p class="eyebrow">From my kitchen</p>
        <h2>Shay's Kitchen</h2>
        <p>Meals already cooked, loved, talked about, or planned for the next Brent & Co. table.</p>
      </div>
      <div class="recipe-grid">${personalRecipes().slice(0, 6).map(recipeCard).join("")}</div>
      <div class="hero-actions"><a class="small-button" href="#kitchen">Open Shay's Kitchen</a></div>
    </section>
    <section class="gold-section">
      <div class="section-heading">
        <p class="eyebrow">Southern fresh meets global flavor</p>
        <h2>Start With What Feels Good</h2>
      </div>
      <div class="cuisine-grid">${cuisines.map(cuisineCard).join("")}</div>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Tonight's table</p>
        <h2>Warm Picks From The Kitchen</h2>
      </div>
      <div class="recipe-grid">${recipes.slice(0, 6).map(recipeCard).join("")}</div>
    </section>
  `;
}

function renderAppHub(id) {
  const currentApp = ecosystemApps.find((item) => item.id === id) || ecosystemApps[0];
  app.innerHTML = `
    <section class="app-hub ${currentApp.accent}">
      <div class="app-hub-copy">
        <p class="eyebrow">Brent & Co. app</p>
        <h1>${currentApp.title}</h1>
        <p>${currentApp.tagline}</p>
        <div class="hero-actions">${currentApp.links.map(([label, href], index) => `<a class="small-button ${index === 0 ? "" : "secondary"}" ${linkAttrs(href)}>${label}</a>`).join("")}</div>
      </div>
      <figure><img src="${currentApp.image}" alt="" /></figure>
    </section>
    <section class="cream-section">
      <div class="about-layout">
        <article class="detail-panel">
          <p class="eyebrow">${currentApp.status}</p>
          <h2>${currentApp.title}</h2>
          <p class="detail-copy">${currentApp.description}</p>
        </article>
        <article class="detail-panel">
          <h2>Shared Brent & Co. Structure</h2>
          <p class="detail-copy">This app area uses the same hero, card, button, spacing, and motion system as the rest of the platform, while keeping its own accent color and emotional lane.</p>
        </article>
      </div>
      <div class="system-grid app-hub-links">
        ${(appHubSections[id] || []).map((section) => `<article><strong>${section.title}</strong><span>${section.text}</span><a class="small-button secondary" href="#community">Connect Through Community</a></article>`).join("")}
      </div>
    </section>
  `;
}

function renderFindTheBeatHome() {
  const currentApp = ecosystemApps.find((item) => item.id === "find-the-beat");
  const features = [
    ["Artist Discovery", "Profiles for artists, DJs, producers, dancers, playlists, and community showcases."],
    ["Sound Map", "City-based music discovery that can eventually connect to BEU nightlife and cultural events."],
    ["Creative Sessions", "A home for workshops, listening parties, studio nights, and performance calendars."],
    ["Member Picks", "Community recommendations for songs, venues, creators, and scenes worth watching."]
  ];
  app.innerHTML = `
    <section class="product-home find-home">
      <div class="product-copy">
        <p class="eyebrow">Brent & Co. / Find the Beat</p>
        <img class="product-logo" src="${currentApp.image}" alt="Find the Beat" />
        <h1>Find the rhythm of a city, a scene, and a creative community.</h1>
        <p>${currentApp.description}</p>
        <div class="hero-actions">
          <a class="small-button" ${linkAttrs(liveAppUrls.findTheBeat)}>Preview App</a>
          <a class="small-button secondary" href="#home">Back to Brent & Co.</a>
          <a class="small-button secondary" href="#beu-section/scene">Connect to BEU Scene</a>
        </div>
      </div>
      <figure class="product-preview"><img src="assets/find-the-beat-mockup.png" alt="Find the Beat app mockup" /></figure>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Find the Beat home</p>
        <h2>Music discovery with a real destination</h2>
      </div>
      <div class="system-grid">
        ${features.map(([title, text]) => `<article><strong>${title}</strong><span>${text}</span><a class="small-button secondary" ${linkAttrs(liveAppUrls.findTheBeat)}>Open ${title}</a></article>`).join("")}
      </div>
    </section>
  `;
}

function renderSecondChanceHome() {
  const currentApp = ecosystemApps.find((item) => item.id === "second-chance");
  const features = [
    ["Job Pathways", "Supportive tracks for entry-level, remote, skilled trade, healthcare, logistics, and office roles."],
    ["Resume Support", "Profile building, resume sections, interview prep, and confidence-building tools."],
    ["Training Resources", "Programs, certificates, reentry-friendly resources, and practical next steps."],
    ["Employer Partners", "A future home for supportive employers, local partners, and verified opportunities."]
  ];
  app.innerHTML = `
    <section class="product-home career-home">
      <div class="product-copy">
        <p class="eyebrow">Brent & Co. / Second Chance Careers</p>
        <img class="product-logo" src="${currentApp.image}" alt="Second Chance Careers" />
        <h1>Career rebuilding with dignity, clarity, and momentum.</h1>
        <p>${currentApp.description}</p>
        <div class="hero-actions">
          <a class="small-button" ${linkAttrs(liveAppUrls.secondChance)}>Preview App</a>
          <a class="small-button secondary" href="#home">Back to Brent & Co.</a>
          <a class="small-button secondary" href="#beu-profile">Trust Profile Pattern</a>
        </div>
      </div>
      <figure class="product-preview"><img src="assets/second-chance-mockup.png" alt="Second Chance Careers app mockup" /></figure>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Second Chance home</p>
        <h2>Practical support that feels human</h2>
      </div>
      <div class="system-grid">
        ${features.map(([title, text]) => `<article><strong>${title}</strong><span>${text}</span><a class="small-button secondary" ${linkAttrs(liveAppUrls.secondChance)}>Open ${title}</a></article>`).join("")}
      </div>
    </section>
  `;
}

function renderBeuHome() {
  const service = window.BEUSearchService;
  const results = service ? service.filterListings(beuListings, beuState) : beuListings;
  const categories = [...new Set(beuListings.map((item) => item.category))].sort();
  const tags = [...new Set(beuListings.flatMap((item) => item.tags))].sort();
  const countries = [...new Set([...beuCities.map((city) => city.country), ...beuListings.map((item) => item.country)].filter(Boolean))].sort();
  const cityOptions = beuState.country === "all" ? beuCities : beuCities.filter((city) => city.country === beuState.country);
  const activeLocation = beuState.locationLabel || beuState.origin?.label || "Global";
  app.innerHTML = `
    <section class="beu-hero">
      <div class="beu-hero-copy">
        <div class="beu-brandline">
          <img src="assets/beu-logo.jpg" alt="BEU" />
          <div>
            <span>BLACK EUROPE</span>
            <strong>Cultural Compass</strong>
          </div>
        </div>
        <p class="eyebrow">Brent & Co. / BEU</p>
        <h1>Your cultural compass wherever you land</h1>
        <p>Explore, connect, and bond through monthly cultural picks, live “near me” updates, food, places, people, and events.</p>
        <div class="hero-actions">
          <a class="small-button" ${linkAttrs(liveAppUrls.beu)}>Preview BEU</a>
          <a class="small-button secondary" href="#home">Back to Brent & Co.</a>
          <a class="small-button secondary" href="#beu-profile">Community Trust</a>
        </div>
      </div>
      <div class="beu-city-panel">
        <label for="beuCountry">Country</label>
        <select id="beuCountry" class="filter-select">
          <option value="all">All countries</option>
          ${countries.map((country) => `<option value="${country}" ${beuState.country === country ? "selected" : ""}>${country}</option>`).join("")}
        </select>
        <label for="beuCity">City</label>
        <select id="beuCity" class="filter-select">
          <option value="all">All cities</option>
          ${cityOptions.map((city) => `<option value="${city.id}" ${beuState.selectedCity === city.id ? "selected" : ""}>${city.label}</option>`).join("")}
        </select>
        <button class="small-button secondary" data-beu-city-search>Explore Area</button>
        <span>Explore • Connect • Bond</span>
      </div>
      <div class="compass-shell" aria-label="BEU compass navigation">
        <div class="compass-ring">
          <span class="north">N</span>
          <span class="east">E</span>
          <span class="south">S</span>
          <span class="west">W</span>
          <div class="needle"></div>
          <img src="assets/beu-logo.jpg" alt="" />
        </div>
        ${beuSections.map((section) => `<a class="compass-card ${section.id}" href="${beuSectionHref(section.id)}"><span>${section.direction}</span><strong>${section.title.replace(" of the Month", "")}</strong><em>${section.label}</em></a>`).join("")}
      </div>
    </section>
    <section class="beu-nav" aria-label="BEU section navigation">
      ${beuSections.map((section) => `<a href="${beuSectionHref(section.id)}"><span>${section.direction}</span>${section.label}</a>`).join("")}
    </section>
    ${beuAccountNav()}
    <section class="beu-controls">
      <div>
        <p class="eyebrow">Location-aware discovery</p>
        <h2>Find Black-owned and Black-centered culture in ${activeLocation}</h2>
        <p>${beuState.status}</p>
      </div>
      <div class="beu-control-grid">
        <button class="small-button" data-beu-location>Use My Location</button>
        <input id="beuQuery" class="search-input" placeholder="Search restaurants, music, museums..." value="${beuState.query}" />
        <select id="beuCountryFilter" class="filter-select">
          <option value="all">All countries</option>
          ${countries.map((country) => `<option value="${country}" ${beuState.country === country ? "selected" : ""}>${country}</option>`).join("")}
        </select>
        <select id="beuRadius" class="filter-select">
          ${[5, 10, 25, 50, 100].map((radius) => `<option value="${radius}" ${beuState.radiusMiles === radius ? "selected" : ""}>${radius} miles</option>`).join("")}
        </select>
        <select id="beuCompass" class="filter-select">
          <option value="all">All compass sections</option>
          ${beuSections.map((section) => `<option value="${section.id}" ${beuState.compass === section.id ? "selected" : ""}>${section.label}</option>`).join("")}
        </select>
        <select id="beuCategory" class="filter-select">
          <option value="all">All categories</option>
          ${categories.map((category) => `<option value="${category}" ${beuState.category === category ? "selected" : ""}>${category}</option>`).join("")}
        </select>
        <select id="beuTag" class="filter-select">
          <option value="all">All tags</option>
          ${tags.map((tag) => `<option value="${tag}" ${beuState.tag === tag ? "selected" : ""}>${tag}</option>`).join("")}
        </select>
      </div>
    </section>
    <section class="beu-trust">
      ${beuProfilePanel()}
      ${beuRecommendPanel()}
    </section>
    <section class="beu-results">
      <div class="section-heading">
        <p class="eyebrow">Global sample results</p>
        <h2>${results.length} cultural compass picks</h2>
      </div>
      <div class="beu-results-grid">
        ${results.length ? results.map(beuResultCard).join("") : `<div class="empty-state">No BEU listings match this search yet. Try a wider radius or another city.</div>`}
      </div>
    </section>
    <section class="beu-section">
      <div class="section-heading">
        <p class="eyebrow">Compass-style navigation</p>
        <h2>Four ways to discover what is happening around you</h2>
      </div>
      <div class="beu-grid">
        ${beuSections.map(beuCard).join("")}
      </div>
    </section>
    <section class="beu-map-strip">
      <div>
        <p class="eyebrow">Brent & Co. connected</p>
        <h2>Culture, food, places, and plans in one ecosystem</h2>
        <p>BEU can connect back to Let's Cook Ya'll for cuisine features, Find the Beat for cultural sound, and Second Chance Careers for community opportunity.</p>
      </div>
      <div class="beu-link-stack">
        <a href="#lets-cook">Cuisine features with Let's Cook Ya'll</a>
        <a ${linkAttrs(liveAppUrls.findTheBeat)}>Music and event energy with Find the Beat</a>
        <a ${linkAttrs(liveAppUrls.secondChance)}>Community support with Second Chance Careers</a>
      </div>
    </section>
  `;
}

function beuProfilePanel() {
  const user = beuCommunity.currentUser || {};
  const userReviews = beuCommunity.reviews.filter((review) => review.userId === user.id);
  const approvedRecommendations = beuCommunity.recommendations.filter((item) => item.submittedBy === user.id && item.status === "approved");
  return `
    <article class="beu-profile-card">
      <div class="beu-profile-head">
        <img src="${user.avatar || "assets/logo.png"}" alt="" />
        <div>
          <p class="eyebrow">Community profile</p>
          <h2>${escapeHTML(user.displayName || "BEU Member")}</h2>
          <span>${escapeHTML(user.homeCity || "Home city")}, ${escapeHTML(user.homeCountry || "Country")}</span>
        </div>
      </div>
      <p>${escapeHTML(user.bio || "Create a profile to build trust in the BEU community.")}</p>
      <div class="beu-stat-row">
        <div><strong>${userReviews.length}</strong><span>Reviews</span></div>
        <div><strong>${approvedRecommendations.length}</strong><span>Approved recs</span></div>
        <div><strong>${beuCommunity.savedPlaces.length}</strong><span>Saved places</span></div>
      </div>
      <div class="tag-row">${(user.badges || []).map((badge) => `<span class="tag verified-tag">${badge}</span>`).join("")}${user.verifiedUser ? `<span class="tag verified-tag">Verified User</span>` : `<span class="tag">Verification later</span>`}</div>
      <div class="tag-row">${(user.favoriteCategories || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="card-actions">
        <a class="small-button" href="#beu-profile">Edit Profile</a>
        <a class="small-button secondary" href="#beu-saved">Saved Places</a>
        <a class="small-button secondary" href="#beu-admin">Admin Queue</a>
      </div>
    </article>
  `;
}

function beuRecommendPanel() {
  return `
    <article class="beu-profile-card" id="beu-recommend">
      <p class="eyebrow">Community-generated database</p>
      <h2>Tell BEU About a Place</h2>
      <p>Know a good restaurant, event, museum, shop, or community spot? Add what you know in plain words. BEU can review and verify it later.</p>
      <form class="beu-form" data-beu-recommend-form>
        <label>What is it called?<input name="placeName" placeholder="Example: Auntie's Supper Club" required /></label>
        <label>What kind of place is it?<input name="category" placeholder="Restaurant, event, museum, shop, music night..." required /></label>
        <label>Where is it?<input name="address" placeholder="City, neighborhood, address, or landmark" required /></label>
        <label>Website or social link, if you know it<input name="website" placeholder="Optional" /></label>
        <label>How much would you recommend it?${compassRatingInput("recommendationRating", 5)}</label>
        <label>Why should BEU know about it?<textarea name="why" placeholder="Tell us what made it good, welcoming, useful, or culturally meaningful." required></textarea></label>
        <label>Helpful tags<input name="tags" placeholder="family friendly, food, music, hidden gem, date night..." /></label>
        <button class="small-button" type="submit">Send To BEU</button>
      </form>
      <div class="submission-grid">${beuCommunity.recommendations.slice(0, 3).map(beuRecommendationCard).join("")}</div>
    </article>
  `;
}

function beuRecommendationCard(item) {
  return `
    <article class="submission-card">
      <strong>${escapeHTML(item.placeName)}</strong>
      <span>${escapeHTML(item.category)} / ${escapeHTML(item.status)}${item.recommendationRating ? ` / ${compassDisplay(item.recommendationRating)}` : ""}</span>
      <p>${escapeHTML(item.why)}</p>
    </article>
  `;
}

function beuCard(section) {
  return `
    <article class="beu-card" id="${section.id}">
      <div class="beu-card-mark">${section.direction}</div>
      <p class="eyebrow">${section.label}</p>
      <h3>${section.title}</h3>
      <p>${section.text}</p>
      <small>${section.detail}</small>
      <a class="small-button secondary" href="${beuSectionHref(section.id)}">${section.cta}</a>
    </article>
  `;
}

function beuSectionHref(id) {
  return `#beu-section/${id}`;
}

function beuResultCard(listing) {
  const mapUrl = window.BEUSearchService?.mapLink(listing) || "#beu";
  const saved = beuCommunity.savedPlaces.includes(listing.id);
  const placeReviews = beuCommunity.reviews.filter((review) => review.placeId === listing.id);
  const averageRating = placeReviews.length ? (placeReviews.reduce((sum, review) => sum + Number(review.overallRating || 0), 0) / placeReviews.length).toFixed(1) : "New";
  return `
    <article class="beu-result-card">
      <figure class="beu-card-photo"><img src="${beuImageFor(listing)}" alt="" /></figure>
      <div class="tag-row">
        <span class="tag personal-tag">${compassLabel(listing.compass)}</span>
        ${listing.verified ? `<span class="tag verified-tag">BEU Verified</span>` : ""}
        <span class="tag">${listing.source}</span>
      </div>
      <h3>${listing.name}</h3>
      <p>${listing.description}</p>
      <div class="beu-rating-line"><strong>${averageRating === "New" ? "New" : compassDisplay(Math.round(Number(averageRating)))}</strong><span>${placeReviews.length ? `${averageRating}/5 from ${placeReviews.length} review${placeReviews.length === 1 ? "" : "s"}` : "No compass ratings yet"}</span></div>
      <dl>
        <div><dt>Category</dt><dd>${listing.category}</dd></div>
        <div><dt>Location</dt><dd>${listing.address}, ${listing.country}</dd></div>
        <div><dt>Distance</dt><dd>${listing.distanceMiles == null ? "Set location" : `${listing.distanceMiles.toFixed(1)} mi`}</dd></div>
      </dl>
      <div class="tag-row">${listing.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="card-actions">
        <a class="small-button secondary" href="#beu-place/${listing.id}">Details</a>
        <button class="small-button" data-beu-save="${listing.id}">${saved ? "Saved" : "Save"}</button>
        <button class="small-button secondary" data-beu-review="${listing.id}">Rate It</button>
        <a class="small-button secondary" href="#beu-recommend">Recommend</a>
        <button class="small-button secondary" data-beu-report="${listing.id}">Report Info</button>
        <a class="small-button" href="${mapUrl}" target="_blank" rel="noreferrer">Map</a>
        ${listing.website ? `<a class="small-button secondary" href="${listing.website}" target="_blank" rel="noreferrer">Website</a>` : ""}
        ${listing.phone ? `<a class="small-button secondary" href="tel:${listing.phone}">Call</a>` : ""}
      </div>
      ${beuReviewForm(listing.id)}
    </article>
  `;
}

function compassLabel(id) {
  return beuSections.find((section) => section.id === id)?.label || "BEU";
}

function compassRatingInput(name, selected = 5) {
  return `
    <div class="compass-rating" role="radiogroup" aria-label="Compass rating">
      ${[1, 2, 3, 4, 5].map((value) => `
        <label>
          <input type="radio" name="${name}" value="${value}" ${Number(selected) === value ? "checked" : ""} />
          <span>${compassDisplay(value)}</span>
          <small>${value}</small>
        </label>
      `).join("")}
    </div>
  `;
}

function compassDisplay(value) {
  return "🧭".repeat(Math.max(1, Math.min(5, Number(value) || 1)));
}

function beuImageFor(listing) {
  const category = `${listing.category} ${listing.tags?.join(" ") || ""}`.toLowerCase();
  if (category.includes("food") || category.includes("restaurant") || category.includes("supper") || category.includes("caribbean")) return "assets/indian-food.jpeg";
  if (category.includes("music") || category.includes("nightlife") || category.includes("event") || category.includes("festival")) return "assets/cooking-family.jpeg";
  if (category.includes("art") || category.includes("heritage") || category.includes("museum")) return "assets/recipe-book.jpeg";
  if (category.includes("market")) return "assets/ingredients.jpeg";
  return "assets/beu-logo.jpg";
}

function renderBeuSection(id) {
  const section = beuSections.find((item) => item.id === id) || beuSections[0];
  const listings = beuListings.filter((listing) => listing.compass === section.id);
  const nextSections = beuSections.filter((item) => item.id !== section.id);
  const listingCard = section.id === "waypoint" ? beuWaypointCard : beuResultCard;
  const spotlight = section.id === "north-star" ? beuNorthStarSpotlight(listings) : "";
  app.innerHTML = `
    <section class="beu-detail-hero">
      <div>
        <p class="eyebrow">BEU / ${section.label}</p>
        <h1>${section.title}</h1>
        <p>${section.text}</p>
        <div class="hero-actions">
          <a class="small-button" href="#beu">Back to Compass</a>
          <a class="small-button secondary" href="#beu-profile">My BEU Profile</a>
        </div>
      </div>
    </section>
    ${beuAccountNav()}
    <section class="beu-section-detail compass-spread-layout ${section.id === "waypoint" ? "waypoint-layout" : ""} ${section.id === "north-star" ? "north-star-layout" : ""}">
      <article class="beu-profile-card">
        <div class="beu-card-mark">${section.direction}</div>
        <p class="eyebrow">${section.label}</p>
        <h2>${section.title}</h2>
        <p>${section.detail}</p>
        <div class="card-actions">
          ${nextSections.map((item) => `<a class="small-button secondary" href="${beuSectionHref(item.id)}">${item.label}</a>`).join("")}
        </div>
      </article>
      ${spotlight}
      <div>
        <div class="section-heading">
          <p class="eyebrow">${section.id === "north-star" ? "Member-nominated connectors" : "Live prototype results"}</p>
          <h2>${listings.length} ${section.label} pick${listings.length === 1 ? "" : "s"}</h2>
        </div>
        <div class="beu-results-grid beu-section-results">
          ${listings.length ? listings.map(listingCard).join("") : `<div class="empty-state">No ${section.label} listings have been added yet. Recommend one from the BEU community panel.</div>`}
        </div>
      </div>
    </section>
  `;
}

function beuNorthStarSpotlight(listings) {
  const featured = listings.find((listing) => listing.verified) || listings[0];
  if (!featured) return "";
  const mapUrl = window.BEUSearchService?.mapLink(featured) || "#beu";
  return `
    <article class="north-star-feature">
      <figure><img src="${beuImageFor(featured)}" alt="" /></figure>
      <div>
        <p class="eyebrow">Promoter of the Month / Member selected</p>
        <h2>${featured.name}</h2>
        <p>${featured.description}</p>
        <div class="north-star-votes">
          <div><strong>${compassDisplay(5)}</strong><span>Member love</span></div>
          <div><strong>24</strong><span>Member votes</span></div>
          <div><strong>${featured.city}</strong><span>${featured.country}</span></div>
        </div>
        <div class="tag-row">${featured.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="small-button" href="#beu-place/${featured.id}">View Spotlight</a>
          <a class="small-button secondary" href="${mapUrl}" target="_blank" rel="noreferrer">Map</a>
          <a class="small-button secondary" href="#beu-recommend">Nominate Someone</a>
        </div>
      </div>
    </article>
  `;
}

function beuAccountNav() {
  return `
    <section class="beu-account-nav" aria-label="BEU account navigation">
      <a href="#beu-profile"><strong>My BEU Profile</strong><span>Trust, badges, and profile details</span></a>
      <a href="#beu-saved"><strong>Saved Places</strong><span>Your culture shortlist</span></a>
      <a href="#beu-recommend"><strong>Recommend a Place</strong><span>Add a spot in plain words</span></a>
      <a href="#beu-admin"><strong>Review Queue</strong><span>Prototype approvals and reports</span></a>
    </section>
  `;
}

function beuWaypointCard(listing) {
  const mapUrl = window.BEUSearchService?.mapLink(listing) || "#beu";
  return `
    <article class="beu-event-card">
      <figure class="beu-event-photo"><img src="${beuImageFor(listing)}" alt="" /></figure>
      <div>
        <span class="event-date">Upcoming</span>
        <p class="eyebrow">${listing.category}</p>
      </div>
      <div>
        <h3>${listing.name}</h3>
        <p>${listing.description}</p>
        <div class="event-meta">
          <span>${listing.city}, ${listing.country}</span>
          <span>${listing.source}</span>
          ${listing.verified ? `<span>BEU verified</span>` : `<span>Community lead</span>`}
        </div>
        <div class="tag-row">${listing.tags.slice(0, 5).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
      <div class="card-actions">
        <a class="small-button secondary" href="#beu-place/${listing.id}">Details</a>
        <a class="small-button" href="${mapUrl}" target="_blank" rel="noreferrer">Map</a>
      </div>
    </article>
  `;
}

function renderBeuPlace(id) {
  const listing = beuListings.find((item) => item.id === id);
  if (!listing) return renderBeuHome();
  const reviews = beuCommunity.reviews.filter((review) => review.placeId === listing.id);
  const mapUrl = window.BEUSearchService?.mapLink(listing) || "#beu";
  const saved = beuCommunity.savedPlaces.includes(listing.id);
  app.innerHTML = `
    <section class="beu-detail-hero">
      <div>
        <p class="eyebrow">BEU / ${compassLabel(listing.compass)}</p>
        <h1>${listing.name}</h1>
        <p>${listing.description}</p>
        <div class="hero-actions">
          <a class="small-button" href="#beu">Back to BEU</a>
          <a class="small-button secondary" href="${mapUrl}" target="_blank" rel="noreferrer">Open Map</a>
        </div>
      </div>
    </section>
    <section class="beu-results">
      <div class="beu-place-layout">
        <article class="beu-result-card">
          <div class="tag-row">
            <span class="tag personal-tag">${listing.category}</span>
            ${listing.verified ? `<span class="tag verified-tag">BEU Verified</span>` : `<span class="tag">Needs verification</span>`}
            <span class="tag">${listing.source}</span>
          </div>
          <h3>Place Details</h3>
          <dl>
            <div><dt>Address</dt><dd>${listing.address}, ${listing.city}, ${listing.country}</dd></div>
            <div><dt>Compass</dt><dd>${compassLabel(listing.compass)}</dd></div>
            <div><dt>Phone</dt><dd>${listing.phone || "Not added yet"}</dd></div>
            <div><dt>Website</dt><dd>${listing.website ? `<a href="${listing.website}" target="_blank" rel="noreferrer">${listing.website}</a>` : "Not added yet"}</dd></div>
          </dl>
          <div class="tag-row">${listing.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-actions">
            <button class="small-button" data-beu-save="${listing.id}">${saved ? "Saved" : "Save Place"}</button>
            <button class="small-button secondary" data-beu-review="${listing.id}">Write Review</button>
            <button class="small-button secondary" data-beu-report="${listing.id}">Report Info</button>
          </div>
          ${beuReviewForm(listing.id)}
        </article>
        <article class="beu-profile-card">
          <p class="eyebrow">Community reviews</p>
          <h2>${reviews.length} review${reviews.length === 1 ? "" : "s"}</h2>
          <div class="stack-list">
            ${reviews.length ? reviews.map(beuReviewCard).join("") : `<div class="empty-state">No reviews yet. Be the first trusted voice here.</div>`}
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderBeuProfile() {
  const user = beuCommunity.currentUser || {};
  app.innerHTML = `
    <section class="beu-detail-hero">
      <div>
        <p class="eyebrow">BEU account</p>
        <h1>Profile & Trust</h1>
        <p>Edit the profile information that helps other travelers and community members understand your perspective.</p>
        <div class="hero-actions"><a class="small-button" href="#beu">Back to BEU</a></div>
      </div>
    </section>
    <section class="beu-trust">
      ${beuProfilePanel()}
      <article class="beu-profile-card">
        <p class="eyebrow">Edit profile</p>
        <h2>Public Profile</h2>
        <form class="beu-form" data-beu-profile-form>
          <input name="avatar" value="${escapeHTML(user.avatar || "")}" placeholder="Avatar URL or local asset path" />
          <input name="displayName" value="${escapeHTML(user.displayName || "")}" placeholder="Display name" required />
          <input name="homeCity" value="${escapeHTML(user.homeCity || "")}" placeholder="Home city" />
          <input name="homeCountry" value="${escapeHTML(user.homeCountry || "")}" placeholder="Home country" />
          <textarea name="bio" placeholder="Bio">${escapeHTML(user.bio || "")}</textarea>
          <input name="favoriteCategories" value="${escapeHTML((user.favoriteCategories || []).join(", "))}" placeholder="Favorite categories, comma-separated" />
          <input name="badges" value="${escapeHTML((user.badges || []).join(", "))}" placeholder="Badges, comma-separated" />
          <label class="inline-check"><input name="verifiedUser" type="checkbox" ${user.verifiedUser ? "checked" : ""} /> Verified user later</label>
          <button class="small-button" type="submit">Save Profile</button>
        </form>
      </article>
    </section>
  `;
}

function renderBeuSaved() {
  const savedListings = beuCommunity.savedPlaces.map((id) => beuListings.find((item) => item.id === id)).filter(Boolean);
  app.innerHTML = `
    <section class="beu-detail-hero">
      <div>
        <p class="eyebrow">BEU account</p>
        <h1>Saved Places</h1>
        <p>Your personal travel and culture shortlist across the Brent & Co. ecosystem.</p>
        <div class="hero-actions"><a class="small-button" href="#beu">Back to BEU</a></div>
      </div>
    </section>
    <section class="beu-results">
      <div class="beu-results-grid">
        ${savedListings.length ? savedListings.map(beuResultCard).join("") : `<div class="empty-state">No saved places yet. Save places from BEU results.</div>`}
      </div>
    </section>
  `;
}

function renderBeuAdmin() {
  app.innerHTML = `
    <section class="beu-detail-hero">
      <div>
        <p class="eyebrow">BEU admin prototype</p>
        <h1>Review Queue</h1>
        <p>Prototype moderation queue for recommendations, reports, and future verification requests.</p>
        <div class="hero-actions"><a class="small-button" href="#beu">Back to BEU</a></div>
      </div>
    </section>
    <section class="beu-trust">
      <article class="beu-profile-card">
        <p class="eyebrow">Recommendations</p>
        <h2>Pending & Approved</h2>
        <div class="stack-list">
          ${beuCommunity.recommendations.length ? beuCommunity.recommendations.map(beuAdminRecommendationCard).join("") : `<div class="empty-state">No recommendations yet.</div>`}
        </div>
      </article>
      <article class="beu-profile-card">
        <p class="eyebrow">Reports</p>
        <h2>Incorrect Info</h2>
        <div class="stack-list">
          ${(beuCommunity.reports || []).length ? beuCommunity.reports.map(beuReportCard).join("") : `<div class="empty-state">No reports yet.</div>`}
        </div>
      </article>
    </section>
  `;
}

function beuReviewForm(listingId) {
  return `
    <form class="beu-review-form" data-beu-review-form="${listingId}" hidden>
      <p class="helper-copy">Tap 1 to 5 compasses. 5 means great. 1 means less than ideal.</p>
      <label>Your compass rating${compassRatingInput("overallRating", 5)}</label>
      <div class="beu-form-grid">
        <label>Food or activity<input name="foodRating" type="number" min="1" max="5" value="5" /></label>
        <label>Service or welcome<input name="serviceRating" type="number" min="1" max="5" value="5" /></label>
        <label>Vibe<input name="atmosphereRating" type="number" min="1" max="5" value="5" /></label>
        <label>Culture<input name="cultureRating" type="number" min="1" max="5" value="5" /></label>
        <label>Safe feeling<input name="safetyRating" type="number" min="1" max="5" value="5" /></label>
      </div>
      <label>When did you go?<input name="visitDate" type="date" /></label>
      <label>What best describes it?<select name="experienceType"><option>Black-owned</option><option>Black-centered</option><option>Culturally relevant</option><option>Needs review</option></select></label>
      <label>Tell us what happened<textarea name="review" placeholder="Was it welcoming? Was the food, music, service, event, or space good? Would you send a friend there?" required></textarea></label>
      <label>Helpful tags<input name="tags" placeholder="hidden gem, date night, tourist friendly..." /></label>
      <button class="small-button" type="submit">Send Rating</button>
    </form>
  `;
}

function beuReviewCard(review) {
  return `
    <article class="submission-card">
      <strong>${compassDisplay(review.overallRating)} ${review.overallRating}/5</strong>
      <span>${review.experienceType || "Culturally relevant"} ${review.visitDate ? `/ ${review.visitDate}` : ""}</span>
      <p>${escapeHTML(review.review)}</p>
      <div class="tag-row">${(review.tags || []).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
    </article>
  `;
}

function beuAdminRecommendationCard(item) {
  return `
    <article class="submission-card">
      <strong>${escapeHTML(item.placeName)}</strong>
      <span>${escapeHTML(item.category)} / ${escapeHTML(item.status)}</span>
      <p>${escapeHTML(item.why)}</p>
      <div class="tag-row">${(item.tags || []).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="card-actions">
        <button class="small-button" data-beu-admin-rec="${item.id}" data-status="approved">Approve</button>
        <button class="small-button secondary" data-beu-admin-rec="${item.id}" data-status="needs info">Needs Info</button>
        <button class="small-button secondary" data-beu-admin-rec="${item.id}" data-status="rejected">Reject</button>
      </div>
    </article>
  `;
}

function beuReportCard(report) {
  const listing = beuListings.find((item) => item.id === report.placeId);
  return `
    <article class="submission-card">
      <strong>${listing ? listing.name : report.placeId}</strong>
      <span>${report.status}</span>
      <p>${report.reason}</p>
    </article>
  `;
}

function renderCommunity() {
  app.innerHTML = `
    ${platformHero()}
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Community-centered by design</p>
        <h2>One ecosystem, many ways to feel supported</h2>
      </div>
      <div class="system-grid">
        <article><strong>Create</strong><span>Find the Beat carries creative energy for music, rhythm, and expression.</span></article>
        <article><strong>Learn</strong><span>Let’s Cook Ya’ll teaches kitchen confidence through real meals.</span></article>
        <article><strong>Navigate</strong><span>BEU gives the platform a compass for identity, direction, and choices.</span></article>
        <article><strong>Rebuild</strong><span>Second Chance Careers supports practical progress with dignity.</span></article>
      </div>
    </section>
  `;
}

function cookSubnav() {
  return `
    <section class="app-subnav" aria-label="Let's Cook Ya'll navigation">
      <a href="#kitchen">Shay's Kitchen</a>
      <a href="#cook101">Cook 101</a>
      <a href="#recipes">Recipes</a>
      <a href="#paths">Cooking Paths</a>
      <a href="#planner">Meal Planner</a>
      <a href="#hosting">Hosting Ideas</a>
      <a href="#about">About</a>
    </section>
  `;
}

function renderKitchen() {
  const personal = personalRecipes();
  app.innerHTML = `
    ${hero(
      "Shay's Kitchen",
      "A personal collection of meals already cooked, already loved, or already planned. This is where Let's Cook Ya'll starts feeling like it grew from a real kitchen.",
      "assets/logo.png",
      `<a class="small-button" href="#planner">Plan One</a><a class="small-button secondary" href="#hosting">Build a Menu</a>`
    )}
    ${cookSubnav()}
    <section class="band">
      <div class="kitchen-note">
        <p class="eyebrow">From My Kitchen</p>
        <h2>Not generic filler. Real table energy.</h2>
        <p>These recipes are starter cards for meals connected to your actual cooking life: orange chicken, crab rangoon, yakamein, shrimp and grits, oxtails, party foods, soups, pastas, wings, boards, and more.</p>
      </div>
    </section>
    <section class="cream-section">
      <div class="recipe-grid">${personal.map(recipeCard).join("")}</div>
    </section>
  `;
}

function renderCook101() {
  app.innerHTML = `
    ${hero("Cook 101", "Simple basics that make the kitchen feel calm: chopping, seasoning, timing, prep, and hosting flow.", "assets/kid-friendly.jpeg")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="lesson-grid">${lessons.map(lessonCard).join("")}</div>
    </section>
  `;
}

function renderLesson(id) {
  const lesson = lessons.find((item) => item.id === id) || lessons[0];
  app.innerHTML = `
    ${hero(lesson.title, lesson.text, lesson.image, `<a class="small-button" href="#cook101">All Basics</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <article class="detail-panel">
        <h2>${lesson.title}</h2>
        <div class="detail-columns">
          <section><h3>Practice Steps</h3><ol><li>Set up your station before cooking.</li><li>Read the recipe from top to bottom.</li><li>Move slowly, taste often, and repeat the skill.</li></ol></section>
          <section><h3>Recipes To Try</h3><ul>${recipes.slice(0, 4).map((recipe) => `<li><a href="#recipes/${recipe.id}">${recipe.title}</a></li>`).join("")}</ul></section>
        </div>
      </article>
    </section>
  `;
}

function renderRecipes() {
  app.innerHTML = `
    ${hero("Recipes", "Southern classics, quick weeknight meals, global flavor, family dinners, beginner basics, party bites, and kid-friendly cooking.", "assets/fresh-bread.jpeg")}
    ${cookSubnav()}
    <section class="band">
      <div class="toolbar search-toolbar">
        <input id="searchBox" class="search-input" type="search" placeholder="Search Yakamein, shrimp, beginner, hosting..." />
        <input id="pantryBox" class="search-input" type="search" placeholder="What do you have? chicken, rice, garlic..." />
        <select id="categoryFilter" class="filter-select"><option value="">All categories</option>${categories.map((category) => `<option>${category}</option>`).join("")}</select>
        <select id="cuisineFilter" class="filter-select"><option value="">All cuisines</option>${cuisines.map((cuisine) => `<option value="${cuisine.id}">${cuisine.name}</option>`).join("")}</select>
        <select id="timeFilter" class="filter-select"><option value="">Any cook time</option><option value="15">15 min or less</option><option value="30">30 min or less</option><option value="45">45 min or less</option><option value="60">1 hour or less</option></select>
        <select id="levelFilter" class="filter-select"><option value="">All levels</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
      </div>
    </section>
    <section class="cream-section"><div id="results" class="recipe-grid">${recipes.map(recipeCard).join("")}</div></section>
  `;
}

function renderRecipe(id) {
  const recipe = recipes.find((item) => item.id === id) || recipes[0];
  const path = paths.find((item) => item.id === recipe.path);
  app.innerHTML = `
    ${hero(recipe.title, recipe.description, recipe.image, `<a class="small-button" href="#planner">Add To Planner</a><a class="small-button secondary" href="#paths/${path.id}">${path.title}</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="detail-layout">
        <figure class="detail-photo"><img src="${recipe.image}" alt="${recipe.title}" /></figure>
        <article class="detail-panel">
          <div class="tag-row"><span class="tag">${recipe.category}</span><span class="tag">${recipe.time}</span><span class="tag">${recipe.level}</span><span class="tag">${recipe.servings} servings</span></div>
          <h2>${recipe.title}</h2>
          <p class="detail-copy">${recipe.description}</p>
          <div class="card-actions">
            <button class="small-button" data-save="${recipe.id}">${saved.includes(recipe.id) ? "Saved" : "Save Recipe"}</button>
            <button class="small-button secondary" data-plan="${recipe.id}">${planned.includes(recipe.id) ? "Planned" : "Add to Meal Plan"}</button>
          </div>
          <div class="detail-columns">
            <section><h3>Ingredients</h3><ul>${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul></section>
            <section><h3>Guided Steps</h3><ol>${recipe.steps.map((item) => `<li>${item}</li>`).join("")}</ol></section>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderPaths() {
  app.innerHTML = `
    ${hero("Cooking Paths", "Choose the pace that fits your kitchen today: Kid Chefs, Amateur Home Chef, or Professional Mode.", "assets/cooking-family.jpeg")}
    ${cookSubnav()}
    <section class="cream-section"><div class="feature-grid">${paths.map(pathCard).join("")}</div></section>
  `;
}

function renderPath(id) {
  const path = paths.find((item) => item.id === id) || paths[0];
  const pathRecipes = recipes.filter((recipe) => recipe.path === path.id);
  app.innerHTML = `
    ${hero(path.title, path.description, path.image, `<a class="small-button" href="#paths">All Paths</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="detail-panel">
        <p class="eyebrow">${path.eyebrow}</p>
        <h2>${path.level}</h2>
        <div class="detail-columns">
          <section><h3>What You Learn</h3><ol>${path.steps.map((step) => `<li>${step}</li>`).join("")}</ol></section>
          <section><h3>Start Here</h3><ul>${pathRecipes.map((recipe) => `<li><a href="#recipes/${recipe.id}">${recipe.title}</a></li>`).join("")}</ul></section>
        </div>
      </div>
      <div class="recipe-grid path-recipes">${pathRecipes.map(recipeCard).join("")}</div>
    </section>
  `;
}

function renderPlanner() {
  const plannedRecipes = recipes.filter((recipe) => planned.includes(recipe.id));
  const shoppingItems = [...new Set(plannedRecipes.flatMap((recipe) => recipe.ingredients))];
  app.innerHTML = `
    ${hero("Meal Planner", "Answer the classic question: what can I cook? Save meals, plan your week, and build a shopping list.", "assets/ingredients.jpeg")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="planner-layout">
        <article class="detail-panel">
          <h2>What Can I Cook?</h2>
          <p class="detail-copy">Pick a mood and start with recipes that match your night.</p>
          <div class="mini-category-grid">${categories.map((category) => `<a href="#recipes">${category}</a>`).join("")}</div>
        </article>
        <article class="detail-panel">
          <h2>This Week</h2>
          <div class="stack-list">${plannedRecipes.length ? plannedRecipes.map(compactRecipe).join("") : `<div class="empty-state">Add recipes from any card to build your week.</div>`}</div>
        </article>
        <article class="detail-panel">
          <h2>Shopping List</h2>
          <ul class="shopping-list">${shoppingItems.length ? shoppingItems.map((item) => `<li>${item}</li>`).join("") : `<li>Your ingredients will appear here.</li>`}</ul>
        </article>
      </div>
    </section>
  `;
}

function renderHosting() {
  app.innerHTML = `
    ${hero("Hosting Ideas", "Menus, boards, bites, and desserts for making people feel at home.", "assets/fresh-bread.jpeg")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="hosting-grid">${hostingIdeas.map((idea) => `
        <article class="detail-panel">
          <h2>${idea.title}</h2>
          <p class="detail-copy">${idea.text}</p>
          <div class="stack-list">${idea.recipes.map((id) => compactRecipe(recipes.find((recipe) => recipe.id === id))).join("")}</div>
        </article>
      `).join("")}</div>
    </section>
  `;
}

function renderAbout() {
  app.innerHTML = `
    ${hero("Brent & Co. Kitchen", "Let's Cook Ya'll is the cooking-skills corner of Brent & Co.: polished, practical, warm, and rooted in hospitality.", "assets/logo.png")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="about-layout">
        <article class="detail-panel">
          <p class="eyebrow">Umbrella connection</p>
          <h2>Designed To Live Beside The Brent & Co. Storefront</h2>
          <p class="detail-copy">The golden palette, warm cards, practical copy, and food-first imagery are set up so the Brent & Co. homepage can link to this app with a matching storefront card.</p>
        </article>
        <article class="detail-panel">
          <h2>Cook Video Studio</h2>
          <p class="detail-copy">Cooks can submit a YouTube link or choose a local video file draft. A production build would upload files to cloud media storage.</p>
          <form class="upload-form" data-upload-form>
            <label>Recipe<select name="recipeId">${recipes.map((recipe) => `<option value="${recipe.id}">${recipe.title}</option>`).join("")}</select></label>
            <label>Video title<input name="title" placeholder="Auntie's shrimp and grits tips" required /></label>
            <label>YouTube link<input name="url" placeholder="https://www.youtube.com/watch?v=..." /></label>
            <label>Or local video<input name="file" type="file" accept="video/*" /></label>
            <button class="small-button" type="submit">Submit Video</button>
          </form>
          <div class="submission-grid">${submissions.length ? submissions.map(submissionCard).join("") : `<div class="empty-state">No cook videos submitted yet.</div>`}</div>
        </article>
      </div>
    </section>
  `;
}

function renderCuisine(id) {
  const cuisine = cuisines.find((item) => item.id === id) || cuisines[0];
  const cuisineRecipes = recipes.filter((recipe) => recipe.cuisine === cuisine.id);
  app.innerHTML = `
    ${hero(cuisine.name, cuisine.blurb, cuisine.image)}
    ${cookSubnav()}
    <section class="cream-section"><div class="recipe-grid">${cuisineRecipes.map(recipeCard).join("")}</div></section>
  `;
}

function appCard(item) {
  return `
    <article class="app-card ${item.accent}">
      <a class="app-card-main" ${linkAttrs(item.externalUrl || item.route)}>
        <figure><img src="${item.image}" alt="" /></figure>
        <div>
          <span>${item.status}</span>
          <h3>${item.title}</h3>
          <p>${item.tagline}</p>
        </div>
      </a>
      <div class="app-card-actions">
        <a class="small-button" ${linkAttrs(item.externalUrl || item.route)}>Open</a>
        <a class="small-button secondary" href="${item.route}">Preview</a>
      </div>
    </article>
  `;
}

function platformLinkCard(item) {
  return `
    <article class="direct-link-card ${item.accent}">
      <div>
        <img src="${item.image}" alt="" />
        <span>${item.status}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a class="small-button" ${linkAttrs(item.externalUrl || item.route)}>Open ${item.title}</a>
      <a class="direct-url" ${linkAttrs(item.externalUrl || item.route)}>${item.externalUrl || item.route}</a>
    </article>
  `;
}

function pathCard(path) {
  return `<article class="path-card"><img src="${path.image}" alt="" /><p class="eyebrow">${path.eyebrow}</p><h3>${path.title}</h3><p>${path.description}</p><a class="small-button secondary" href="#paths/${path.id}">Open Path</a></article>`;
}

function cuisineCard(cuisine) {
  return `<article class="cuisine-card"><a href="#cuisine/${cuisine.id}"><figure><img src="${cuisine.image}" alt="${cuisine.name}" /></figure><h3>${cuisine.name}</h3><p>${cuisine.blurb}</p></a></article>`;
}

function lessonCard(lesson) {
  return `<article class="lesson-card"><figure><img src="${lesson.image}" alt="" /></figure><div><h3>${lesson.title}</h3><p>${lesson.text}</p><a class="small-button secondary" href="#cook101/${lesson.id}">Start Lesson</a></div></article>`;
}

function recipeCard(recipe) {
  const isPersonal = personalRecipeIds.includes(recipe.id);
  return `
    <article class="recipe-card">
      <a class="recipe-photo" href="#recipes/${recipe.id}"><img src="${recipe.image}" alt="${recipe.title}" /></a>
      <div class="recipe-content">
        <div class="tag-row">${isPersonal ? `<span class="tag personal-tag">Shay's Kitchen</span>` : ""}<span class="tag">${recipe.category}</span><span class="tag">${recipe.time}</span><span class="tag">${recipe.level}</span></div>
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        ${recipe.chefNotes ? `<div class="chef-note">${recipe.chefNotes}</div>` : ""}
        <div class="ingredient-preview"><strong>Ingredients:</strong> ${recipe.ingredients.slice(0, 4).join(", ")}</div>
        <div class="card-actions"><a class="small-button" href="#recipes/${recipe.id}">View Recipe</a><button class="small-button secondary" data-plan="${recipe.id}">${planned.includes(recipe.id) ? "Planned" : "Plan"}</button></div>
      </div>
    </article>
  `;
}

function personalRecipes() {
  return personalRecipeIds.map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean);
}

function compactRecipe(recipe) {
  if (!recipe) return "";
  return `<div class="compact-recipe"><img src="${recipe.image}" alt="" /><div><strong>${recipe.title}</strong><span>${recipe.time} / ${recipe.level}</span></div><button class="small-button secondary" data-plan="${recipe.id}">${planned.includes(recipe.id) ? "Remove" : "Plan"}</button></div>`;
}

function applyRecipeDatabase(database) {
  if (!database?.recipes?.length) return;
  categories = database.categories || categories;
  personalRecipeIds = database.collections?.shaysKitchen || personalRecipeIds;
  recipes = database.recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    cuisine: recipe.cuisine,
    category: recipe.category,
    image: recipe.image || "assets/logo.png",
    time: recipe.cookTime || `${recipe.cookTimeMinutes || 0} min`,
    cookTime: recipe.cookTime,
    cookTimeMinutes: recipe.cookTimeMinutes,
    prepTime: recipe.prepTime,
    prepTimeMinutes: recipe.prepTimeMinutes,
    level: recipe.difficulty,
    difficulty: recipe.difficulty,
    servings: recipe.servings,
    path: recipe.path || "amateur-home-chef",
    description: recipe.description,
    ingredients: recipe.ingredients || [],
    steps: recipe.instructions || [],
    instructions: recipe.instructions || [],
    tags: recipe.tags || [],
    featured: Boolean(recipe.featured),
    chefNotes: recipe.chefNotes || "",
    source: recipe.source || { type: "internal" }
  }));
}

async function loadRecipeDatabase() {
  try {
    const response = await fetch("data/recipes.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Recipe database failed: ${response.status}`);
    applyRecipeDatabase(await response.json());
  } catch (error) {
    console.warn("Using bundled recipe fallback.", error);
  }
}

async function loadBeuDatabase() {
  try {
    const response = await fetch("data/beu-listings.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`BEU database failed: ${response.status}`);
    const database = await response.json();
    beuListings = database.listings || [];
    beuCities = database.cities || [];
  } catch (error) {
    console.warn("Using empty BEU listing fallback.", error);
  }
}

async function loadBeuCommunity() {
  try {
    const response = await fetch("data/beu-community.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`BEU community database failed: ${response.status}`);
    const seededCommunity = await response.json();
    beuCommunity = readJSON("beuCommunity", {
      currentUser: seededCommunity.currentUser,
      reviews: seededCommunity.reviews || [],
      recommendations: seededCommunity.recommendations || [],
      savedPlaces: seededCommunity.savedPlaces || [],
      reports: seededCommunity.reports || []
    });
    beuCommunity.currentUser ||= seededCommunity.currentUser;
    beuCommunity.reviews ||= [];
    beuCommunity.recommendations ||= [];
    beuCommunity.savedPlaces ||= [];
    beuCommunity.reports ||= [];
  } catch (error) {
    console.warn("Using empty BEU community fallback.", error);
  }
}

function submissionCard(submission) {
  return `<article class="submission-card"><strong>${escapeHTML(submission.title)}</strong><span>${escapeHTML(submission.recipeTitle)} / ${escapeHTML(submission.type)}</span></article>`;
}

function handleSearch(event) {
  if (["beuCountry", "beuCountryFilter"].includes(event.target.id)) {
    updateBeuCountry(event.target.value);
    return;
  }

  if (["beuQuery", "beuRadius", "beuCompass", "beuCategory", "beuTag"].includes(event.target.id)) {
    beuState = {
      ...beuState,
      query: document.querySelector("#beuQuery")?.value || "",
      radiusMiles: Number(document.querySelector("#beuRadius")?.value || 25),
      compass: document.querySelector("#beuCompass")?.value || "all",
      category: document.querySelector("#beuCategory")?.value || "all",
      tag: document.querySelector("#beuTag")?.value || "all",
      country: document.querySelector("#beuCountryFilter")?.value || beuState.country || "all"
    };
    renderBeuHome();
    return;
  }

  if (!["searchBox", "pantryBox", "categoryFilter", "cuisineFilter", "timeFilter", "levelFilter"].includes(event.target.id)) return;
  const query = document.querySelector("#searchBox")?.value.toLowerCase().trim() || "";
  const pantry = document.querySelector("#pantryBox")?.value.toLowerCase().split(",").map((item) => item.trim()).filter(Boolean) || [];
  const category = document.querySelector("#categoryFilter")?.value || "";
  const cuisine = document.querySelector("#cuisineFilter")?.value || "";
  const maxTime = Number(document.querySelector("#timeFilter")?.value || 0);
  const level = document.querySelector("#levelFilter")?.value || "";
  const results = recipes.filter((recipe) => {
    const ingredientText = recipe.ingredients.join(" ").toLowerCase();
    const tagText = (recipe.tags || []).join(" ").toLowerCase();
    const haystack = `${recipe.title} ${recipe.category} ${recipe.level} ${recipe.difficulty || ""} ${recipe.description} ${ingredientText} ${tagText}`.toLowerCase();
    const hasPantryItems = !pantry.length || pantry.every((item) => ingredientText.includes(item));
    return (!query || haystack.includes(query))
      && hasPantryItems
      && (!category || recipe.category === category || recipe.tags?.includes(category))
      && (!cuisine || recipe.cuisine === cuisine)
      && (!maxTime || (recipe.cookTimeMinutes || 999) <= maxTime)
      && (!level || recipe.level === level || recipe.difficulty === level);
  });
  document.querySelector("#results").innerHTML = results.length ? results.map(recipeCard).join("") : `<div class="empty-state">No recipes found yet.</div>`;
}

function handleClick(event) {
  if (event.target.closest("[data-beu-location]")) {
    requestBeuLocation();
    return;
  }

  if (event.target.closest("[data-beu-city-search]")) {
    searchBeuCity();
    return;
  }

  const beuSectionButton = event.target.closest("[data-beu-section]");
  if (beuSectionButton) {
    beuState = {
      ...beuState,
      compass: beuSectionButton.dataset.beuSection,
      status: `Showing ${compassLabel(beuSectionButton.dataset.beuSection)} listings near ${beuState.origin.label}.`
    };
    renderBeuHome();
    document.querySelector(".beu-results")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const beuSaveButton = event.target.closest("[data-beu-save]");
  if (beuSaveButton) {
    beuCommunity.savedPlaces = toggleValue(beuCommunity.savedPlaces, beuSaveButton.dataset.beuSave);
    persistBeuCommunity();
    render();
    return;
  }

  const beuReviewButton = event.target.closest("[data-beu-review]");
  if (beuReviewButton) {
    const form = document.querySelector(`[data-beu-review-form="${beuReviewButton.dataset.beuReview}"]`);
    if (form) form.hidden = !form.hidden;
    return;
  }

  const beuReportButton = event.target.closest("[data-beu-report]");
  if (beuReportButton) {
    beuCommunity.reports = [
      {
        id: `report-${Date.now()}`,
        placeId: beuReportButton.dataset.beuReport,
        reason: "Incorrect information reported from listing card.",
        status: "pending admin review",
        submittedBy: beuCommunity.currentUser?.id || "guest",
        createdAt: new Date().toISOString()
      },
      ...(beuCommunity.reports || [])
    ];
    persistBeuCommunity();
    beuState = { ...beuState, status: "Report sent to the prototype admin review queue." };
    render();
    return;
  }

  const adminRecButton = event.target.closest("[data-beu-admin-rec]");
  if (adminRecButton) {
    beuCommunity.recommendations = beuCommunity.recommendations.map((item) => (
      item.id === adminRecButton.dataset.beuAdminRec ? { ...item, status: adminRecButton.dataset.status } : item
    ));
    persistBeuCommunity();
    renderBeuAdmin();
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  const planButton = event.target.closest("[data-plan]");
  if (saveButton) {
    saved = toggleValue(saved, saveButton.dataset.save);
    localStorage.setItem("letsCookSaved", JSON.stringify(saved));
    render();
  }
  if (planButton) {
    planned = toggleValue(planned, planButton.dataset.plan);
    localStorage.setItem("letsCookPlanned", JSON.stringify(planned));
    render();
  }
}

function requestBeuLocation() {
  if (!navigator.geolocation) {
    beuState = { ...beuState, status: "Location is not available in this browser. Try manual city search." };
    renderBeuHome();
    return;
  }

  beuState = { ...beuState, status: "Requesting location permission..." };
  renderBeuHome();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      beuState = {
        ...beuState,
        origin: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          label: "your current location"
        },
        country: "all",
        selectedCity: "all",
        locationLabel: "your current location",
        status: "Using your current location. Results combine BEU sample data with future API-ready search architecture."
      };
      renderBeuHome();
    },
    () => {
      beuState = { ...beuState, status: "Location permission was not granted. Use city search instead." };
      renderBeuHome();
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function searchBeuCity() {
  const selectedCity = document.querySelector("#beuCity")?.value || "all";
  const selectedCountry = document.querySelector("#beuCountry")?.value || beuState.country || "all";

  if (selectedCity === "all") {
    beuState = {
      ...beuState,
      origin: null,
      country: selectedCountry,
      selectedCity: "all",
      locationLabel: selectedCountry === "all" ? "Global" : selectedCountry,
      status: selectedCountry === "all"
        ? "Showing global BEU sample data across every available country."
        : `Showing BEU sample listings across ${selectedCountry}. Choose a city for radius-based local results.`
    };
    renderBeuHome();
    return;
  }

  const city = beuCities.find((item) => item.id === selectedCity);
  if (!city) {
    beuState = { ...beuState, status: "No sample city match yet. Add it to the BEU database or connect a geocoding API later." };
    renderBeuHome();
    return;
  }

  beuState = {
    ...beuState,
    country: city.country,
    selectedCity: city.id,
    origin: { lat: city.lat, lng: city.lng, label: city.label },
    locationLabel: city.label,
    status: `Showing BEU sample listings near ${city.label}.`
  };
  renderBeuHome();
}

function updateBeuCountry(country) {
  beuState = {
    ...beuState,
    origin: null,
    country,
    selectedCity: "all",
    locationLabel: country === "all" ? "Global" : country,
    status: country === "all"
      ? "Showing global BEU sample data across every available country."
      : `Showing BEU sample listings across ${country}. Choose a city for radius-based local results.`
  };
  renderBeuHome();
}

function handleSubmit(event) {
  if (event.target.matches("[data-beu-profile-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    beuCommunity.currentUser = {
      ...(beuCommunity.currentUser || {}),
      avatar: formData.get("avatar")?.toString().trim() || "assets/logo.png",
      displayName: formData.get("displayName")?.toString().trim() || "BEU Member",
      homeCity: formData.get("homeCity")?.toString().trim() || "",
      homeCountry: formData.get("homeCountry")?.toString().trim() || "",
      bio: formData.get("bio")?.toString().trim() || "",
      favoriteCategories: formData.get("favoriteCategories")?.toString().split(",").map((tag) => tag.trim()).filter(Boolean) || [],
      badges: formData.get("badges")?.toString().split(",").map((badge) => badge.trim()).filter(Boolean) || [],
      verifiedUser: Boolean(formData.get("verifiedUser"))
    };
    persistBeuCommunity();
    renderBeuProfile();
    return;
  }

  const beuReviewForm = event.target.closest("[data-beu-review-form]");
  if (beuReviewForm) {
    event.preventDefault();
    const formData = new FormData(beuReviewForm);
    beuCommunity.reviews = [
      {
        id: `review-${Date.now()}`,
        placeId: beuReviewForm.dataset.beuReviewForm,
        userId: beuCommunity.currentUser?.id || "guest",
        overallRating: Number(formData.get("overallRating") || 5),
        foodRating: Number(formData.get("foodRating") || 5),
        serviceRating: Number(formData.get("serviceRating") || 5),
        atmosphereRating: Number(formData.get("atmosphereRating") || 5),
        cultureRating: Number(formData.get("cultureRating") || 5),
        safetyRating: Number(formData.get("safetyRating") || 5),
        review: formData.get("review")?.toString().trim() || "",
        visitDate: formData.get("visitDate")?.toString() || "",
        experienceType: formData.get("experienceType")?.toString() || "Culturally relevant",
        tags: formData.get("tags")?.toString().split(",").map((tag) => tag.trim()).filter(Boolean) || [],
        createdAt: new Date().toISOString()
      },
      ...beuCommunity.reviews
    ];
    persistBeuCommunity();
    render();
    return;
  }

  if (event.target.matches("[data-beu-recommend-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    beuCommunity.recommendations = [
      {
        id: `rec-${Date.now()}`,
        placeName: formData.get("placeName")?.toString().trim() || "Recommended place",
        category: formData.get("category")?.toString().trim() || "Culture",
        address: formData.get("address")?.toString().trim() || "",
        website: formData.get("website")?.toString().trim() || "",
        recommendationRating: Number(formData.get("recommendationRating") || 5),
        why: formData.get("why")?.toString().trim() || "",
        tags: formData.get("tags")?.toString().split(",").map((tag) => tag.trim()).filter(Boolean) || [],
        submittedBy: beuCommunity.currentUser?.id || "guest",
        status: "pending",
        createdAt: new Date().toISOString()
      },
      ...beuCommunity.recommendations
    ];
    persistBeuCommunity();
    renderBeuHome();
    return;
  }

  if (!event.target.matches("[data-upload-form]")) return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const recipe = recipes.find((item) => item.id === formData.get("recipeId"));
  const file = formData.get("file");
  const url = formData.get("url")?.toString().trim() || "";
  submissions = [{
    id: Date.now().toString(),
    recipeTitle: recipe?.title || "Recipe",
    title: formData.get("title")?.toString().trim() || "Cook video",
    type: url ? "YouTube link" : file?.name ? `Local file: ${file.name}` : "Draft upload"
  }, ...submissions];
  localStorage.setItem("letsCookSubmissions", JSON.stringify(submissions));
  render();
}

function toggleValue(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function persistBeuCommunity() {
  localStorage.setItem("beuCommunity", JSON.stringify(beuCommunity));
}

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function escapeHTML(value) {
  return value.toString().replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

Promise.all([loadBeuDatabase(), loadBeuCommunity(), loadRecipeDatabase()]).finally(render);
