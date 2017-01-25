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
          "modified_time": "2017-01-22T00:06:59+00:00",
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
          "pictures": {
            "uri": "/videos/192036109/pictures/603767654",
            "active": true,
            "type": "custom",
            "sizes": [
              {
                "width": 100,
                "height": 75,
                "link": "https://i.vimeocdn.com/video/603767654_100x75.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F603767654_100x75.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 200,
                "height": 150,
                "link": "https://i.vimeocdn.com/video/603767654_200x150.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F603767654_200x150.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 295,
                "height": 166,
                "link": "https://i.vimeocdn.com/video/603767654_295x166.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F603767654_295x166.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 640,
                "height": 360,
                "link": "https://i.vimeocdn.com/video/603767654_640x360.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F603767654_640x360.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 960,
                "height": 540,
                "link": "https://i.vimeocdn.com/video/603767654_960x540.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F603767654_960x540.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 1280,
                "height": 720,
                "link": "https://i.vimeocdn.com/video/603767654_1280x720.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F603767654_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              }
            ],
            "resource_key": "242d905e16c15ce1dcc825e2a0088d6ea5008b34"
          },
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
                    "total": 894274
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
                    "total": 45494
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
                    "total": 85134
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
                    "total": 283674
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
                    "total": 81462
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
                    "total": 3740
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
                    "total": 4889
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
                    "total": 252
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
            "plays": 279
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/192036109/comments",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "credits": {
                "uri": "/videos/192036109/credits",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "likes": {
                "uri": "/videos/192036109/likes",
                "options": [
                  "GET"
                ],
                "total": 11
              },
              "pictures": {
                "uri": "/videos/192036109/pictures",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "texttracks": {
                "uri": "/videos/192036109/texttracks",
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
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/192036109"
              },
              "like": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/likes/192036109"
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
            "pictures": {
              "uri": "/users/11154082/pictures/9248478",
              "active": true,
              "type": "custom",
              "sizes": [
                {
                  "width": 30,
                  "height": 30,
                  "link": "https://i.vimeocdn.com/portrait/9248478_30x30?r=pad"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/9248478_75x75?r=pad"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/9248478_100x100?r=pad"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/9248478_300x300?r=pad"
                }
              ],
              "resource_key": "d281515d34cd5eafd5375b257f7b8ccb21590c9a"
            },
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
                "activities": {
                  "uri": "/users/11154082/activities",
                  "options": [
                    "GET"
                  ]
                },
                "albums": {
                  "uri": "/users/11154082/albums",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "appearances": {
                  "uri": "/users/11154082/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": {
                  "uri": "/users/11154082/channels",
                  "options": [
                    "GET"
                  ],
                  "total": 12
                },
                "feed": {
                  "uri": "/users/11154082/feed",
                  "options": [
                    "GET"
                  ]
                },
                "followers": {
                  "uri": "/users/11154082/followers",
                  "options": [
                    "GET"
                  ],
                  "total": 38
                },
                "following": {
                  "uri": "/users/11154082/following",
                  "options": [
                    "GET"
                  ],
                  "total": 149
                },
                "groups": {
                  "uri": "/users/11154082/groups",
                  "options": [
                    "GET"
                  ],
                  "total": 8
                },
                "likes": {
                  "uri": "/users/11154082/likes",
                  "options": [
                    "GET"
                  ],
                  "total": 1400
                },
                "moderated_channels": {
                  "uri": "/users/11154082/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": {
                  "uri": "/users/11154082/portfolios",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "videos": {
                  "uri": "/users/11154082/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 5
                },
                "shared": {
                  "uri": "/users/11154082/shared/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 1
                },
                "pictures": {
                  "uri": "/users/11154082/pictures",
                  "options": [
                    "GET",
                    "POST"
                  ],
                  "total": 1
                }
              },
              "interactions": {
                "follow": {
                  "added": true,
                  "added_time": "2013-07-01T10:08:30+00:00",
                  "uri": "/users/1249483/following/11154082"
                }
              }
            },
            "resource_key": "e6f39a32146da2a9dd481e6568f0b0f0f43a7087",
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "resource_key": "1b6f7a60fc3c9ab63f6151c5d559748bcde0adfe",
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
          "modified_time": "2017-01-24T11:10:36+00:00",
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
          "pictures": {
            "uri": "/videos/173797160/pictures/580316963",
            "active": true,
            "type": "custom",
            "sizes": [
              {
                "width": 100,
                "height": 75,
                "link": "https://i.vimeocdn.com/video/580316963_100x75.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F580316963_100x75.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 200,
                "height": 150,
                "link": "https://i.vimeocdn.com/video/580316963_200x150.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F580316963_200x150.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 295,
                "height": 166,
                "link": "https://i.vimeocdn.com/video/580316963_295x166.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F580316963_295x166.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 640,
                "height": 360,
                "link": "https://i.vimeocdn.com/video/580316963_640x360.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F580316963_640x360.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 960,
                "height": 540,
                "link": "https://i.vimeocdn.com/video/580316963_960x540.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F580316963_960x540.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              },
              {
                "width": 1280,
                "height": 720,
                "link": "https://i.vimeocdn.com/video/580316963_1280x720.jpg?r=pad",
                "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F580316963_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
              }
            ],
            "resource_key": "0a8124922a9d3a40e1772ea2e1d934a2d6380bed"
          },
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
                    "total": 894274
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
                    "total": 3740
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
                    "total": 5312
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
                    "total": 48903
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
                    "total": 4889
                  }
                }
              },
              "resource_key": "b404df8cf7a6115c4c7ab7a47afc75ba80151a92"
            }
          ],
          "stats": {
            "plays": 252
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/173797160/comments",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "credits": {
                "uri": "/videos/173797160/credits",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "likes": {
                "uri": "/videos/173797160/likes",
                "options": [
                  "GET"
                ],
                "total": 1
              },
              "pictures": {
                "uri": "/videos/173797160/pictures",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "texttracks": {
                "uri": "/videos/173797160/texttracks",
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
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/173797160"
              },
              "like": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/likes/173797160"
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
            "pictures": {
              "uri": "/users/11154082/pictures/9248478",
              "active": true,
              "type": "custom",
              "sizes": [
                {
                  "width": 30,
                  "height": 30,
                  "link": "https://i.vimeocdn.com/portrait/9248478_30x30?r=pad"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/9248478_75x75?r=pad"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/9248478_100x100?r=pad"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/9248478_300x300?r=pad"
                }
              ],
              "resource_key": "d281515d34cd5eafd5375b257f7b8ccb21590c9a"
            },
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
                "activities": {
                  "uri": "/users/11154082/activities",
                  "options": [
                    "GET"
                  ]
                },
                "albums": {
                  "uri": "/users/11154082/albums",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "appearances": {
                  "uri": "/users/11154082/appearances",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": {
                  "uri": "/users/11154082/channels",
                  "options": [
                    "GET"
                  ],
                  "total": 12
                },
                "feed": {
                  "uri": "/users/11154082/feed",
                  "options": [
                    "GET"
                  ]
                },
                "followers": {
                  "uri": "/users/11154082/followers",
                  "options": [
                    "GET"
                  ],
                  "total": 38
                },
                "following": {
                  "uri": "/users/11154082/following",
                  "options": [
                    "GET"
                  ],
                  "total": 149
                },
                "groups": {
                  "uri": "/users/11154082/groups",
                  "options": [
                    "GET"
                  ],
                  "total": 8
                },
                "likes": {
                  "uri": "/users/11154082/likes",
                  "options": [
                    "GET"
                  ],
                  "total": 1400
                },
                "moderated_channels": {
                  "uri": "/users/11154082/channels?filter=moderated",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "portfolios": {
                  "uri": "/users/11154082/portfolios",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "videos": {
                  "uri": "/users/11154082/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 5
                },
                "shared": {
                  "uri": "/users/11154082/shared/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 1
                },
                "pictures": {
                  "uri": "/users/11154082/pictures",
                  "options": [
                    "GET",
                    "POST"
                  ],
                  "total": 1
                }
              },
              "interactions": {
                "follow": {
                  "added": true,
                  "added_time": "2013-07-01T10:08:30+00:00",
                  "uri": "/users/1249483/following/11154082"
                }
              }
            },
            "resource_key": "e6f39a32146da2a9dd481e6568f0b0f0f43a7087",
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "resource_key": "05d98bd78414969f89e8d89faa0a44f56a7623ad",
          "embed_presets": null
        },
        {
          "uri": "/videos/125490662",
          "name": "Robert Kalfas REEL 2015",
          "description": "This is my latest showreel with work I've done at Studio Pigeon as well as various freelance projects.\n\nThis was a very busy but exciting year! Big thanks to all my friends at Studio Pigeon!\n\nMusic: Antiloops-Yep Greemix \nhttps://soundcloud.com/greem/antiloops-yep-greemix",
          "link": "https://vimeo.com/125490662",
          "duration": 86,
          "width": 1920,
          "language": "en",
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/125490662?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Robert Kalfas REEL 2015\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2015-04-20T18:21:23+00:00",
          "modified_time": "2016-03-12T19:09:29+00:00",
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
          "pictures": {
            "uri": "/videos/125490662/pictures/515624850",
            "active": true,
            "type": "custom",
            "sizes": [
              {
                "width": 100,
                "height": 75,
                "link": "https://i.vimeocdn.com/video/515624850_100x75.jpg?r=pad"
              },
              {
                "width": 200,
                "height": 150,
                "link": "https://i.vimeocdn.com/video/515624850_200x150.jpg?r=pad"
              },
              {
                "width": 295,
                "height": 166,
                "link": "https://i.vimeocdn.com/video/515624850_295x166.jpg?r=pad"
              },
              {
                "width": 640,
                "height": 360,
                "link": "https://i.vimeocdn.com/video/515624850_640x360.jpg?r=pad"
              },
              {
                "width": 960,
                "height": 540,
                "link": "https://i.vimeocdn.com/video/515624850_960x540.jpg?r=pad"
              },
              {
                "width": 1920,
                "height": 1080,
                "link": "https://i.vimeocdn.com/video/515624850_1920x1080.jpg?r=pad"
              }
            ]
          },
          "tags": [
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
                    "total": 16387
                  }
                }
              }
            },
            {
              "uri": "/tags/showreel",
              "name": "showreel",
              "tag": "showreel",
              "canonical": "showreel",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/showreel/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 125484
                  }
                }
              }
            },
            {
              "uri": "/tags/motiongraphicshowreel",
              "name": "motion graphic showreel",
              "tag": "motion graphic showreel",
              "canonical": "motiongraphicshowreel",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/motiongraphicshowreel/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 28
                  }
                }
              }
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
                    "total": 49494
                  }
                }
              }
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
                    "total": 30238
                  }
                }
              }
            },
            {
              "uri": "/tags/cut-outanimation",
              "name": "cut-out animation",
              "tag": "cut-out animation",
              "canonical": "cut-outanimation",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/cut-outanimation/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 318
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": 541
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/125490662/comments",
                "options": [
                  "GET"
                ],
                "total": 5
              },
              "credits": {
                "uri": "/videos/125490662/credits",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "likes": {
                "uri": "/videos/125490662/likes",
                "options": [
                  "GET"
                ],
                "total": 21
              },
              "pictures": {
                "uri": "/videos/125490662/pictures",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "texttracks": {
                "uri": "/videos/125490662/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": null
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist currently working at Pigeon Studio \nrobertkalfas@gmail.com\n\nwww.robertkalfas.tv\n\nBehance profile:\nhttp://www.behance.net/robertkalfas",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": {
              "uri": "/users/11154082/pictures/9248478",
              "active": true,
              "type": "custom",
              "sizes": [
                {
                  "width": 30,
                  "height": 30,
                  "link": "https://i.vimeocdn.com/portrait/9248478_30x30.jpg?r=pad"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/9248478_75x75.jpg?r=pad"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/9248478_100x100.jpg?r=pad"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/9248478_300x300.jpg?r=pad"
                }
              ]
            },
            "websites": [],
            "metadata": {
              "connections": {
                "activities": {
                  "uri": "/users/11154082/activities",
                  "options": [
                    "GET"
                  ]
                },
                "albums": {
                  "uri": "/users/11154082/albums",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": {
                  "uri": "/users/11154082/channels",
                  "options": [
                    "GET"
                  ],
                  "total": 9
                },
                "feed": {
                  "uri": "/users/11154082/feed",
                  "options": [
                    "GET"
                  ]
                },
                "followers": {
                  "uri": "/users/11154082/followers",
                  "options": [
                    "GET"
                  ],
                  "total": 30
                },
                "following": {
                  "uri": "/users/11154082/following",
                  "options": [
                    "GET"
                  ],
                  "total": 122
                },
                "groups": {
                  "uri": "/users/11154082/groups",
                  "options": [
                    "GET"
                  ],
                  "total": 8
                },
                "likes": {
                  "uri": "/users/11154082/likes",
                  "options": [
                    "GET"
                  ],
                  "total": 1243
                },
                "portfolios": {
                  "uri": "/users/11154082/portfolios",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "videos": {
                  "uri": "/users/11154082/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 3
                },
                "watchlater": {
                  "uri": "/users/11154082/watchlater",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "shared": {
                  "uri": "/users/11154082/shared/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 1
                },
                "pictures": {
                  "uri": "/users/11154082/pictures",
                  "options": [
                    "GET",
                    "POST"
                  ],
                  "total": 1
                }
              }
            },
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "resource_key": "6bf9de429bbcbd1fef8da8c817ce254291ef0fd9",
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
          "modified_time": "2016-03-17T16:09:53+00:00",
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
          "pictures": {
            "uri": "/videos/151123621/pictures/550784681",
            "active": true,
            "type": "custom",
            "sizes": [
              {
                "width": 100,
                "height": 75,
                "link": "https://i.vimeocdn.com/video/550784681_100x75.jpg?r=pad"
              },
              {
                "width": 200,
                "height": 150,
                "link": "https://i.vimeocdn.com/video/550784681_200x150.jpg?r=pad"
              },
              {
                "width": 295,
                "height": 166,
                "link": "https://i.vimeocdn.com/video/550784681_295x166.jpg?r=pad"
              },
              {
                "width": 640,
                "height": 360,
                "link": "https://i.vimeocdn.com/video/550784681_640x360.jpg?r=pad"
              },
              {
                "width": 960,
                "height": 540,
                "link": "https://i.vimeocdn.com/video/550784681_960x540.jpg?r=pad"
              },
              {
                "width": 1280,
                "height": 720,
                "link": "https://i.vimeocdn.com/video/550784681_1280x720.jpg?r=pad"
              }
            ]
          },
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
                    "total": 15910
                  }
                }
              }
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
                    "total": 1089
                  }
                }
              }
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
                    "total": 3211
                  }
                }
              }
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
                    "total": 199365
                  }
                }
              }
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
                    "total": 26325
                  }
                }
              }
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
                    "total": 676
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": 79
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/151123621/comments",
                "options": [
                  "GET"
                ],
                "total": 0
              },
              "credits": {
                "uri": "/videos/151123621/credits",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "likes": {
                "uri": "/videos/151123621/likes",
                "options": [
                  "GET"
                ],
                "total": 3
              },
              "pictures": {
                "uri": "/videos/151123621/pictures",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "texttracks": {
                "uri": "/videos/151123621/texttracks",
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
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist currently working at Pigeon Studio \nrobertkalfas@gmail.com\n\nwww.robertkalfas.tv\n\nBehance profile:\nhttp://www.behance.net/robertkalfas",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": {
              "uri": "/users/11154082/pictures/9248478",
              "active": true,
              "type": "custom",
              "sizes": [
                {
                  "width": 30,
                  "height": 30,
                  "link": "https://i.vimeocdn.com/portrait/9248478_30x30.jpg?r=pad"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/9248478_75x75.jpg?r=pad"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/9248478_100x100.jpg?r=pad"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/9248478_300x300.jpg?r=pad"
                }
              ]
            },
            "websites": [],
            "metadata": {
              "connections": {
                "activities": {
                  "uri": "/users/11154082/activities",
                  "options": [
                    "GET"
                  ]
                },
                "albums": {
                  "uri": "/users/11154082/albums",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": {
                  "uri": "/users/11154082/channels",
                  "options": [
                    "GET"
                  ],
                  "total": 9
                },
                "feed": {
                  "uri": "/users/11154082/feed",
                  "options": [
                    "GET"
                  ]
                },
                "followers": {
                  "uri": "/users/11154082/followers",
                  "options": [
                    "GET"
                  ],
                  "total": 30
                },
                "following": {
                  "uri": "/users/11154082/following",
                  "options": [
                    "GET"
                  ],
                  "total": 122
                },
                "groups": {
                  "uri": "/users/11154082/groups",
                  "options": [
                    "GET"
                  ],
                  "total": 8
                },
                "likes": {
                  "uri": "/users/11154082/likes",
                  "options": [
                    "GET"
                  ],
                  "total": 1243
                },
                "portfolios": {
                  "uri": "/users/11154082/portfolios",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "videos": {
                  "uri": "/users/11154082/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 3
                },
                "watchlater": {
                  "uri": "/users/11154082/watchlater",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "shared": {
                  "uri": "/users/11154082/shared/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 1
                },
                "pictures": {
                  "uri": "/users/11154082/pictures",
                  "options": [
                    "GET",
                    "POST"
                  ],
                  "total": 1
                }
              }
            },
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "resource_key": "09f98e2858c22936d04e6448134226384d6a9c2f",
          "embed_presets": null
        },
        {
          "uri": "/videos/143538796",
          "name": "PURENA",
          "description": "Purena is a range of 100% juices, nectars and drinks for the Hotel and Catering Industry. Purena products are offered in a concentrate form, so that you can reconstitute them with water directly at your hotel, restaurant or canteen.\n\nClient: Purena\nCreative Direction: Robert Kalfas\nProducer: Maja Turek (pink-media.pl)\nDesign: Ma\u0142gorzata Sadza\nAnimation: Robert Kalfas\nMusic: Audiojungle.com\n\n\n",
          "link": "https://vimeo.com/143538796",
          "duration": 133,
          "width": 1280,
          "language": "en",
          "height": 720,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/143538796?badge=0&autopause=0&player_id=0\" width=\"1280\" height=\"720\" frameborder=\"0\" title=\"PURENA\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2015-10-25T18:12:24+00:00",
          "modified_time": "2016-03-14T11:11:53+00:00",
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
          "pictures": {
            "uri": "/videos/143538796/pictures/541148275",
            "active": true,
            "type": "custom",
            "sizes": [
              {
                "width": 100,
                "height": 75,
                "link": "https://i.vimeocdn.com/video/541148275_100x75.jpg?r=pad"
              },
              {
                "width": 200,
                "height": 150,
                "link": "https://i.vimeocdn.com/video/541148275_200x150.jpg?r=pad"
              },
              {
                "width": 295,
                "height": 166,
                "link": "https://i.vimeocdn.com/video/541148275_295x166.jpg?r=pad"
              },
              {
                "width": 640,
                "height": 360,
                "link": "https://i.vimeocdn.com/video/541148275_640x360.jpg?r=pad"
              },
              {
                "width": 960,
                "height": 540,
                "link": "https://i.vimeocdn.com/video/541148275_960x540.jpg?r=pad"
              },
              {
                "width": 1280,
                "height": 720,
                "link": "https://i.vimeocdn.com/video/541148275_1280x720.jpg?r=pad"
              }
            ]
          },
          "tags": [
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
                    "total": 30238
                  }
                }
              }
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
                    "total": 9098
                  }
                }
              }
            },
            {
              "uri": "/tags/2d",
              "name": "2d",
              "tag": "2d",
              "canonical": "2d",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/2d/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 79033
                  }
                }
              }
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
                    "total": 49494
                  }
                }
              }
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
                    "total": 736810
                  }
                }
              }
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
                    "total": 256124
                  }
                }
              }
            },
            {
              "uri": "/tags/commercial",
              "name": "commercial",
              "tag": "commercial",
              "canonical": "commercial",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/commercial/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 180227
                  }
                }
              }
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
                    "total": 3140
                  }
                }
              }
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
                    "total": 4277
                  }
                }
              }
            },
            {
              "uri": "/tags/toonboomharmony",
              "name": "toon boom harmony",
              "tag": "toon boom harmony",
              "canonical": "toonboomharmony",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/toonboomharmony/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 226
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": 40
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/143538796/comments",
                "options": [
                  "GET"
                ],
                "total": 0
              },
              "credits": {
                "uri": "/videos/143538796/credits",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "likes": {
                "uri": "/videos/143538796/likes",
                "options": [
                  "GET"
                ],
                "total": 0
              },
              "pictures": {
                "uri": "/videos/143538796/pictures",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "texttracks": {
                "uri": "/videos/143538796/texttracks",
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
            }
          },
          "user": {
            "uri": "/users/11154082",
            "name": "Robert Kalfas",
            "link": "https://vimeo.com/robertkalfas",
            "location": "Cracow",
            "bio": "I'm motion graphic artist currently working at Pigeon Studio \nrobertkalfas@gmail.com\n\nwww.robertkalfas.tv\n\nBehance profile:\nhttp://www.behance.net/robertkalfas",
            "created_time": "2012-04-05T17:46:33+00:00",
            "account": "plus",
            "pictures": {
              "uri": "/users/11154082/pictures/9248478",
              "active": true,
              "type": "custom",
              "sizes": [
                {
                  "width": 30,
                  "height": 30,
                  "link": "https://i.vimeocdn.com/portrait/9248478_30x30.jpg?r=pad"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/9248478_75x75.jpg?r=pad"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/9248478_100x100.jpg?r=pad"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/9248478_300x300.jpg?r=pad"
                }
              ]
            },
            "websites": [],
            "metadata": {
              "connections": {
                "activities": {
                  "uri": "/users/11154082/activities",
                  "options": [
                    "GET"
                  ]
                },
                "albums": {
                  "uri": "/users/11154082/albums",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "channels": {
                  "uri": "/users/11154082/channels",
                  "options": [
                    "GET"
                  ],
                  "total": 9
                },
                "feed": {
                  "uri": "/users/11154082/feed",
                  "options": [
                    "GET"
                  ]
                },
                "followers": {
                  "uri": "/users/11154082/followers",
                  "options": [
                    "GET"
                  ],
                  "total": 30
                },
                "following": {
                  "uri": "/users/11154082/following",
                  "options": [
                    "GET"
                  ],
                  "total": 122
                },
                "groups": {
                  "uri": "/users/11154082/groups",
                  "options": [
                    "GET"
                  ],
                  "total": 8
                },
                "likes": {
                  "uri": "/users/11154082/likes",
                  "options": [
                    "GET"
                  ],
                  "total": 1243
                },
                "portfolios": {
                  "uri": "/users/11154082/portfolios",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "videos": {
                  "uri": "/users/11154082/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 3
                },
                "watchlater": {
                  "uri": "/users/11154082/watchlater",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "shared": {
                  "uri": "/users/11154082/shared/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 1
                },
                "pictures": {
                  "uri": "/users/11154082/pictures",
                  "options": [
                    "GET",
                    "POST"
                  ],
                  "total": 1
                }
              }
            },
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "resource_key": "0bf895165edf839d4baee610463e9e45876d05bf",
          "embed_presets": null
        },
        {
          "uri": "/videos/103314222",
          "name": "Studio Pigeon explainer: Farmer Finder",
          "description": "If you are looking for a good alternative to doing your groceries we have a perfect solution. Instead of buying products from powerful multi-international food corporation now you have a reliable sources of healthy food, medicinal products and natural fibres at hand. Visit Farmerfinder.com online and find the nearest seller in your area. Live globally, buy locally!",
          "link": "https://vimeo.com/103314222",
          "duration": 75,
          "width": 1920,
          "language": null,
          "height": 1080,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/103314222?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Studio Pigeon explainer: Farmer Finder\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2014-08-13T08:28:22+00:00",
          "modified_time": "2016-03-18T03:10:41+00:00",
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
          "pictures": {
            "uri": "/videos/103314222/pictures/547005810",
            "active": true,
            "type": "custom",
            "sizes": [
              {
                "width": 100,
                "height": 75,
                "link": "https://i.vimeocdn.com/video/547005810_100x75.jpg?r=pad"
              },
              {
                "width": 200,
                "height": 150,
                "link": "https://i.vimeocdn.com/video/547005810_200x150.jpg?r=pad"
              },
              {
                "width": 295,
                "height": 166,
                "link": "https://i.vimeocdn.com/video/547005810_295x166.jpg?r=pad"
              },
              {
                "width": 640,
                "height": 360,
                "link": "https://i.vimeocdn.com/video/547005810_640x360.jpg?r=pad"
              },
              {
                "width": 960,
                "height": 540,
                "link": "https://i.vimeocdn.com/video/547005810_960x540.jpg?r=pad"
              },
              {
                "width": 1920,
                "height": 1080,
                "link": "https://i.vimeocdn.com/video/547005810_1920x1080.jpg?r=pad"
              }
            ]
          },
          "tags": [
            {
              "uri": "/tags/farmer",
              "name": "farmer",
              "tag": "farmer",
              "canonical": "farmer",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/farmer/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 3133
                  }
                }
              }
            },
            {
              "uri": "/tags/finder",
              "name": "finder",
              "tag": "finder",
              "canonical": "finder",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/finder/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 605
                  }
                }
              }
            },
            {
              "uri": "/tags/organic",
              "name": "organic",
              "tag": "organic",
              "canonical": "organic",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/organic/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 14585
                  }
                }
              }
            },
            {
              "uri": "/tags/shop",
              "name": "shop",
              "tag": "shop",
              "canonical": "shop",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/shop/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 13276
                  }
                }
              }
            },
            {
              "uri": "/tags/service",
              "name": "service",
              "tag": "service",
              "canonical": "service",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/service/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 78982
                  }
                }
              }
            },
            {
              "uri": "/tags/advert",
              "name": "advert",
              "tag": "advert",
              "canonical": "advert",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/advert/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 15946
                  }
                }
              }
            },
            {
              "uri": "/tags/ad",
              "name": "ad",
              "tag": "ad",
              "canonical": "ad",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/ad/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 40289
                  }
                }
              }
            },
            {
              "uri": "/tags/advertisement",
              "name": "advertisement",
              "tag": "advertisement",
              "canonical": "advertisement",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/advertisement/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 17845
                  }
                }
              }
            },
            {
              "uri": "/tags/startup",
              "name": "startup",
              "tag": "startup",
              "canonical": "startup",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/startup/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 16261
                  }
                }
              }
            },
            {
              "uri": "/tags/bio",
              "name": "bio",
              "tag": "bio",
              "canonical": "bio",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/bio/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 5287
                  }
                }
              }
            },
            {
              "uri": "/tags/eco",
              "name": "eco",
              "tag": "eco",
              "canonical": "eco",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/eco/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 6936
                  }
                }
              }
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
                    "total": 6845
                  }
                }
              }
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
                    "total": 736814
                  }
                }
              }
            },
            {
              "uri": "/tags/2d",
              "name": "2d",
              "tag": "2d",
              "canonical": "2d",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/2d/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 79033
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": null
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/103314222/comments",
                "options": [
                  "GET"
                ],
                "total": 4
              },
              "credits": {
                "uri": "/videos/103314222/credits",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "likes": {
                "uri": "/videos/103314222/likes",
                "options": [
                  "GET"
                ],
                "total": 43
              },
              "pictures": {
                "uri": "/videos/103314222/pictures",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "texttracks": {
                "uri": "/videos/103314222/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": null
            }
          },
          "user": {
            "uri": "/users/11513063",
            "name": "Studio Pigeon",
            "link": "https://vimeo.com/studiopigeon",
            "location": "Cracow, Main Square",
            "bio": "Even the best idea needs explanation.\nWe know that so well.\nWe also know that you don\u2019t have much time.\nThat\u2019s why you need an explainer video.\nSo give it to us & get things movin\u2019",
            "created_time": "2012-04-30T15:42:25+00:00",
            "account": "plus",
            "pictures": {
              "uri": "/users/11513063/pictures/11809658",
              "active": true,
              "type": "custom",
              "sizes": [
                {
                  "width": 30,
                  "height": 30,
                  "link": "https://i.vimeocdn.com/portrait/11809658_30x30.jpg?r=pad"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/11809658_75x75.jpg?r=pad"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/11809658_100x100.jpg?r=pad"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/11809658_300x300.jpg?r=pad"
                }
              ]
            },
            "websites": [
              {
                "name": "Studio Pigeon",
                "link": "http://www.studiopigeon.com",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": {
                  "uri": "/users/11513063/activities",
                  "options": [
                    "GET"
                  ]
                },
                "albums": {
                  "uri": "/users/11513063/albums",
                  "options": [
                    "GET"
                  ],
                  "total": 12
                },
                "channels": {
                  "uri": "/users/11513063/channels",
                  "options": [
                    "GET"
                  ],
                  "total": 5
                },
                "feed": {
                  "uri": "/users/11513063/feed",
                  "options": [
                    "GET"
                  ]
                },
                "followers": {
                  "uri": "/users/11513063/followers",
                  "options": [
                    "GET"
                  ],
                  "total": 665
                },
                "following": {
                  "uri": "/users/11513063/following",
                  "options": [
                    "GET"
                  ],
                  "total": 318
                },
                "groups": {
                  "uri": "/users/11513063/groups",
                  "options": [
                    "GET"
                  ],
                  "total": 3
                },
                "likes": {
                  "uri": "/users/11513063/likes",
                  "options": [
                    "GET"
                  ],
                  "total": 1360
                },
                "portfolios": {
                  "uri": "/users/11513063/portfolios",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "videos": {
                  "uri": "/users/11513063/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 81
                },
                "watchlater": {
                  "uri": "/users/11513063/watchlater",
                  "options": [
                    "GET"
                  ],
                  "total": 5
                },
                "shared": {
                  "uri": "/users/11513063/shared/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 60
                },
                "pictures": {
                  "uri": "/users/11513063/pictures",
                  "options": [
                    "GET",
                    "POST"
                  ],
                  "total": 1
                }
              }
            },
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "resource_key": "d5e509aec047713bbc95af96fa9dd89c485ceab3",
          "embed_presets": null
        },
        {
          "uri": "/videos/86613124",
          "name": "Studio Pigeon explainer: Bidroom",
          "description": "With Bidroom hotels and customers can get a great deal - with no commission and no middlemen!",
          "link": "https://vimeo.com/86613124",
          "duration": 56,
          "width": 1280,
          "language": null,
          "height": 720,
          "embed": {
            "html": "<iframe src=\"https://player.vimeo.com/video/86613124?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0\" width=\"1280\" height=\"720\" frameborder=\"0\" title=\"Studio Pigeon explainer: Bidroom\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
          },
          "created_time": "2014-02-13T15:10:21+00:00",
          "modified_time": "2016-03-17T15:06:45+00:00",
          "content_rating": [
            "unrated"
          ],
          "license": null,
          "privacy": {
            "view": "anybody",
            "embed": "public",
            "download": false,
            "add": true,
            "comments": "anybody"
          },
          "pictures": {
            "uri": "/videos/86613124/pictures/507959780",
            "active": true,
            "type": "custom",
            "sizes": [
              {
                "width": 100,
                "height": 75,
                "link": "https://i.vimeocdn.com/video/507959780_100x75.jpg?r=pad"
              },
              {
                "width": 200,
                "height": 150,
                "link": "https://i.vimeocdn.com/video/507959780_200x150.jpg?r=pad"
              },
              {
                "width": 295,
                "height": 166,
                "link": "https://i.vimeocdn.com/video/507959780_295x166.jpg?r=pad"
              },
              {
                "width": 640,
                "height": 360,
                "link": "https://i.vimeocdn.com/video/507959780_640x360.jpg?r=pad"
              },
              {
                "width": 960,
                "height": 540,
                "link": "https://i.vimeocdn.com/video/507959780_960x540.jpg?r=pad"
              },
              {
                "width": 1280,
                "height": 720,
                "link": "https://i.vimeocdn.com/video/507959780_1280x720.jpg?r=pad"
              }
            ]
          },
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
                    "total": 736814
                  }
                }
              }
            },
            {
              "uri": "/tags/animacja",
              "name": "animacja",
              "tag": "animacja",
              "canonical": "animacja",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/animacja/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 2056
                  }
                }
              }
            },
            {
              "uri": "/tags/ad",
              "name": "ad",
              "tag": "ad",
              "canonical": "ad",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/ad/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 40289
                  }
                }
              }
            },
            {
              "uri": "/tags/spot",
              "name": "spot",
              "tag": "spot",
              "canonical": "spot",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/spot/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 55035
                  }
                }
              }
            },
            {
              "uri": "/tags/startup",
              "name": "startup",
              "tag": "startup",
              "canonical": "startup",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/startup/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 16261
                  }
                }
              }
            },
            {
              "uri": "/tags/start",
              "name": "start",
              "tag": "start",
              "canonical": "start",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/start/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 3592
                  }
                }
              }
            },
            {
              "uri": "/tags/up",
              "name": "up",
              "tag": "up",
              "canonical": "up",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/up/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 15540
                  }
                }
              }
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
                    "total": 6845
                  }
                }
              }
            },
            {
              "uri": "/tags/video",
              "name": "video",
              "tag": "video",
              "canonical": "video",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/video/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 609583
                  }
                }
              }
            },
            {
              "uri": "/tags/bid",
              "name": "bid",
              "tag": "bid",
              "canonical": "bid",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/bid/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1731
                  }
                }
              }
            },
            {
              "uri": "/tags/bidding",
              "name": "bidding",
              "tag": "bidding",
              "canonical": "bidding",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/bidding/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 201
                  }
                }
              }
            },
            {
              "uri": "/tags/room",
              "name": "room",
              "tag": "room",
              "canonical": "room",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/room/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 7452
                  }
                }
              }
            },
            {
              "uri": "/tags/hotels",
              "name": "hotels",
              "tag": "hotels",
              "canonical": "hotels",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/hotels/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 4266
                  }
                }
              }
            },
            {
              "uri": "/tags/booking",
              "name": "booking",
              "tag": "booking",
              "canonical": "booking",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/booking/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 1677
                  }
                }
              }
            },
            {
              "uri": "/tags/online",
              "name": "online",
              "tag": "online",
              "canonical": "online",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/online/videos",
                    "options": [
                      "GET"
                    ],
                    "total": 69522
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": null
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/86613124/comments",
                "options": [
                  "GET"
                ],
                "total": 0
              },
              "credits": {
                "uri": "/videos/86613124/credits",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "likes": {
                "uri": "/videos/86613124/likes",
                "options": [
                  "GET"
                ],
                "total": 14
              },
              "pictures": {
                "uri": "/videos/86613124/pictures",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 1
              },
              "texttracks": {
                "uri": "/videos/86613124/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              },
              "related": null
            }
          },
          "user": {
            "uri": "/users/11513063",
            "name": "Studio Pigeon",
            "link": "https://vimeo.com/studiopigeon",
            "location": "Cracow, Main Square",
            "bio": "Even the best idea needs explanation.\nWe know that so well.\nWe also know that you don\u2019t have much time.\nThat\u2019s why you need an explainer video.\nSo give it to us & get things movin\u2019",
            "created_time": "2012-04-30T15:42:25+00:00",
            "account": "plus",
            "pictures": {
              "uri": "/users/11513063/pictures/11809658",
              "active": true,
              "type": "custom",
              "sizes": [
                {
                  "width": 30,
                  "height": 30,
                  "link": "https://i.vimeocdn.com/portrait/11809658_30x30.jpg?r=pad"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/11809658_75x75.jpg?r=pad"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/11809658_100x100.jpg?r=pad"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/11809658_300x300.jpg?r=pad"
                }
              ]
            },
            "websites": [
              {
                "name": "Studio Pigeon",
                "link": "http://www.studiopigeon.com",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": {
                  "uri": "/users/11513063/activities",
                  "options": [
                    "GET"
                  ]
                },
                "albums": {
                  "uri": "/users/11513063/albums",
                  "options": [
                    "GET"
                  ],
                  "total": 12
                },
                "channels": {
                  "uri": "/users/11513063/channels",
                  "options": [
                    "GET"
                  ],
                  "total": 5
                },
                "feed": {
                  "uri": "/users/11513063/feed",
                  "options": [
                    "GET"
                  ]
                },
                "followers": {
                  "uri": "/users/11513063/followers",
                  "options": [
                    "GET"
                  ],
                  "total": 665
                },
                "following": {
                  "uri": "/users/11513063/following",
                  "options": [
                    "GET"
                  ],
                  "total": 318
                },
                "groups": {
                  "uri": "/users/11513063/groups",
                  "options": [
                    "GET"
                  ],
                  "total": 3
                },
                "likes": {
                  "uri": "/users/11513063/likes",
                  "options": [
                    "GET"
                  ],
                  "total": 1360
                },
                "portfolios": {
                  "uri": "/users/11513063/portfolios",
                  "options": [
                    "GET"
                  ],
                  "total": 0
                },
                "videos": {
                  "uri": "/users/11513063/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 81
                },
                "watchlater": {
                  "uri": "/users/11513063/watchlater",
                  "options": [
                    "GET"
                  ],
                  "total": 5
                },
                "shared": {
                  "uri": "/users/11513063/shared/videos",
                  "options": [
                    "GET"
                  ],
                  "total": 60
                },
                "pictures": {
                  "uri": "/users/11513063/pictures",
                  "options": [
                    "GET",
                    "POST"
                  ],
                  "total": 1
                }
              }
            },
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "resource_key": "c5072ea1113a7c7299af8e23eed6c9f5a0ed0c8a",
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
