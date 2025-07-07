import Container from "@/components/container";
import PlaceMention from "@/components/place-mention";
import { roteiros } from "@/constants/roteiros";
import Entypo from "@expo/vector-icons/Entypo";
import Constants from "expo-constants";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, LayoutAnimation, Pressable, Text, View } from "react-native";

export default function RoteiroDetalhes() {
  const { id } = useLocalSearchParams();
  const statusBarHeight = Constants.statusBarHeight;

  const [expandedId, setExpandedId] = useState<string | null>("description");


  const roteiro = roteiros.find((r) => r.id === Number(id));

  if (!roteiro) {
    return <Text>Roteiro não encontrado.</Text>;
  }

  const toggleAccordion = (key: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((current) => (current === key ? null : key));
  };

  return (
    <Container>
      <View>
        <View
          className="flex-row w-full justify-between absolute z-10  items-center gap-3 px-4"
          style={{ marginTop: statusBarHeight + 14 }}
        >
          <Pressable onPress={() => router.push("/")}>
            <Entypo name="chevron-left" size={28} color="#2563eb" />
          </Pressable>
        </View>

        <Image
          source={roteiro.image}  
          style={{ height: 300, resizeMode: "cover", width: "100%" }}
        />
      </View>


      <View className="px-4 my-8">
        <View className="mb-2">
          <View className="mb-2">
            <View className="flex-row justify-between items-start gap-2">
              <View className="flex-1 pr-2">
                <Text className="text-4xl">{roteiro.title}</Text>
              </View>
            </View>
          </View>
        </View>


        <View className="flex mt-4 flex-col gap-2">
          <Pressable
            onPress={() => toggleAccordion("description")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">
                Descrição
              </Text>
              <Entypo
                name={
                  expandedId === "description" ? "chevron-up" : "chevron-down"
                }
                size={24}
                color="black"
              />
            </View>
            {expandedId === "description" && (
              <View className="mt-3">
                <Text className="text-base text-gray-700 mb-1">
                  {roteiro.description}
                </Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() => toggleAccordion("additional")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">
                Adicionais
              </Text>
              <Entypo
                name={
                  expandedId === "additional" ? "chevron-up" : "chevron-down"
                }
                size={24}
                color="black"
              />
            </View>
            {expandedId === "additional" && (
              <View className="mt-3">
                <Text className="text-gray-700">{roteiro.support}</Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() => toggleAccordion("location")}
            className="border border-gray-300 rounded p-3 bg-gray-100"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-gray-800">
                Público
              </Text>
              <Entypo
                name={expandedId === "location" ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </View>
            {expandedId === "location" && (
              <View className="mt-3">
                <Text className="text-gray-700">{roteiro.targetAudience}</Text>
              </View>
            )}
          </Pressable>
        </View>

        <View className="flex flex-col mt-6 mb-4">
          <Text className="text-2xl font-bold">Pontos do Roteiro</Text>
          <View className="bg-blue-500 p-0.5 w-16 mt-0.5 rounded-full"></View>
        </View>

        {roteiro.placesId.map((place, index) => (
          <View key={index} className="flex flex-col items-center">
            {index > 0 &&
              <View className="bg-blue-500 w-1 h-5 my-2 rounded-full"></View>
            }
            <PlaceMention placeId={place} showLocation />
          </View>
        ))}
      </View>
    </Container>
  );
}
