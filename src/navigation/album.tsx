import { Image, Text, View } from "react-native";
import TrackCard from "../components/track-card";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from ".";
import { Album } from "../entities/album";
import { useEffect, useState } from "react";
import { getAlbum } from "../services/album";

type Props = NativeStackScreenProps<RootStackParamList, "Album">;

const THUMBNAIL_SIZE = 280;

const AlbumScreen = ({ route }: Props) => {
  const { id } = route.params;
  const [album, setAlbum] = useState<Album>();

  const fetchData = async (id: string) => {
    const album = await getAlbum(id);
    setAlbum(album);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const artistName = "--";
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 40, paddingBottom: 12, alignItems: "center" }}>
        {album?.thumbnail ? (
          <Image
            source={{ uri: album.thumbnail }}
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
          {album?.title}
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
          {(album?.tracks || []).map((track) => (
            <TrackCard key={track.id} title={track.title} artist={artistName} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default AlbumScreen;
