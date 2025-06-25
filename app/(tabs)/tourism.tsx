import { Text, View } from 'react-native';

export default function TouristScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-black dark:text-white">
        Bem-vindo ao app com NativeWind! Tourist
      </Text>
    </View>
  );
}
