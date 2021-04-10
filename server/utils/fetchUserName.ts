import axios from "axios";

/**
 * * To generate random names (I tought it would be cool)
 */

export const getName = async () => {
  return await axios
    .get("https://randomuser.me/api/?&inc=name")
    .then((res: any) => {
      return res.data.results[0].name.first;
    })
    .catch((err) => {
      console.log(err);
    });
};
