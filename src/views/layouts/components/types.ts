import { VNodeChild } from "vue";

export type MenuOption = {
  path: string;
  label: string;
  disabled?: boolean;
  key: string;
  type: "item";
  icon?: () => VNodeChild;
};

export type MenuGroupOption = {
  label: string;
  children: Array<MenuOption | MenuGroupOption>;
  key: string;
  type: "group";
};
