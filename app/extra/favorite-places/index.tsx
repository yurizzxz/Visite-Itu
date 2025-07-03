import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import { Place } from "@/types/place";
import { getFavorites } from "@/utils/storage";
import Entypo from "@expo/vector-icons/Entypo";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function FavoritosScreen() {
  const [favorites, setFavorites] = useState<Place[]>([]);
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      getFavorites().then(setFavorites);
    }, [])
  );

  return (
    <Container className="px-0">
      <View className="border-b border-[#E1E1E1] mb-4 pt-4">
        <View className="flex-row  items-center mb-3 gap-3 px-3 ">
          <Pressable onPress={() => router.push("/")}>
            <Entypo name="chevron-left" size={28} color="black" />
          </Pressable>
          <Text className="text-2xl font-bold ">Meus Favoritos</Text>
        </View>
      </View>

      <View className="px-4">
        {favorites.length === 0 ? (
          <Text>Nenhum local salvo ainda.</Text>
        ) : (
          favorites.map((place) => (
            <TouchableOpacity
              key={place.id}
              onPress={() => router.push(`/extra/${place.id}`)}
              className="flex flex-col gap-3"
            >
              <PlaceCard place={place} />
            </TouchableOpacity>
          ))
        )}
      </View>
    </Container>
  );
}
