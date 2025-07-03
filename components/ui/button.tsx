import React from "react";
import { Pressable } from "react-native";

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({ onPress, children, className = "" }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row justify-center items-center bg-blue-600 px-4 py-2 rounded-full ${className}`}
      android_ripple={{ color: "rgba(255,255,255,0.3)" }}
    >
      {children}
    </Pressable>
  );
}
