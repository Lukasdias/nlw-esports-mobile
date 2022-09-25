import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export const GameAdsSkeleton = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <Skeleton.Group show={true}>
      {array.map((item, idx: number) => (
        <View
          key={idx}
          style={{
            marginRight: 16,
          }}
        >
          <Skeleton width={180} height={292} radius={8} colorMode={"dark"} />
        </View>
      ))}
    </Skeleton.Group>
  );
};
