import axios from "axios";

export default async function getRandomImage(term) {
  const BASE_URL = `https://source.unsplash.com/random/?${term}`;

  axios
    .get(BASE_URL)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log("Error happened during fetching!", err);
    });
}
