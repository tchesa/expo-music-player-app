import { Image, Text, View } from "react-native";
import TrackCard from "../components/track-card";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from ".";
import { useEffect, useState } from "react";
import { getPlaylist } from "../services/playlist";
import { Playlist } from "../entities/playlist";

type Props = NativeStackScreenProps<RootStackParamList, "Playlist">;

const THUMBNAIL_SIZE = 280;

const PlaylistScreen = ({ route }: Props) => {
  const { id } = route.params;
  const [playlist, setPlaylist] = useState<Playlist>();

  const fetchData = async (id: string) => {
    const playlist = await getPlaylist(id);
    setPlaylist(playlist);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const artistName = "--";
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 40, paddingBottom: 12, alignItems: "center" }}>
        {playlist?.thumbnail ? (
          <Image
            source={{ uri: playlist.thumbnail }}
            style={{ width: THUMBNAIL_SIZE, height: THUMBNAIL_SIZE }}
          />
        ) : (
          <View
            style={{
              width: THUMBNAIL_SIZE,
              height: THUMBNAIL_SIZE,
              backgroundColor: "gray",
            }}
          />
        )}
      </View>
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 4,
          }}
        >
          {playlist?.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 16,
            fontWeight: "bold",
          }}
        >
          {artistName}
        </Text>
        <View>
          {(playlist?.tracks || []).map((track) => (
            <TrackCard key={track.id} title={track.title} artist={artistName} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default PlaylistScreen;
