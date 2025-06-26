import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import Select from "@/components/select";
import { useState } from "react";
import { Pressable } from "react-native";

export default function HomeScreen() {
  const [categoria, setCategoria] = useState("todos");

  const categorias = [
    { label: "Todos", value: "todos" },
    { label: "Restaurantes", value: "restaurantes" },
    { label: "Hotéis", value: "hoteis" },
    { label: "Passeios", value: "passeios" },
  ];

  const places = [
    {
      id: 1,
      name: "Teste",
      description: "teste",
      city: "Itu",
      state: "São Paulo",
      street: "Rua Teste",
      additional: "teste",
      businessHours: "08:00 - 19:00",
    },
    {
      id: 2,
      name: "Outro Lugar",
      description: "descrição do outro lugar",
      city: "Campinas",
      state: "São Paulo",
      street: "Rua Exemplo",
      additional: "algo adicional",
      businessHours: "09:00 - 18:00",
    },
  ];

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
