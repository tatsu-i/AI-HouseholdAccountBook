import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { displayedCategories } from "@/utils/DisplayedCategories";
import { CategoryItem } from "@/utils/types";

export default function input() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(
    displayedCategories[0]
  );
  const handleCategorySelect = (category: CategoryItem) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <View>
        <View className="flex flex-row items-center p-4 gap-5 border-b border-gray-400">
          <Text className="text-2xl font-">支出</Text>
          <View className="flex flex-row flex-1 gap-5 items-center">
            <TextInput
              defaultValue="0"
              className="border rounded-md flex-1 py-2 px-2 text-3xl font-semibold"
              textAlignVertical="center"
            ></TextInput>
            <Text className="text-xl">円</Text>
          </View>
        </View>
        <View className="p-4">
          <Text className="text-2xl">カテゴリー</Text>
          <ScrollView className="h-[400px]">
            <View className="flex flex-row flex-wrap justify-between gap-3 pt-4">
              {displayedCategories.map((displayedCategory) => (
                <Pressable
                  key={displayedCategory.name}
                  onPress={() => handleCategorySelect(displayedCategory)}
                  className="w-[31%] aspect-[3/2]"
                >
                  <View
                    className={`absolute inset-0 border rounded-md ${
                      selectedCategory?.name === displayedCategory.name
                        ? "border-gray-400 border-2"
                        : ""
                    }`}
                  />
                  <View className="flex flex-col items-center justify-center gap-1 pt-3 pb-2">
                    <Ionicons
                      name={displayedCategory.iconName}
                      size={34}
                      color="black"
                    />
                    <Text className="text-xl">{displayedCategory.name}</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
