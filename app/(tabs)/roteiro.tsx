import RoteiroCard from "@/components/card-roteiro";
import Container from "@/components/container";
import TopBar from "@/components/top-bar";
import { roteiros } from "@/constants/roteiros";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function RoteiroScreen() {
  const router = useRouter();
  return (
    <Container>
      <TopBar title="Roteiros" showBack  />
      <View className="px-4">
        <Text className="text-md">Veja um dos principais roteiros de Itu</Text>

        {roteiros.map((roteiro, index) => (
          <TouchableOpacity onPress={() => router.push(`./roteiroId/${roteiro.id}`)} key={index}>
            <RoteiroCard roteiro={roteiro} className="mb-4 mt-4" />
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
}
