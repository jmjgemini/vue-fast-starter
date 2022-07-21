import { defineStore } from "pinia";

export const useLayoutStore = defineStore({
  id: "layout",
  state: () => ({
    topBarHeightInPixel: 60,
    sideBarWidthInPixel: 260
  })
});
