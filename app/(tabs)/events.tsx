import Container from "@/components/container";
import EventCard from "@/components/event-card";
import TopBar from "@/components/top-bar";
import { eventos } from "@/constants/events";
import { Text, View } from "react-native";

export default function EventsScreen() {
  return (
    <Container>
      <TopBar title="Eventos" showBack  />

      <View className="px-4">
        <Text className="text-md">Veja um dos principais eventos de Itu</Text>
      </View>
      
      <View className="px-4">
        {eventos.map((evento, index) => (
          <EventCard className="my-4" key={index} evento={evento} />
        ))}
      </View>
    </Container>
  );
}
