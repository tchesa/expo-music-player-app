import { Text, View } from "react-native";
import SectionHeader from "../components/section-header";
import AssetSquareButton from "../components/asset-square-button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from ".";
import { useEffect, useState } from "react";
import { Artist } from "../entities/artist";
import { getArtist } from "../services/artist";

type Props = NativeStackScreenProps<RootStackParamList, "Artist">;

const ArtistScreen = ({ navigation, route }: Props) => {
  const [artist, setArtist] = useState<Artist>();
  const { id } = route.params;

  const fetchData = async (id: string) => {
    const artist = await getArtist(id);
    setArtist(artist);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "gray",
          height: 200,
          justifyContent: "flex-end",
          padding: 16,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 36,
            lineHeight: 48,
            fontWeight: "bold",
            textShadowColor: "#0008",
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 12,
          }}
        >
          {artist?.name}
        </Text>
      </View>
      <View style={{ padding: 16 }}>
        <SectionHeader title="Albums" style={{ marginBottom: 4 }} />
        <View style={{ flexDirection: "row", columnGap: 4 }}>
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

export default ArtistScreen;
