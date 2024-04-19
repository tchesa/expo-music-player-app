import { Track } from "./track";

export type Album = {
  id: string;
  title: string;
  thumbnail?: string;
  tracks?: Track[];
};
