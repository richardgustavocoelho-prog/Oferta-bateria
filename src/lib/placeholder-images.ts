import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Next.js with Turbopack might have issues with direct JSON imports in some cases.
// Accessing .default handles cases where the module is wrapped.
export const PlaceHolderImages: ImagePlaceholder[] = (data as any).default?.placeholderImages || data.placeholderImages;
