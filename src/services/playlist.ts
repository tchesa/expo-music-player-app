import { AssetFile, Entry, EntryFieldTypes, EntrySkeletonType, Link } from "contentful";
import { Playlist } from "../entities/playlist";
import contentful from "../lib/contentful";

export type PlaylistEntrySkeleton = {
  contentTypeId: "playlist";
  fields: {
    title: EntryFieldTypes.Text;
    thumbnail?: Entry<EntrySkeletonType>;
    // tracks?: EntryFieldTypes.Array<Entry
  }
}

const playlistContenfulEntryToPlaylist = (entry: Entry<PlaylistEntrySkeleton>): Playlist => ({
  id: entry.sys.id,
  title: entry.fields.title,
  thumbnail: (entry.fields.thumbnail).,
})

const getAllPlaylists = async (): Promise<Playlist[]> => {
  await contentful.getEntries<PlaylistEntrySkeleton>();
}
