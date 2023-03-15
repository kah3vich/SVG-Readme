export type TReadmeToSvgParams = {
  type: 'title' | 'subtitle' | 'description' | 'span' | 'custom';
  content: string | string[];
  color?: string;
  size?: string | number;
  weight?: string | number;
  align?: 'left' | 'center' | 'right';
};

export type TReadmeToSvgContentParams = Omit<TReadmeToSvgParams, 'type'>;
