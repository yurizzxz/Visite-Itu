import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import PrimaryButton from "./ui/button";

export default function TopBar({
  showBack = false,
  showFavorites = false,
  title = "Início",
}) {
  const router = useRouter();

  const goToFavorites = () => {
    router.push("./extra/favorite-places");
  };

  return (
    <View className="border-b border-[#E2E2E2] mb-4 pt-4">
      <View className="flex-row justify-between  items-center mb-3 gap-3 px-4 ">
        <View className="flex-row items-center gap-3">
          {showBack && (
            <Pressable onPress={() => router.back()}>
              <Entypo name="chevron-left" size={28} color="#2563eb" />
            </Pressable>
          )}
          <Text className="text-2xl font-bold ">{title}</Text>
        </View>
        {showFavorites && (
          <PrimaryButton onPress={goToFavorites}>
            <Entypo name="heart" size={17} color="white" />
            <Text className="text-lg text-white">Ver Favoritos</Text>
          </PrimaryButton>
        )}
      </View>
    </View>
  );
}
