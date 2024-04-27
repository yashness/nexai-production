import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

const NEWS = [
  {
    "title": "You have put personal interest over national: Delhi HC to AAP govt",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "You have put personal interest over national: Delhi HC to AAP govt"
    },
    "summary": "Delhi High Court criticizes AAP govt for neglecting 2 lakh students in MCD schools, prioritizing personal interest over national interest. Court demands action on delayed textbook provision and broken furniture, seeking solutions in upcoming directions.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Delhi High Court criticizes AAP govt for neglecting 2 lakh students in MCD schools, prioritizing personal interest over national interest. Court demands action on delayed textbook provision and broken furniture, seeking solutions in upcoming directions."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/delhi/you-have-put-personal-interest-over-national-delhi-high-court-to-aap-government/articleshow/109633813.cms"
      },
      {
        "type": "image/jpeg",
        "length": "59822",
        "href": "https://static.toiimg.com/photo/msid-109633811,imgsize-59822.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/delhi/you-have-put-personal-interest-over-national-delhi-high-court-to-aap-government/articleshow/109633813.cms",
    "id": "https://timesofindia.indiatimes.com/city/delhi/you-have-put-personal-interest-over-national-delhi-high-court-to-aap-government/articleshow/109633813.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 01:25:37 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      19,
      55,
      37,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "ABHINAV GARG"
      }
    ],
    "author": "ABHINAV GARG",
    "author_detail": {
      "name": "ABHINAV GARG"
    }
  },
  {
    "title": "Two CRPF jawan killed in militant attack in Manipur",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Two CRPF jawan killed in militant attack in Manipur"
    },
    "summary": "In Manipur's Bishnupur district, a militant attack on an India Reserve Battalion camp in Naranseina led to casualties among CRPF personnel. The incident prompted a search for the attackers and heightened security measures in the region.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "In Manipur's Bishnupur district, a militant attack on an India Reserve Battalion camp in Naranseina led to casualties among CRPF personnel. The incident prompted a search for the attackers and heightened security measures in the region."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/imphal/two-crpf-jawan-killed-in-militant-attack-in-manipur/articleshow/109637846.cms"
      },
      {
        "type": "image/jpeg",
        "length": "68478",
        "href": "https://static.toiimg.com/photo/msid-109637849,imgsize-68478.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/imphal/two-crpf-jawan-killed-in-militant-attack-in-manipur/articleshow/109637846.cms",
    "id": "https://timesofindia.indiatimes.com/city/imphal/two-crpf-jawan-killed-in-militant-attack-in-manipur/articleshow/109637846.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 07:13:16 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      1,
      43,
      16,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI CITY DESK"
      }
    ],
    "author": "TOI CITY DESK",
    "author_detail": {
      "name": "TOI CITY DESK"
    }
  },
  {
    "title": "'BJP opposing inheritance tax because of...' Prashant Bhushan",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "'BJP opposing inheritance tax because of...' Prashant Bhushan"
    },
    "summary": "Advocate Prashant Bhushan expressed support for an inheritance tax on Friday, urging Congress to be \"on the front foot\" in response to Sam Pitroda's statements, noting that every wealthy country has one. In a post on X, Prahsnat Bhushan wrote, \"Congress Party should be on the front foot on Sam Pitroda’s remarks on inheritance tax.\"",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Advocate Prashant Bhushan expressed support for an inheritance tax on Friday, urging Congress to be \"on the front foot\" in response to Sam Pitroda's statements, noting that every wealthy country has one. In a post on X, Prahsnat Bhushan wrote, \"Congress Party should be on the front foot on Sam Pitroda’s remarks on inheritance tax.\""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/bjp-opposing-inheritance-tax-because-of-adani-ambani-says-prashant-bhushan/articleshow/109639808.cms"
      },
      {
        "type": "image/jpeg",
        "length": "1219957",
        "href": "https://static.toiimg.com/photo/msid-109639850,imgsize-1219957.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/bjp-opposing-inheritance-tax-because-of-adani-ambani-says-prashant-bhushan/articleshow/109639808.cms",
    "id": "https://timesofindia.indiatimes.com/india/bjp-opposing-inheritance-tax-because-of-adani-ambani-says-prashant-bhushan/articleshow/109639808.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 10:39:42 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      5,
      9,
      42,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI NEWS DESK"
      }
    ],
    "author": "TOI NEWS DESK",
    "author_detail": {
      "name": "TOI NEWS DESK"
    }
  },
  {
    "title": "Delhi forces vs Maha pride: Sule’s quest to retain seat",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Delhi forces vs Maha pride: Sule’s quest to retain seat"
    },
    "summary": "Lok Sabha election campaign for Baramati in a ‘Pawar Versus Pawar’ fight gets into top gear",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Lok Sabha election campaign for Baramati in a ‘Pawar Versus Pawar’ fight gets into top gear"
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/pune/its-delhi-forces-vs-maharashtra-pride-in-supriya-sules-quest-to-retain-seat/articleshow/109636130.cms"
      },
      {
        "type": "image/jpeg",
        "length": "105352",
        "href": "https://static.toiimg.com/photo/msid-109639566,imgsize-105352.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/pune/its-delhi-forces-vs-maharashtra-pride-in-supriya-sules-quest-to-retain-seat/articleshow/109636130.cms",
    "id": "https://timesofindia.indiatimes.com/city/pune/its-delhi-forces-vs-maharashtra-pride-in-supriya-sules-quest-to-retain-seat/articleshow/109636130.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:25:05 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      55,
      5,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "ARDHRA NAIR"
      }
    ],
    "author": "ARDHRA NAIR",
    "author_detail": {
      "name": "ARDHRA NAIR"
    }
  },
  {
    "title": "With Kejriwal in jail, wife Sunita to spearhead AAP’s campaign",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "With Kejriwal in jail, wife Sunita to spearhead AAP’s campaign"
    },
    "summary": "Sunita Kejriwal spearheads AAP's Delhi campaign with roadshows in constituencies. Atishi announces roadshows in East and West Delhi. Kuldeep Kumar and Mahabal Mishra are AAP candidates in Lok Sabha seat-sharing with Congress.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Sunita Kejriwal spearheads AAP's Delhi campaign with roadshows in constituencies. Atishi announces roadshows in East and West Delhi. Kuldeep Kumar and Mahabal Mishra are AAP candidates in Lok Sabha seat-sharing with Congress."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/delhi/sunita-kejriwal-to-hit-the-road-for-aap-candidates/articleshow/109635093.cms"
      },
      {
        "type": "image/jpeg",
        "length": "21572",
        "href": "https://static.toiimg.com/photo/msid-109639705,imgsize-21572.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/delhi/sunita-kejriwal-to-hit-the-road-for-aap-candidates/articleshow/109635093.cms",
    "id": "https://timesofindia.indiatimes.com/city/delhi/sunita-kejriwal-to-hit-the-road-for-aap-candidates/articleshow/109635093.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:04:08 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      34,
      8,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Why ruling in Cognizant case made Google change its min wage rule",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Why ruling in Cognizant case made Google change its min wage rule"
    },
    "summary": "Google rolls back $15/hr policy, impacting worker rights and sparking 'joint employers' debate. NLRB's Cognizant ruling intensifies focus on temporary workers, unionization, financial impact, and worker classification in gig economy.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Google rolls back $15/hr policy, impacting worker rights and sparking 'joint employers' debate. NLRB's Cognizant ruling intensifies focus on temporary workers, unionization, financial impact, and worker classification in gig economy."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/technology/tech-news/how-this-ruling-in-cognizant-case-has-made-google-change-change-its-minimum-wage-and-benefits-rules-for-suppliers-and-staffing-companies/articleshow/109633404.cms"
      },
      {
        "type": "image/jpeg",
        "length": "386204",
        "href": "https://static.toiimg.com/photo/msid-109633382,imgsize-386204.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/technology/tech-news/how-this-ruling-in-cognizant-case-has-made-google-change-change-its-minimum-wage-and-benefits-rules-for-suppliers-and-staffing-companies/articleshow/109633404.cms",
    "id": "https://timesofindia.indiatimes.com/technology/tech-news/how-this-ruling-in-cognizant-case-has-made-google-change-change-its-minimum-wage-and-benefits-rules-for-suppliers-and-staffing-companies/articleshow/109633404.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 00:16:36 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      18,
      46,
      36,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TOI TECH DESK"
      }
    ],
    "author": "TOI TECH DESK",
    "author_detail": {
      "name": "TOI TECH DESK"
    }
  },
  {
    "title": "'Wasn't because of Impact Player': Ex-India player on big scores",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "'Wasn't because of Impact Player': Ex-India player on big scores"
    },
    "summary": "Aakash Chopra, a cricketer and commentator, attributed Kolkata Knight Riders' high score to their aggressive mindset, dismissing the \"Impact Player\" rule as the sole reason. Former India cricketer Chopra argued that bowlers were hit more due to the change in mindset, with openers scoring half-centuries and Ramandeep Singh hitting a six.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Aakash Chopra, a cricketer and commentator, attributed Kolkata Knight Riders' high score to their aggressive mindset, dismissing the \"Impact Player\" rule as the sole reason. Former India cricketer Chopra argued that bowlers were hit more due to the change in mindset, with openers scoring half-centuries and Ramandeep Singh hitting a six."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/it-wasnt-because-of-impact-player-rule-former-india-cricketer-on-big-scores-in-ipl/articleshow/109640751.cms"
      },
      {
        "type": "image/jpeg",
        "length": "76930",
        "href": "https://static.toiimg.com/photo/msid-109640842,imgsize-76930.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/it-wasnt-because-of-impact-player-rule-former-india-cricketer-on-big-scores-in-ipl/articleshow/109640751.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/it-wasnt-because-of-impact-player-rule-former-india-cricketer-on-big-scores-in-ipl/articleshow/109640751.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 10:59:28 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      5,
      29,
      28,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI SPORTS DESK"
      }
    ],
    "author": "TOI SPORTS DESK",
    "author_detail": {
      "name": "TOI SPORTS DESK"
    }
  },
  {
    "title": "69% vote in K'taka for 14 LS seats, Bengaluru limps to 57%",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "69% vote in K'taka for 14 LS seats, Bengaluru limps to 57%"
    },
    "summary": "69% turnout in 14 Karnataka Lok Sabha seats, with Bengaluru at 57%. Mysuru exceeded 70%. 247 candidates contesting. Bangalore Rural had the highest turnout.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "69% turnout in 14 Karnataka Lok Sabha seats, with Bengaluru at 57%. Mysuru exceeded 70%. 247 candidates contesting. Bangalore Rural had the highest turnout."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/bengaluru/69-vote-in-karnataka-phase-1-for-14-ls-seats-bengaluru-limps-to-57/articleshow/109639136.cms"
      },
      {
        "type": "image/jpeg",
        "length": "47914",
        "href": "https://static.toiimg.com/photo/msid-109639152,imgsize-47914.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/bengaluru/69-vote-in-karnataka-phase-1-for-14-ls-seats-bengaluru-limps-to-57/articleshow/109639136.cms",
    "id": "https://timesofindia.indiatimes.com/city/bengaluru/69-vote-in-karnataka-phase-1-for-14-ls-seats-bengaluru-limps-to-57/articleshow/109639136.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 09:24:43 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      3,
      54,
      43,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "'I cant breathe': Black man dies after being pinned down by cops in Ohio",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "'I cant breathe': Black man dies after being pinned down by cops in Ohio"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/world/us/-i-cant-breathe-black-man-dies-after-being-pinned-down-by-cops-in-ohio/articleshow/109637770.cms"
      },
      {
        "type": "image/jpeg",
        "length": "28998",
        "href": "https://static.toiimg.com/photo/msid-109637867,imgsize-28998.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/world/us/-i-cant-breathe-black-man-dies-after-being-pinned-down-by-cops-in-ohio/articleshow/109637770.cms",
    "id": "https://timesofindia.indiatimes.com/world/us/-i-cant-breathe-black-man-dies-after-being-pinned-down-by-cops-in-ohio/articleshow/109637770.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 07:16:49 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      1,
      46,
      49,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI WORLD DESK"
      }
    ],
    "author": "TOI WORLD DESK",
    "author_detail": {
      "name": "TOI WORLD DESK"
    }
  },
  {
    "title": "Google fires 20 more over Israel protests; says “each fired worker …”",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Google fires 20 more over Israel protests; says “each fired worker …”"
    },
    "summary": "Google fires 20 more employees due to protests against Israeli contract. Tensions rise as CEO Sundar Pichai reinforces strict workplace policies against disruptive behavior, emphasizing the importance of maintaining a focused work environment.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Google fires 20 more employees due to protests against Israeli contract. Tensions rise as CEO Sundar Pichai reinforces strict workplace policies against disruptive behavior, emphasizing the importance of maintaining a focused work environment."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/technology/tech-news/google-lays-off-20-more-employees-over-israel-project-protests-says-each-fired-worker-had-/articleshow/109520024.cms"
      },
      {
        "type": "image/jpeg",
        "length": "48146",
        "href": "https://static.toiimg.com/photo/msid-109519999,imgsize-48146.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/technology/tech-news/google-lays-off-20-more-employees-over-israel-project-protests-says-each-fired-worker-had-/articleshow/109520024.cms",
    "id": "https://timesofindia.indiatimes.com/technology/tech-news/google-lays-off-20-more-employees-over-israel-project-protests-says-each-fired-worker-had-/articleshow/109520024.cms",
    "guidislink": false,
    "published": "Tue, 23 Apr 2024 10:40:56 +0530",
    "published_parsed": [
      2024,
      4,
      23,
      5,
      10,
      56,
      1,
      114,
      0
    ],
    "authors": [
      {
        "name": "TOI TECH DESK"
      }
    ],
    "author": "TOI TECH DESK",
    "author_detail": {
      "name": "TOI TECH DESK"
    }
  },
  {
    "title": "Watch: Pant tells what he has learnt from Rohit Sharma",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Watch: Pant tells what he has learnt from Rohit Sharma"
    },
    "summary": "Delhi Capitals, led by Rishabh Pant, face Mumbai Indians. Pant learns from Rohit Sharma about innovation, proactive mindset, understanding players, trust, and strategic leadership. Recent performance shows promise for Capitals against inconsistent Mumbai Indians. The two teams are delicately placed in the table. Capitals have a chance to push the top four and MI are clearly staring down a cliff.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Delhi Capitals, led by Rishabh Pant, face Mumbai Indians. Pant learns from Rohit Sharma about innovation, proactive mindset, understanding players, trust, and strategic leadership. Recent performance shows promise for Capitals against inconsistent Mumbai Indians. The two teams are delicately placed in the table. Capitals have a chance to push the top four and MI are clearly staring down a cliff."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/the-trust-factor-he-brings-watch-what-rishabh-pant-has-learnt-from-rohit-sharma/articleshow/109640408.cms"
      },
      {
        "type": "image/jpeg",
        "length": "54044",
        "href": "https://static.toiimg.com/photo/msid-109640370,imgsize-54044.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/the-trust-factor-he-brings-watch-what-rishabh-pant-has-learnt-from-rohit-sharma/articleshow/109640408.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/the-trust-factor-he-brings-watch-what-rishabh-pant-has-learnt-from-rohit-sharma/articleshow/109640408.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 10:37:29 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      5,
      7,
      29,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI SPORTS DESK"
      }
    ],
    "author": "TOI SPORTS DESK",
    "author_detail": {
      "name": "TOI SPORTS DESK"
    }
  },
  {
    "title": "Owaisi calls Mukhtar Ansari a ‘martyr’, says he was poisoned",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Owaisi calls Mukhtar Ansari a ‘martyr’, says he was poisoned"
    },
    "summary": "Asaduddin Owaisi sparked controversy by alleging Mukhtar Ansari was poisoned, deeming him a 'martyr'. He criticized BJP for failing to protect Ansari in Varanasi, highlighting various significant figures and aspects in UP politics.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Asaduddin Owaisi sparked controversy by alleging Mukhtar Ansari was poisoned, deeming him a 'martyr'. He criticized BJP for failing to protect Ansari in Varanasi, highlighting various significant figures and aspects in UP politics."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/varanasi/owaisi-mukhtar-was-poisoned-he-is-a-martyr/articleshow/109637348.cms"
      },
      {
        "type": "image/jpeg",
        "length": "25926",
        "href": "https://static.toiimg.com/photo/msid-109638001,imgsize-25926.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/varanasi/owaisi-mukhtar-was-poisoned-he-is-a-martyr/articleshow/109637348.cms",
    "id": "https://timesofindia.indiatimes.com/city/varanasi/owaisi-mukhtar-was-poisoned-he-is-a-martyr/articleshow/109637348.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 05:15:33 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      23,
      45,
      33,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Harasser storms house of 15-yr-old, doesn't find her, shoots mom",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Harasser storms house of 15-yr-old, doesn't find her, shoots mom"
    },
    "summary": "In Jahangirpuri, an 18-year-old boy shot a woman, mother to a 15-year-old girl, following persistent harassment. Despite prior warnings, police failed to prevent the tragedy, leading to community tension and ongoing investigations.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "In Jahangirpuri, an 18-year-old boy shot a woman, mother to a 15-year-old girl, following persistent harassment. Despite prior warnings, police failed to prevent the tragedy, leading to community tension and ongoing investigations."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/delhi/harasser-storms-house-of-15-yr-old-girl-doesnt-find-her-shoots-mom-in-delhis-jahangirpuri/articleshow/109637948.cms"
      },
      {
        "type": "image/jpeg",
        "length": "36660",
        "href": "https://static.toiimg.com/photo/msid-109637958,imgsize-36660.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/delhi/harasser-storms-house-of-15-yr-old-girl-doesnt-find-her-shoots-mom-in-delhis-jahangirpuri/articleshow/109637948.cms",
    "id": "https://timesofindia.indiatimes.com/city/delhi/harasser-storms-house-of-15-yr-old-girl-doesnt-find-her-shoots-mom-in-delhis-jahangirpuri/articleshow/109637948.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 07:29:55 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      1,
      59,
      55,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Microsoft sales beat expectations; but these two businesses hurt",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Microsoft sales beat expectations; but these two businesses hurt"
    },
    "summary": "Microsoft's Q3 2024 fiscal year had strong results, but revenue declined for Surface devices and Xbox gaming hardware. Challenges lie ahead despite growth in Office and cloud businesses.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Microsoft's Q3 2024 fiscal year had strong results, but revenue declined for Surface devices and Xbox gaming hardware. Challenges lie ahead despite growth in Office and cloud businesses."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/technology/tech-news/microsoft-sales-profit-beat-expectations-but-these-two-business-point-to-trouble/articleshow/109624797.cms"
      },
      {
        "type": "image/jpeg",
        "length": "62402",
        "href": "https://static.toiimg.com/photo/msid-109624744,imgsize-62402.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/technology/tech-news/microsoft-sales-profit-beat-expectations-but-these-two-business-point-to-trouble/articleshow/109624797.cms",
    "id": "https://timesofindia.indiatimes.com/technology/tech-news/microsoft-sales-profit-beat-expectations-but-these-two-business-point-to-trouble/articleshow/109624797.cms",
    "guidislink": false,
    "published": "Fri, 26 Apr 2024 16:21:46 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      10,
      51,
      46,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TOI TECH DESK"
      }
    ],
    "author": "TOI TECH DESK",
    "author_detail": {
      "name": "TOI TECH DESK"
    }
  },
  {
    "title": "'Haarne pe bahut pareshan...': Preity Zinta's bond with Punjab Kings",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "'Haarne pe bahut pareshan...': Preity Zinta's bond with Punjab Kings"
    },
    "summary": "Former India all-rounder Irfan Pathan praised Bollywood actress and co-owner Preity Zinta's emotional investment and dedication to the Punjab Kings cricket team during a mid-innings discussion on Star Sports. Pathan, who represented Punjab Kings in the IPL for three years, praised Zinta's emotional control and passionate support for the team.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Former India all-rounder Irfan Pathan praised Bollywood actress and co-owner Preity Zinta's emotional investment and dedication to the Punjab Kings cricket team during a mid-innings discussion on Star Sports. Pathan, who represented Punjab Kings in the IPL for three years, praised Zinta's emotional control and passionate support for the team."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/haarne-pe-bahut-pareshan-ho-jaati-hai-irfan-pathan-shares-preity-zintas-passionate-involvement-with-punjab-kings/articleshow/109638891.cms"
      },
      {
        "type": "image/jpeg",
        "length": "73302",
        "href": "https://static.toiimg.com/photo/msid-109638982,imgsize-73302.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/haarne-pe-bahut-pareshan-ho-jaati-hai-irfan-pathan-shares-preity-zintas-passionate-involvement-with-punjab-kings/articleshow/109638891.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/haarne-pe-bahut-pareshan-ho-jaati-hai-irfan-pathan-shares-preity-zintas-passionate-involvement-with-punjab-kings/articleshow/109638891.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 09:04:09 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      3,
      34,
      9,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI SPORTS DESK"
      }
    ],
    "author": "TOI SPORTS DESK",
    "author_detail": {
      "name": "TOI SPORTS DESK"
    }
  },
  {
    "title": "Cracker at Bihar wedding sparks fire, kills six of a family",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Cracker at Bihar wedding sparks fire, kills six of a family"
    },
    "summary": "Six family members, including children, died in a Darbhanga fire caused by an LPG cylinder explosion during a wedding. The incident also killed three cows. Victims were identified as Sunil Paswan, Lali Devi, Kanchan Devi, Sakshi Kumari, Siddharth, and Sudhanshu.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Six family members, including children, died in a Darbhanga fire caused by an LPG cylinder explosion during a wedding. The incident also killed three cows. Victims were identified as Sunil Paswan, Lali Devi, Kanchan Devi, Sakshi Kumari, Siddharth, and Sudhanshu."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/patna/wedding-cracker-sparks-fire-in-dbhanga-kills-6/articleshow/109637038.cms"
      },
      {
        "type": "image/jpeg",
        "length": "19964",
        "href": "https://static.toiimg.com/photo/msid-109638002,imgsize-19964.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/patna/wedding-cracker-sparks-fire-in-dbhanga-kills-6/articleshow/109637038.cms",
    "id": "https://timesofindia.indiatimes.com/city/patna/wedding-cracker-sparks-fire-in-dbhanga-kills-6/articleshow/109637038.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:53:31 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      23,
      23,
      31,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Indian fisherman arrested by Pak dies in Karachi ‘after fall’",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Indian fisherman arrested by Pak dies in Karachi ‘after fall’"
    },
    "summary": "Vinod Kol, a fisherman from Dahanu, died in a Karachi jail after violating maritime boundaries. Sandhya Nair reported it, marking the first for an Indian in a Pakistan jail this year. His body will be sent to India on April 29.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Vinod Kol, a fisherman from Dahanu, died in a Karachi jail after violating maritime boundaries. Sandhya Nair reported it, marking the first for an Indian in a Pakistan jail this year. His body will be sent to India on April 29."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/mumbai/maharashtra-fisherman-arrested-by-pakistan-dies-in-karachi-jail/articleshow/109637931.cms"
      },
      {
        "type": "image/jpeg",
        "length": "12628",
        "href": "https://static.toiimg.com/photo/msid-109638824,imgsize-12628.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/mumbai/maharashtra-fisherman-arrested-by-pakistan-dies-in-karachi-jail/articleshow/109637931.cms",
    "id": "https://timesofindia.indiatimes.com/city/mumbai/maharashtra-fisherman-arrested-by-pakistan-dies-in-karachi-jail/articleshow/109637931.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 07:29:00 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      1,
      59,
      0,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "SANDHYA NAIR"
      }
    ],
    "author": "SANDHYA NAIR",
    "author_detail": {
      "name": "SANDHYA NAIR"
    }
  },
  {
    "title": "KKR's Gambhir argues with fourth umpire for a single - Watch",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "KKR's Gambhir argues with fourth umpire for a single - Watch"
    },
    "summary": "Kolkata Knight Riders were stunned by Punjab Kings' impressive run chase at Eden Gardens, which overshadowed a disagreement between KKR mentor Gautam Gambhir and the umpire. The Kings, inspired by Jonny Bairstow's century, chased down a formidable target of 262 runs. However, Gambhir's frustration escalated during a contentious moment in KKR's innings.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Kolkata Knight Riders were stunned by Punjab Kings' impressive run chase at Eden Gardens, which overshadowed a disagreement between KKR mentor Gautam Gambhir and the umpire. The Kings, inspired by Jonny Bairstow's century, chased down a formidable target of 262 runs. However, Gambhir's frustration escalated during a contentious moment in KKR's innings."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-frustrated-kkr-mentor-gautam-gambhir-argues-with-fourth-umpire-for-a-single-watch/articleshow/109639412.cms"
      },
      {
        "type": "image/jpeg",
        "length": "77024",
        "href": "https://static.toiimg.com/photo/msid-109639486,imgsize-77024.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-frustrated-kkr-mentor-gautam-gambhir-argues-with-fourth-umpire-for-a-single-watch/articleshow/109639412.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-frustrated-kkr-mentor-gautam-gambhir-argues-with-fourth-umpire-for-a-single-watch/articleshow/109639412.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 09:42:38 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      4,
      12,
      38,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI SPORTS DESK"
      }
    ],
    "author": "TOI SPORTS DESK",
    "author_detail": {
      "name": "TOI SPORTS DESK"
    }
  },
  {
    "title": "Many Pocso cases false and vindictive ones, says Odisha HC",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Many Pocso cases false and vindictive ones, says Odisha HC"
    },
    "summary": "Disconcerted by the rising number of cases registered under Pocso Act as a fallout of romantic relationships with or between minors, Orissa HC Friday noted with concern that many of these were \"false and vindictive litigations\", reports Lalmohan Patnaik. \"...It was never the legislation's (Pocso Act) intention to prosecute romantic relationships between young adults,\" Justice Sibo Sankar Mishra said, quashing criminal prosecution in five cases.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Disconcerted by the rising number of cases registered under Pocso Act as a fallout of romantic relationships with or between minors, Orissa HC Friday noted with concern that many of these were \"false and vindictive litigations\", reports Lalmohan Patnaik. \"...It was never the legislation's (Pocso Act) intention to prosecute romantic relationships between young adults,\" Justice Sibo Sankar Mishra said, quashing criminal prosecution in five cases."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/cuttack/many-pocso-cases-false-and-vindictive-ones-says-odisha-hc/articleshow/109634343.cms"
      },
      {
        "type": "image/jpeg",
        "length": "612957",
        "href": "https://static.toiimg.com/photo/msid-109634347,imgsize-612957.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/cuttack/many-pocso-cases-false-and-vindictive-ones-says-odisha-hc/articleshow/109634343.cms",
    "id": "https://timesofindia.indiatimes.com/city/cuttack/many-pocso-cases-false-and-vindictive-ones-says-odisha-hc/articleshow/109634343.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 03:17:12 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      21,
      47,
      12,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Actor Krishna accuses 'Shubh Shagun' makers of harassing her",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Actor Krishna accuses 'Shubh Shagun' makers of harassing her"
    },
    "summary": "Krishna Mukherjee, the actress known for her roles in various shows including \"Shubh Shagun,\" recently opened up against the makers, accusing them of harassment, unpaid dues, and creating an unsafe work environment. Her revelations about the ordeal received overwhelming support from colleagues and friends in the industry. She shared a long post on social media.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Krishna Mukherjee, the actress known for her roles in various shows including \"Shubh Shagun,\" recently opened up against the makers, accusing them of harassment, unpaid dues, and creating an unsafe work environment. Her revelations about the ordeal received overwhelming support from colleagues and friends in the industry. She shared a long post on social media."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/tv/news/hindi/yeh-hai-mohabbatein-fame-krishna-mukherjee-accuses-the-makers-of-shubh-shagun-of-harassing-her-says-they-once-locked-me-in-my-makeup-room-felt-unsafe-broken-and-scared/articleshow/109633818.cms"
      },
      {
        "type": "image/jpeg",
        "length": "27020",
        "href": "https://static.toiimg.com/photo/msid-109633820,imgsize-27020.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/tv/news/hindi/yeh-hai-mohabbatein-fame-krishna-mukherjee-accuses-the-makers-of-shubh-shagun-of-harassing-her-says-they-once-locked-me-in-my-makeup-room-felt-unsafe-broken-and-scared/articleshow/109633818.cms",
    "id": "https://timesofindia.indiatimes.com/tv/news/hindi/yeh-hai-mohabbatein-fame-krishna-mukherjee-accuses-the-makers-of-shubh-shagun-of-harassing-her-says-they-once-locked-me-in-my-makeup-room-felt-unsafe-broken-and-scared/articleshow/109633818.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 01:31:37 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      20,
      1,
      37,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "etimes.in"
      }
    ],
    "author": "etimes.in",
    "author_detail": {
      "name": "etimes.in"
    }
  },
  {
    "title": "Politics of guarantee: Born in Karnataka, now set for a pan-India (con)test",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Politics of guarantee: Born in Karnataka, now set for a pan-India (con)test"
    },
    "summary": "Congress and BJP battle over guarantees in Karnataka, with Congress emphasizing local implementation and BJP relying on Modi's national appeal. Congress expands guarantees nationally, countering 'Modi ki guarantee' with 25 new promises.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Congress and BJP battle over guarantees in Karnataka, with Congress emphasizing local implementation and BJP relying on Modi's national appeal. Congress expands guarantees nationally, countering 'Modi ki guarantee' with 25 new promises."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/bengaluru/politics-of-guarantee-born-in-karnataka-now-set-for-a-pan-india-contest/articleshow/109637467.cms"
      },
      {
        "type": "image/jpeg",
        "length": "1243266",
        "href": "https://static.toiimg.com/photo/msid-109637473,imgsize-1243266.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/bengaluru/politics-of-guarantee-born-in-karnataka-now-set-for-a-pan-india-contest/articleshow/109637467.cms",
    "id": "https://timesofindia.indiatimes.com/city/bengaluru/politics-of-guarantee-born-in-karnataka-now-set-for-a-pan-india-contest/articleshow/109637467.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 05:52:58 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      0,
      22,
      58,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "CHETHAN KUMAR AND B V SHIVA SHANKAR"
      }
    ],
    "author": "CHETHAN KUMAR AND B V SHIVA SHANKAR",
    "author_detail": {
      "name": "CHETHAN KUMAR AND B V SHIVA SHANKAR"
    }
  },
  {
    "title": "Delhi high court directs DGCA to de-register 54 GoAir planes",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Delhi high court directs DGCA to de-register 54 GoAir planes"
    },
    "summary": "The lessors of 54 aircraft to grounded-since-last May GoAir finally got relief on several counts from the Delhi high court on Friday which directed the Directorate General of Civil Aviation (DGCA) to de-register these planes within a maximum of five working days. The revival of GoAir under IBC is now an even tougher task as the lessors are learnt to be wooed by both Tata’s Air India and cash-rich IndiGo to get around 15 of the Airbus A320 family planes which could fairly quickly be made airworthy.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "The lessors of 54 aircraft to grounded-since-last May GoAir finally got relief on several counts from the Delhi high court on Friday which directed the Directorate General of Civil Aviation (DGCA) to de-register these planes within a maximum of five working days. The revival of GoAir under IBC is now an even tougher task as the lessors are learnt to be wooed by both Tata’s Air India and cash-rich IndiGo to get around 15 of the Airbus A320 family planes which could fairly quickly be made airworthy."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/business/india-business/relief-for-lessors-delhi-high-court-directs-dgca-to-de-register-54-goair-planes/articleshow/109634391.cms"
      },
      {
        "type": "image/jpeg",
        "length": "529814",
        "href": "https://static.toiimg.com/photo/msid-109634393,imgsize-529814.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/business/india-business/relief-for-lessors-delhi-high-court-directs-dgca-to-de-register-54-goair-planes/articleshow/109634391.cms",
    "id": "https://timesofindia.indiatimes.com/business/india-business/relief-for-lessors-delhi-high-court-directs-dgca-to-de-register-54-goair-planes/articleshow/109634391.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 03:41:44 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      11,
      44,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "SAURABH SINHA"
      }
    ],
    "author": "SAURABH SINHA",
    "author_detail": {
      "name": "SAURABH SINHA"
    }
  },
  {
    "title": "Lok Sabha polls: NRIs come home, some by charter flights, to vote",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Lok Sabha polls: NRIs come home, some by charter flights, to vote"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/nris-fly-in-line-up-for-love-of-vote/articleshow/109634093.cms"
      },
      {
        "type": "image/jpeg",
        "length": "37900",
        "href": "https://static.toiimg.com/photo/msid-109634094,imgsize-37900.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/nris-fly-in-line-up-for-love-of-vote/articleshow/109634093.cms",
    "id": "https://timesofindia.indiatimes.com/india/nris-fly-in-line-up-for-love-of-vote/articleshow/109634093.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 02:46:18 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      21,
      16,
      18,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "KR RAJEEV, KEVIN MENDONSA, SANTOSH KUMAR.B, KRISHNA CHAUDHARY"
      }
    ],
    "author": "KR RAJEEV, KEVIN MENDONSA, SANTOSH KUMAR.B, KRISHNA CHAUDHARY",
    "author_detail": {
      "name": "KR RAJEEV, KEVIN MENDONSA, SANTOSH KUMAR.B, KRISHNA CHAUDHARY"
    }
  },
  {
    "title": "How Punjab Kings raised the bar with historic victory against KKR",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "How Punjab Kings raised the bar with historic victory against KKR"
    },
    "summary": "The match recorded the highest number of sixes (42) in any T20 game as after KKR hit 18 of those, PBKS bettered that by getting six more to record the highest run-chase in any T20 match scoring 262 for two in 18.4 overs. ​​Shashank Singh kept his good form going to finish off things staying undefeated on 68 along with Bairstow, who got 108 off 48 balls with the help of eight fours and nine sixes.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "The match recorded the highest number of sixes (42) in any T20 game as after KKR hit 18 of those, PBKS bettered that by getting six more to record the highest run-chase in any T20 match scoring 262 for two in 18.4 overs. ​​Shashank Singh kept his good form going to finish off things staying undefeated on 68 along with Bairstow, who got 108 off 48 balls with the help of eight fours and nine sixes."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/heist-and-history-at-eden-how-punjab-kings-set-the-bar-higher-with-historic-victory-against-kolkata-knight-riders/articleshow/109638054.cms"
      },
      {
        "type": "image/jpeg",
        "length": "65258",
        "href": "https://static.toiimg.com/photo/msid-109638038,imgsize-65258.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/heist-and-history-at-eden-how-punjab-kings-set-the-bar-higher-with-historic-victory-against-kolkata-knight-riders/articleshow/109638054.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/heist-and-history-at-eden-how-punjab-kings-set-the-bar-higher-with-historic-victory-against-kolkata-knight-riders/articleshow/109638054.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 07:46:12 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      2,
      16,
      12,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "ARCHIMAN BHADURI"
      }
    ],
    "author": "ARCHIMAN BHADURI",
    "author_detail": {
      "name": "ARCHIMAN BHADURI"
    }
  },
  {
    "title": "US calls India among most challenging on IPR safety",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "US calls India among most challenging on IPR safety"
    },
    "summary": "The US Trade Representative has called India among the most challenging major economies on enforcement and protection of intellectual property rights (IPR) and retained it on Priority Watch along with China, Indonesia, Russia, Chile, and Venezuela. “These countries will be the subject of particularly intense bilateral engagement during the coming year,” USTR said in a report.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "The US Trade Representative has called India among the most challenging major economies on enforcement and protection of intellectual property rights (IPR) and retained it on Priority Watch along with China, Indonesia, Russia, Chile, and Venezuela. “These countries will be the subject of particularly intense bilateral engagement during the coming year,” USTR said in a report."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/business/india-business/us-calls-india-among-most-challenging-on-ipr-safety/articleshow/109637022.cms"
      },
      {
        "type": "image/jpeg",
        "length": "1109676",
        "href": "https://static.toiimg.com/photo/msid-109637013,imgsize-1109676.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/business/india-business/us-calls-india-among-most-challenging-on-ipr-safety/articleshow/109637022.cms",
    "id": "https://timesofindia.indiatimes.com/business/india-business/us-calls-india-among-most-challenging-on-ipr-safety/articleshow/109637022.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:52:50 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      23,
      22,
      50,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "T20 World Cup selection takes centrestage as DC face MI",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "T20 World Cup selection takes centrestage as DC face MI"
    },
    "summary": "Amidst intense training in the sweltering heat, IPL players like Axar Patel and Rishabh Pant aim to secure T20 World Cup spots. This is a time when each IPL performance counts, with the selection for the upcoming T20 World Cup due soon. At a time when Indian cricket seems to be grappling with workload-management issues, one could see Hardik Pandya going full throttle with the ball in high heat and Axar Patel turning up for a lengthy nets session barely 40 hours after playing a tough match against Gujarat Titans.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Amidst intense training in the sweltering heat, IPL players like Axar Patel and Rishabh Pant aim to secure T20 World Cup spots. This is a time when each IPL performance counts, with the selection for the upcoming T20 World Cup due soon. At a time when Indian cricket seems to be grappling with workload-management issues, one could see Hardik Pandya going full throttle with the ball in high heat and Axar Patel turning up for a lengthy nets session barely 40 hours after playing a tough match against Gujarat Titans."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/t20-world-cup-selection-takes-centrestage-as-delhi-capitals-face-mumbai-indians/articleshow/109637746.cms"
      },
      {
        "type": "image/jpeg",
        "length": "72880",
        "href": "https://static.toiimg.com/photo/msid-109637737,imgsize-72880.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/t20-world-cup-selection-takes-centrestage-as-delhi-capitals-face-mumbai-indians/articleshow/109637746.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/t20-world-cup-selection-takes-centrestage-as-delhi-capitals-face-mumbai-indians/articleshow/109637746.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 06:47:50 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      1,
      17,
      50,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "ARANI BASU"
      }
    ],
    "author": "ARANI BASU",
    "author_detail": {
      "name": "ARANI BASU"
    }
  },
  {
    "title": "CRPF DIG Khajan Singh faces dismissal from CRPF for 'sex harassment'",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "CRPF DIG Khajan Singh faces dismissal from CRPF for 'sex harassment'"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/khajan-singh-faces-dismissal-from-crpf-for-sex-harassment/articleshow/109637537.cms"
      },
      {
        "type": "image/jpeg",
        "length": "25058",
        "href": "https://static.toiimg.com/photo/msid-109637545,imgsize-25058.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/khajan-singh-faces-dismissal-from-crpf-for-sex-harassment/articleshow/109637537.cms",
    "id": "https://timesofindia.indiatimes.com/india/khajan-singh-faces-dismissal-from-crpf-for-sex-harassment/articleshow/109637537.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 06:03:59 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      0,
      33,
      59,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "PTI"
      }
    ],
    "author": "PTI",
    "author_detail": {
      "name": "PTI"
    }
  },
  {
    "title": "Marking shift in policy, Germany speeds up arms sales to India",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Marking shift in policy, Germany speeds up arms sales to India"
    },
    "summary": "As part of its overall policy to bolster bilateral defense-strategic cooperation, Germany has speeded up clearances and simplified the licensing regime for military sales to India, which include lifting restrictions on the sale of small arms and their spare parts. German govt, for instance, recently approved a request by the NSG to buy spare parts and accessories for its MP5 submachine guns, sources said Friday.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "As part of its overall policy to bolster bilateral defense-strategic cooperation, Germany has speeded up clearances and simplified the licensing regime for military sales to India, which include lifting restrictions on the sale of small arms and their spare parts. German govt, for instance, recently approved a request by the NSG to buy spare parts and accessories for its MP5 submachine guns, sources said Friday."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/marking-shift-in-policy-germany-speeds-up-arms-sales-to-india/articleshow/109636024.cms"
      },
      {
        "type": "image/jpeg",
        "length": "1106860",
        "href": "https://static.toiimg.com/photo/msid-109637407,imgsize-1106860.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/marking-shift-in-policy-germany-speeds-up-arms-sales-to-india/articleshow/109636024.cms",
    "id": "https://timesofindia.indiatimes.com/india/marking-shift-in-policy-germany-speeds-up-arms-sales-to-india/articleshow/109636024.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:24:25 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      54,
      25,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Robots, sniffer dogs search Sandeshkhali, find 7 guns, bullets",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Robots, sniffer dogs search Sandeshkhali, find 7 guns, bullets"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/kolkata/robots-sniffer-dogs-search-sandeshkhali-find-7-guns-bullets/articleshow/109633953.cms"
      },
      {
        "type": "image/jpeg",
        "length": "1283353",
        "href": "https://static.toiimg.com/photo/msid-109633955,imgsize-1283353.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/kolkata/robots-sniffer-dogs-search-sandeshkhali-find-7-guns-bullets/articleshow/109633953.cms",
    "id": "https://timesofindia.indiatimes.com/city/kolkata/robots-sniffer-dogs-search-sandeshkhali-find-7-guns-bullets/articleshow/109633953.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 01:57:39 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      20,
      27,
      39,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "ROHIT KHANNA AND SANJIB CHAKRABARTY"
      }
    ],
    "author": "ROHIT KHANNA AND SANJIB CHAKRABARTY",
    "author_detail": {
      "name": "ROHIT KHANNA AND SANJIB CHAKRABARTY"
    }
  },
  {
    "title": "Phase 2 turnout touches 64.7% against 69.4% in 2019",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Phase 2 turnout touches 64.7% against 69.4% in 2019"
    },
    "summary": "A turnout of 64.7% was recorded in 88 Lok Sabha constituencies across 12 states and the Union territory of J&amp;K in the second phase of elections on Friday which was largely peaceful even as several states saw punishing heat conditions with temperature crossing 40 degrees Celsius at many places.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "A turnout of 64.7% was recorded in 88 Lok Sabha constituencies across 12 states and the Union territory of J&amp;K in the second phase of elections on Friday which was largely peaceful even as several states saw punishing heat conditions with temperature crossing 40 degrees Celsius at many places."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/temperature-hovering-at-40c-phase-2-turnout-touches-64-7-against-69-4-in-2019/articleshow/109633991.cms"
      },
      {
        "type": "image/jpeg",
        "length": "37900",
        "href": "https://static.toiimg.com/photo/msid-109633996,imgsize-37900.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/temperature-hovering-at-40c-phase-2-turnout-touches-64-7-against-69-4-in-2019/articleshow/109633991.cms",
    "id": "https://timesofindia.indiatimes.com/india/temperature-hovering-at-40c-phase-2-turnout-touches-64-7-against-69-4-in-2019/articleshow/109633991.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 02:15:27 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      20,
      45,
      27,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Watch: Shashank does the iconic SRK pose after win against KKR",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Watch: Shashank does the iconic SRK pose after win against KKR"
    },
    "summary": "Punjab Kings' Shashank Singh's explosive 68 runs off 28 balls led to a historic T20 victory against Kolkata Knight Riders. The match witnessed the highest successful chase globally, with notable performances from Jonny Bairstow and Prabhsimran Singh. The match also saw the most number of sixes hit in the format.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Punjab Kings' Shashank Singh's explosive 68 runs off 28 balls led to a historic T20 victory against Kolkata Knight Riders. The match witnessed the highest successful chase globally, with notable performances from Jonny Bairstow and Prabhsimran Singh. The match also saw the most number of sixes hit in the format."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/watch-shashank-singh-does-the-iconic-shah-rukh-khan-pose-after-punjab-kings-win-against-kolkata-knight-riders/articleshow/109637527.cms"
      },
      {
        "type": "image/jpeg",
        "length": "42216",
        "href": "https://static.toiimg.com/photo/msid-109637521,imgsize-42216.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/watch-shashank-singh-does-the-iconic-shah-rukh-khan-pose-after-punjab-kings-win-against-kolkata-knight-riders/articleshow/109637527.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/watch-shashank-singh-does-the-iconic-shah-rukh-khan-pose-after-punjab-kings-win-against-kolkata-knight-riders/articleshow/109637527.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 06:03:58 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      0,
      33,
      58,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "TOI SPORTS DESK"
      }
    ],
    "author": "TOI SPORTS DESK",
    "author_detail": {
      "name": "TOI SPORTS DESK"
    }
  },
  {
    "title": "Congress distances itself from VVPAT pleas, but says will fight on",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Congress distances itself from VVPAT pleas, but says will fight on"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/cong-distances-itself-fromvvpat-pleas-but-says-will-fight-on/articleshow/109634033.cms"
      },
      {
        "type": "image/jpeg",
        "length": "43632",
        "href": "https://static.toiimg.com/photo/msid-109634812,imgsize-43632.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/cong-distances-itself-fromvvpat-pleas-but-says-will-fight-on/articleshow/109634033.cms",
    "id": "https://timesofindia.indiatimes.com/india/cong-distances-itself-fromvvpat-pleas-but-says-will-fight-on/articleshow/109634033.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 02:28:09 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      20,
      58,
      9,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Can NOTA be a fictional candidate? SC to study",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Can NOTA be a fictional candidate? SC to study"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/can-nota-be-a-fictional-candidate-sc-to-study/articleshow/109635587.cms"
      },
      {
        "type": "image/jpeg",
        "length": "36866",
        "href": "https://static.toiimg.com/photo/msid-109635646,imgsize-36866.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/can-nota-be-a-fictional-candidate-sc-to-study/articleshow/109635587.cms",
    "id": "https://timesofindia.indiatimes.com/india/can-nota-be-a-fictional-candidate-sc-to-study/articleshow/109635587.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:14:02 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      44,
      2,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "DHANANJAY MAHAPATRA"
      }
    ],
    "author": "DHANANJAY MAHAPATRA",
    "author_detail": {
      "name": "DHANANJAY MAHAPATRA"
    }
  },
  {
    "title": "Can Lucknow Super Giants ground high-flying Rajasthan Royals?",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Can Lucknow Super Giants ground high-flying Rajasthan Royals?"
    },
    "summary": "LSG will eye revenge after having lost their inaugural encounter against Royals in Jaipur by 20 runs. In the last few matches, LSG have had to face injuries in their fast-bowling unit, with young sensation Mayank Yadav and left-arm pacer Mohsin Khan going missing. RR will benefit from the presence of Avesh Khan, as he has been a part of LSG in the past. He knows the pitch and conditions well.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "LSG will eye revenge after having lost their inaugural encounter against Royals in Jaipur by 20 runs. In the last few matches, LSG have had to face injuries in their fast-bowling unit, with young sensation Mayank Yadav and left-arm pacer Mohsin Khan going missing. RR will benefit from the presence of Avesh Khan, as he has been a part of LSG in the past. He knows the pitch and conditions well."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-can-lucknow-super-giants-ground-high-flying-rajasthan-royals/articleshow/109637844.cms"
      },
      {
        "type": "image/jpeg",
        "length": "81820",
        "href": "https://static.toiimg.com/photo/msid-109637837,imgsize-81820.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-can-lucknow-super-giants-ground-high-flying-rajasthan-royals/articleshow/109637844.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-can-lucknow-super-giants-ground-high-flying-rajasthan-royals/articleshow/109637844.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 07:12:25 +0530",
    "published_parsed": [
      2024,
      4,
      27,
      1,
      42,
      25,
      5,
      118,
      0
    ],
    "authors": [
      {
        "name": "FAZAL KHAN"
      }
    ],
    "author": "FAZAL KHAN",
    "author_detail": {
      "name": "FAZAL KHAN"
    }
  },
  {
    "title": "Cricket is turning into baseball, says Sam Curran",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Cricket is turning into baseball, says Sam Curran"
    },
    "summary": "Jonny Bairstow's unbeaten 108 off 45 balls powered Punjab Kings to the highest successful run chase in Indian Premier League history on Friday. Punjab Kings successfully chased down Kolkata Knight Riders' 261/6 with eight balls remaining. Opener Bairstow finished the innings with 108 not out off 48 balls, while Shashank Singh scored 68 not out off 28 balls. Prabhsimran Singh, the other opener, contributed 54 off 20 balls to Punjab Kings' victory.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Jonny Bairstow's unbeaten 108 off 45 balls powered Punjab Kings to the highest successful run chase in Indian Premier League history on Friday. Punjab Kings successfully chased down Kolkata Knight Riders' 261/6 with eight balls remaining. Opener Bairstow finished the innings with 108 not out off 48 balls, while Shashank Singh scored 68 not out off 28 balls. Prabhsimran Singh, the other opener, contributed 54 off 20 balls to Punjab Kings' victory."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/cricket-is-turning-into-baseball-says-sam-curran-after-punjab-kings-world-record-chase-vs-kolkata-knight-riders/articleshow/109633762.cms"
      },
      {
        "type": "image/jpeg",
        "length": "61438",
        "href": "https://static.toiimg.com/photo/msid-109633767,imgsize-61438.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/cricket-is-turning-into-baseball-says-sam-curran-after-punjab-kings-world-record-chase-vs-kolkata-knight-riders/articleshow/109633762.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/cricket-is-turning-into-baseball-says-sam-curran-after-punjab-kings-world-record-chase-vs-kolkata-knight-riders/articleshow/109633762.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 01:13:11 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      19,
      43,
      11,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TOI SPORTS DESK"
      }
    ],
    "author": "TOI SPORTS DESK",
    "author_detail": {
      "name": "TOI SPORTS DESK"
    }
  },
  {
    "title": "'Divest': US students demand universities to cut Israel ties",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "'Divest': US students demand universities to cut Israel ties"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/world/us/divest-us-students-demand-universities-to-cut-israel-ties/articleshow/109637004.cms"
      },
      {
        "type": "image/jpeg",
        "length": "175202",
        "href": "https://static.toiimg.com/photo/msid-109637030,imgsize-175202.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/world/us/divest-us-students-demand-universities-to-cut-israel-ties/articleshow/109637004.cms",
    "id": "https://timesofindia.indiatimes.com/world/us/divest-us-students-demand-universities-to-cut-israel-ties/articleshow/109637004.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:50:33 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      23,
      20,
      33,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "Agencies"
      }
    ],
    "author": "Agencies",
    "author_detail": {
      "name": "Agencies"
    }
  },
  {
    "title": "At SCO meeting, India calls for 'zero-tolerance' policy on terror",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "At SCO meeting, India calls for 'zero-tolerance' policy on terror"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/at-sco-meeting-india-calls-for-zero-tolerance-policy-on-terror/articleshow/109636266.cms"
      },
      {
        "type": "image/jpeg",
        "length": "47076",
        "href": "https://static.toiimg.com/photo/msid-109636668,imgsize-47076.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/at-sco-meeting-india-calls-for-zero-tolerance-policy-on-terror/articleshow/109636266.cms",
    "id": "https://timesofindia.indiatimes.com/india/at-sco-meeting-india-calls-for-zero-tolerance-policy-on-terror/articleshow/109636266.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:26:57 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      56,
      57,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Kerala CPM neta cosying up to BJP? 'Friendly chat' triggers buzz",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Kerala CPM neta cosying up to BJP? 'Friendly chat' triggers buzz"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/thiruvananthapuram/kerala-cpm-neta-cosying-up-to-bjp-friendly-chat-triggers-buzz/articleshow/109634386.cms"
      },
      {
        "type": "image/jpeg",
        "length": "23724",
        "href": "https://static.toiimg.com/photo/msid-109634395,imgsize-23724.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/thiruvananthapuram/kerala-cpm-neta-cosying-up-to-bjp-friendly-chat-triggers-buzz/articleshow/109634386.cms",
    "id": "https://timesofindia.indiatimes.com/city/thiruvananthapuram/kerala-cpm-neta-cosying-up-to-bjp-friendly-chat-triggers-buzz/articleshow/109634386.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 03:38:21 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      8,
      21,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "EVM verdict tight slap in oppn's face, it must now apologise: PM Modi",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "EVM verdict tight slap in oppn's face, it must now apologise: PM Modi"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/evm-verdict-tight-slap-in-oppns-face-it-must-now-apologise-pm-modi/articleshow/109633952.cms"
      },
      {
        "type": "image/jpeg",
        "length": "63234",
        "href": "https://static.toiimg.com/photo/msid-109633994,imgsize-63234.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/evm-verdict-tight-slap-in-oppns-face-it-must-now-apologise-pm-modi/articleshow/109633952.cms",
    "id": "https://timesofindia.indiatimes.com/india/evm-verdict-tight-slap-in-oppns-face-it-must-now-apologise-pm-modi/articleshow/109633952.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 01:56:53 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      20,
      26,
      53,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Indian man sentenced to jail in UK for attempted murder",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Indian man sentenced to jail in UK for attempted murder"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/world/uk/indian-man-sentenced-to-16-years-in-jail-in-uk-for-attempted-murder-of-ex-girlfriend/articleshow/109633054.cms"
      },
      {
        "type": "image/jpeg",
        "length": "34438",
        "href": "https://static.toiimg.com/photo/msid-109633075,imgsize-34438.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/world/uk/indian-man-sentenced-to-16-years-in-jail-in-uk-for-attempted-murder-of-ex-girlfriend/articleshow/109633054.cms",
    "id": "https://timesofindia.indiatimes.com/world/uk/indian-man-sentenced-to-16-years-in-jail-in-uk-for-attempted-murder-of-ex-girlfriend/articleshow/109633054.cms",
    "guidislink": false,
    "published": "Fri, 26 Apr 2024 23:39:31 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      18,
      9,
      31,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "NAOMI CANTON"
      }
    ],
    "author": "NAOMI CANTON",
    "author_detail": {
      "name": "NAOMI CANTON"
    }
  },
  {
    "title": "India’s first: Japanese Sharp looks to set up display fab unit",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "India’s first: Japanese Sharp looks to set up display fab unit"
    },
    "summary": "India is headed to bag investments for the country’s first display fab semiconductor unit – used for making televisions and other digital screens – with Japanese Sharp approaching the Central govt for setting up a 1,000-acres facility that will be used to cater not just to the domestic demand but also exports.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "India is headed to bag investments for the country’s first display fab semiconductor unit – used for making televisions and other digital screens – with Japanese Sharp approaching the Central govt for setting up a 1,000-acres facility that will be used to cater not just to the domestic demand but also exports."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/business/india-business/indias-first-japanese-sharp-looks-to-set-up-display-fab-unit/articleshow/109635674.cms"
      },
      {
        "type": "image/jpeg",
        "length": "444876",
        "href": "https://static.toiimg.com/photo/msid-109635692,imgsize-444876.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/business/india-business/indias-first-japanese-sharp-looks-to-set-up-display-fab-unit/articleshow/109635674.cms",
    "id": "https://timesofindia.indiatimes.com/business/india-business/indias-first-japanese-sharp-looks-to-set-up-display-fab-unit/articleshow/109635674.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 04:16:11 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      22,
      46,
      11,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "PANKAJ DOVAL"
      }
    ],
    "author": "PANKAJ DOVAL",
    "author_detail": {
      "name": "PANKAJ DOVAL"
    }
  },
  {
    "title": "Water levels in 42 reservoirs in south India drop",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Water levels in 42 reservoirs in south India drop"
    },
    "summary": "Southern India faces water shortage with 42 key reservoirs at 17% capacity. Kerala has better storage. Data by Central Water Commission highlights the situation and the impact of monsoon and post-monsoon phase on water levels. According to the data, as of April 25, the water reservoirs had 8.8 billion cubic meters (BCM) against a total storage capacity of 53.3 BCM.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Southern India faces water shortage with 42 key reservoirs at 17% capacity. Kerala has better storage. Data by Central Water Commission highlights the situation and the impact of monsoon and post-monsoon phase on water levels. According to the data, as of April 25, the water reservoirs had 8.8 billion cubic meters (BCM) against a total storage capacity of 53.3 BCM."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/water-levels-in-42-reservoirs-in-south-india-drop/articleshow/109634068.cms"
      },
      {
        "type": "image/jpeg",
        "length": "159348",
        "href": "https://static.toiimg.com/photo/msid-109634082,imgsize-159348.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/water-levels-in-42-reservoirs-in-south-india-drop/articleshow/109634068.cms",
    "id": "https://timesofindia.indiatimes.com/india/water-levels-in-42-reservoirs-in-south-india-drop/articleshow/109634068.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 02:33:58 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      21,
      3,
      58,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "VISHWA MOHAN"
      }
    ],
    "author": "VISHWA MOHAN",
    "author_detail": {
      "name": "VISHWA MOHAN"
    }
  },
  {
    "title": "4 students write ‘Jai Shri Ram’ in exam, get 50%",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "4 students write ‘Jai Shri Ram’ in exam, get 50%"
    },
    "summary": "Four DPharma students at UP’s VBSP University scored 50% by writing “Jai Shri Ram” and cricketers' names in an exam. An RTI disclosure prompted a probe, leading to a re-examination where they received zero marks. Approval for action against two teachers is pending.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Four DPharma students at UP’s VBSP University scored 50% by writing “Jai Shri Ram” and cricketers' names in an exam. An RTI disclosure prompted a probe, leading to a re-examination where they received zero marks. Approval for action against two teachers is pending."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/varanasi/4-students-write-jai-shri-ram-in-exam-get-50/articleshow/109633857.cms"
      },
      {
        "type": "image/jpeg",
        "length": "1400138",
        "href": "https://static.toiimg.com/photo/msid-109633859,imgsize-1400138.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/varanasi/4-students-write-jai-shri-ram-in-exam-get-50/articleshow/109633857.cms",
    "id": "https://timesofindia.indiatimes.com/city/varanasi/4-students-write-jai-shri-ram-in-exam-get-50/articleshow/109633857.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 01:40:11 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      20,
      10,
      11,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "PM Modi doubles down on charge of appeasement after Manmohan video",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "PM Modi doubles down on charge of appeasement after Manmohan video"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/pm-modi-doubles-down-on-charge-of-appeasement-after-manmohan-video/articleshow/109634074.cms"
      },
      {
        "type": "image/jpeg",
        "length": "693246",
        "href": "https://static.toiimg.com/photo/msid-109634078,imgsize-693246.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/pm-modi-doubles-down-on-charge-of-appeasement-after-manmohan-video/articleshow/109634074.cms",
    "id": "https://timesofindia.indiatimes.com/india/pm-modi-doubles-down-on-charge-of-appeasement-after-manmohan-video/articleshow/109634074.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 02:37:20 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      21,
      7,
      20,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TNN"
      }
    ],
    "author": "TNN",
    "author_detail": {
      "name": "TNN"
    }
  },
  {
    "title": "Banks playing both judge, executioner: Bombay HC on LOCs",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Banks playing both judge, executioner: Bombay HC on LOCs"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/city/mumbai/banks-playing-both-judge-executioner-bombay-hc-on-locs/articleshow/109633898.cms"
      },
      {
        "type": "image/jpeg",
        "length": "49282",
        "href": "https://static.toiimg.com/photo/msid-109633902,imgsize-49282.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/city/mumbai/banks-playing-both-judge-executioner-bombay-hc-on-locs/articleshow/109633898.cms",
    "id": "https://timesofindia.indiatimes.com/city/mumbai/banks-playing-both-judge-executioner-bombay-hc-on-locs/articleshow/109633898.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 01:47:56 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      20,
      17,
      56,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "SWATI DESHPANDE"
      }
    ],
    "author": "SWATI DESHPANDE",
    "author_detail": {
      "name": "SWATI DESHPANDE"
    }
  },
  {
    "title": "Ashwin's SOS message after unreal carnage at Eden",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Ashwin's SOS message after unreal carnage at Eden"
    },
    "summary": "In the sweltering heat of a dry Kolkata evening, Punjab Kings batters unleashed a barrage of sixes, hitting 24 in total, as they surpassed the target of 262 runs in just 18.4 overs. Bairstow led the charge with an unbeaten 108 off 48 balls, supported by Shashank Singh's 68 not out off 28 balls and Prabhsimran Singh's rapid 54 off just 20 balls.",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "In the sweltering heat of a dry Kolkata evening, Punjab Kings batters unleashed a barrage of sixes, hitting 24 in total, as they surpassed the target of 262 runs in just 18.4 overs. Bairstow led the charge with an unbeaten 108 off 48 balls, supported by Shashank Singh's 68 not out off 28 balls and Prabhsimran Singh's rapid 54 off just 20 balls."
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/save-the-bowlers-r-ashwin-posts-sos-message-after-unreal-carnage-at-eden-gardens/articleshow/109633266.cms"
      },
      {
        "type": "image/jpeg",
        "length": "36098",
        "href": "https://static.toiimg.com/photo/msid-109633292,imgsize-36098.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/save-the-bowlers-r-ashwin-posts-sos-message-after-unreal-carnage-at-eden-gardens/articleshow/109633266.cms",
    "id": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/save-the-bowlers-r-ashwin-posts-sos-message-after-unreal-carnage-at-eden-gardens/articleshow/109633266.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 00:04:07 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      18,
      34,
      7,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "TOI SPORTS DESK"
      }
    ],
    "author": "TOI SPORTS DESK",
    "author_detail": {
      "name": "TOI SPORTS DESK"
    }
  },
  {
    "title": "Modi brackets TMC with Cong for its silence on tax controversy",
    "title_detail": {
      "type": "text/plain",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": "Modi brackets TMC with Cong for its silence on tax controversy"
    },
    "summary": "",
    "summary_detail": {
      "type": "text/html",
      "language": "en-IN",
      "base": "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
      "value": ""
    },
    "links": [
      {
        "rel": "alternate",
        "type": "text/html",
        "href": "https://timesofindia.indiatimes.com/india/modi-brackets-tmc-with-congress-for-its-silence-on-inheritance-tax-controversy/articleshow/109634320.cms"
      },
      {
        "type": "image/jpeg",
        "length": "64060",
        "href": "https://static.toiimg.com/photo/msid-109634324,imgsize-64060.cms",
        "rel": "enclosure"
      }
    ],
    "link": "https://timesofindia.indiatimes.com/india/modi-brackets-tmc-with-congress-for-its-silence-on-inheritance-tax-controversy/articleshow/109634320.cms",
    "id": "https://timesofindia.indiatimes.com/india/modi-brackets-tmc-with-congress-for-its-silence-on-inheritance-tax-controversy/articleshow/109634320.cms",
    "guidislink": false,
    "published": "Sat, 27 Apr 2024 03:08:07 +0530",
    "published_parsed": [
      2024,
      4,
      26,
      21,
      38,
      7,
      4,
      117,
      0
    ],
    "authors": [
      {
        "name": "ROHIT KHANNA, SUBHRO MAITRA, JAI NARAIN PANDEY"
      }
    ],
    "author": "ROHIT KHANNA, SUBHRO MAITRA, JAI NARAIN PANDEY",
    "author_detail": {
      "name": "ROHIT KHANNA, SUBHRO MAITRA, JAI NARAIN PANDEY"
    }
  }
]


  /** return format
   *
   * model News {
  id          String    @id
  title       String
  summary     String
  link        String
  published   DateTime
  author      String
  imageURL    String
  titleDetailType     String
  titleDetailLanguage String
  titleDetailBase     String
  titleDetailValue    String
  summaryDetailType   String
  summaryDetailLanguage String
  summaryDetailBase   String
  summaryDetailValue  String
  linkRel       String
  linkType      String
  linkHref      String
  linkLength    String
  authorName    String
}

   */
export const newses: QueryResolvers['newses'] = () => {
  // parse and return  NEWS in above format
  return NEWS.map((news) => {
    return {
      id: news.id,
      title: news.title,
      summary: news.summary,
      link: news.link,
      published: news.published,
      author: news.author,
      imageURL: news.links[1].href,
      titleDetailType: news.title_detail.type,
      titleDetailLanguage: news.title_detail.language,
      titleDetailBase: news.title_detail.base,
      titleDetailValue: news.title_detail.value,
      summaryDetailType: news.summary_detail.type,
      summaryDetailLanguage: news.summary_detail.language,
      summaryDetailBase: news.summary_detail.base,
      summaryDetailValue: news.summary_detail.value,
      linkRel: news.links[0].rel,
      linkType: news.links[0].type,
      linkHref: news.links[0].href,
      linkLength: news.links[0].length,
      authorName: news.author,
    }
  }
  )
}
