import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import Select from "@/components/select";
import TopBar from "@/components/top-bar";
import { categorias } from "@/constants/categories";
import { places } from "@/constants/places";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function HomeScreen() {
  const [categoria, setCategoria] = useState("todos");

  const router = useRouter();

  return (
    <Container>
      <View className="flex flex-col gap-4">
        <TopBar />
        <Select
          items={categorias}
          onValueChange={setCategoria}
          selectedValue={categoria}
        />
        <Pressable className="flex flex-col gap-3">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </Pressable>
      </View>
    </Container>
  );
}
