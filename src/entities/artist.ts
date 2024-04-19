import { Album } from "./album";

export type Artist = {
  id: string;
  name: string;
  avatar?: string;
  albums?: Album[];
};
