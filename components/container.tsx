import Constants from "expo-constants";
import { ReactNode } from "react";
import { ScrollView } from "react-native";

interface ContainerProps {
  children: ReactNode;
}

export default function ({ children }: ContainerProps) {
  const statusBarHeight = Constants.statusBarHeight;
  return (
    <ScrollView
      className="flex-1 mt-3 px-4 bg-white pb-3"
      style={{ paddingTop: statusBarHeight }}
    >
      {children}
    </ScrollView>
  );
}
