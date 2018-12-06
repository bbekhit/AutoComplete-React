import { GET_CITIES} from "./types";
import {cities} from "../data/city";


export const getCities = () => {
    return {
      type: GET_CITIES,
      payload: cities
    };
  };
  