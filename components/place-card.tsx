import { Image, View } from "react-native";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

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

export default function PlaceCardList() {
  return (
    <View className="flex flex-col gap-3">
      {places.map((place) => (
        <Card key={place.id}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={{ width: "100%", height: 120 }}
            resizeMode="cover"
          />

          <CardContent>
            <CardTitle>{place.name}</CardTitle>
            <CardDescription>{place.description}</CardDescription>
            <CardDescription>
              {place.city}, {place.state}
            </CardDescription>
            <CardDescription>Horário: {place.businessHours}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </View>
  );
}
