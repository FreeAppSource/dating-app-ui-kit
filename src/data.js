// Dating App UI Kit Mock Data & Models
// Authentic to Sketch artboards (Credits currency, Phone number buying, Top Users)

export const currentUser = {
  id: "user-me",
  name: "Taylor Reed",
  age: 24,
  location: "New York, NY",
  gender: "Woman",
  interestedIn: "Men",
  occupation: "Photographer & Art Director",
  bio: "Looking for someone to explore hidden coffee spots, indie concerts, and weekend art galleries with. Fluent in sarcasm and espresso.",
  avatar: require("./assets/images/avatar_me.png"),
  photos: [
    require("./assets/images/avatar_me.png"),
    require("./assets/images/profile_1.png"),
    require("./assets/images/profile_2.png"),
  ],
  creditsBalance: 24,
  creditsValueUSD: 23.76,
  phoneUnlockCredits: 5,
  phone: "+1 (555) 019-2834",
  verified: true,
  isInTop: true,
  hobbies: ["Photography", "Coffee", "Art", "Travel", "Gym", "Music"],
};

export const datingProfiles = [
  {
    id: "p1",
    name: "Jessica",
    age: 23,
    distance: "3 km away",
    city: "Brooklyn, NY",
    occupation: "Graphic Designer",
    company: "Creative Studio",
    bio: "Living life one espresso and passport stamp at a time. Dog lover, vinyl collector, and weekend hiker.",
    photo: require("./assets/images/profile_1.png"),
    photos: [
      require("./assets/images/profile_1.png"),
      require("./assets/images/profile_2.png"),
      require("./assets/images/profile_3.png"),
    ],
    verified: true,
    hobbies: ["Design", "Coffee", "Dogs", "Hiking", "Art"],
    phoneCredits: 5,
    matchPercent: 94,
    compatibility: "High Chemistry",
  },
  {
    id: "p2",
    name: "Sophia",
    age: 22,
    distance: "5 km away",
    city: "Manhattan, NY",
    occupation: "Architecture Student",
    company: "Columbia University",
    bio: "Fascinated by brutalist buildings and vintage film photography. Send me your favorite music playlist!",
    photo: require("./assets/images/profile_2.png"),
    photos: [
      require("./assets/images/profile_2.png"),
      require("./assets/images/profile_4.png"),
    ],
    verified: true,
    hobbies: ["Architecture", "Music", "Photography", "Books"],
    phoneCredits: 4,
    matchPercent: 88,
    compatibility: "Great Match",
  },
  {
    id: "p3",
    name: "Elena",
    age: 24,
    distance: "7 km away",
    city: "Queens, NY",
    occupation: "Fashion Stylist & Buyer",
    company: "Vogue Collective",
    bio: "Catch me at weekend flea markets or watching rooftop sunsets. Looking for good vibes and genuine laughs.",
    photo: require("./assets/images/profile_3.png"),
    photos: [
      require("./assets/images/profile_3.png"),
      require("./assets/images/profile_5.png"),
    ],
    verified: true,
    hobbies: ["Fashion", "Wine", "Travel", "Cinema"],
    phoneCredits: 6,
    matchPercent: 91,
    compatibility: "Top Match",
  },
  {
    id: "p4",
    name: "Chloe",
    age: 21,
    distance: "4 km away",
    city: "SoHo, NY",
    occupation: "Biochemistry Major",
    company: "NYU",
    bio: "Science nerd by day, indie concert enthusiast by night. Must love golden retrievers and late night ramen runs.",
    photo: require("./assets/images/profile_4.png"),
    photos: [
      require("./assets/images/profile_4.png"),
      require("./assets/images/profile_6.png"),
    ],
    verified: false,
    hobbies: ["Concerts", "Dogs", "Science", "Ramen"],
    phoneCredits: 5,
    matchPercent: 85,
    compatibility: "Good Match",
  },
  {
    id: "p5",
    name: "Maya",
    age: 25,
    distance: "2 km away",
    city: "Williamsburg, NY",
    occupation: "Culinary Chef",
    company: "L’Osteria",
    bio: "I will cook you the best homemade sourdough and truffle pasta you’ve ever had. Passionate about food, wine & yoga.",
    photo: require("./assets/images/profile_5.png"),
    photos: [
      require("./assets/images/profile_5.png"),
      require("./assets/images/profile_7.png"),
    ],
    verified: true,
    hobbies: ["Cooking", "Foodie", "Yoga", "Wine"],
    phoneCredits: 8,
    matchPercent: 96,
    compatibility: "Super Match",
  },
];

export const topUsers = [
  {
    id: "top-1",
    name: "Jessica",
    age: 23,
    avatar: require("./assets/images/profile_1.png"),
    isTop: true,
  },
  {
    id: "top-2",
    name: "Sophia",
    age: 22,
    avatar: require("./assets/images/profile_2.png"),
    isTop: true,
  },
  {
    id: "top-3",
    name: "Elena",
    age: 24,
    avatar: require("./assets/images/profile_3.png"),
    isTop: true,
  },
  {
    id: "top-4",
    name: "Chloe",
    age: 21,
    avatar: require("./assets/images/profile_4.png"),
    isTop: true,
  },
  {
    id: "top-5",
    name: "Maya",
    age: 25,
    avatar: require("./assets/images/profile_5.png"),
    isTop: true,
  },
];

export const matchesList = [
  {
    id: "m-1",
    profile: datingProfiles[0],
    matchedDate: "Today",
    isNew: true,
  },
  {
    id: "m-2",
    profile: datingProfiles[1],
    matchedDate: "Yesterday",
    isNew: true,
  },
  {
    id: "m-3",
    profile: datingProfiles[2],
    matchedDate: "2 days ago",
    isNew: false,
  },
];

export const chatsList = [
  {
    id: "c-1",
    profile: datingProfiles[0],
    lastMessage: "Hey Taylor! I love your photography shots of Brooklyn bridge!",
    timestamp: "2:45 PM",
    unread: 2,
    online: true,
  },
  {
    id: "c-2",
    profile: datingProfiles[1],
    lastMessage: "Which coffee spot in SoHo do you recommend?",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: "c-3",
    profile: datingProfiles[2],
    lastMessage: "Let's definitely check out that rooftop gallery!",
    timestamp: "3 Dec",
    unread: 0,
    online: true,
  },
];

export const creditsPackages = [
  { id: "pkg-1", credits: 10, price: "$9.99", popular: false, saveText: "Starter" },
  { id: "pkg-2", credits: 25, price: "$19.99", popular: true, saveText: "Save 20%" },
  { id: "pkg-3", credits: 100, price: "$49.99", popular: false, saveText: "Best Value" },
];

export const profileViewsList = [
  { id: "v1", name: "Jessica", time: "10 mins ago", avatar: require("./assets/images/profile_1.png") },
  { id: "v2", name: "Sophia", time: "1 hour ago", avatar: require("./assets/images/profile_2.png") },
  { id: "v3", name: "Elena", time: "3 hours ago", avatar: require("./assets/images/profile_3.png") },
  { id: "v4", name: "Maya", time: "Yesterday", avatar: require("./assets/images/profile_5.png") },
];
