import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import Select from "@/components/select";
import { categorias } from "@/constants/categories";
import { places } from "@/constants/places";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable } from "react-native";

export default function HomeScreen() {
  const [categoria, setCategoria] = useState("todos");

  const router = useRouter()

  return (
    <Container>
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
    </Container>
  );
}
