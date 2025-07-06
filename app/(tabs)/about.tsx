import Container from "@/components/container";
import TopBar from "@/components/top-bar";
import { ScrollView, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <Container>
      <TopBar title="Sobre" showBack showFavorites />

      <ScrollView className="px-4 space-y-4">


        <Text className="text-md  ">
          Itu é uma cidade localizada no interior do estado de São Paulo, famosa
          pelo seu charme histórico e pelas atrações turísticas com objetos
          gigantes, que renderam à cidade o apelido de “Cidade dos Exageros”.
        </Text>
{/* 
        <Image
          source={require("@/assets/itu-telefone-gigante.jpg")}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        /> */}

        <Text className="text-xl font-bold mt-2">Curiosidades:</Text>

        <View className="space-y-2">
          <Text className="text-md">• Fundada em 1610</Text>
          <Text className="text-md">• Berço da Proclamação da República</Text>
          <Text className="text-md">
            • Atrações famosas como o semáforo, o telefone e o orelhão gigantes
          </Text>
          <Text className="text-md">
            • Possui o Parque do Varvito, com formações geológicas únicas
          </Text>
          <Text className="text-md">
            • Muito conhecida pelo turismo rural e gastronômico
          </Text>
        </View>

        <Text className="text-lg font-bold mt-4">Dicas de passeio:</Text>

        <View className="space-y-2 mb-6">
          <Text className="text-md">• Visite a Praça dos Exageros</Text>
          <Text className="text-md">• Almoce no Bar do Alemão</Text>
          <Text className="text-md">• Curta um dia na Fazenda do Chocolate</Text>
          <Text className="text-md">• Conheça o Museu Republicano de Itu</Text>
        </View>
      </ScrollView>
    </Container>
  );
}
