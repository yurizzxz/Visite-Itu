import PlaceCard from "@/components/place-card";
import { places } from "@/constants/places";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CarouselProps {
  type: string;
  excludeId?: number; 
}

export default function Carousel({ type, excludeId }: CarouselProps) {
  const router = useRouter();

  const filteredPlaces = places.filter(
    (place) => place.tipo === type && place.id !== excludeId
  );

  return (
    <View className="mt-4">
      {filteredPlaces.length === 0 && <Text className="text-md text-light">Nenhum lugar relacionado encontrado</Text>}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredPlaces.map((place) => (
          <TouchableOpacity
            key={place.id}
            onPress={() => router.push(`/extra/${place.id}`)}
            style={{ marginRight: 12, width: 220 }}
          >
            <PlaceCard place={place} />
          </TouchableOpacity>
        ) )}
      </ScrollView>
    </View>
  );
}
