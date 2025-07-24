import coloochak from "js-cookie";
import { TOKEN_NAME } from "./constants";

export function setToken(token) {
  // localStorage.setItem(TOKEN_NAME, token)
  coloochak.set(TOKEN_NAME, token, { expires: 1 });
}

export function getToken() {
  return coloochak.get(TOKEN_NAME);
}

export function removeToken() {
  coloochak.remove(TOKEN_NAME);
}
