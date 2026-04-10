import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";

const HomeFeatures = ({ feature }: { feature: any }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "/images/cloud.svg": return require("../../assets/images/cloud.svg");
      case "/images/user-clock.svg": return require("../../assets/images/user-clock.svg");
      case "/images/checkmark-circle.svg": return require("../../assets/images/checkmark-circle.svg");
      case "/images/oop.svg": return require("../../assets/images/oop.svg");
      case "/images/speedometer.svg": return require("../../assets/images/speedometer.svg");
      case "/images/code.svg": return require("../../assets/images/code.svg");
      default: return null;
    }
  };

  return (
    <View className="py-16 px-6 bg-theme-light">
      <Text className="text-h2 font-bold text-dark text-center mb-10">
        {feature.title}
      </Text>
      <View className="flex-row flex-wrap justify-between">
        {feature.features.map((item: any, i: number) => (
          <View
            key={`feature-${i}`}
            className="w-full bg-white rounded-xl p-6 mb-6 shadow-sm items-center"
          >
            {item.icon && (
              <Image
                source={getIcon(item.icon)}
                style={{ width: 40, height: 40 }}
                contentFit="contain"
              />
            )}
            <View className="mt-4 items-center">
              <Text className="text-h5 font-bold text-dark text-center">
                {item.name}
              </Text>
              <Text className="mt-3 text-text text-center text-sm leading-relaxed">
                {item.content}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeFeatures;
