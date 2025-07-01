import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

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
    <View style={styles.wrapper}>
      <Picker
        selectedValue={selectedValue ?? internalValue}
        onValueChange={handleChange}
        mode="dropdown"
        style={styles.picker}
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F4F3F3",
    borderColor: "#E1E1E1",
    borderWidth: 1,
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
  },
  picker: {
    color: "#000",
  },
});
