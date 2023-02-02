import { ICONS } from "@/icons";
import {
  ComponentType,
  JSXElementConstructor,
  ReactSVGElement,
  SVGProps,
} from "react";
import { IconProps } from "./types";

type A = {
  width: number;
};

export function Icon(props: IconProps) {
  const { name, width = undefined, height = 30, ...otherProps } = props;

  const Icon = ICONS[name] as unknown as JSXElementConstructor<
    SVGProps<SVGSVGElement>
  >;

  return <i>{<Icon {...otherProps} width={width} height={height} />}</i>;
}
