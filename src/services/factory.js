'use strict';

angular.module('robertkalfas')
  .factory('Items', ['$q', '$http', 'Config', 'CacheFactory', '$filter', function ($q, $http, Config, CacheFactory, $filter) {
    // expose Items API object
    return {
      /**
       * main data object
       */
      data: [
        {
          "highlighted": true,
          "uri": "/videos/222313552",
          "name": "Robert Kalfas Showreel 2017",
          "description": "Here´s a compilation of work done during this past years, both at Studio Pigeon and as personal projects.\n\nMusic: Hoodboi, Lido - Palm Reader (feat. Lido) \n\n0:00-0:09 - My role: everything\n0:09-0:12 - My role: animation \n0:12-0:17 - My role: everything\n0:17-0:19 - My role: animation \n0:19-0:22 - My role: everything\n0:22-0:27 - My role: animation\n0:27-0:29 - My role: everything\n0:29-0:33 - My role: animation",
          "link": "https://vimeo.com/222313552",
          "duration": 36,
          "width": 1920,
          "language": "en",
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/222313552?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Robert Kalfas Showreel 2017\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2017-06-20T07:16:00+00:00",
          "modified_time": "2017-10-02T22:28:41+00:00",
          "release_time": "2017-06-20T07:16:00+00:00",
          "content_rating": [
            "safe"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "comments": "anybody"
          },
          "pictures": [
            {
              "type": "thumbnail",
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/640814768_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/640814768_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/640814768_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/640814768_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/640814768_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/640814768_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/animation",
              "name": "animation",
              "tag": "animation",
              "canonical": "animation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/animation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1097354
                  }
                }
              },
              "resource_key": "106cf1ce3df4a2a95b21452d1bc6b027a58959b1"
            },
            {
              "uri": "/tags/2danimation",
              "name": "2d animation",
              "tag": "2d animation",
              "canonical": "2danimation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/2danimation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 38847
                  }
                }
              },
              "resource_key": "72fda5942d08fbe4db4c9abba5f33c0e24434048"
            },
            {
              "uri": "/tags/motiongraphic",
              "name": "motion graphic",
              "tag": "motion graphic",
              "canonical": "motiongraphic",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/motiongraphic/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 40210
                  }
                }
              },
              "resource_key": "db76a9a981998efd596791ca2ec2a8420e156c78"
            },
            {
              "uri": "/tags/motiondesign",
              "name": "motion design",
              "tag": "motion design",
              "canonical": "motiondesign",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/motiondesign/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 74255
                  }
                }
              },
              "resource_key": "c9e617e577a71751d517de6614728af1d8fc6834"
            },
            {
              "uri": "/tags/characteranimation",
              "name": "character animation",
              "tag": "character animation",
              "canonical": "characteranimation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/characteranimation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 21640
                  }
                }
              },
              "resource_key": "bcc7dc2d7987857818ff73ecb07f50edf6301360"
            },
            {
              "uri": "/tags/reel",
              "name": "reel",
              "tag": "reel",
              "canonical": "reel",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/reel/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 176014
                  }
                }
              },
              "resource_key": "a5546ef88a57dd1c596436778979cafd68143422"
            }
          ],
          "stats": {
            "plays": 142,
            "likes": 11,
            "comments": 1
          },
          "metadata": {
            "connections": {
              "credits": "/videos/222313552/credits",
              "likes": "/videos/222313552/likes",
              "texttracks": {
                "uri": "/videos/222313552/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": {
                "uri": "/users/robertkalfas/videos?offset=2",
                "options": [
                  "GET"
                ]
              }
            },
            "interactions": {
              "watchlater": {
                "uri": "/users/1249483/watchlater/222313552",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "like": {
                "uri": "/users/1249483/likes/222313552",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": true,
                "added_time": "2017-06-20T15:50:54+00:00"
              },
              "report": {
                "uri": "/videos/222313552/report",
                "options": [
                  "POST"
                ],
                "reason": [
                  "pornographic",
                  "harassment",
                  "advertisement",
                  "ripoff",
                  "incorrect rating",
                  "spam"
                ]
              }
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist and Toon Boom Harmony animator.\nCurrently working in studio Pigeon\nAvailable for freelance\nrobertkalfas@gmail.com",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300"
              }
            ],
            "websites": [
              {
                "name": "My Website",
                "link": "www.robertkalfas.tv",
                "description": null
              },
              {
                "name": "Behance profile",
                "link": "www.behance.net/robertkalfas",
                "description": null
              },
              {
                "name": "twitter account",
                "link": "twitter.com/RobertKalfas",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "appearances": {
                  "uri": "/users/11154082/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
                "moderated_channels": {
                  "uri": "/users/11154082/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": "/users/11154082/portfolios",
                "videos": "/users/11154082/videos",
                "shared": "/users/11154082/shared/videos",
                "pictures": "/users/11154082/pictures",
                "violations": null,
                "watchlater": null
              },
              "interactions": {
                "follow": {
                  "added": true,
                  "added_time": "2013-07-01T10:08:30+00:00",
                  "uri": "/users/1249483/following/11154082"
                },
                "block": {
                  "uri": "/me/block/11154082",
                  "options": [
                    "PUT",
                    "DELETE"
                  ],
                  "added": false,
                  "added_time": null
                },
                "report": {
                  "uri": "/users/11154082/report",
                  "options": [
                    "POST"
                  ],
                  "reason": [
                    "inappropriate avatar",
                    "spammy",
                    "bad videos",
                    "creepy",
                    "not playing nice",
                    "impersonation"
                  ]
                }
              }
            },
            "resource_key": "e6f39a32146da2a9dd481e6568f0b0f0f43a7087",
            "preferences": {
              "videos": {
                "privacy": null
              }
            },
            "stats": {}
          },
          "app": null,
          "status": "available",
          "resource_key": "8a9a02e9d8ab337df67dcf36f4289e3a0acee05e",
          "embed_presets": null
        },
        {
          "uri": "/videos/192036109",
          "name": "A Guide to offside rule",
          "description": "Explainer Video that will help you understand the offside rule. Made just for fun.\n\nDirecting, design and animation: Robert Kalfas\nAudio: Kamil Struzik",
          "link": "https://vimeo.com/192036109",
          "duration": 118,
          "width": 1920,
          "language": "en-GB",
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/192036109?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"A Guide to offside rule\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2016-11-17T21:34:34+00:00",
          "modified_time": "2017-09-23T21:24:18+00:00",
          "release_time": "2016-11-17T21:34:34+00:00",
          "content_rating": [
            "safe"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": false,
            "add": true,
            "comments": "anybody"
          },
          "pictures": [
            {
              "type": "thumbnail",
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/603767654_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/603767654_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/603767654_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/603767654_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/603767654_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/603767654_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/animation",
              "name": "animation",
              "tag": "animation",
              "canonical": "animation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/animation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1097354
                  }
                }
              },
              "resource_key": "01fd60e0d9d422fd351ca06971fdff556bf9d7d9"
            },
            {
              "uri": "/tags/soccer",
              "name": "soccer",
              "tag": "soccer",
              "canonical": "soccer",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/soccer/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 49134
                  }
                }
              },
              "resource_key": "f72f1890d374cbe4d11df4ded3a18cfe8c9aeb4a"
            },
            {
              "uri": "/tags/football",
              "name": "football",
              "tag": "football",
              "canonical": "football",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/football/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 91478
                  }
                }
              },
              "resource_key": "432c17e0054c4d257d0800ba56299846eb88df75"
            },
            {
              "uri": "/tags/aftereffects",
              "name": "after effects",
              "tag": "after effects",
              "canonical": "aftereffects",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/aftereffects/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 305154
                  }
                }
              },
              "resource_key": "7c3aeb599de376a5a41a0e5fea3b2bad00932c82"
            },
            {
              "uri": "/tags/sport",
              "name": "sport",
              "tag": "sport",
              "canonical": "sport",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/sport/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 90495
                  }
                }
              },
              "resource_key": "01ab257632b0587e08e9b8508e27ec4d56733894"
            },
            {
              "uri": "/tags/toonboom",
              "name": "toon boom",
              "tag": "toon boom",
              "canonical": "toonboom",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/toonboom/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 4267
                  }
                }
              },
              "resource_key": "96225ec4821421bcc9d8321075c7f2fe470c173d"
            },
            {
              "uri": "/tags/harmony",
              "name": "harmony",
              "tag": "harmony",
              "canonical": "harmony",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/harmony/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 5468
                  }
                }
              },
              "resource_key": "7275dc1e29db0aebbb37000af5eb8e6aa2d6fb7c"
            },
            {
              "uri": "/tags/offside",
              "name": "offside",
              "tag": "offside",
              "canonical": "offside",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/offside/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 272
                  }
                }
              },
              "resource_key": "e9a6be68a0df5458f3ff9cc9b0f38e03d18da406"
            },
            {
              "uri": "/tags/offsiderule",
              "name": "offside rule",
              "tag": "offside rule",
              "canonical": "offsiderule",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/offsiderule/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 4
                  }
                }
              },
              "resource_key": "4b15caf9595245521755855523937efb4904b9dc"
            }
          ],
          "stats": {
            "plays": 388,
            "likes": 13,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/192036109/credits",
              "likes": "/videos/192036109/likes",
              "texttracks": {
                "uri": "/videos/192036109/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": {
                "uri": "/users/robertkalfas/videos?offset=3",
                "options": [
                  "GET"
                ]
              }
            },
            "interactions": {
              "watchlater": {
                "uri": "/users/1249483/watchlater/192036109",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "like": {
                "uri": "/users/1249483/likes/192036109",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "report": {
                "uri": "/videos/192036109/report",
                "options": [
                  "POST"
                ],
                "reason": [
                  "pornographic",
                  "harassment",
                  "advertisement",
                  "ripoff",
                  "incorrect rating",
                  "spam"
                ]
              }
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist and Toon Boom Harmony animator.\nCurrently working in studio Pigeon\nAvailable for freelance\nrobertkalfas@gmail.com",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300"
              }
            ],
            "websites": [
              {
                "name": "My Website",
                "link": "www.robertkalfas.tv",
                "description": null
              },
              {
                "name": "Behance profile",
                "link": "www.behance.net/robertkalfas",
                "description": null
              },
              {
                "name": "twitter account",
                "link": "twitter.com/RobertKalfas",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "appearances": {
                  "uri": "/users/11154082/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
                "moderated_channels": {
                  "uri": "/users/11154082/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": "/users/11154082/portfolios",
                "videos": "/users/11154082/videos",
                "shared": "/users/11154082/shared/videos",
                "pictures": "/users/11154082/pictures",
                "violations": null,
                "watchlater": null
              },
              "interactions": {
                "follow": {
                  "added": true,
                  "added_time": "2013-07-01T10:08:30+00:00",
                  "uri": "/users/1249483/following/11154082"
                },
                "block": {
                  "uri": "/me/block/11154082",
                  "options": [
                    "PUT",
                    "DELETE"
                  ],
                  "added": false,
                  "added_time": null
                },
                "report": {
                  "uri": "/users/11154082/report",
                  "options": [
                    "POST"
                  ],
                  "reason": [
                    "inappropriate avatar",
                    "spammy",
                    "bad videos",
                    "creepy",
                    "not playing nice",
                    "impersonation"
                  ]
                }
              }
            },
            "resource_key": "e6f39a32146da2a9dd481e6568f0b0f0f43a7087",
            "preferences": {
              "videos": {
                "privacy": null
              }
            },
            "stats": {}
          },
          "app": null,
          "status": "available",
          "resource_key": "1b6f7a60fc3c9ab63f6151c5d559748bcde0adfe",
          "embed_presets": null
        },
        {
          "uri": "/videos/236735076",
          "name": "RoboQuire explainer animation",
          "description": "Explainer animation for RoboQuire platform.\n\nCredits:\n\nCreative Direction: Robert Kalfas\nGraphic Design: Joanna Dudoń\nAnimation: Robert Kalfas\nMusic & Sound: Tomek Mróz",
          "link": "https://vimeo.com/236735076",
          "duration": 72,
          "width": 1920,
          "language": "en-US",
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/236735076?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"RoboQuire explainer animation\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2017-10-04T11:40:58+00:00",
          "modified_time": "2017-10-04T11:56:50+00:00",
          "release_time": "2017-10-04T11:40:58+00:00",
          "content_rating": [
            "safe"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "comments": "anybody"
          },
          "pictures": [
            {
              "type": "thumbnail",
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/658927216_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/658927216_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/658927216_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/658927216_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/658927216_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/658927216_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/explainer",
              "name": "explainer",
              "tag": "explainer",
              "canonical": "explainer",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/explainer/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 11425
                  }
                }
              },
              "resource_key": "f19f37e2a188b28ed53cd71beaf5bb7eb0c45b9f"
            },
            {
              "uri": "/tags/aftereffects",
              "name": "after effects",
              "tag": "after effects",
              "canonical": "aftereffects",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/aftereffects/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 305154
                  }
                }
              },
              "resource_key": "af41eedad4d4233a596564ec2e13820a9a7da3a2"
            },
            {
              "uri": "/tags/explainervideo",
              "name": "explainer video",
              "tag": "explainer video",
              "canonical": "explainervideo",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/explainervideo/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 14124
                  }
                }
              },
              "resource_key": "61e4881e9d6618a03d6f5b4d292420b1d257bff2"
            },
            {
              "uri": "/tags/animation",
              "name": "animation",
              "tag": "animation",
              "canonical": "animation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/animation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1097354
                  }
                }
              },
              "resource_key": "e6d2b9f2157f0d3c720367ded80d1d82eb4a787c"
            },
            {
              "uri": "/tags/toonboom",
              "name": "toon boom",
              "tag": "toon boom",
              "canonical": "toonboom",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/toonboom/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 4267
                  }
                }
              },
              "resource_key": "ab97ee4343ace413f751eec67df4eaf161c27629"
            },
            {
              "uri": "/tags/computers",
              "name": "computers",
              "tag": "computers",
              "canonical": "computers",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/computers/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 6639
                  }
                }
              },
              "resource_key": "5d285a84ed88696cefa0247cfda04e3f493c077a"
            }
          ],
          "stats": {
            "plays": 0,
            "likes": 0,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/236735076/credits",
              "likes": "/videos/236735076/likes",
              "texttracks": {
                "uri": "/videos/236735076/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": {
                "uri": "/users/robertkalfas/videos?offset=1",
                "options": [
                  "GET"
                ]
              }
            },
            "interactions": {
              "watchlater": {
                "uri": "/users/1249483/watchlater/236735076",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "like": {
                "uri": "/users/1249483/likes/236735076",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "report": {
                "uri": "/videos/236735076/report",
                "options": [
                  "POST"
                ],
                "reason": [
                  "pornographic",
                  "harassment",
                  "advertisement",
                  "ripoff",
                  "incorrect rating",
                  "spam"
                ]
              }
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist and Toon Boom Harmony animator.\nCurrently working in studio Pigeon\nAvailable for freelance\nrobertkalfas@gmail.com",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300"
              }
            ],
            "websites": [
              {
                "name": "My Website",
                "link": "www.robertkalfas.tv",
                "description": null
              },
              {
                "name": "Behance profile",
                "link": "www.behance.net/robertkalfas",
                "description": null
              },
              {
                "name": "twitter account",
                "link": "twitter.com/RobertKalfas",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "appearances": {
                  "uri": "/users/11154082/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
                "moderated_channels": {
                  "uri": "/users/11154082/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": "/users/11154082/portfolios",
                "videos": "/users/11154082/videos",
                "shared": "/users/11154082/shared/videos",
                "pictures": "/users/11154082/pictures",
                "violations": null,
                "watchlater": null
              },
              "interactions": {
                "follow": {
                  "added": true,
                  "added_time": "2013-07-01T10:08:30+00:00",
                  "uri": "/users/1249483/following/11154082"
                },
                "block": {
                  "uri": "/me/block/11154082",
                  "options": [
                    "PUT",
                    "DELETE"
                  ],
                  "added": false,
                  "added_time": null
                },
                "report": {
                  "uri": "/users/11154082/report",
                  "options": [
                    "POST"
                  ],
                  "reason": [
                    "inappropriate avatar",
                    "spammy",
                    "bad videos",
                    "creepy",
                    "not playing nice",
                    "impersonation"
                  ]
                }
              }
            },
            "resource_key": "e6f39a32146da2a9dd481e6568f0b0f0f43a7087",
            "preferences": {
              "videos": {
                "privacy": null
              }
            },
            "stats": {}
          },
          "app": null,
          "status": "available",
          "resource_key": "ea513188c5277df095f1d8f9eb168cd69076e2e4",
          "embed_presets": null
        },
        {
          "uri": "/videos/173797160",
          "name": "Character Animation Reel",
          "description": "A show reel of my animation work.\nAll animation was made using Toon Boom Harmony  \nMusic: Globalny Odlot - 40 stopni w cieniu [Niewidzialna Nerka] https://www.facebook.com/niewidzialnanerka/\n\nSee more of my work, robertkalfas.tv",
          "link": "https://vimeo.com/173797160",
          "duration": 52,
          "width": 1920,
          "language": "en",
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/173797160?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Character Animation Reel\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2016-07-07T17:43:47+00:00",
          "modified_time": "2017-09-23T00:23:41+00:00",
          "release_time": "2016-07-07T17:43:47+00:00",
          "content_rating": [
            "safe"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "comments": "anybody"
          },
          "pictures": [
            {
              "type": "thumbnail",
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/645822658_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/645822658_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/645822658_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/645822658_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/645822658_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/645822658_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/animation",
              "name": "animation",
              "tag": "animation",
              "canonical": "animation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/animation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1097354
                  }
                }
              },
              "resource_key": "700d52c7f29e68d9f51cd15aa1356c7a25632d66"
            },
            {
              "uri": "/tags/toonboom",
              "name": "toon boom",
              "tag": "toon boom",
              "canonical": "toonboom",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/toonboom/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 4267
                  }
                }
              },
              "resource_key": "a86735abbc120b237ece6302e61f33ed230c9a5a"
            },
            {
              "uri": "/tags/cutout",
              "name": "cut out",
              "tag": "cut out",
              "canonical": "cutout",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/cutout/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 5766
                  }
                }
              },
              "resource_key": "f9e5987707cad1c641622b00fd26b74ba1d6f8c3"
            },
            {
              "uri": "/tags/cartoon",
              "name": "cartoon",
              "tag": "cartoon",
              "canonical": "cartoon",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/cartoon/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 54668
                  }
                }
              },
              "resource_key": "aa5e8b72c8b225ba9af41cc58c91de694ec4f440"
            },
            {
              "uri": "/tags/harmony",
              "name": "harmony",
              "tag": "harmony",
              "canonical": "harmony",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/harmony/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 5468
                  }
                }
              },
              "resource_key": "b404df8cf7a6115c4c7ab7a47afc75ba80151a92"
            }
          ],
          "stats": {
            "plays": 282,
            "likes": 1,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/173797160/credits",
              "likes": "/videos/173797160/likes",
              "texttracks": {
                "uri": "/videos/173797160/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": {
                "uri": "/users/robertkalfas/videos?offset=4",
                "options": [
                  "GET"
                ]
              }
            },
            "interactions": {
              "watchlater": {
                "uri": "/users/1249483/watchlater/173797160",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "like": {
                "uri": "/users/1249483/likes/173797160",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "report": {
                "uri": "/videos/173797160/report",
                "options": [
                  "POST"
                ],
                "reason": [
                  "pornographic",
                  "harassment",
                  "advertisement",
                  "ripoff",
                  "incorrect rating",
                  "spam"
                ]
              }
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist and Toon Boom Harmony animator.\nCurrently working in studio Pigeon\nAvailable for freelance\nrobertkalfas@gmail.com",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300"
              }
            ],
            "websites": [
              {
                "name": "My Website",
                "link": "www.robertkalfas.tv",
                "description": null
              },
              {
                "name": "Behance profile",
                "link": "www.behance.net/robertkalfas",
                "description": null
              },
              {
                "name": "twitter account",
                "link": "twitter.com/RobertKalfas",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "appearances": {
                  "uri": "/users/11154082/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
                "moderated_channels": {
                  "uri": "/users/11154082/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": "/users/11154082/portfolios",
                "videos": "/users/11154082/videos",
                "shared": "/users/11154082/shared/videos",
                "pictures": "/users/11154082/pictures",
                "violations": null,
                "watchlater": null
              },
              "interactions": {
                "follow": {
                  "added": true,
                  "added_time": "2013-07-01T10:08:30+00:00",
                  "uri": "/users/1249483/following/11154082"
                },
                "block": {
                  "uri": "/me/block/11154082",
                  "options": [
                    "PUT",
                    "DELETE"
                  ],
                  "added": false,
                  "added_time": null
                },
                "report": {
                  "uri": "/users/11154082/report",
                  "options": [
                    "POST"
                  ],
                  "reason": [
                    "inappropriate avatar",
                    "spammy",
                    "bad videos",
                    "creepy",
                    "not playing nice",
                    "impersonation"
                  ]
                }
              }
            },
            "resource_key": "e6f39a32146da2a9dd481e6568f0b0f0f43a7087",
            "preferences": {
              "videos": {
                "privacy": null
              }
            },
            "stats": {}
          },
          "app": null,
          "status": "available",
          "resource_key": "05d98bd78414969f89e8d89faa0a44f56a7623ad",
          "embed_presets": null
        },
        {
          "uri": "/videos/151123621",
          "name": "Foodo World - Official Trailer [iOS/Apple TV]",
          "description": "Foodo World (iPad/iPhone/Apple TV) is a text-free app for toddlers that continues the story of the purple monster from Foodo Kitchen. This time, he embarks on a journey through the forest, the skies and the sea, trying to deliver a cake to a friend, or doing whatever monsters do. \nThe app is an open-ended realm of exploration, where the hero encounters random acts of kindness and joy through approximately 100 delightful animations. Rather than a game, we've created a world of play - the kids are free to roam and tell their own story about compassion and laughter. \n\nMy Job: Character animation, video editing \n\nApp made by Tutu Lab! http://www.tutulab.com\nFollow us on Twitter: @tutulab\n\nAvailable on the App Store NOW! https://itunes.apple.com/app/foodo-wo...\n\nMusic: \"Marty Gots a Plan\" by Kevin MacLeod (incompetech.com) CC BY-SA 3.0",
          "link": "https://vimeo.com/151123621",
          "duration": 27,
          "width": 1920,
          "language": "en",
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/151123621?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Foodo World - Official Trailer [iOS/Apple TV]\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2016-01-08T10:21:55+00:00",
          "modified_time": "2017-10-04T02:32:06+00:00",
          "release_time": "2016-01-08T10:21:55+00:00",
          "content_rating": [
            "safe"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "comments": "anybody"
          },
          "pictures": [
            {
              "type": "thumbnail",
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/550784681_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/550784681_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/550784681_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/550784681_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/550784681_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/550784681_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/aftereffect",
              "name": "After Effect",
              "tag": "After Effect",
              "canonical": "aftereffect",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/aftereffect/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 19409
                  }
                }
              },
              "resource_key": "e10ce50e85a404f0c76302fba92664004b7797d5"
            },
            {
              "uri": "/tags/ipadapp",
              "name": "Ipad App",
              "tag": "Ipad App",
              "canonical": "ipadapp",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/ipadapp/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1128
                  }
                }
              },
              "resource_key": "4385db567df5463535c2032596413711442f8a44"
            },
            {
              "uri": "/tags/mobileapp",
              "name": "mobile app",
              "tag": "mobile app",
              "canonical": "mobileapp",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/mobileapp/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 4494
                  }
                }
              },
              "resource_key": "21460c44ee52b8b78668628d79f84a7ff26828c1"
            },
            {
              "uri": "/tags/trailer",
              "name": "trailer",
              "tag": "trailer",
              "canonical": "trailer",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/trailer/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 243516
                  }
                }
              },
              "resource_key": "267fef8d6bcdccc337c0f169755aec51fd2587e8"
            },
            {
              "uri": "/tags/2danimation",
              "name": "2d animation",
              "tag": "2d animation",
              "canonical": "2danimation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/2danimation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 38847
                  }
                }
              },
              "resource_key": "bb94c51404a5cc8e8b7fbcf41ccb5e3d258ee343"
            },
            {
              "uri": "/tags/indiegames",
              "name": "indie games",
              "tag": "indie games",
              "canonical": "indiegames",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/indiegames/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 862
                  }
                }
              },
              "resource_key": "7b5d30a4a8c19b02bb21d5169a57e10c141e93ff"
            }
          ],
          "stats": {
            "plays": 172,
            "likes": 4,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/151123621/credits",
              "likes": "/videos/151123621/likes",
              "texttracks": {
                "uri": "/videos/151123621/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": {
                "uri": "/users/robertkalfas/videos?offset=5",
                "options": [
                  "GET"
                ]
              }
            },
            "interactions": {
              "watchlater": {
                "uri": "/users/1249483/watchlater/151123621",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "like": {
                "uri": "/users/1249483/likes/151123621",
                "options": [
                  "GET",
                  "PUT",
                  "DELETE"
                ],
                "added": false,
                "added_time": null
              },
              "report": {
                "uri": "/videos/151123621/report",
                "options": [
                  "POST"
                ],
                "reason": [
                  "pornographic",
                  "harassment",
                  "advertisement",
                  "ripoff",
                  "incorrect rating",
                  "spam"
                ]
              }
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist and Toon Boom Harmony animator.\nCurrently working in studio Pigeon\nAvailable for freelance\nrobertkalfas@gmail.com",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300"
              }
            ],
            "websites": [
              {
                "name": "My Website",
                "link": "www.robertkalfas.tv",
                "description": null
              },
              {
                "name": "Behance profile",
                "link": "www.behance.net/robertkalfas",
                "description": null
              },
              {
                "name": "twitter account",
                "link": "twitter.com/RobertKalfas",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "appearances": {
                  "uri": "/users/11154082/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
                "moderated_channels": {
                  "uri": "/users/11154082/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": "/users/11154082/portfolios",
                "videos": "/users/11154082/videos",
                "shared": "/users/11154082/shared/videos",
                "pictures": "/users/11154082/pictures",
                "violations": null,
                "watchlater": null
              },
              "interactions": {
                "follow": {
                  "added": true,
                  "added_time": "2013-07-01T10:08:30+00:00",
                  "uri": "/users/1249483/following/11154082"
                },
                "block": {
                  "uri": "/me/block/11154082",
                  "options": [
                    "PUT",
                    "DELETE"
                  ],
                  "added": false,
                  "added_time": null
                },
                "report": {
                  "uri": "/users/11154082/report",
                  "options": [
                    "POST"
                  ],
                  "reason": [
                    "inappropriate avatar",
                    "spammy",
                    "bad videos",
                    "creepy",
                    "not playing nice",
                    "impersonation"
                  ]
                }
              }
            },
            "resource_key": "e6f39a32146da2a9dd481e6568f0b0f0f43a7087",
            "preferences": {
              "videos": {
                "privacy": null
              }
            },
            "stats": {}
          },
          "app": null,
          "status": "available",
          "resource_key": "09f98e2858c22936d04e6448134226384d6a9c2f",
          "embed_presets": null
        },
        {
          "uri": "/videos/254507840",
          "name": "Leszek Możdżer & Holland Baroque - \"Hansa Surf Hotel\"",
          "description": "Leszek Możdżer & Holland Baroque - Hansa Surf Hotel from \"Earth Particles\" - ZPAV certified Gold Album.\n\nCredits:\nGraphic Design, fx animation: Joanna Dudoń\nAnimation: Robert Kalfas",
          "link": "https://vimeo.com/254507840",
          "duration": 220,
          "width": 1920,
          "language": "en-US",
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/254507840?badge=0&autopause=0&player_id=0&app_id=45246\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Leszek Możdżer &amp; Holland Baroque - &quot;Hansa Surf Hotel&quot;\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2018-02-06T15:11:14+00:00",
          "modified_time": "2018-03-21T19:56:21+00:00",
          "release_time": "2018-02-06T15:11:14+00:00",
          "content_rating": [
            "safe"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": false,
            "add": true,
            "comments": "anybody"
          },
          "pictures": [
            {
              "type": "thumbnail",
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/681674369_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/681674369_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/681674369_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/681674369_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/681674369_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/681674369_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/animation",
              "name": "animation",
              "tag": "animation",
              "canonical": "animation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/animation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1153928
                  }
                }
              },
              "resource_key": "588e5bc724b0be5d59b95303c8fdcd612b7979d6"
            },
            {
              "uri": "/tags/2danimation",
              "name": "2d animation",
              "tag": "2d animation",
              "canonical": "2danimation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/2danimation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 43659
                  }
                }
              },
              "resource_key": "0bff066d6d20f2f897d09194e5062f610f3ec3d3"
            },
            {
              "uri": "/tags/space",
              "name": "space",
              "tag": "space",
              "canonical": "space",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/space/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 56999
                  }
                }
              },
              "resource_key": "cff9e1e6192325a9f7df07148499995a09746050"
            },
            {
              "uri": "/tags/jazz",
              "name": "jazz",
              "tag": "jazz",
              "canonical": "jazz",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/jazz/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 80538
                  }
                }
              },
              "resource_key": "b44a706e530f1b8404fe05c672502255d468eb02"
            },
            {
              "uri": "/tags/classicmusic",
              "name": "classic music",
              "tag": "classic music",
              "canonical": "classicmusic",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/classicmusic/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 658
                  }
                }
              },
              "resource_key": "4309b1f80ccc479b1f0fc0c118cc04e898f61d28"
            },
            {
              "uri": "/tags/minimal",
              "name": "minimal",
              "tag": "minimal",
              "canonical": "minimal",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/minimal/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 19246
                  }
                }
              },
              "resource_key": "0c54ee0a4b3c20b67de0392f30e62d0fd3592a5f"
            },
            {
              "uri": "/tags/barocco",
              "name": "barocco",
              "tag": "barocco",
              "canonical": "barocco",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/barocco/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 251
                  }
                }
              },
              "resource_key": "47d9322c76728d3d99cdfd98941a709b9958632e"
            }
          ],
          "stats": {
            "plays": null,
            "likes": 6,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/254507840/credits",
              "likes": "/videos/254507840/likes",
              "texttracks": {
                "uri": "/videos/254507840/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": null
            },
            "interactions": {
              "report": {
                "uri": "/videos/254507840/report",
                "options": [
                  "POST"
                ],
                "reason": [
                  "pornographic",
                  "harassment",
                  "advertisement",
                  "ripoff",
                  "incorrect rating",
                  "spam"
                ]
              }
            }
          },
          "user": {
            "uri": "/users/80080328",
            "name": "Gamba Studio",
            "link": "https://vimeo.com/studiogamba",
            "location": "Cracow, Poland",
            "bio": "We are specialized in create compelling and entertaining work by combining the design with a story-driven message.",
            "created_time": "2018-02-01T10:15:43+00:00",
            "account": "basic",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/23577351_30x30"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/23577351_75x75"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/23577351_100x100"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/23577351_300x300"
              }
            ],
            "websites": [
              {
                "name": "Website",
                "link": "http://www.gamba.studio",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/80080328/activities",
                "albums": "/users/80080328/albums",
                "appearances": {
                  "uri": "/users/80080328/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": "/users/80080328/channels",
                "feed": "/users/80080328/feed",
                "followers": "/users/80080328/followers",
                "following": "/users/80080328/following",
                "groups": "/users/80080328/groups",
                "likes": "/users/80080328/likes",
                "moderated_channels": {
                  "uri": "/users/80080328/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": "/users/80080328/portfolios",
                "videos": "/users/80080328/videos",
                "shared": "/users/80080328/shared/videos",
                "pictures": "/users/80080328/pictures",
                "violations": null,
                "watchlater": null
              }
            },
            "resource_key": "e7932ef7d4b74913255a75a30bde9c0d3e4918b9",
            "preferences": {
              "videos": {
                "privacy": null
              }
            },
            "stats": {}
          },
          "app": null,
          "status": "available",
          "resource_key": "b0f264fc4969789a6258ba54ec799a39f08681ea",
          "upload": null,
          "transcode": null,
          "embed_presets": null
        },
        {
          "uri": "/videos/234675863",
          "name": "Ikona / Idea Fair Play -  RedWood Studio explainer video",
          "description": "Projekt zrealizowany na zlecenie i wg scenariusza przygotowanego przez dom produkcyjny Ikona (http://ikona.co) dla klienta Idea Fair Play. \n\nTeam:\nProject manager - Michał Bąk\nMotion Design - Robert Kalfas\nCopywriting - Joanna Żero ( Ikona )\nIllustration - Jagoda Klaczyńska\nSounds - Robert Ostiak\nSpecial thanks - Ikona",
          "link": "https://vimeo.com/234675863",
          "duration": 88,
          "width": 1920,
          "language": null,
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/234675863?badge=0&autopause=0&player_id=0&app_id=45246\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Ikona / Idea Fair Play -  RedWood Studio explainer video\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2017-09-20T13:51:56+00:00",
          "modified_time": "2018-06-13T09:03:12+00:00",
          "release_time": "2017-09-20T13:51:56+00:00",
          "content_rating": [
            "unrated"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "comments": "anybody"
          },
          "pictures": [
            {
              "type": "thumbnail",
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/656326094_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/656326094_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/656326094_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/656326094_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/656326094_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/656326094_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/aftereffects",
              "name": "after effects",
              "tag": "after effects",
              "canonical": "aftereffects",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/aftereffects/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 326902
                  }
                }
              },
              "resource_key": "aed43fc1c6a723a28b68663270dcb0c2b8fc9cfc"
            },
            {
              "uri": "/tags/animation",
              "name": "animation",
              "tag": "animation",
              "canonical": "animation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/animation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1181163
                  }
                }
              },
              "resource_key": "830e14f3b33ceca3e3032c834dbb44abfe36e615"
            },
            {
              "uri": "/tags/rig",
              "name": "rig",
              "tag": "rig",
              "canonical": "rig",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/rig/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 11444
                  }
                }
              },
              "resource_key": "af03cf8b6915ed93b799a96a937bff9f2c0972c3"
            },
            {
              "uri": "/tags/texture",
              "name": "texture",
              "tag": "texture",
              "canonical": "texture",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/texture/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 10647
                  }
                }
              },
              "resource_key": "ec3cab07546c7e904b170414c63bdae472dfbf3c"
            },
            {
              "uri": "/tags/hippie",
              "name": "hippie",
              "tag": "hippie",
              "canonical": "hippie",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/hippie/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 2363
                  }
                }
              },
              "resource_key": "d345b14b25f3a8a90534d703fdbf69fb6c1ef403"
            },
            {
              "uri": "/tags/hippiebus",
              "name": "hippie bus",
              "tag": "hippie bus",
              "canonical": "hippiebus",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/hippiebus/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 22
                  }
                }
              },
              "resource_key": "c249b6f767f06c59b545cbc27452fe8e046fa6b8"
            },
            {
              "uri": "/tags/explainer",
              "name": "explainer",
              "tag": "explainer",
              "canonical": "explainer",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/explainer/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 13753
                  }
                }
              },
              "resource_key": "6371b37f738a642c5b4c93570b6b865b7c681fe3"
            },
            {
              "uri": "/tags/explainervideo",
              "name": "explainer video",
              "tag": "explainer video",
              "canonical": "explainervideo",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/explainervideo/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 16609
                  }
                }
              },
              "resource_key": "246ab790aa846609bb7dba847885096ecb7ee20e"
            },
            {
              "uri": "/tags/redwood",
              "name": "redwood",
              "tag": "redwood",
              "canonical": "redwood",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/redwood/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 779
                  }
                }
              },
              "resource_key": "d3b264e0653d5719dda11ccf50547c5c753b9085"
            },
            {
              "uri": "/tags/redwoodstudio",
              "name": "redwood studio",
              "tag": "redwood studio",
              "canonical": "redwoodstudio",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/redwoodstudio/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 2
                  }
                }
              },
              "resource_key": "42c6f307f2a9ff4ef83d0d3645b0e5707f24bde5"
            }
          ],
          "stats": {
            "plays": null,
            "likes": 67,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/234675863/credits",
              "likes": "/videos/234675863/likes",
              "texttracks": {
                "uri": "/videos/234675863/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": null
            },
            "interactions": {
              "report": {
                "uri": "/videos/234675863/report",
                "options": [
                  "POST"
                ],
                "reason": [
                  "pornographic",
                  "harassment",
                  "advertisement",
                  "ripoff",
                  "incorrect rating",
                  "spam"
                ]
              }
            }
          },
          "user": {
            "uri": "/users/9820462",
            "name": "RedWood Studio",
            "link": "https://vimeo.com/studioredwood",
            "location": "Krakow, Poland",
            "bio": "We have passion, we have experience. We combine these strengths in the right proportions and this is how is created video explainer – animation, which demonstrates, explains and sells. Video explainer is for us form of expression and communication – we combine content and image in one excellent product. And this final product guarantees your business sales success, along with excellent brand and expertise.\n\nAmong us work team of the best graphic designers and animators, which guarantees the best projects. They are the inventive minds who create for your brand and product the most ideal video explainer. Marketing loves tools like that, and sells understand them well.",
            "created_time": "2011-12-30T10:18:26+00:00",
            "account": "basic",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9888789_30x30"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9888789_75x75"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9888789_100x100"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9888789_300x300"
              }
            ],
            "websites": [
              {
                "name": "Our Website",
                "link": "http://redwoodstudio.pl/en/",
                "description": null
              },
              {
                "name": "Facebook",
                "link": "https://www.facebook.com/studiooredwood/",
                "description": null
              },
              {
                "name": "Dribbble",
                "link": "https://dribbble.com/studioredwood",
                "description": null
              },
              {
                "name": "Instagram",
                "link": "https://www.instagram.com/redwood.studio/",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/9820462/activities",
                "albums": "/users/9820462/albums",
                "appearances": {
                  "uri": "/users/9820462/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 1
                },
                "channels": "/users/9820462/channels",
                "feed": "/users/9820462/feed",
                "followers": "/users/9820462/followers",
                "following": "/users/9820462/following",
                "groups": "/users/9820462/groups",
                "likes": "/users/9820462/likes",
                "moderated_channels": {
                  "uri": "/users/9820462/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": "/users/9820462/portfolios",
                "videos": "/users/9820462/videos",
                "shared": "/users/9820462/shared/videos",
                "pictures": "/users/9820462/pictures",
                "violations": null,
                "watchlater": null
              }
            },
            "resource_key": "654ed300b65fae00364abe9df64dc6a8ec3d880c",
            "preferences": {
              "videos": {
                "privacy": null
              }
            },
            "stats": {}
          },
          "app": null,
          "status": "available",
          "resource_key": "0b2322da850e23ab570c2dfd686c47f146e87407",
          "upload": null,
          "transcode": null,
          "embed_presets": null
        }
      ],
      config: {},
      missing: [],

      /**
       * fetch data from static file or cache object
       *
       * @param field - field for a cache purposes
       * @returns {*} - returns promise
       */
      fetch: function (field) {
        return true;

        var items = this;
        var defer = $q.defer();

        items.sync(Config.sourceUrl, 'videos').success(function (data) {
          items.data = data;
          defer.resolve();

          /*var accounts = items.config.accounts;
          var videos = []; // vimeo accounts we want to display

          for (var j = 0, lenAccounts = accounts.length; j < lenAccounts; j++) {
            videos.push(items.sync(Config.apiUrl + 'users/' + accounts[j].name + '/videos?per_page=50', field));
          }

          items.syncAll(videos, function () {
              defer.resolve();
          });*/
        });

        // return defer.promise;
      },

      sync: function (url, field) {
        return $http.get(url, {
          cache: CacheFactory.get(field)
        });
      },

      syncAll: function (data, success) {
        var movies = [];
        var items = this;

        $q.all(data).then(function (result) {
          angular.forEach(result, function(response, key) {
            var data = response.data;

            if (!items.config.accounts[key].pages) {
              items.config.accounts[key].pages = Math.ceil(data.total / data.per_page);
            }

            movies = movies.concat(data.data);
          });

          items.data = items.config.videos.length > 0 ? items.filter(movies) : movies;

          if (items.data.length < Config.perPage) {
            // todo: create API calls for missing elements (when they are on the next page or sth)
          }

          success();
        });
      },

      /**
       * filter data from unwanted ids
       *
       * @param data
       * @returns {Array}
       */
      filter: function (data) {
        var tmp = [];

        for (var i = 0, len = data.length; i < len; i++) {
          var el = data[i];

          for (var j = 0, lenIds = this.config.videos.length; j < lenIds; j++) {
            var id = $filter('idMaker')(el.uri);
            if (parseInt(this.config.videos[j]) === id) {
              tmp.push(el);
            } else {
              this.missing.push(id);
            }
          }
        }

        return tmp;
      },

      /**
       * get the main data object
       *
       * @returns {*}
       */
      query: function () {
        return this.data;
      }
    };
  }])
  .run(function($http, Config) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + Config.apiToken;
  });
