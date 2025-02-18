import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="input"
        options={{
          title: "入力",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={30} />
          ),
          tabBarIconStyle: { marginBottom: 5 },
        }}
      />
      <Tabs.Screen name="index" options={{ title: "ホーム" }} />
    </Tabs>
  );
}
