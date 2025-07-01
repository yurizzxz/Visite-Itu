import { Place } from "@/types/place";
import { Image } from "react-native";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

interface PlaceCardProps {
  place: Place;
  className?: string;
}

export default function PlaceCard({ place, className }: PlaceCardProps) {
  return (
    <Card className={className}>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: "100%", height: 120 }}
        resizeMode="cover"
      />

      <CardContent>
        <CardTitle>{place.name}</CardTitle>
        <CardDescription>
          {place.description && place.description.length > 50
            ? `${place.description.substring(0, 50)}...`
            : place.description}
        </CardDescription>
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
