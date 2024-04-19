import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { PlayerProvider } from "./src/providers/player-provider";

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerProvider>
        <Navigation />
      </PlayerProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
