import { ReactNode } from "react";
import { ScrollView } from "react-native";

interface ContainerProps {
  children: ReactNode;
}

export default function ({ children }: ContainerProps) {
  return (
    <ScrollView  className="flex-1 mt-3 px-1.5 bg-white dark:bg-black mb-3">
      {children}
    </ScrollView>
  );
}
