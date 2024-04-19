import { Text, View } from "react-native";
import SectionHeader from "../components/section-header";
import AssetSquareButton from "../components/asset-square-button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from ".";
import { useEffect, useState } from "react";
import { Playlist } from "../entities/playlist";
import { getAllPlaylists } from "../services/playlist";
import { getAllAlbums } from "../services/album";
import { Album } from "../entities/album";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetchData = async () => {
    const [playlists, albums] = await Promise.all([
      getAllPlaylists(),
      getAllAlbums(),
    ]);

    setPlaylists(playlists);
    setAlbums(albums);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Welcome!
      </Text>
      <View style={{ marginBottom: 24 }}>
        <SectionHeader style={{ marginBottom: 4 }} title="Playlists" />
        <View
          style={{
            flexDirection: "row",
            columnGap: 4,
          }}
        >
          {playlists.map((playlist) => (
            <AssetSquareButton
              key={playlist.id}
              image={playlist.thumbnail}
              onPress={() =>
                navigation.navigate("Playlist", { id: playlist.id })
              }
            />
          ))}
        </View>
      </View>
      <View style={{ marginBottom: 24 }}>
        <SectionHeader style={{ marginBottom: 4 }} title="Artists" />
        <View
          style={{
            flexDirection: "row",
            columnGap: 4,
          }}
        >
          <AssetSquareButton
            onPress={() => navigation.navigate("Artist", { id: "1" })}
          />
          <AssetSquareButton
            onPress={() => navigation.navigate("Artist", { id: "1" })}
          />
          <AssetSquareButton
            onPress={() => navigation.navigate("Artist", { id: "1" })}
          />
        </View>
      </View>
      <View style={{ marginBottom: 24 }}>
        <SectionHeader style={{ marginBottom: 4 }} title="Albums" />
        <View
          style={{
            flexDirection: "row",
            columnGap: 4,
          }}
        >
          {albums.map((album) => (
            <AssetSquareButton
              key={album.id}
              image={album.thumbnail}
              onPress={() => navigation.navigate("Album", { id: album.id })}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Home;
