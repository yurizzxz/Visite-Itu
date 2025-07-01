import Container from "@/components/container";
import TopBar from "@/components/top-bar";
import { places } from "@/constants/places";
import { Place } from "@/types/place";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Screen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const place: Place | undefined = places.find((p) => p.id === Number(id));

  if (!place) {
    return (
      <View>
        <Text>Lugar Não encontrado</Text>
      </View>
    );
  }

  return (
    <Container>
        <TopBar showBack />
      <Text className="text-xl font-bold mb-2">{place.name}</Text>
      <Text className="text-base text-gray-700">{place.description}</Text>
    </Container>
  );
}
