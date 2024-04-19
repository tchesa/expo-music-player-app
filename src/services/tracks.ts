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
): Track => {
  const audioFileUrl = entry.fields?.audioFile?.fields.file.url
    ? `https://${entry.fields.audioFile.fields.file.url}`
    : "";

  return {
    id: entry.sys.id,
    title: entry.fields?.title || "",
    audioFile: audioFileUrl,
  };
};
