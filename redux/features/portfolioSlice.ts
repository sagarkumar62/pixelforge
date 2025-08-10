import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  platforms: string;
  details: {
    releaseDate: string;
    developer: string;
    publisher: string;
    features: string[];
    longDescription: string;
  };
}

interface PortfolioState {
  items: PortfolioItem[];
  services: ServiceItem[];
  selectedItem: PortfolioItem | null;
}

const initialState: PortfolioState = {
  services: [
    {
      id: 'pc-console',
      title: 'PC & Console Games',
      description: 'High-performance games for PC, PlayStation, Xbox, and Nintendo Switch',
      icon: 'Monitor',
      features: [
        'Unity & Unreal Engine development',
        'Cross-platform optimization',
        'Performance tuning'
      ]
    },
    {
      id: 'mobile-games',
      title: 'Mobile Games',
      description: 'Engaging mobile experiences for iOS and Android platforms',
      icon: 'Smartphone',
      features: [
        'Native & hybrid development',
        'App Store optimization',
        'Monetization strategies'
      ]
    },
    {
      id: 'game-programming',
      title: 'Game Programming',
      description: 'Custom game engines and advanced programming solutions',
      icon: 'Code',
      features: [
        'Custom engine development',
        'Multiplayer networking',
        'AI & procedural generation'
      ]
    },
    {
      id: 'art-design',
      title: 'Art & Design',
      description: 'Stunning visuals and immersive game art creation',
      icon: 'Palette',
      features: [
        '2D/3D art & animation',
        'UI/UX design',
        'Concept art & storyboarding'
      ]
    },
    {
      id: 'audio-design',
      title: 'Audio Design',
      description: 'Immersive soundscapes and dynamic audio systems',
      icon: 'Headphones',
      features: [
        'Music composition',
        'Sound effects design',
        'Voice acting & recording'
      ]
    },
    {
      id: 'game-porting',
      title: 'Game Porting',
      description: 'Seamless game porting across multiple platforms',
      icon: 'Zap',
      features: [
        'Platform optimization',
        'Performance enhancement',
        'Quality assurance testing'
      ]
    }
  ],
  items: [
    {
      id: 'mystic-realms',
      title: 'Mystic Realms',
      description: 'An epic fantasy RPG with stunning visuals and immersive storytelling',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k28kdfhjeeeazcppc2w4q1nd%2F1754783045_img_1.webp?st=2025-08-09T22%3A08%3A46Z&se=2025-08-15T23%3A08%3A46Z&sks=b&skt=2025-08-09T22%3A08%3A46Z&ske=2025-08-15T23%3A08%3A46Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=aN5406Gd1IX3yhhaCo1OUZN1BmPU3MBM75aD64zMiKI%3D&az=oaivgprodscus',
      category: 'RPG',
      rating: 4.8,
      platforms: 'PC, Console',
      details: {
        releaseDate: '2025-03-15',
        developer: 'PixelForge Studios',
        publisher: 'Epic Gaming',
        features: [
          'Vast open world exploration',
          'Deep character customization',
          'Strategic combat system',
          'Rich storyline with multiple endings',
          'Next-gen graphics engine'
        ],
        longDescription: 'Dive into a breathtaking fantasy world where your choices shape the fate of kingdoms. Mystic Realms combines cutting-edge graphics with deep role-playing mechanics, offering players unprecedented freedom in character development and storytelling. Experience epic battles, forge powerful alliances, and uncover ancient mysteries in this groundbreaking RPG.'
      }
    },
    {
      id: 'neon-rush',
      title: 'Neon Rush',
      description: 'High-speed futuristic racing with customizable vehicles and tracks',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k28pj7gxej5bcemqppck1e6n%2F1754786351_img_0.webp?st=2025-08-09T23%3A03%3A46Z&se=2025-08-16T00%3A03%3A46Z&sks=b&skt=2025-08-09T23%3A03%3A46Z&ske=2025-08-16T00%3A03%3A46Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=VxoCr8V3QWrk62dFKfZS70C3o9RTqVAFR6k2CsH2O00%3D&az=oaivgprodscus',
      category: 'Racing',
      rating: 4.6,
      platforms: 'Mobile, PC',
      details: {
        releaseDate: '2025-02-01',
        developer: 'PixelForge Studios',
        publisher: 'Speed Gaming Co.',
        features: [
          'Dynamic track generation',
          'Real-time multiplayer races',
          'Advanced vehicle customization',
          'Ray-traced neon lighting',
          'Cross-platform play'
        ],
        longDescription: 'Race through neon-lit cityscapes in this high-octane futuristic racing experience. Neon Rush pushes the boundaries of racing games with its dynamic tracks, stunning visual effects, and deep customization system. Compete against players worldwide in seamless cross-platform multiplayer matches.'
      }
    },
    {
      id: 'puzzle-quest',
      title: 'Puzzle Quest',
      description: 'Mind-bending puzzles combined with adventure elements',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k28prcccfddadzjg7ffrw5hx%2F1754786549_img_0.webp?st=2025-08-09T23%3A06%3A25Z&se=2025-08-16T00%3A06%3A25Z&sks=b&skt=2025-08-09T23%3A06%3A25Z&ske=2025-08-16T00%3A06%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=WokNitP6OuZ3eEBD0eLytMePCfYCX9XxgFuo8VO65Ik%3D&az=oaivgprodscus',
      category: 'Puzzle',
      rating: 4.9,
      platforms: 'Mobile',
      details: {
        releaseDate: '2025-01-15',
        developer: 'PixelForge Studios',
        publisher: 'Brain Games Inc.',
        features: [
          'Progressive difficulty system',
          'Story-driven gameplay',
          'Unique puzzle mechanics',
          'Daily challenges',
          'Leaderboard system'
        ],
        longDescription: 'Embark on an enchanting journey where puzzles and storytelling intertwine. Puzzle Quest offers a fresh take on the puzzle genre by incorporating rich narrative elements and innovative mechanics. Each puzzle solved unravels more of the mysterious story, keeping players engaged for hours.'
      }
    }
  ],
  selectedItem: null
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItem = state.items.find(item => item.id === action.payload) || null;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    }
  }
});

export const { setSelectedItem, clearSelectedItem } = portfolioSlice.actions;
export default portfolioSlice.reducer;
