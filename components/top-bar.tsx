import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Image, Pressable, View } from "react-native";

export default function TopBar() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const goToFavorites = () => {
    router.push("./extra/favorite-places");
  };

  return (
    <View className="flex py-4 px-1.5 flex-row  justify-between">
      <Pressable>
        <Entypo name="heart-outlined" size={28} color="black" />
      </Pressable>
      <Pressable onPress={goToHome}>
        <Image
          source={require("@/assets/images/logoAppItuPng.png")}
          style={{ width: 85, height: 40, resizeMode: "cover", marginTop: -8 }}
        />
      </Pressable>
      <Pressable onPress={goToFavorites}>
        <Entypo name="heart-outlined" size={28} color="black" />
      </Pressable>
    </View>
  );
}
