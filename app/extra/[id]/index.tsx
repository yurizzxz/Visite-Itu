import PlaceCard from "@/components/place-card";
import { places } from "@/constants/places";
import { Place } from "@/types/place";
import Entypo from "@expo/vector-icons/Entypo";
import Constants from "expo-constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  LayoutAnimation,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

export default function Screen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const statusBarHeight = Constants.statusBarHeight;

  const place: Place | undefined = places.find((p) => p.id === Number(id));

  const [expandedId, setExpandedId] = useState<string | null>("description"); 

  useEffect(() => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleAccordion = (key: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((current) => (current === key ? null : key)); 
  };

  if (!place) {
    return (
      <View>
        <Text>Lugar Não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <View
          className="flex-row absolute z-10  items-center gap-3 px-3"
          style={{ marginTop: statusBarHeight + 22 }}
        >
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
          <Text className="text-xl mt-2 text-gray-700">{place.businessHours}</Text>
        </View>

        <View className="flex mt-4 flex-col gap-2">
          <Pressable
            onPress={() => toggleAccordion("description")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">Descrição</Text>
              <Entypo
                name={expandedId === "description" ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            {expandedId === "description" && (
              <View className="mt-3">
                <Text className="text-base text-gray-700 mb-1">{place.description}</Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() => toggleAccordion("additional")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">Adicionais</Text>
              <Entypo
                name={expandedId === "additional" ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            {expandedId === "additional" && (
              <View className="mt-3">
                <Text className="text-gray-700">{place.additional}</Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() => toggleAccordion("location")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">Localização</Text>
              <Entypo
                name={expandedId === "location" ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            {expandedId === "location" && (
              <View className="mt-3">
                <Text className="text-gray-700">
                  {place.city}, {place.state}
                </Text>
                <Text className="text-gray-700">{place.street}</Text>
              </View>
            )}
          </Pressable>
        </View>

        <View className="py-5" />

        <View className="pb-8">
          <Text className="text-2xl font-bold mb-3">Itens Relacionados</Text>
          <View className="flex flex-row gap-3">
            {places.map((p) => (
              <TouchableOpacity
                key={p.id}
                onPress={() => router.push(`/extra/${p.id}`)}
                className="flex flex-col gap-3"
              >
                <PlaceCard className="w-[12.3rem]" place={p} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
