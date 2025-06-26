import { ReactNode } from "react";
import { Text, View } from "react-native";

interface CardProps {
  children: ReactNode;
}
export function Card({ children }: CardProps) {
  return (
    <View className="bg-[#F4F3F3] border border-[#E1E1E1] rounded-sm">{children}</View>
  );
}

export function CardContent({ children }: any) {
    return (
        <View className="px-3.5 py-2.5">{children}</View>
    )
}
export function CardTitle({ children }: any) {
    return (
        <Text className="text-md font-semibold">{children}</Text>
    )
}
export function CardDescription({ children }: any) {
    return (
        <Text className="text-xs mt-1">{children}</Text>
    )
}
