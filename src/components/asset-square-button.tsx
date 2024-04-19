import { Image, TouchableOpacity, View } from "react-native";

type Props = {
  image?: string;
  onPress?: () => void;
  rounded?: boolean;
};

const SIZE = 60;

const AssetSquareButton = ({ image, onPress, rounded = false }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={{
            width: SIZE,
            height: SIZE,
            borderRadius: rounded ? SIZE / 2 : 0,
          }}
        />
      ) : (
        <View style={{ width: SIZE, height: SIZE, backgroundColor: "gray" }} />
      )}
    </TouchableOpacity>
  );
};

const Skeleton = ({ rounded = false }: Pick<Props, "rounded">) => {
  return (
    <View
      style={{
        width: SIZE,
        height: SIZE,
        borderRadius: rounded ? SIZE / 2 : 0,
        backgroundColor: "gray",
      }}
    />
  );
};

AssetSquareButton.Skeleton = Skeleton;

export default AssetSquareButton;
