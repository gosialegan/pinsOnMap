import axios from "axios";

/**
 * * To generate random names (I tought it would be cool)
 */

export const getName = () => {
  return axios
    .get("https://randomuser.me/api/?results=10&nat=us&inc=name")
    .then((res: any) => {
      return res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
};
