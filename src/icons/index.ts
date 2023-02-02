import dynamic from "next/dynamic";

export const ICONS = {
  arrowRight: dynamic(() => import("public/icons/arrow-right.svg")),
  arrowLeft: dynamic(() => import("public/icons/arrow-left.svg")),
  heartFilled: dynamic(() => import("public/icons/heart-filled.svg")),
  home: dynamic(() => import("public/icons/home.svg")),
};
