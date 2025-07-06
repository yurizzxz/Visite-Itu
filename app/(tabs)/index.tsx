import Carousel from "@/components/carousel";
import Container from "@/components/container";
import SectionCards from "@/components/section-cards";
import TopBar from "@/components/top-bar";
import PrimaryButton from "@/components/ui/button";
import { places } from "@/constants/places";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  // const [categoria, setCategoria] = useState("todos");

  const router = useRouter();

  const tiposUnicos = Array.from(new Set(places.map((p) => p.tipo)));

  return (
    <Container className="px-0">
      <TopBar showFavorites />
      <View className="flex  flex-col gap-4 px-4">
        {/* <Select
          items={categorias}
          onValueChange={setCategoria}
          selectedValue={categoria}
        /> */}
        <SectionCards />
        <View
          className="mt-0 flex flex-col gap-4 "
          style={{ paddingBottom: 60 }}
        >
          {tiposUnicos.map((tipo) => (
            <View className="border-b border-[#E2E2E2]" key={tipo}>
              <View className="mb-8 mt-3">
                <View className="flex-row items-center justify-between">
                  <View className="flex flex-col">
                    <Text className="text-2xl font-bold capitalize mb-0">
                      {tipo}
                    </Text>
                    <View className="bg-blue-500 p-0.5 w-16 mt-0.5 rounded-full"></View>
                  </View>
                  <PrimaryButton
                    className="gap-2"
                    onPress={() => router.push(`/extra/tipos/${tipo}`)}
                  >
                    <Text className="text-md text-white">Ver todos</Text>
                    <Entypo name="chevron-right" size={18} color="white" />
                  </PrimaryButton>
                </View>

                <Carousel limit={4} type={tipo} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
}
