import { Playlist } from "../entities/playlist";
import contentful from "../lib/contentful";
import { trackContenfulEntryToTrack } from "./tracks";

export type PlaylistEntrySkeleton = {
  contentTypeId: "playlist";
  sys: {
    id: string;
  };
  fields: {
    title: string;
    thumbnail?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    tracks?: any[];
  };
};

const playlistContenfulEntryToPlaylist = (
  entry: PlaylistEntrySkeleton
): Playlist => ({
  id: entry.sys.id,
  title: entry.fields.title,
  thumbnail: `https:${entry.fields.thumbnail?.fields.file.url}`,
  tracks: (entry.fields.tracks || []).map(trackContenfulEntryToTrack),
});

export const getAllPlaylists = async (): Promise<Playlist[]> => {
  const response = await contentful.getEntries<any>({
    content_type: "playlist",
  });

  return response.items.map(playlistContenfulEntryToPlaylist as any);
};

export const getPlaylist = async (id: string): Promise<Playlist> => {
  const response = await contentful.getEntry<any>(id);
  return playlistContenfulEntryToPlaylist(response as any);
};
