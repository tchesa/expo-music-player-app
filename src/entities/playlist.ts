import { Entry } from "contentful";
import { Track } from "./track";

export type PlaylistData = {
  title: string;
  thumbnail?: Entry;
  tracks: Entry[];
};

export type Playlist = {
  id: string;
  title: string;
  thumbnail?: string;
  tracks?: Track[];
};
