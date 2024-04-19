import { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import { Track } from "../entities/track";

export type TrackEntrySkeleton = {
  sys: {
    id: string;
  };
  contentTypeId: "playlist";
  fields: {
    title: string;
    audioFile: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

export const trackContenfulEntryToTrack = (
  entry: TrackEntrySkeleton
): Track => ({
  id: entry.sys.id,
  title: entry.fields.title || "",
  audioFile: `https://${entry.fields.audioFile.fields.file.url}`,
});
