import axios from "axios";

export const Advice = async () => {
  try {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
