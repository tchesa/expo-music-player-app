import { Text, View } from "react-native";

type Props = {
  // id: string;
  title: string;
  // releaseDate: Date;
  onPress?: () => void;
};

const AlbumCard = ({ title }: Props) => {
  return (
    <View>
      <View style={{ width: 60, height: 60, backgroundColor: "gray" }} />
      <View>
        <Text>{title}</Text>
        <Text>2003</Text>
      </View>
    </View>
  );
};

export default AlbumCard;
