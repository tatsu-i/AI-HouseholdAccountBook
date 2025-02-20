import Ionicons from "@expo/vector-icons/Ionicons";

export interface CategoryItem {
  name: string;
  iconName: keyof typeof Ionicons.glyphMap;
}
