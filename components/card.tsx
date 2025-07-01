import { ReactNode } from "react";
import { Text, TextProps, View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
  children: ReactNode;
  className?: string;
}
export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <View
      className={`bg-[#F4F3F3] border border-[#E1E1E1] rounded-sm ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}

interface CardContentProps extends ViewProps {
  children: ReactNode;
  className?: string;
}
export function CardContent({ children, className = "", ...props }: CardContentProps) {
  return (
    <View className={`px-3.5 py-3.5 ${className}`} {...props}>
      {children}
    </View>
  );
}

interface CardTitleProps extends TextProps {
  children: ReactNode;
  className?: string;
}
export function CardTitle({ children, className = "", ...props }: CardTitleProps) {
  return (
    <Text className={`text-xl font-semibold ${className}`} {...props}>
      {children}
    </Text>
  );
}

interface CardDescriptionProps extends TextProps {
  children: ReactNode;
  className?: string;
}
export function CardDescription({ children, className = "", ...props }: CardDescriptionProps) {
  return (
    <Text className={`text-md text-zinc-500 ${className}`} {...props}>
      {children}
    </Text>
  );
}
