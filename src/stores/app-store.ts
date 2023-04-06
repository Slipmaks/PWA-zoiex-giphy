import { defineStore } from "pinia";
import router from "../router";
const API_KEY = "GvCRSzE4wEHpWXPORygu0uBVFIIBQ2c2";
import {
  RandomGifResponse,
  GifsObjectResponse,
  UserResponse,
  DataResponse,
} from "../interfaces/GifsObject";

type RootState = {
  trendingGifs: GifsObjectResponse;
  searchResultGifs: GifsObjectResponse;
  randomGif: RandomGifResponse;
  currentUser: UserResponse;
  currentGif: DataResponse;
};

export const useStore = defineStore("app-store", {
  state: () =>
    ({
      trendingGifs: {},
      searchResultGifs: {},
      randomGif: {},
      currentUser: {},
      currentGif: {},
    } as RootState),
  actions: {
    async getTrending() {
      try {
        const data = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=16`
        );
        const response = await data.json();
        this.trendingGifs = response;
        console.log(this.trendingGifs);
      } catch (error) {
        console.log(error);
      }
    },
    async findGifViaSearch(context: string) {
      try {
        const data = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${context}`
        );
        const response = await data.json();
        this.searchResultGifs = response;
        console.log(response);

        if (
          this.searchResultGifs.meta.msg === "OK" &&
          this.searchResultGifs.data.length === 0
        ) {
          this.findRandom();
          return;
        }

        router.push({ path: "/search-result" });
      } catch (error) {
        console.log(error);
      }
    },
    async findRandom() {
      try {
        const data = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        );

        const response = await data.json();
        this.randomGif = response;

        router.push({ path: "/search-result" });
      } catch (error) {
        console.log(error);
      }
    },
    getAuthorPage(user: UserResponse) {
      this.currentUser = user;
      router.push({ path: "/author" });
    },
    getGifPage(gif: any) {
      console.log(gif);
      this.currentGif = gif;
      router.push({ path: "/gif-info" });
    },
  },
  getters: {},
});
