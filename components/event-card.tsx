import type { Evento } from "@/types/event";
import { Image } from "react-native";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

interface EventCardProps {
  evento: Evento;     
  className?: string;
}

export default function EventCard({ evento, className }: EventCardProps) {

  return (
    <Card className={className}>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: "100%", height: 120 }}
        resizeMode="cover"
      />

      <CardContent className="space-y-1">
        <CardTitle>{evento.name}</CardTitle>
        <CardDescription>
          {evento.description && evento.description.length > 50
            ? `${evento.description.substring(0, 50)}…`
            : evento.description}
        </CardDescription>

        {/* Exemplos extras — descomente se quiser exibir */}
        {/* <CardDescription>{evento.duration}</CardDescription>
        <CardDescription>{evento.targetAudience}</CardDescription> */}
      </CardContent>
    </Card>
  );
}
