import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View } from "react-native";

interface SelectItem {
  label: string;
  value: string;
}

interface SelectProps {
  items: SelectItem[];
  selectedValue?: string;
  onValueChange?: (value: string) => void;
}

export default function Select({
  items,
  selectedValue,
  onValueChange,
}: SelectProps) {
  const [internalValue, setInternalValue] = useState(
    selectedValue ?? items[0]?.value ?? ""
  );

  const handleChange = (value: string) => {
    setInternalValue(value);
    onValueChange?.(value);
  };

  return (
    <View style={{ height: 50 }}>
      <Picker
        selectedValue={selectedValue ?? internalValue}
        onValueChange={handleChange}
        mode="dropdown"
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}
