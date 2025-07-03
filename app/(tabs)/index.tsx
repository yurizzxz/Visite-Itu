import Carousel from "@/components/carousel";
import Container from "@/components/container";
import TopBar from "@/components/top-bar";
import { places } from "@/constants/places";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  // const [categoria, setCategoria] = useState("todos");

  const router = useRouter();

  const tiposUnicos = Array.from(new Set(places.map((p) => p.tipo)));

  return (
    <Container className="px-0 bg">
      <TopBar showFavorites />
      <View className="flex px-4 flex-col gap-4">
        {/* <Select
          items={categorias}
          onValueChange={setCategoria}
          selectedValue={categoria}
        /> */}

        <View
          className="mt-0 flex flex-col gap-4"
          style={{ paddingBottom: 60 }}
        >
          {tiposUnicos.map((tipo) => (
            <View key={tipo} className="mt-2">
              <Text className="text-2xl font-bold capitalize mb-0">{tipo}</Text>
              <Carousel type={tipo} />
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
}
