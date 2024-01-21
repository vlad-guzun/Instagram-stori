'use client'

import ReactInstaStories from "react-insta-stories";

interface stories_types {
  url: string,
  header: {
    heading: string,
    subheading: string,
    profileImage: string,
  }
}



export default function Home() {
  return (
    <ReactInstaStories 
    /* eslint-disable react/default-props-match-prop-types */
                    stories={stories}
                    defaultInterval={10000}
                    width={400}
                    height={700}

    />
    
  );
}

const stories:stories_types[] = [
  {
    url: 'https://w0.peakpx.com/wallpaper/318/236/HD-wallpaper-toucan-bird-birds-wildlife.jpg',
    header: {
      heading: 'vlad.guzun_',
      subheading: '23h',
      profileImage: 'profile_pic.jpg',
    }
  },
  {
    url: 'https://w0.peakpx.com/wallpaper/250/939/HD-wallpaper-wildlife-coffee-evening-girrafe-lion-michaeljackson-moon-password-rip-tree-wild.jpg',
    header: {
      heading: 'vlad.guzun_',
      subheading: '23h',
      profileImage: 'profile_pic.jpg',
    }
  },
  {
    url: 'https://w0.peakpx.com/wallpaper/318/236/HD-wallpaper-toucan-bird-birds-wildlife.jpg',
    header: {
      heading: 'vlad.guzun_',
      subheading: '23h',
      profileImage: 'profile_pic.jpg',
    }
  }
]
