import { Button, Text, View } from "react-native";
import usePlayer from "../hooks/usePlayer";

const Player = () => {
  const { playing, play, pause, previous, next, currentTrack } = usePlayer();
  return (
    <View>
      <Text>{currentTrack?.title}</Text>
      <Button onPress={previous} title="Previous" />
      <Button
        onPress={playing ? pause : play}
        title={playing ? "Pause" : "Play"}
      />
      <Button onPress={next} title="Next" />
    </View>
  );
};

export default Player;
