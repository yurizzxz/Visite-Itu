import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, Text, View } from "react-native";

export default function TopBar() {
  return (
    <View className="flex py-4 px-1.5 border-b border-[#D9D9D9] flex-row  justify-between">
      <Pressable >
        <Entypo name="heart-outlined" size={20} color="black" />
      </Pressable>
      <View>
        <Text>LogoTeste</Text>
      </View>
      <Pressable >
        <Entypo name="heart-outlined" size={20} color="black" />
      </Pressable>
    </View>
  );
}
