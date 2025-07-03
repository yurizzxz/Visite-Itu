import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import TopBar from "@/components/top-bar";
import { places } from "@/constants/places";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

function getParamAsString(param: string | string[] | undefined): string {
  if (!param) return "";
  return Array.isArray(param) ? param[0] : param;
}

export default function ExtraScreen() {
  const { tipo } = useLocalSearchParams();
  const filteredPlaces = places.filter((p) => p.tipo === tipo);

  return (
    <Container>
      <TopBar title={getParamAsString(tipo)} showBack showFavorites />

      <View className="px-4" style={{ paddingBottom: 60 }}>
        {filteredPlaces.map((place) => (
          <View className="mb-4" key={place.id}>
            <PlaceCard place={place} />
          </View>
        ))}
      </View>
    </Container>
  );
}
