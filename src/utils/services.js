import axios from "axios";

export const getHomeList = async () => {
  return await axios.get("http://localhost:5001/homes");
};
