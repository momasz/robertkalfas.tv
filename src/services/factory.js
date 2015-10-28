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
          "uri": "/videos/125490662",
          "name": "Robert Kalfas REEL 2015",
          "description": "This is my latest showreel with work I've done at Studio Pigeon as well as various freelance projects.\n\nThis was a very busy but exciting year! Big thanks to all my friends at Studio Pigeon!\n\nMusic: Antiloops-Yep Greemix \nhttps://soundcloud.com/greem/antiloops-yep-greemix",
          "link": "https://vimeo.com/125490662",
          "duration": 86,
          "width": 1920,
          "language": "en",
          "height": 1080,
          "embed": {"html": "<iframe src=\"https://player.vimeo.com/video/125490662?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Robert Kalfas REEL 2015\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"},
          "created_time": "2015-04-20T18:21:23+00:00",
          "modified_time": "2015-08-12T01:09:30+00:00",
          "content_rating": ["safe"],
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
              "link": "https://i.vimeocdn.com/video/515624850_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/515624850_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/515624850_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/515624850_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/515624850_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/515624850_100x75.jpg"
            }
          ],
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
                    "options": ["GET"],
                    "total": 14401
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
                    "options": ["GET"],
                    "total": 111697
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
                    "options": ["GET"],
                    "total": 26
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
                    "options": ["GET"],
                    "total": 43407
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
                    "options": ["GET"],
                    "total": 26446
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
                    "options": ["GET"],
                    "total": 299
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": 425,
            "likes": 15,
            "comments": 5
          },
          "metadata": {
            "connections": {
              "credits": "/videos/125490662/credits",
              "likes": "/videos/125490662/likes",
              "texttracks": {
                "uri": "/videos/125490662/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              }
            },
            "interactions": {
              "watchlater": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/125490662"
              },
              "like": {
                "added": true,
                "added_time": "2015-04-22T07:25:52+00:00",
                "uri": "/users/1249483/likes/125490662"
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
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30.jpg"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75.jpg"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100.jpg"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300.jpg"
              }
            ],
            "websites": [],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
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
                }
              }
            },
            "preferences": {"videos": {"privacy": null}},
            "stats": {}
          },
          "app": null,
          "status": "available",
          "embed_presets": null,
          "highlighted": true
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
          "modified_time": "2015-10-27T19:11:05+00:00",
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
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/541148275_640x360.jpg"
            },
            {
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/541148275_960x540.jpg"
            },
            {
              "width": 1280,
              "height": 720,
              "link": "https://i.vimeocdn.com/video/541148275_1280x720.jpg"
            }
          ],
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
                    "total": 27656
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
                    "total": 7914
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
                    "total": 72381
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
                    "total": 45182
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
                    "total": 688529
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
                    "total": 241383
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
                    "total": 168016
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
                    "total": 2819
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
                    "total": 4016
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
                    "total": 187
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": 8
          },
          "metadata": {
            "connections": {
              "comments": {
                "uri": "/videos/143538796/comments",
                "options": [
                  "GET",
                  "POST"
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
                "uri": "/videos/143538796?offset=1",
                "options": [
                  "GET"
                ]
              }
            },
            "interactions": {
              "watchlater": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/143538796"
              },
              "like": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/likes/143538796"
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
                  "link": "https://i.vimeocdn.com/portrait/9248478_30x30.jpg"
                },
                {
                  "width": 75,
                  "height": 75,
                  "link": "https://i.vimeocdn.com/portrait/9248478_75x75.jpg"
                },
                {
                  "width": 100,
                  "height": 100,
                  "link": "https://i.vimeocdn.com/portrait/9248478_100x100.jpg"
                },
                {
                  "width": 300,
                  "height": 300,
                  "link": "https://i.vimeocdn.com/portrait/9248478_300x300.jpg"
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
                  "total": 26
                },
                "following": {
                  "uri": "/users/11154082/following",
                  "options": [
                    "GET"
                  ],
                  "total": 94
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
                  "total": 1125
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
                  "total": 4
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
            "preferences": {
              "videos": {
                "privacy": null
              }
            }
          },
          "app": null,
          "status": "available",
          "embed_presets": null
        },
        {
          "uri": "/videos/75939847",
          "name": "Notatek.pl",
          "description": "Video explainer for Polish Start-up Notatek.pl",
          "link": "https://vimeo.com/75939847",
          "duration": 70,
          "width": 1280,
          "language": null,
          "height": 720,
          "embed": {"html": "<iframe src=\"https://player.vimeo.com/video/75939847?badge=0&autopause=0&player_id=0\" width=\"1280\" height=\"720\" frameborder=\"0\" title=\"Notatek.pl\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"},
          "created_time": "2013-10-02T06:43:18+00:00",
          "modified_time": "2015-08-11T09:14:04+00:00",
          "content_rating": ["safe"],
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
              "link": "https://i.vimeocdn.com/video/515622227_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/515622227_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/515622227_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/515622227_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/515622227_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/515622227_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/study",
              "name": "study",
              "tag": "study",
              "canonical": "study",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/study/videos",
                    "options": ["GET"],
                    "total": 14631
                  }
                }
              }
            },
            {
              "uri": "/tags/collage",
              "name": "collage",
              "tag": "collage",
              "canonical": "collage",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/collage/videos",
                    "options": ["GET"],
                    "total": 10231
                  }
                }
              }
            },
            {
              "uri": "/tags/poland",
              "name": "poland",
              "tag": "poland",
              "canonical": "poland",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/poland/videos",
                    "options": ["GET"],
                    "total": 17532
                  }
                }
              }
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
                    "options": ["GET"],
                    "total": 39342
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
                    "options": ["GET"],
                    "total": 26446
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": 85,
            "likes": 0,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/75939847/credits",
              "likes": "/videos/75939847/likes",
              "texttracks": {
                "uri": "/videos/75939847/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              }
            },
            "interactions": {
              "watchlater": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/75939847"
              },
              "like": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/likes/75939847"
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
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30.jpg"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75.jpg"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100.jpg"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300.jpg"
              }
            ],
            "websites": [],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
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
                }
              }
            },
            "preferences": {"videos": {"privacy": null}},
            "stats": {}
          },
          "app": null,
          "status": "available",
          "embed_presets": null
        },
        {
          "uri": "/videos/65957412",
          "name": "My first showreel",
          "description": "This is my first showreel.\nMusic: Henryk Debich - Bądź Wieczorem W Dyskotece",
          "link": "https://vimeo.com/65957412",
          "duration": 88,
          "width": 1280,
          "language": null,
          "height": 720,
          "embed": {"html": "<iframe src=\"https://player.vimeo.com/video/65957412?badge=0&autopause=0&player_id=0\" width=\"1280\" height=\"720\" frameborder=\"0\" title=\"My first showreel\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"},
          "created_time": "2013-05-11T12:48:46+00:00",
          "modified_time": "2015-07-29T10:14:10+00:00",
          "content_rating": ["unrated"],
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
              "link": "https://i.vimeocdn.com/video/437173478_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/437173478_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/437173478_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/437173478_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/437173478_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/437173478_100x75.jpg"
            }
          ],
          "tags": [
            {
              "uri": "/tags/showreel",
              "name": "showreel",
              "tag": "showreel",
              "canonical": "showreel",
              "metadata": {
                "connections": {
                  "videos": {
                    "uri": "/tags/showreel/videos",
                    "options": ["GET"],
                    "total": 111697
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
                    "options": ["GET"],
                    "total": 26446
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": 215,
            "likes": 2,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/65957412/credits",
              "likes": "/videos/65957412/likes",
              "texttracks": {
                "uri": "/videos/65957412/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              }
            },
            "interactions": {
              "watchlater": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/65957412"
              },
              "like": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/likes/65957412"
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
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/9248478_30x30.jpg"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/9248478_75x75.jpg"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/9248478_100x100.jpg"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/9248478_300x300.jpg"
              }
            ],
            "websites": [],
            "metadata": {
              "connections": {
                "activities": "/users/11154082/activities",
                "albums": "/users/11154082/albums",
                "channels": "/users/11154082/channels",
                "feed": "/users/11154082/feed",
                "followers": "/users/11154082/followers",
                "following": "/users/11154082/following",
                "groups": "/users/11154082/groups",
                "likes": "/users/11154082/likes",
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
                }
              }
            },
            "preferences": {"videos": {"privacy": null}},
            "stats": {}
          },
          "app": null,
          "status": "available",
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
          "embed": {"html": "<iframe src=\"https://player.vimeo.com/video/103314222?badge=0&autopause=0&player_id=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" title=\"Studio Pigeon explainer: Farmer Finder\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"},
          "created_time": "2014-08-13T08:28:22+00:00",
          "modified_time": "2015-08-16T08:10:39+00:00",
          "content_rating": ["unrated"],
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
              "link": "https://i.vimeocdn.com/video/507956837_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/507956837_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/507956837_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/507956837_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/507956837_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/507956837_100x75.jpg"
            }
          ],
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
                    "options": ["GET"],
                    "total": 2803
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
                    "options": ["GET"],
                    "total": 585
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
                    "options": ["GET"],
                    "total": 13229
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
                    "options": ["GET"],
                    "total": 12172
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
                    "options": ["GET"],
                    "total": 75369
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
                    "options": ["GET"],
                    "total": 14482
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
                    "options": ["GET"],
                    "total": 36723
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
                    "options": ["GET"],
                    "total": 16180
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
                    "options": ["GET"],
                    "total": 13696
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
                    "options": ["GET"],
                    "total": 4789
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
                    "options": ["GET"],
                    "total": 6528
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
                    "options": ["GET"],
                    "total": 5298
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
                    "options": ["GET"],
                    "total": 666375
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
                    "options": ["GET"],
                    "total": 69414
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": null,
            "likes": 41,
            "comments": 4
          },
          "metadata": {
            "connections": {
              "credits": "/videos/103314222/credits",
              "likes": "/videos/103314222/likes",
              "texttracks": {
                "uri": "/videos/103314222/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              }
            },
            "interactions": {
              "watchlater": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/103314222"
              },
              "like": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/likes/103314222"
              }
            }
          },
          "user": {
            "uri": "/users/11513063",
            "name": "Studio Pigeon",
            "link": "https://vimeo.com/studiopigeon",
            "location": "Cracow, Main Square",
            "bio": "Even the best idea needs explanation.\nWe know that so well.\nWe also know that you don’t have much time.\nThat’s why you need an explainer video.\nSo give it to us & get things movin’",
            "created_time": "2012-04-30T15:42:25+00:00",
            "account": "plus",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/5442071_30x30.jpg"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/5442071_75x75.jpg"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/5442071_100x100.jpg"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/5442071_300x300.jpg"
              }
            ],
            "websites": [
              {
                "name": "Studio Pigeon",
                "link": "http://www.studiopigeon.com",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/11513063/activities",
                "albums": "/users/11513063/albums",
                "channels": "/users/11513063/channels",
                "feed": "/users/11513063/feed",
                "followers": "/users/11513063/followers",
                "following": "/users/11513063/following",
                "groups": "/users/11513063/groups",
                "likes": "/users/11513063/likes",
                "portfolios": "/users/11513063/portfolios",
                "videos": "/users/11513063/videos",
                "shared": "/users/11513063/shared/videos",
                "pictures": "/users/11513063/pictures",
                "violations": null,
                "watchlater": null
              },
              "interactions": {
                "follow": {
                  "added": false,
                  "added_time": null,
                  "uri": "/users/1249483/following/11513063"
                }
              }
            },
            "preferences": {"videos": {"privacy": null}},
            "stats": {}
          },
          "app": null,
          "status": "available",
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
          "embed": {"html": "<iframe src=\"https://player.vimeo.com/video/86613124?badge=0&autopause=0&player_id=0\" width=\"1280\" height=\"720\" frameborder=\"0\" title=\"Studio Pigeon explainer: Bidroom\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"},
          "created_time": "2014-02-13T15:10:21+00:00",
          "modified_time": "2015-08-16T08:06:37+00:00",
          "content_rating": ["unrated"],
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
              "link": "https://i.vimeocdn.com/video/507959780_1280.jpg"
            },
            {
              "type": "thumbnail",
              "width": 960,
              "height": 540,
              "link": "https://i.vimeocdn.com/video/507959780_960.jpg"
            },
            {
              "type": "thumbnail",
              "width": 640,
              "height": 360,
              "link": "https://i.vimeocdn.com/video/507959780_640.jpg"
            },
            {
              "type": "thumbnail",
              "width": 295,
              "height": 166,
              "link": "https://i.vimeocdn.com/video/507959780_295x166.jpg"
            },
            {
              "type": "thumbnail",
              "width": 200,
              "height": 150,
              "link": "https://i.vimeocdn.com/video/507959780_200x150.jpg"
            },
            {
              "type": "thumbnail",
              "width": 100,
              "height": 75,
              "link": "https://i.vimeocdn.com/video/507959780_100x75.jpg"
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
                    "options": ["GET"],
                    "total": 666375
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
                    "options": ["GET"],
                    "total": 1930
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
                    "options": ["GET"],
                    "total": 36723
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
                    "options": ["GET"],
                    "total": 49980
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
                    "options": ["GET"],
                    "total": 13696
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
                    "options": ["GET"],
                    "total": 3331
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
                    "options": ["GET"],
                    "total": 14870
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
                    "options": ["GET"],
                    "total": 5298
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
                    "options": ["GET"],
                    "total": 554278
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
                    "options": ["GET"],
                    "total": 1552
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
                    "options": ["GET"],
                    "total": 174
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
                    "options": ["GET"],
                    "total": 6961
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
                    "options": ["GET"],
                    "total": 3801
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
                    "options": ["GET"],
                    "total": 1480
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
                    "options": ["GET"],
                    "total": 58765
                  }
                }
              }
            }
          ],
          "stats": {
            "plays": null,
            "likes": 13,
            "comments": 0
          },
          "metadata": {
            "connections": {
              "credits": "/videos/86613124/credits",
              "likes": "/videos/86613124/likes",
              "texttracks": {
                "uri": "/videos/86613124/texttracks",
                "options": [
                  "GET",
                  "POST"
                ],
                "total": 0
              }
            },
            "interactions": {
              "watchlater": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/watchlater/86613124"
              },
              "like": {
                "added": false,
                "added_time": null,
                "uri": "/users/1249483/likes/86613124"
              }
            }
          },
          "user": {
            "uri": "/users/11513063",
            "name": "Studio Pigeon",
            "link": "https://vimeo.com/studiopigeon",
            "location": "Cracow, Main Square",
            "bio": "Even the best idea needs explanation.\nWe know that so well.\nWe also know that you don’t have much time.\nThat’s why you need an explainer video.\nSo give it to us & get things movin’",
            "created_time": "2012-04-30T15:42:25+00:00",
            "account": "plus",
            "pictures": [
              {
                "type": "portrait",
                "width": 30,
                "height": 30,
                "link": "https://i.vimeocdn.com/portrait/5442071_30x30.jpg"
              },
              {
                "type": "portrait",
                "width": 75,
                "height": 75,
                "link": "https://i.vimeocdn.com/portrait/5442071_75x75.jpg"
              },
              {
                "type": "portrait",
                "width": 100,
                "height": 100,
                "link": "https://i.vimeocdn.com/portrait/5442071_100x100.jpg"
              },
              {
                "type": "portrait",
                "width": 300,
                "height": 300,
                "link": "https://i.vimeocdn.com/portrait/5442071_300x300.jpg"
              }
            ],
            "websites": [
              {
                "name": "Studio Pigeon",
                "link": "http://www.studiopigeon.com",
                "description": null
              }
            ],
            "metadata": {
              "connections": {
                "activities": "/users/11513063/activities",
                "albums": "/users/11513063/albums",
                "channels": "/users/11513063/channels",
                "feed": "/users/11513063/feed",
                "followers": "/users/11513063/followers",
                "following": "/users/11513063/following",
                "groups": "/users/11513063/groups",
                "likes": "/users/11513063/likes",
                "portfolios": "/users/11513063/portfolios",
                "videos": "/users/11513063/videos",
                "shared": "/users/11513063/shared/videos",
                "pictures": "/users/11513063/pictures",
                "violations": null,
                "watchlater": null
              },
              "interactions": {
                "follow": {
                  "added": false,
                  "added_time": null,
                  "uri": "/users/1249483/following/11513063"
                }
              }
            },
            "preferences": {"videos": {"privacy": null}},
            "stats": {}
          },
          "app": null,
          "status": "available",
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
