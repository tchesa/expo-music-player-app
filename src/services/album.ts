import { Album } from "../entities/album";
import contentful from "../lib/contentful";
import { trackContenfulEntryToTrack } from "./tracks";

export type AlbumEntrySkeleton = {
  contentTypeId: "album";
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

const albumContenfulEntryToAlbum = (entry: AlbumEntrySkeleton): Album => ({
  id: entry.sys.id,
  title: entry.fields.title,
  thumbnail: `https:${entry.fields.thumbnail?.fields.file.url}`,
  tracks: (entry.fields.tracks || []).map(trackContenfulEntryToTrack),
});

export const getAllAlbums = async (): Promise<Album[]> => {
  const response = await contentful.getEntries<any>({
    content_type: "album",
  });

  return response.items.map(albumContenfulEntryToAlbum as any);
};
