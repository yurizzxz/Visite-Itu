import type { Roteiro } from "@/types/roteiro";
import { Image } from "react-native";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

interface RoteiroCardProps {
  roteiro: Roteiro;     
  className?: string;
}

export default function RoteiroCard({ roteiro, className }: RoteiroCardProps) {

  const summary =
    roteiro.description ??
    roteiro.steps[0]?.description ??
    "Explore this itinerary!";

  return (
    <Card className={className}>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: "100%", height: 120 }}
        resizeMode="cover"
      />

      <CardContent className="space-y-1">
        <CardTitle>{roteiro.title}</CardTitle>
        <CardDescription>
          {summary.length > 50 ? `${summary.substring(0, 50)}…` : summary}
        </CardDescription>

        {/* Exemplos extras — descomente se quiser exibir */}
        {/* <CardDescription>{roteiro.duration}</CardDescription>
        <CardDescription>{roteiro.targetAudience}</CardDescription> */}
      </CardContent>
    </Card>
  );
}
