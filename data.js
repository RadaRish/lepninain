var APP_DATA = {
  "scenes": [
    {
      "id": "0---",
      "name": "Вход в магазин",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1160295696297986,
        "pitch": -0.11598854761076183,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": 0.11787648779303161,
          "pitch": 0.19030154605466976,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": -3.0349046969584776,
          "pitch": 0.16257959767203545,
          "rotation": 0,
          "target": "2--1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "Дорога",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.7639832615335367,
        "pitch": -0.19191648898710767,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": 2.7818775283040242,
          "pitch": 0.17897729967925002,
          "rotation": 0,
          "target": "0---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--1",
      "name": "М 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1322863345332586,
        "pitch": -0.00374523164881424,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": 0.07230509478223013,
          "pitch": 0.4050345480151467,
          "rotation": 0,
          "target": "0---"
        },
        {
          "yaw": 2.2624430682448224,
          "pitch": 0.21758912792359908,
          "rotation": 0,
          "target": "3--2"
        },
        {
          "yaw": -2.268099310707452,
          "pitch": 0.23509276678586666,
          "rotation": 0,
          "target": "11--10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3--2",
      "name": "М 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6831176398963912,
        "pitch": 0.18670976092642988,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": 0.5695460489902882,
          "pitch": 0.3266688940205871,
          "rotation": 0,
          "target": "2--1"
        },
        {
          "yaw": -1.6635616683071799,
          "pitch": 0.6683095331993414,
          "rotation": 0,
          "target": "4--3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4--3",
      "name": "М 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.3097529861611399,
        "pitch": 0.189606665232823,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": 1.5688239457206397,
          "pitch": 0.4184557312800159,
          "rotation": 0,
          "target": "3--2"
        },
        {
          "yaw": -1.5438617675010988,
          "pitch": 0.5373009349877229,
          "rotation": 0,
          "target": "5--4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5--4",
      "name": "М 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5185349896239195,
          "pitch": 0.32977872692228694,
          "rotation": 0,
          "target": "6--5"
        },
        {
          "yaw": 1.5282821345846882,
          "pitch": 0.6151097354907513,
          "rotation": 0,
          "target": "4--3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6--5",
      "name": "М 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.868176221308536,
          "pitch": 0.4730585647495218,
          "rotation": 0,
          "target": "5--4"
        },
        {
          "yaw": -0.44387968228180696,
          "pitch": 0.5096103461090529,
          "rotation": 0,
          "target": "7--6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7--6",
      "name": "М 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.07901581522665779,
        "pitch": 0.25672592127382643,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": 1.4967296541287611,
          "pitch": 0.6193390636792167,
          "rotation": 0,
          "target": "6--5"
        },
        {
          "yaw": -1.6662786139681138,
          "pitch": 0.753097813907118,
          "rotation": 0,
          "target": "8--7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8--7",
      "name": "М 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.642598497325185,
        "pitch": 0.2424633700919152,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": 1.3484523423740722,
          "pitch": 0.765113879532338,
          "rotation": 0,
          "target": "7--6"
        },
        {
          "yaw": -0.06381786553742863,
          "pitch": 0.7819275486602955,
          "rotation": 0,
          "target": "9--8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9--8",
      "name": "М 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.0395815690060743,
        "pitch": 0.15299827631468688,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": -1.550785123487966,
          "pitch": 0.6338439797681215,
          "rotation": 0,
          "target": "10--9"
        },
        {
          "yaw": 1.6048775110145854,
          "pitch": 0.42075733740058396,
          "rotation": 0,
          "target": "8--7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10--9",
      "name": "М 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.1947572061379397,
        "pitch": 0.1517016807526872,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": -1.5437180256816063,
          "pitch": 0.34108137653709925,
          "rotation": 0,
          "target": "11--10"
        },
        {
          "yaw": 1.4459653885211,
          "pitch": 0.4820916690319983,
          "rotation": 0,
          "target": "9--8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11--10",
      "name": "М 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.018087957702489277,
        "pitch": -0.014262551181861483,
        "fov": 1.4301449048735997
      },
      "linkHotspots": [
        {
          "yaw": -0.3282116332395759,
          "pitch": 0.4772134296712185,
          "rotation": 0,
          "target": "2--1"
        },
        {
          "yaw": 1.6709316187253744,
          "pitch": 0.7025261533653673,
          "rotation": 0,
          "target": "10--9"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
