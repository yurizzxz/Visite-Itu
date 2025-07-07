import Carousel from "@/components/carousel";
import PrimaryButton from "@/components/ui/button";
import { places } from "@/constants/places";
import { Place } from "@/types/place";
import { isFavorite, removeFavorite, saveFavorite } from "@/utils/storage";
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
  UIManager,
  View,
} from "react-native";

export default function Screen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);
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

  useEffect(() => {
    if (place) {
      isFavorite(place.id).then(setIsSaved);
    }
  }, [place]);

  const handleToggleFavorite = async () => {
    if (!place) return;
    if (isSaved) {
      await removeFavorite(place.id);
    } else {
      await saveFavorite(place);
    }
    setIsSaved(!isSaved);
  };

  const goToFavorites = () => {
    router.push("../extra/favorite-places");
  };

  return (
    <ScrollView>
      <View>
        <View
          className="flex-row w-full justify-between absolute z-10  items-center gap-3 px-4"
          style={{ marginTop: statusBarHeight + 14 }}
        >
          <Pressable onPress={() => router.back()}>
            <Entypo name="chevron-left" size={28} color="#2563eb" />
          </Pressable>

          <PrimaryButton className="gap-2" onPress={goToFavorites}>
            <Entypo name="heart" size={17} color="white" />
            <Text className="text-lg text-white">Ver Favoritos</Text>
          </PrimaryButton>
        </View>

        <Image
          source={require("@/assets/images/icon.png")}
          className="w-full"
          style={{ height: 300 }}
        />
      </View>

      <View className="px-4 mt-8">
        <View className="mb-2">
          <View className="mb-2">
            <View className="flex-row justify-between items-start gap-2">
              <View className="flex-1 pr-2">
                <Text className="text-4xl">{place.name}</Text>
              </View>
              <Pressable onPress={handleToggleFavorite} className="px-1">
                <Entypo
                  name={isSaved ? "heart" : "heart-outlined"}
                  size={28}
                  color={isSaved ? "#2563eb" : "black"}
                />
              </Pressable>
            </View>

            <Text className="text-xl mt-2 text-gray-700">
              {place.businessHours}
            </Text>
          </View>
        </View>

        <View className="flex mt-4 flex-col gap-2">
          <Pressable
            onPress={() => toggleAccordion("description")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">
                Descrição
              </Text>
              <Entypo
                name={
                  expandedId === "description" ? "chevron-up" : "chevron-down"
                }
                size={24}
                color="black"
              />
            </View>
            {expandedId === "description" && (
              <View className="mt-3">
                <Text className="text-base text-gray-700 mb-1">
                  {place.description}
                </Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() => toggleAccordion("additional")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">
                Adicionais
              </Text>
              <Entypo
                name={
                  expandedId === "additional" ? "chevron-up" : "chevron-down"
                }
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
              <Text className="text-lg font-semibold text-gray-800">
                Localização
              </Text>
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
          <View className="flex-row justify-between items-center">
            <View className="flex flex-col">
              <Text className="text-2xl font-bold">Itens Relacionados</Text>
              <View className="bg-blue-500 p-0.5 w-16 mt-0.5 rounded-full"></View>
            </View>
            <PrimaryButton
              className="gap-2"
              onPress={() => router.push(`/extra/tipos/${place.tipo}`)}
            >
              <Text className="text-md text-white">Ver todos</Text>
              <Entypo name="chevron-right" size={18} color="white" />
            </PrimaryButton>
          </View>
          <View className="flex flex-row gap-3">
            <Carousel limit={4} type={place.tipo} excludeId={place.id} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
