import { Tag } from './tag';

export interface Tab {
  id:                number;
  title:             string;
  description:       string;
  skillLevel:        number;
  created:           Date;
  author:            string;
  isPublic:          boolean;
  tags:              Tag[];
  fileLocationUrl:   string;
  previewImageUrl:   string;
  numberOfFavorites: number;
}
