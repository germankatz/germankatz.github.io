var APP_DATA = {
  "scenes": [
    {
      "id": "0-departamento-a",
      "name": "Departamento A",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.23421827558075492,
        "pitch": -0.01985142515547622,
        "fov": 1.3544032240414072
      },
      "linkHotspots": [
        {
          "yaw": -0.5408713772495322,
          "pitch": 0.01661694669996372,
          "rotation": 6.283185307179586,
          "target": "2-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4518487730719336,
          "pitch": 0.4797986419243152,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Pisos</font></font>",
          "text": "<font style=\"vertical-align: inherit;\">Piso porcelanato en estar / cocina / sanitario.&nbsp;</font><font style=\"vertical-align: inherit;\">Piso flotante alto transito en dormitorios</font><br>"
        }
      ]
    },
    {
      "id": "1-departamento-b",
      "name": "Departamento B",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.029520053552067438,
        "pitch": -0.004411609138012196,
        "fov": 1.3544032240414072
      },
      "linkHotspots": [
        {
          "yaw": 2.3216258207092224,
          "pitch": 0.045634022170006006,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9849788327172337,
          "pitch": -0.15901937906195585,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Amoblamientos de cocina</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Reno Amoblamiento. Mesadas en granito negro boreal</font></font>"
        },
        {
          "yaw": 0.29691536890750747,
          "pitch": -0.11329482864635665,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Carpinterias</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Aberturas de aluminio - A40 Aluar</font></font>"
        },
        {
          "yaw": 2.998940424676263,
          "pitch": 0.45770200662696325,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Pisos</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Piso porcelanato en estar / cocina / sanitario. </font><font style=\"vertical-align: inherit;\">Piso flotante alto transito en dormitorios</font></font></font></font>"
        }
      ]
    },
    {
      "id": "2-hall",
      "name": "Hall",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5934102077894003,
          "pitch": -0.1203623681599364,
          "rotation": 0,
          "target": "3-360-sum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0966447163140316,
          "pitch": 0.05517755761219689,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Ingreso</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Puerta con apertura electronica - Portero visor</font></font><div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><br></font></font></div>"
        }
      ]
    },
    {
      "id": "3-360-sum",
      "name": "360 SUM",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.301559084878047,
          "pitch": 0.07551773430201081,
          "rotation": 4.71238898038469,
          "target": "2-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9963617970295555,
          "pitch": -0.1694023635214279,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Amoblamiento de cocina</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Marca Reno - Con parrilla completra</font></font>"
        },
        {
          "yaw": -0.41457611010011064,
          "pitch": 0.06219885279756987,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Equipamiento</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Todas las amenities se entregan con equipamiento</font></font>"
        }
      ]
    }
  ],
  "name": "Prueba Ciclos",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
