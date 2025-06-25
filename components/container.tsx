import { ReactNode } from "react";
import { View } from "react-native";

interface ContainerProps {
  children: ReactNode;
}

export default function ({ children }: ContainerProps) {
  return (
    <View className="flex-1 mt-3 px-1 bg-white dark:bg-black">
      {children}
    </View>
  );
}
