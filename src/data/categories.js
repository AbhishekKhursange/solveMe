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
      { name: 'Majestic Lion', url: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&auto=format&fit=crop' },
      { name: 'African Elephant', url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&auto=format&fit=crop' },
      { name: 'Giant Panda', url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?w=800&auto=format&fit=crop' },
      { name: 'Red Fox', url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop' },
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
      { name: 'Eiffel Tower', url: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&auto=format&fit=crop' },
      { name: 'Taj Mahal', url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop' },
      { name: 'Colosseum', url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop' },
      { name: 'Mount Fuji', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop' },
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
      { name: 'Fresh Strawberries', url: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop' },
      { name: 'Crisp Apples', url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop' },
      { name: 'Juicy Oranges', url: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&auto=format&fit=crop' },
      { name: 'Garden Avocado', url: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop' },
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
      { name: 'India', url: 'https://flagcdn.com/w640/in.png' },
      { name: 'United States', url: 'https://flagcdn.com/w640/us.png' },
      { name: 'Japan', url: 'https://flagcdn.com/w640/jp.png' },
      { name: 'Brazil', url: 'https://flagcdn.com/w640/br.png' },
      { name: 'France', url: 'https://flagcdn.com/w640/fr.png' },
      { name: 'Australia', url: 'https://flagcdn.com/w640/au.png' },
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
      { name: 'Dolphins', url: '/images/ocean-life/dolphins.jpg' },
      { name: 'Sea Turtle', url: '/images/ocean-life/sea-turtle.jpg' },
      { name: 'Clownfish', url: '/images/ocean-life/clownfish.jpg' },
      { name: 'Coral Reef', url: '/images/ocean-life/coral-reef.jpg' },
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
      { name: 'Monarch Butterfly', url: '/images/bugs-blooms/monarch-butterfly.jpg' },
      { name: 'Honeybee', url: '/images/bugs-blooms/honeybee.jpg' },
      { name: 'Ladybug', url: '/images/bugs-blooms/ladybug.jpg' },
      { name: 'Sunflower', url: '/images/bugs-blooms/sunflower.jpg' },
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
      { name: 'Grand Canyon', url: '/images/natural-wonders/grand-canyon.jpg' },
      { name: 'Niagara Falls', url: '/images/natural-wonders/niagara-falls.jpg' },
      { name: 'Northern Lights', url: '/images/natural-wonders/northern-lights.jpg' },
      { name: 'Sahara Desert', url: '/images/natural-wonders/sahara-desert.jpg' },
    ],
  },
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

export const DIFFICULTIES = [
  { grid: 3, label: '3 × 3', tag: 'Easy' },
  { grid: 4, label: '4 × 4', tag: 'Medium' },
  { grid: 5, label: '5 × 5', tag: 'Expert' },
];
