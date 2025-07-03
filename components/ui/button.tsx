import { Pressable } from "react-native";

interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode
}

export default function PrimaryButton({ onPress, children, ...props }: ButtonProps) {
  return (
    <>
      <Pressable
        {...props}
        onPress={onPress}
        className="flex-row justify-center items-center gap-3 bg-blue-600 px-4 py-2 rounded-full"
        android_ripple={{ color: "rgba(255,255,255,0.3)" }}
      >
        {children}
      </Pressable>
    </>
  );
}
