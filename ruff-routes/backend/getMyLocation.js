const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

// Middleware setup
app.use(cors()); // Allow cross-origin requests

const axios = require("axios");

// try {
//     const response = await axios.get(
//       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${longitude},${latitude}&radius=1500&type=park&keyword=dog&key=${process.env.APIKEY}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error calling API:", error);
//     throw error;
//   }

const callApi = async () => {
  try {
    const response = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.APIKEY}`
    );
    const data = response.data;

    const longitude = data["location"]["lng"];
    const latitude = data["location"]["lat"];

    // console.log("long", longitude);
    // console.log("lat", latitude);

    const nearbySearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=15000&type=park&keyword=dog&key=${process.env.APIKEY}`;

    console.log(nearbySearchUrl);

    const response2 = await axios.get(nearbySearchUrl);

    // console.log(response2.data.results);
    // console.log(response2);

    var places = response2.data.results
      .filter((result) => {
        return result.photos != null && result.photos.length > 0;
      })
      .map((result) => {
        return {
          place_id: result.place_id,
          photos: result.photos[0],
        };
      });

    return places;

    //console.log(response2);

    // const data2 = response2.data;
    // const place_id = data2.results.place_id;

    // const photo = response2.data.results[0].photos[0].photo_reference;
    // const lat = data2.results.geometry.location.lat;
    // const long = data2.results.geometry.location.lng;

    // console.log(photo);
  } catch (error) {
    console.error("Error calling API:", error);
    throw error;
  }
};

app.get("/locations", async (req, res) => {
  try {
    const apiRes = await callApi();
    console.log(apiRes);
    res.json(apiRes); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
