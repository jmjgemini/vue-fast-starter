import { defineStore } from "pinia";

export const useAppSettingStore = defineStore({
  id: "appSetting",
  state: () => ({
    sideBarWidth: 200,
    topBarHeight: 48
  })
});
