import Container from "@/components/container";
import TopBar from "@/components/top-bar";
import { roteiros } from "@/constants/roteiros";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RoteiroDetalhes() {
  const { id } = useLocalSearchParams();

  const roteiro = roteiros.find((r) => r.id === Number(id));

  if (!roteiro) {
    return <Text>Roteiro não encontrado.</Text>;
  }

  return (
    <Container>
      <TopBar title={roteiro.title} showBack />

      <View className="px-4">
        <Text className="mb-2">Duração: {roteiro.duration}</Text>
        <Text className="mb-4">Público-alvo: {roteiro.targetAudience}</Text>

        {roteiro.steps.map((step, index) => (
          <View key={index} className="mb-3">
            <Text className="text-lg font-semibold">{step.title}</Text>
            <Text>{step.description}</Text>
          </View>
        ))}
      </View>
    </Container>
  );
}
