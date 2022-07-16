To add or edit a location, you can directly edit the corresponding json file using the github web interface. Click the pencil icon to edit.

Current required fields are:
 * name
 * country
 * latitude and longitude: [lat, long]
 * instagramlink
 * facebooklink
 * otherlink

A chapter info is a json file array entry in the form:

```json
{
  "name": "chapter name 1",
  "country": "Argentina",
  "latlong": [-31.4283, -64.1847],
  "instagramlink": "https://www.instagram.com/ieeerasregion9sasc/",
  "facebooklink": "",
  "otherlink": "",
},
```

Add it in the file `assets/data.js`:
```js
export const branch_json_data = {
    "chapters": [
        {
            "name": "chapter name 1",
            "country": "Argentina",
            "latlong": [-31.4283, -64.1847],
            "instagramlink": "https://www.instagram.com/ieeerasregion9sasc/",
            "facebooklink": "",
            "otherlink": "",
        },
        {
            "name": "chapter name 2",
            "country": "Argentina",
            "latlong": [37.8283, -90.5795],
            "instagramlink": "",
            "facebooklink": "",
            "otherlink": "",
        },
    ]
}
```

Possible sources for lat/long information are:
 * http://getlatlong.net (enter your location manually)
 * http://locationdetection.mobi/ (use your browser's location)
