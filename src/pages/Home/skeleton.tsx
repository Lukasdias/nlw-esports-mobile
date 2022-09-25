import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export const HomeSkeleton = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Skeleton.Group show={true}>
      {array.map((item, idx: number) => (
        <View
          key={idx}
          style={{
            marginRight: 16,
          }}
        >
          <Skeleton width={240} height={320} radius={8} colorMode={"dark"} />
        </View>
      ))}
    </Skeleton.Group>
  );
};
