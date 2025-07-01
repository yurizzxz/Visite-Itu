import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import Select from "@/components/select";
import TopBar from "@/components/top-bar";
import { categorias } from "@/constants/categories";
import { places } from "@/constants/places";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

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

        <View className="mt-3 flex flex-col gap-4" style={{ paddingBottom: 60 }}>
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
    </Container>
  );
}
