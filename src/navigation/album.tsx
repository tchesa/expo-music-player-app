import { Text, View } from "react-native";
import TrackCard from "../components/track-card";

const Album = () => {
  const artistName = "Artist name";
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 40, paddingBottom: 12, alignItems: "center" }}>
        <View style={{ width: 280, height: 280, backgroundColor: "gray" }} />
      </View>
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 4,
          }}
        >
          Album name
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
          <TrackCard title="Track 1" artist={artistName} />
          <TrackCard title="Track 2" artist={artistName} />
          <TrackCard title="Track 3" artist={artistName} />
          <TrackCard title="Track 4" artist={artistName} />
          <TrackCard title="Track 5" artist={artistName} />
          <TrackCard title="Track 6" artist={artistName} />
          <TrackCard title="Track 7" artist={artistName} />
          <TrackCard title="Track 8" artist={artistName} />
          <TrackCard title="Track 9" artist={artistName} />
          <TrackCard title="Track 10" artist={artistName} />
          <TrackCard title="Track 11" artist={artistName} />
          <TrackCard title="Track 12" artist={artistName} />
        </View>
      </View>
    </View>
  );
};

export default Album;
