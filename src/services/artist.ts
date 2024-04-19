import { Artist } from "../entities/artist";
import contentful from "../lib/contentful";
import { albumContenfulEntryToAlbum } from "./album";

export type ArtistEntrySkeleton = {
  contentTypeId: "artist";
  sys: {
    id: string;
  };
  fields: {
    name: string;
    avatar?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    albums?: any[];
  };
};

const artistContenfulEntryToArtist = (entry: ArtistEntrySkeleton): Artist => ({
  id: entry.sys.id,
  name: entry.fields.name,
  avatar: `https:${entry.fields.avatar?.fields.file.url}`,
  albums: (entry.fields.albums || []).map(albumContenfulEntryToAlbum),
});

export const getAllArtists = async (): Promise<Artist[]> => {
  const response = await contentful.getEntries<any>({
    content_type: "artist",
  });

  return response.items.map(artistContenfulEntryToArtist as any);
};
