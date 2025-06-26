import Container from "@/components/container";
import Select from "@/components/select";
import { useState } from "react";
import { Text } from "react-native";

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
      <Text className="text-sm text-black dark:text-white">
        Bem-vindo ao app com NativeWind!
      </Text>
    </Container>
  );
}
