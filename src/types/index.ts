import { svgAlign, svgType } from "src/constant";

export type SvgAlign = typeof svgAlign[number]

export type SvgStyles = Partial<{
  color: string;
  size: string | number;
  weight: string | number;
  align: SvgAlign;
}>

export type SvgType = typeof svgType[number]

export type SvgParams = {
  type: SvgType;
  content: string;
} & SvgStyles

export type SvgContentParams = { content: string | string[] } & SvgStyles
