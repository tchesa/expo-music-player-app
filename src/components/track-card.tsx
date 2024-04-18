import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  // id: string;
  title: string;
  artist: string;
  onPress?: () => void;
};

const TrackCard = ({ title, artist }: Props) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 4,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          lineHeight: 24,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: 16,
        }}
      >
        {artist}
      </Text>
    </TouchableOpacity>
  );
};

export default TrackCard;
