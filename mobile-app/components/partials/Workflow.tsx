import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";

const Workflow = ({ workflow }: { workflow: any }) => {
  return (
    <View className="py-16 items-center bg-white">
      <View className="px-6 mb-8 items-center">
        <Text className="text-h2 font-bold text-dark text-center leading-tight">
          {workflow.title}
        </Text>
        <Text className="mt-3 text-text text-center text-base">
          {workflow.description}
        </Text>
      </View>
      <Image
        source={require("../../assets/images/banner-art.svg")}
        style={{ width: "100%", height: 100 }}
        contentFit="cover"
      />
    </View>
  );
};

export default Workflow;
