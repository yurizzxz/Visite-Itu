import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Card, CardContent, CardTitle } from "./card";

export default function SectionCards() {
  return (
    <View className="grid grid-cols-3 gap-4 ">
      <TouchableOpacity onPress={() => router.push("/events")}>
        <Card>
          <CardContent>
            <CardTitle>Eventos</CardTitle>
          </CardContent>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/roteiro")}>
        <Card>
          <CardContent>
            <CardTitle>Roteiros</CardTitle>
          </CardContent>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/about")}>
        <Card>
          <CardContent>
            <CardTitle>Sobre Itu</CardTitle>
          </CardContent>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
