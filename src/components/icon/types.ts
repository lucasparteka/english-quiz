import { ICONS } from "@/icons";
import { SVGProps } from "react";

export type IconProps = {
  name: keyof typeof ICONS;
} & SVGProps<SVGSVGElement>;
