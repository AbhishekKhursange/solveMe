// ---------------------------------------------------------------------------
// CATEGORY + IMAGE CONFIG
// ---------------------------------------------------------------------------
// This is a static content table, not a database table. For a curated,
// fixed set of puzzle images this is the right call — see README.md
// ("Do I need a database?") for when you'd actually want one.
//
// Swap `url` values for your own self-hosted images (e.g. /images/lion.jpg
// served from /public, or a Cloudinary URL) whenever you're ready to stop
// depending on third-party hosts for production traffic.
// ---------------------------------------------------------------------------

export const CATEGORIES = {
  wildKingdom: {
    key: 'wildKingdom',
    title: 'Wild Kingdom',
    description: 'Animals from across the globe.',
    icon: 'bi-feather',
    accent: '#f59e0b', // amber
    accentTo: '#ea580c',
    items: [
      { name: 'Lion', url: '/images/wild-kingdom/Lion.webp' },
      { name: 'Elephant', url: '/images/wild-kingdom/Elephant.webp' },
      { name: 'Giant Panda', url: '/images/wild-kingdom/GiantPanda.webp' },
      { name: 'Red Fox', url: '/images/wild-kingdom/RedFox.webp' },
      { name: 'Tiger', url: '/images/wild-kingdom/Tiger.webp' },
      { name: 'Kangaroo', url: '/images/wild-kingdom/Kangaroo.webp' },
    ],
  },
  globalWonders: {
    key: 'globalWonders',
    title: 'Global Wonders',
    description: 'Iconic landmarks and monuments.',
    icon: 'bi-compass',
    accent: '#6366f1', // indigo
    accentTo: '#9333ea',
    items: [
      { name: 'Chichén Itzá', url: '/images/global-wonders/ChichenItza.webp' },
      { name: 'Taj Mahal', url: '/images/global-wonders/TajMahal.webp' },
      { name: 'Colosseum', url: '/images/global-wonders/Colosseum.webp' },
      { name: 'Christ the Redeemer', url: '/images/global-wonders/ChristTheRedeemer.webp' },
      { name: 'Machu Picchu', url: '/images/global-wonders/MachuPicchu.webp' },
      { name: 'Petra', url: '/images/global-wonders/Petra.webp' },
      { name: 'Eiffel Tower', url: '/images/global-wonders/EiffelTower.webp' },
      { name: 'Hanging Gardens of Babylon', url: '/images/global-wonders/HangingGardensOfBabylon.webp' },
      { name: 'Light House Of Alexandria', url: '/images/global-wonders/LightHouseOfAlexandria.webp' },
      { name: 'Pyramid of Giza', url: '/images/global-wonders/Pyramid.webp' },
    ],
  },
  fruitsGreens: {
    key: 'fruitsGreens',
    title: 'Fruits & Greens',
    description: 'Fresh produce, up close.',
    icon: 'bi-apple',
    accent: '#10b981', // emerald
    accentTo: '#0d9488',
    items: [
      { name: 'Fresh Strawberries', url: '/images/fruits-greens/Strawberries.webp' },
      { name: 'Apples', url: '/images/fruits-greens/Apples.webp' },
      { name: 'Juicy Oranges', url: '/images/fruits-greens/Oranges.webp' },
      { name: 'Garden Avocado', url: '/images/fruits-greens/Avocado.webp' },
      { name: 'Grapes', url: '/images/fruits-greens/Grapes.webp' },
      { name: 'Mangoes', url: '/images/fruits-greens/Mangoes.webp' },
      { name: 'Pumpkin', url: '/images/fruits-greens/Pumpkin.webp' },
      { name: 'Broccoli', url: '/images/fruits-greens/Broccoli.webp' },
    ],
  },
  countries: {
    key: 'countries',
    title: 'Countries',
    description: 'Flags from around the world.',
    icon: 'bi-globe-americas',
    accent: '#ec4899', // pink
    accentTo: '#db2777',
    // flagcdn.com serves stable, predictable, free-to-use flag images —
    // no API key, no rate limiting for this scale, safe for production.
    items: [
      { name: 'India', url: '/images/countries/India.webp' },
      { name: 'United States', url: '/images/countries/UnitedStates.webp' },
      { name: 'Japan', url: '/images/countries/Japan.webp' },
      { name: 'Brazil', url: '/images/countries/Brazil.webp' },
      { name: 'France', url: '/images/countries/France.webp' },
      { name: 'Australia', url: '/images/countries/Australia.webp' },
      { name: 'Germany', url: '/images/countries/Germany.webp' },
      { name: 'Russia', url: '/images/countries/Russia.webp' },
      { name: 'United Kingdom', url: '/images/countries/UnitedKingdom.webp' },
    ],
  },
  oceanLife: {
    key: 'oceanLife',
    title: 'Ocean Life',
    description: 'Creatures beneath the waves.',
    icon: 'bi-water',
    accent: '#0ea5e9', // sky blue
    accentTo: '#0369a1',
    items: [
      { name: 'Dolphins', url: '/images/ocean-life/Dolphin.webp' },
      { name: 'Sea Turtle', url: '/images/ocean-life/Turtle.webp' },
      { name: 'Clownfish', url: '/images/ocean-life/Clownfish.webp' },
      { name: 'Coral Reef', url: '/images/ocean-life/CoralReef.webp' },
      { name: 'Whale', url: '/images/ocean-life/Whale.webp' },
      { name: 'Beluga Whales', url: '/images/ocean-life/BelugaWhales.webp' },
      { name: 'Goldfish', url: '/images/ocean-life/Goldfish.webp' },
      { name: 'Jellyfish', url: '/images/ocean-life/Jellyfish.webp' },
      { name: 'Octopus', url: '/images/ocean-life/Octopus.webp' },
    ],
  },
  bugsBlooms: {
    key: 'bugsBlooms',
    title: 'Bugs & Blooms',
    description: 'Insects and flowers, up close.',
    icon: 'bi-flower1',
    accent: '#84cc16', // lime
    accentTo: '#4d7c0f',
    items: [
      { name: 'Butterfly', url: '/images/bugs&blooms/Butterfly.webp' },
      { name: 'Honeybee', url: '/images/bugs&blooms/HoneyBee.webp' },
      { name: 'Ladybug', url: '/images/bugs&blooms/LadyBug.webp' },
      { name: 'Sunflower', url: '/images/bugs&blooms/Sunflower.webp' },
      { name: 'Bittle', url: '/images/bugs&blooms/Bittle.webp' },
      { name: 'Hibiscus', url: '/images/bugs&blooms/Hibiscus.webp' },
      { name: 'Lily', url: '/images/bugs&blooms/Lily.webp' },
      { name: 'Lotus', url: '/images/bugs&blooms/Lotus.webp' },
      { name: 'Roses', url: '/images/bugs&blooms/Roses.webp' },
    ],
  },
  naturalWonders: {
    key: 'naturalWonders',
    title: 'Natural Wonders',
    description: 'Scenery shaped by nature, not people.',
    icon: 'bi-mountain',
    accent: '#f97316', // orange
    accentTo: '#b45309',
    items: [
      { name: 'Grand Canyon', url: '/images/natural-wonders/GrandCanyon.webp' },
      { name: 'Northern Lights', url: '/images/natural-wonders/NorthernLights.webp' },
      { name: 'Mount Fuji', url: '/images/natural-wonders/MountFuji.webp' },
      { name: 'Harbour Of Rio De Janeiro', url: '/images/natural-wonders/HarbourOfRioDeJaneiro.webp' },
    ],
  },
  birds: {
    key: 'birds',
    title: 'Birds',
    description: 'Feathered flyers from around the world.',
    icon: 'bi-feather2',
    accent: '#a855f7', // violet
    accentTo: '#7e22ce',
    items: [
      { name: 'Eagle', url: '/images/birds/Eagle.webp' },
      { name: 'White Owl', url: '/images/birds/WhiteOwl.webp' },
      { name: 'Peacock', url: '/images/birds/Peacock.webp' },
      { name: 'Parrot', url: '/images/birds/Parrot.webp' },
      { name: 'Swans', url: '/images/birds/Swans.webp' },
    ],
  },
  domesticKingdom: {
    key: 'domesticKingdom',
    title: 'Domestic Kingdom',
    description: 'Beloved pets from around the home.',
    icon: 'bi-heart-fill',
    accent: '#ef4444', // red
    accentTo: '#b91c1c',
    items: [
      { name: 'Puppy', url: '/images/domestic-kingdom/Puppy.webp' },
      { name: 'Kitten', url: '/images/domestic-kingdom/Kitten.webp' },
      { name: 'Goat', url: '/images/domestic-kingdom/Goat.webp' },
      { name: 'Sheep', url: '/images/domestic-kingdom/Sheep.webp' },
      { name: 'Horse', url: '/images/domestic-kingdom/Horse.webp' },
      { name: 'Cow', url: '/images/domestic-kingdom/Cow.webp' },
      { name: 'Ox', url: '/images/domestic-kingdom/Ox.webp' },
    ],
  },
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

export const DIFFICULTIES = [
  { grid: 3, label: '3 × 3', tag: 'Easy' },
  { grid: 4, label: '4 × 4', tag: 'Medium' },
  { grid: 5, label: '5 × 5', tag: 'Expert' },
];
