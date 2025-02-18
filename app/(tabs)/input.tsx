import { View, Text, TextInput } from "react-native";
import React from "react";

export default function input() {
  return (
    <>
      <View>
        <View className="flex flex-row items-center p-4 gap-5">
          <Text className="text-2xl">支出</Text>
          <View className="flex flex-row flex-1 gap-5 items-center">
            <TextInput
              defaultValue="0"
              className="border rounded-md flex-1 py-2 px-2 text-3xl font-semibold"
              textAlignVertical="center"
            ></TextInput>
            <Text className="text-xl">円</Text>
          </View>
        </View>
      </View>
    </>
  );
}
