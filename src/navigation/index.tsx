import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Album from "./album";
import Artist from "./artist";
import Playlist from "./playlist";
import Home from "./home";
import Player from "./player";

export type RootStackParamList = {
  Home: undefined;
  Album: { id: string };
  Artist: { id: string };
  Playlist: { id: string };
  Player: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Album" component={Album} />
        <RootStack.Screen name="Artist" component={Artist} />
        <RootStack.Screen name="Player" component={Player} />
        <RootStack.Screen name="Playlist" component={Playlist} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
