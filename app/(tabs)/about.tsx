import Container from "@/components/container";
import TopBar from "@/components/top-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <Container>
      <TopBar title="Sobre" showBack showFavorites />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 0 }}>
        <Text className="text-base leading-6 text-gray-800 mb-4">
          Itu é uma cidade localizada no interior do estado de São Paulo, famosa pelo seu charme histórico e pelas atrações turísticas com objetos gigantes, que renderam à cidade o apelido de “Cidade dos Exageros”.
        </Text>

        <Image
          source={require("@/assets/images/roteiro1.jpg")}
          style={{ width: "100%", height: 250 }}
          accessible={true}
          accessibilityLabel="Imagem representativa da cidade de Itu"
        />

        <Text className="text-xl font-bold mb-1 mt-4 text-gray-900">Curiosidades:</Text>

        <View className="mb-6 space-y-2">
          <Text className="text-base leading-6 text-gray-700">• Fundada em 1610</Text>
          <Text className="text-base leading-6 text-gray-700">• Berço da Proclamação da República</Text>
          <Text className="text-base leading-6 text-gray-700">• Atrações famosas como o semáforo, o telefone e o orelhão gigantes</Text>
          <Text className="text-base leading-6 text-gray-700">• Possui o Parque do Varvito, com formações geológicas únicas</Text>
          <Text className="text-base leading-6 text-gray-700">• Muito conhecida pelo turismo rural e gastronômico</Text>
        </View>

        <Text className="text-lg font-bold mb-1 text-gray-900">Dicas de passeio:</Text>

        <View className="mb-10 space-y-2">
          <Text className="text-base leading-6 text-gray-700">• Visite a Praça dos Exageros</Text>
          <Text className="text-base leading-6 text-gray-700">• Almoce no Bar do Alemão</Text>
          <Text className="text-base leading-6 text-gray-700">• Curta um dia na Fazenda do Chocolate</Text>
          <Text className="text-base leading-6 text-gray-700">• Conheça o Museu Republicano de Itu</Text>
        </View>
      </ScrollView>
    </Container>
  );
}
