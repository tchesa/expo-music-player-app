import { Text, TouchableOpacity, View } from "react-native";
import { Track } from "../entities/track";
import { useNavigation } from "@react-navigation/native";
import usePlayer from "../hooks/usePlayer";

type Props = {
  track: Track;
  onPress?: () => void;
};

const TrackCard = ({ track }: Props) => {
  const navigation = useNavigation();
  const { playTrack } = usePlayer();

  const { title } = track;

  const handlePress = () => {
    navigation.navigate("Player");
    playTrack(track);
  };

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 4,
      }}
      onPress={handlePress}
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
        --
      </Text>
    </TouchableOpacity>
  );
};

export default TrackCard;
