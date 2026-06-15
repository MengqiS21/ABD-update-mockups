window.MeridianData = (() => {
  const heroStory = {
    title: "Emergency Diplomacy Scrambles as Red Sea Shipping Routes Face New Pressure",
    dek: "World leaders are racing to contain a maritime crisis that could disrupt energy markets, food supply chains, and regional security calculations.",
    category: "World",
    byline: "By Hannah Vo",
    time: "Updated 18 minutes ago",
    image: "https://loremflickr.com/1400/800/shipping%20route?random=12",
    caption: "Commercial vessels transit a strategic shipping corridor amid rising military alerts."
  };

  const homepageStories = [
    {
      title: "Inside the coalition talks reshaping Europe’s climate agenda",
      category: "Politics",
      byline: "By Marcus Levin",
      time: "1 hour ago",
      image: "https://loremflickr.com/900/520/politics%20meeting?random=13"
    },
    {
      title: "Chip export controls push Asian supply chains into a new phase",
      category: "Tech",
      byline: "By Priya Raman",
      time: "2 hours ago",
      image: "https://loremflickr.com/900/520/computer%20chip?random=14"
    },
    {
      title: "A festival season shaped by climate anxiety and public art",
      category: "Culture",
      byline: "By Lena Scott",
      time: "3 hours ago",
      image: "https://loremflickr.com/900/520/public%20art%20festival?random=15"
    },
    {
      title: "Why public trust in local reporting is rising again",
      category: "Media",
      byline: "By Theo Hart",
      time: "4 hours ago",
      image: "https://loremflickr.com/900/520/newsroom?random=16"
    }
  ];

  const worldStories = [
    {
      title: "UN convenes emergency session as Red Sea tensions escalate",
      byline: "By Hannah Vo",
      time: "24 minutes ago",
      summary: "Diplomats are weighing maritime security guarantees while insurers and cargo operators recalculate exposure. The debate could determine whether key shipping routes remain viable this winter.",
      image: "https://loremflickr.com/900/520/cargo%20ship?random=17"
    },
    {
      title: "South Asian cities test extreme-heat warning networks",
      byline: "By Neha Kapoor",
      time: "58 minutes ago",
      summary: "Municipal leaders are pairing mobile alerts with neighborhood cooling hubs as seasonal heat begins arriving earlier each year.",
      image: "https://loremflickr.com/900/520/heatwave%20city?random=18"
    },
    {
      title: "European finance ministers clash over industrial subsidies",
      byline: "By Marcus Levin",
      time: "1 hour ago",
      summary: "The latest dispute reveals how strategic competition with China and the U.S. is redrawing internal priorities in Brussels.",
      image: "https://loremflickr.com/900/520/european%20parliament?random=19"
    },
    {
      title: "Flood recovery in Brazil exposes gaps in disaster insurance",
      byline: "By Sofia Mendes",
      time: "2 hours ago",
      summary: "Families rebuilding in southern states face a patchwork of public aid and rising private premiums.",
      image: "https://loremflickr.com/900/520/flood%20recovery?random=20"
    },
    {
      title: "Kenyan startups attract fresh climate-tech financing",
      byline: "By Daniel Otieno",
      time: "3 hours ago",
      summary: "Investors are backing battery storage, agricultural forecasting, and off-grid logistics tools.",
      image: "https://loremflickr.com/900/520/climate%20technology?random=21"
    },
    {
      title: "Middle East ceasefire talks stall over inspection terms",
      byline: "By Hannah Vo",
      time: "4 hours ago",
      summary: "Negotiators remain divided over monitoring arrangements and the sequencing of humanitarian deliveries.",
      image: "https://loremflickr.com/900/520/ceasefire%20talks?random=22"
    },
    {
      title: "Migration routes through the Americas shift after policy changes",
      byline: "By Tomas Rivera",
      time: "5 hours ago",
      summary: "Aid groups say new checkpoints have reconfigured the geography of risk for families on the move.",
      image: "https://loremflickr.com/900/520/migration%20journey?random=23"
    }
  ];

  const mostRead = [
    "The satellite economy’s quiet labor boom",
    "How students are reshaping campus political coalitions",
    "Why the streaming slowdown is changing prestige TV",
    "What a carbon border tax could mean for trade"
  ];

  const opinionWriters = [
    {
      name: "Amina Bell",
      title: "Columnist",
      avatar: "https://loremflickr.com/400/400/columnist%20portrait?random=24",
      headline: "The world cannot afford diplomacy designed for peacetime"
    },
    {
      name: "Julian Cross",
      title: "Technology Critic",
      avatar: "https://loremflickr.com/400/400/technology%20critic%20portrait?random=25",
      headline: "AI policy is turning into a proxy war over labor"
    },
    {
      name: "Marisol Vega",
      title: "Culture Essayist",
      avatar: "https://loremflickr.com/400/400/writer%20portrait?random=26",
      headline: "The slow return of civic optimism in public art"
    }
  ];

  const faq = [
    {
      q: "Can I cancel at any time?",
      a: "Yes. Monthly plans can be canceled at any time from your account page and remain active through the billing cycle."
    },
    {
      q: "Does All-Access include the mobile app?",
      a: "Yes. All-Access includes the Meridian app, audio articles, archives, and member-only newsletters."
    },
    {
      q: "Do students receive discounts?",
      a: "Student and educator pricing is available after verification with a valid academic email."
    }
  ];

  return { heroStory, homepageStories, worldStories, mostRead, opinionWriters, faq };
})();
