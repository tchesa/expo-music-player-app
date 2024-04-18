import { Text, View } from "react-native";
import SectionHeader from "../components/section-header";
import AssetSquareButton from "../components/asset-square-button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from ".";
import { useEffect } from "react";
import contentful from "../lib/contentful";
import { PlaylistData } from "../entities/playlist";
import { EntrySkeletonType, FieldsType } from "contentful";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const fetchData = async () => {
    const res = await contentful.getEntries<EntrySkeletonType<PlaylistData>>({
      content_type: "playlist",
    });

    console.log("res", res.items[0].fields.title);
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
          <AssetSquareButton
            onPress={() => navigation.navigate("Playlist", { id: "1" })}
          />
          <AssetSquareButton
            onPress={() => navigation.navigate("Playlist", { id: "1" })}
          />
          <AssetSquareButton
            onPress={() => navigation.navigate("Playlist", { id: "1" })}
          />
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
          <AssetSquareButton
            onPress={() => navigation.navigate("Album", { id: "1" })}
          />
          <AssetSquareButton
            onPress={() => navigation.navigate("Album", { id: "1" })}
          />
          <AssetSquareButton
            onPress={() => navigation.navigate("Album", { id: "1" })}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
