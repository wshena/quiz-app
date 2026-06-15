import type IconProps from "../interfaces";
import { MdExplore } from "react-icons/md";

export const ExploreIcon = ({ size, color, style }: IconProps) => {
  return <MdExplore size={size} color={color} className={style} />;
};
