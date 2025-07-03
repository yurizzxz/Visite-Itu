import Constants from "expo-constants";
import { ReactNode } from "react";
import { ScrollView } from "react-native";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ({ children, className }: ContainerProps) {
  const statusBarHeight = Constants.statusBarHeight;
  return (
    <ScrollView
      className={`flex-1 bg-[#F4F3F3]px-4 ${className}`}
      style={{ paddingTop: statusBarHeight }}
    >
      {children}
    </ScrollView>
  );
}