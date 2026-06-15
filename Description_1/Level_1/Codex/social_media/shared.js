(function () {
  const navLinks = [
    { href: "index.html", label: "Feed" },
    { href: "explore.html", label: "Explore" },
    { href: "notifications.html", label: "Notifications" },
    { href: "messages.html", label: "Messages" },
    { href: "profile.html", label: "Profile" },
    { href: "settings.html", label: "Settings" }
  ];

  const trendingTopics = [
    "🔥 #ClimateWeek — 84K posts",
    "#TechLayoffs",
    "#WorldCup2026",
    "#CreatorEconomy",
    "#IndieFilm"
  ];

  const posts = [
    {
      id: 1,
      name: "Maya Chen",
      handle: "@maya.builds",
      avatar: "https://loremflickr.com/200/200/portrait?random=31",
      avatarAlt: "Portrait of Maya Chen smiling outdoors",
      timestamp: "12m",
      text: "Wrapped a community climate dashboard today. Residents can now compare neighborhood heat risk, transit access, and tree canopy in one place.",
      image: "https://loremflickr.com/1200/800/dashboard?random=32",
      imageAlt: "Laptop displaying charts and analytics on a desk",
      likes: 482,
      comments: 39,
      shares: 18,
      bookmarks: 74
    },
    {
      id: 2,
      name: "Luis Ortega",
      handle: "@luisframes",
      avatar: "https://loremflickr.com/200/200/headshot?random=33",
      avatarAlt: "Headshot of Luis Ortega in natural light",
      timestamp: "32m",
      text: "Sunset from the riverwalk tonight looked unreal. Sometimes the best way to reset after news overload is just to go outside for twenty minutes.",
      image: "https://loremflickr.com/1200/800/riverwalk?random=34",
      imageAlt: "Orange sunset over a river with trees in the foreground",
      likes: 1204,
      comments: 88,
      shares: 54,
      bookmarks: 210
    },
    {
      id: 3,
      name: "Samira Patel",
      handle: "@samirathinks",
      avatar: "https://loremflickr.com/200/200/portrait?random=35",
      avatarAlt: "Portrait of Samira Patel against a neutral background",
      timestamp: "1h",
      text: "If your app needs a settings page, make the privacy controls readable in one scan. Nobody should need a scavenger hunt to understand who can see their posts.",
      image: "",
      imageAlt: "",
      likes: 930,
      comments: 124,
      shares: 63,
      bookmarks: 301
    },
    {
      id: 4,
      name: "Noah Rivera",
      handle: "@noahruns",
      avatar: "https://loremflickr.com/200/200/cityportrait?random=36",
      avatarAlt: "Noah Rivera wearing a dark jacket in a city portrait",
      timestamp: "2h",
      text: "Training log: easy miles, light mobility, then way too much coffee. Posting the route photo because the fog actually cooperated for once.",
      image: "https://loremflickr.com/1200/800/runningtrail?random=37",
      imageAlt: "Foggy path through trees during an early morning run",
      likes: 312,
      comments: 21,
      shares: 9,
      bookmarks: 40
    }
  ];

  const suggestedUsers = [
    {
      name: "Avery Park",
      handle: "@averyreports",
      avatar: "https://loremflickr.com/200/200/portrait?random=38",
      avatarAlt: "Portrait of Avery Park smiling with a city background",
      bio: "Local reporting, transit threads, civic explainers."
    },
    {
      name: "Jordan Bell",
      handle: "@jbell.photo",
      avatar: "https://loremflickr.com/200/200/headshot?random=39",
      avatarAlt: "Portrait of Jordan Bell with soft studio lighting",
      bio: "Street photography and short travel journals."
    },
    {
      name: "Nina Flores",
      handle: "@nina.codes",
      avatar: "https://loremflickr.com/200/200/portrait?random=40",
      avatarAlt: "Nina Flores looking at the camera in a bright portrait",
      bio: "Frontend notes, accessibility, and design systems."
    },
    {
      name: "Owen Hale",
      handle: "@owenonair",
      avatar: "https://loremflickr.com/200/200/headshot?random=41",
      avatarAlt: "Portrait of Owen Hale in a casual jacket",
      bio: "Sports, podcasts, and late-night live reactions."
    }
  ];

  const popularCards = [
    {
      title: "Crowds at the climate march downtown",
      image: "https://loremflickr.com/1200/800/climatemarch?random=42",
      alt: "Crowd of people gathered outdoors at a public event",
      text: "Photo thread capturing signs, speakers, and turnout."
    },
    {
      title: "Studio notes on better creator analytics",
      image: "https://loremflickr.com/1200/800/workspace?random=43",
      alt: "Coding workspace with laptop and notebook on a desk",
      text: "A breakdown of what metrics actually help small creators."
    },
    {
      title: "Neighborhood cafe guide",
      image: "https://loremflickr.com/1200/800/cafe?random=44",
      alt: "Coffee cup and pastries on a cafe table",
      text: "Users are collecting low-key places to work without shouting over playlists."
    },
    {
      title: "Matchday street scenes",
      image: "https://loremflickr.com/1200/800/soccerstadium?random=45",
      alt: "Soccer stadium crowd under bright lights",
      text: "Pulse is filling up with chants, jerseys, and prediction threads."
    }
  ];

  const notifications = [
    {
      category: "All",
      name: "Maya",
      avatar: posts[0].avatar,
      alt: posts[0].avatarAlt,
      action: "liked your post",
      time: "2h",
      snippet: "That redesign thread was exactly what I needed."
    },
    {
      category: "Mentions",
      name: "Samira",
      avatar: posts[2].avatar,
      alt: posts[2].avatarAlt,
      action: "mentioned you in a reply",
      time: "3h",
      snippet: "Alex had a great point about making defaults visible."
    },
    {
      category: "Follows",
      name: "Avery",
      avatar: suggestedUsers[0].avatar,
      alt: suggestedUsers[0].avatarAlt,
      action: "started following you",
      time: "5h",
      snippet: "You both post about city policy and product design."
    },
    {
      category: "Likes",
      name: "Luis",
      avatar: posts[1].avatar,
      alt: posts[1].avatarAlt,
      action: "liked your photo",
      time: "8h",
      snippet: "Golden hour on the riverwalk never misses."
    }
  ];

  const conversations = [
    {
      name: "Maya Chen",
      avatar: posts[0].avatar,
      alt: posts[0].avatarAlt,
      preview: "Can you send the draft after lunch?",
      time: "1m",
      unread: 2
    },
    {
      name: "Jordan Bell",
      avatar: suggestedUsers[1].avatar,
      alt: suggestedUsers[1].avatarAlt,
      preview: "That second photo has way better contrast.",
      time: "22m",
      unread: 0
    },
    {
      name: "Pulse Design Crew",
      avatar: "https://loremflickr.com/200/200/teamwork?random=46",
      alt: "Group of coworkers collaborating at a table",
      preview: "Review is live. Feedback window closes at 4.",
      time: "3h",
      unread: 5
    }
  ];

  function Layout(props) {
    const React = window.React;
    const activePath = props.activePath;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "a",
        {
          href: "#main-content",
          className: "absolute left-4 top-4 z-50 -translate-y-20 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg focus:translate-y-0 focus-visible:translate-y-0"
        },
        "Skip to main content"
      ),
      React.createElement(
        "div",
        { className: "mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-6" },
        React.createElement(
          "aside",
          { className: "hidden w-72 shrink-0 lg:block" },
          React.createElement(
            "div",
            { className: "glass-card sticky top-6 rounded-[2rem] border border-slate-200 p-6" },
            React.createElement(
              "a",
              {
                href: "index.html",
                className: "inline-flex items-center gap-3 rounded-full text-slate-950 no-underline"
              },
              React.createElement("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-lg font-extrabold text-white" }, "P"),
              React.createElement(
                "span",
                null,
                React.createElement("span", { className: "block text-2xl font-extrabold tracking-tight" }, "Pulse"),
                React.createElement("span", { className: "block text-sm text-slate-600" }, "Short posts, sharp conversations")
              )
            ),
            React.createElement(
              "nav",
              { className: "mt-8 space-y-2", "aria-label": "Sidebar" },
              navLinks.map(function (link) {
                return React.createElement(
                  "a",
                  {
                    key: link.href,
                    href: link.href,
                    "aria-current": activePath === link.href ? "page" : undefined,
                    className: "nav-pill block rounded-full px-4 py-3 text-sm font-semibold text-slate-800 no-underline hover:bg-slate-100"
                  },
                  link.label
                );
              })
            ),
            React.createElement(
              "a",
              {
                href: "profile.html",
                className: "mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white no-underline hover:bg-slate-800"
              },
              "Create Post"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "min-w-0 flex-1" },
          React.createElement(
            "header",
            { className: "glass-card rounded-[1.75rem] border border-slate-200 px-4 py-4 lg:hidden" },
            React.createElement(
              "div",
              { className: "flex items-center justify-between gap-4" },
              React.createElement(
                "a",
                { href: "index.html", className: "text-2xl font-extrabold tracking-tight text-slate-950 no-underline" },
                "Pulse"
              ),
              React.createElement(
                "a",
                {
                  href: "messages.html",
                  className: "rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-slate-800"
                },
                "Messages"
              )
            ),
            React.createElement(
              "nav",
              { className: "mt-4 flex flex-wrap gap-2", "aria-label": "Primary" },
              navLinks.map(function (link) {
                return React.createElement(
                  "a",
                  {
                    key: link.href,
                    href: link.href,
                    "aria-current": activePath === link.href ? "page" : undefined,
                    className:
                      "rounded-full px-3 py-2 text-sm font-semibold no-underline " +
                      (activePath === link.href ? "bg-slate-950 text-white" : "bg-white text-slate-700 hover:bg-slate-100")
                  },
                  link.label
                );
              })
            )
          ),
          props.children
        )
      )
    );
  }

  function TrendSidebar() {
    const React = window.React;
    return React.createElement(
      "aside",
      { className: "space-y-6 xl:w-80", "aria-label": "Trending topics" },
      React.createElement(
        "section",
        { className: "card-surface rounded-[1.75rem] p-6" },
        React.createElement("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Trending topics"),
        React.createElement(
          "div",
          { className: "mt-5 space-y-3" },
          trendingTopics.map(function (topic) {
            return React.createElement(
              "a",
              {
                key: topic,
                href: "explore.html",
                className: "block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 no-underline hover:bg-slate-100"
              },
              topic
            );
          })
        )
      )
    );
  }

  function PostCard(props) {
    const React = window.React;
    const post = props.post;
    return React.createElement(
      "article",
      { className: "post-card card-surface rounded-[1.75rem] p-5 transition" },
      React.createElement(
        "div",
        { className: "flex items-start gap-4" },
        React.createElement("img", {
          src: post.avatar,
          alt: post.avatarAlt,
          className: "h-12 w-12 rounded-full object-cover"
        }),
        React.createElement(
          "div",
          { className: "min-w-0 flex-1" },
          React.createElement(
            "div",
            { className: "flex flex-wrap items-center gap-2" },
            React.createElement("h2", { className: "text-base font-extrabold text-slate-950" }, post.name),
            React.createElement("span", { className: "text-sm text-slate-500" }, post.handle),
            React.createElement("span", { className: "text-sm text-slate-400" }, "·"),
            React.createElement("span", { className: "text-sm text-slate-500" }, post.timestamp)
          ),
          React.createElement("p", { className: "mt-3 text-sm leading-7 text-slate-700" }, post.text),
          post.image
            ? React.createElement("img", {
                src: post.image,
                alt: post.imageAlt,
                className: "mt-4 max-h-[28rem] w-full rounded-[1.25rem] object-cover"
              })
            : null,
          React.createElement(
            "div",
            { className: "mt-4 flex flex-wrap gap-2", "aria-label": "Post actions" },
            [
              "Like " + post.likes,
              "Comment " + post.comments,
              "Share " + post.shares,
              "Bookmark " + post.bookmarks
            ].map(function (label) {
              return React.createElement(
                "button",
                {
                  key: label,
                  type: "button",
                  className: "rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                },
                label
              );
            })
          )
        )
      )
    );
  }

  window.PulseShared = {
    navLinks: navLinks,
    trendingTopics: trendingTopics,
    posts: posts,
    suggestedUsers: suggestedUsers,
    popularCards: popularCards,
    notifications: notifications,
    conversations: conversations,
    Layout: Layout,
    TrendSidebar: TrendSidebar,
    PostCard: PostCard
  };
})();
