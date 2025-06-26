import { Place } from "@/types/place";
import { Image } from "react-native";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Card>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: "100%", height: 120 }}
        resizeMode="cover"
      />

      <CardContent>
        <CardTitle>{place.name}</CardTitle>
        <CardDescription>{place.description}</CardDescription>
        {/* <CardDescription>
          {place.city}, {place.state}
        </CardDescription>
        <CardDescription>Horário: {place.businessHours}</CardDescription>
        {place.additional ? (
          <CardDescription>Adicionais: {place.additional}</CardDescription>
        ) : null} */}
      </CardContent>
    </Card>
  );
}
