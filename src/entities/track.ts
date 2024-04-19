import { Entry } from "contentful";

export type TrackData = {
  title: string;
  audioFile: Entry;
};

export type Track = {
  id: string;
  title: string;
  audioFile: string;
};
