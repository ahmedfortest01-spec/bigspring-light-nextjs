import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

const Cta = ({ cta }: { cta: any }) => {
  if (!cta) return null;

  return (
    <View className="px-4 my-10">
      <View className="bg-white rounded-xl shadow-lg p-6 items-center">
        <Image
          source={require("../assets/images/cta.svg")}
          style={{ width: 325, height: 206 }}
          contentFit="contain"
          className="w-full"
        />
        <View className="mt-5 items-center">
          <Text className="text-h2 font-bold text-dark text-center">
            {cta.title}
          </Text>
          <Text className="mt-4 text-text text-center leading-relaxed">
            {cta.content}
          </Text>
          {cta.button.enable && (
            <Link href={cta.button.link as any} asChild>
              <TouchableOpacity className="bg-primary px-6 py-3 rounded-md mt-6">
                <Text className="text-white font-bold">{cta.button.label}</Text>
              </TouchableOpacity>
            </Link>
          )}
        </View>
      </View>
    </View>
  );
};

export default Cta;
