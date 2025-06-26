import Container from "@/components/container";
import PlaceCard from "@/components/place-card";
import Select from "@/components/select";
import { useState } from "react";

export default function HomeScreen() {
  const [categoria, setCategoria] = useState("todos");

  const categorias = [
    { label: "Todos", value: "todos" },
    { label: "Restaurantes", value: "restaurantes" },
    { label: "Hotéis", value: "hoteis" },
    { label: "Passeios", value: "passeios" },
  ];
  
  return (
    <Container>
      <Select
        items={categorias}
        onValueChange={setCategoria}
        selectedValue={categoria}
      />
      <PlaceCard />
    </Container>
  );
}
