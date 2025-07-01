import PlaceCard from "@/components/place-card";
import { places } from "@/constants/places";
import { useRouter } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";

export default function Carousel() {
  const router = useRouter();

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {places.map((place) => (
          <TouchableOpacity
            key={place.id}
            onPress={() => router.push(`/extra/${place.id}`)}
            style={{ marginRight: 12, width: 220 }}
          >
            <PlaceCard place={place} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
