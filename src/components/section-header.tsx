import { StyleProp, Text, View, ViewStyle } from "react-native";

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

const SectionHeader = ({ title, style }: Props) => {
  return (
    <View
      style={[
        style,
        {
          borderBottomWidth: 1,
        },
      ]}
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
    </View>
  );
};

export default SectionHeader;
