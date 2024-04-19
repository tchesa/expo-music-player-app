import { Image, TouchableOpacity, View } from "react-native";

type Props = {
  image?: string;
  onPress?: () => void;
};

const SIZE = 60;

const AssetSquareButton = ({ image, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {image ? (
        <Image source={{ uri: image }} style={{ width: SIZE, height: SIZE }} />
      ) : (
        <View style={{ width: SIZE, height: SIZE, backgroundColor: "gray" }} />
      )}
    </TouchableOpacity>
  );
};

const Skeleton = () => {
  return (
    <View style={{ width: SIZE, height: SIZE, backgroundColor: "gray" }} />
  );
};

AssetSquareButton.Skeleton = Skeleton;

export default AssetSquareButton;
