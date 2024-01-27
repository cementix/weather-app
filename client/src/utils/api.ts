import axios from "axios";
import { API_KEY, API_URL } from "@/utils/consts";

export async function fetchData(latitude: number, longitude: number) {
  try {
    const data = await axios.get(
      `${API_URL}current.json?key=${API_KEY}&q=${latitude},${longitude}`
    );
    return data.data;
  } catch (e: any) {
    console.error(e.message);
  }
}
