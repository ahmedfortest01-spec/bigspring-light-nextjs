import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

const Services = ({ services }: { services: any[] }) => {
  const getServiceImage = (img: string) => {
    switch (img) {
      case "/images/service-slide-1.png": return require("../../assets/images/service-slide-1.png");
      case "/images/service-slide-2.png": return require("../../assets/images/service-slide-2.png");
      case "/images/service-slide-3.png": return require("../../assets/images/service-slide-3.png");
      default: return null;
    }
  };

  return (
    <View>
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <View
            key={`service-${index}`}
            className={`py-16 px-6 ${isOdd ? "bg-theme-light" : "bg-white"}`}
          >
            <View className="items-center">
              <Image
                source={getServiceImage(service.images[0])}
                style={{ width: "100%", height: 300 }}
                contentFit="contain"
              />
            </View>

            <View className="mt-8">
              <Text className="text-h2 font-bold text-dark leading-tight">
                {service.title}
              </Text>
              <Text className="mt-4 text-text text-base leading-relaxed">
                {service.content}
              </Text>
              {service.button.enable && (
                <Link href={service.button.link as any} asChild>
                  <TouchableOpacity className="flex-row items-center mt-4">
                    <Text className="text-primary font-bold mr-2 text-lg">
                      {service.button.label}
                    </Text>
                    <Image
                      source={require("../../assets/images/arrow-right.svg")}
                      style={{ width: 18, height: 14 }}
                      tintColor="#0aa8a7"
                    />
                  </TouchableOpacity>
                </Link>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Services;
