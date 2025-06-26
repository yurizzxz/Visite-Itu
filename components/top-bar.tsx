  import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

  export default function TopBar() {
    const router = useRouter()

    const goToHome = () => {
      router.push('/')
    }

    const goToFavorites = () => {
      router.push('./extra/favorite-places')
    }

    return (
      <View className="flex py-4 px-1.5 border-b border-[#D9D9D9] flex-row  justify-between">
        <Pressable >
          <Entypo name="heart-outlined" size={20} color="black" />
        </Pressable>
        <Pressable onPress={goToHome}>
          <Text>LogoTeste</Text>
        </Pressable>
        <Pressable onPress={goToFavorites}>
          <Entypo name="heart-outlined" size={20} color="black" />
        </Pressable>
      </View>
    );
  }
