import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import { Place } from "@/types/place";
import { getFavorites } from "@/utils/storage";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function FavoritosScreen() {
  const [favorites, setFavorites] = useState<Place[]>([]);
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      getFavorites().then(setFavorites);
    }, [])
  );

  return (
    <Container>
      <Text className="text-2xl font-bold mb-4">Meus Favoritos</Text>
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
    </Container>
  );
}
