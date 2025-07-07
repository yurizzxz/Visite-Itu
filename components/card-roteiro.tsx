import type { Roteiro } from "@/types/roteiro";
import { Image } from "react-native";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

interface RoteiroCardProps {
  roteiro: Roteiro;     
  className?: string;
}

export default function RoteiroCard({ roteiro, className }: RoteiroCardProps) {
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
          {roteiro.description.length > 500 ? `${roteiro.description.substring(0, 500)}…` : roteiro.description}
        </CardDescription>
        
      </CardContent>
    </Card>
  );
}
