import PlaceCard from "@/components/place-card";
import { places } from "@/constants/places";
import { Place } from "@/types/place";
import Entypo from "@expo/vector-icons/Entypo";
import Constants from "expo-constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Screen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const router = useRouter();

  const statusBarHeight = Constants.statusBarHeight;

  const place: Place | undefined = places.find((p) => p.id === Number(id));

  if (!place) {
    return (
      <View>
        <Text>Lugar Não encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <View >
        <View className="flex-row absolute z-10  items-center gap-3 px-3" style={{ marginTop: statusBarHeight + 22 }}>
          <Pressable onPress={() => router.back()}>
            <Entypo name="chevron-left" size={28} color="black" />
          </Pressable>
        </View>

        <Image
          source={require("@/assets/images/icon.png")}
          className="w-full"
          style={{ height: 300 }}
        />
      </View>

      <View className="px-4 mt-8">
        <View className="mb-2">
          <View className="flex flex-row justify-between">
            <Text className="text-4xl">{place.name}</Text>
            <Pressable>
              <Entypo name="heart-outlined" size={28} color="black" />
            </Pressable>
          </View>
          <Text className="text-lg mt-1.5 text-gray-700">
            {place.businessHours}
          </Text>
        </View>

        {/* accordion */}
        <View>
          <Text className="text-base text-gray-700">{place.description}</Text>
          <Text>
            {place.city}, {place.state}
          </Text>
          <Text>{place.additional}</Text>
        </View>

        <View className="mt-8">
          <Text className="text-2xl font-bold mb-3">Itens Relacionados</Text>
          <View className="flex flex-row gap-3">
            {places.map((place) => (
              <TouchableOpacity
                key={place.id}
                onPress={() => router.push(`/extra/${place.id}`)}
                className="flex flex-col gap-3"
              >
                <PlaceCard place={place} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </>
  );
}
