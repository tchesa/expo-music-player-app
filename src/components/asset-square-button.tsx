import { Image, TouchableOpacity, View } from "react-native";

type Props = {
  // image: string;
  onPress?: () => void;
};

const SIZE = 60;

const AssetSquareButton = ({
  // image,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ width: SIZE, height: SIZE, backgroundColor: "gray" }} />
      {/* <Image source={{ uri: image }} style={{ width: SIZE, height: SIZE }} /> */}
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
