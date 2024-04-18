import { Entry } from "contentful";

export type TrackData = {
  title: string;
  audioFile: Entry;
};

export type Track = {
  title: string;
  audioFile: string;
};
