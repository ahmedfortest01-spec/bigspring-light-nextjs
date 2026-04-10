import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

const HomeBanner = ({ banner }: { banner: any }) => {
  return (
    <View className="py-10 px-6 items-center">
      <Text className="text-h1 font-bold text-dark text-center">
        {banner.title}
      </Text>
      <Text className="mt-4 text-text text-center text-base">
        {banner.content}
      </Text>
      {banner.button.enable && (
        <Link href={banner.button.link as any} asChild>
          <TouchableOpacity className="bg-primary px-8 py-4 rounded-md mt-6">
            <Text className="text-white font-bold text-lg">
              {banner.button.label}
            </Text>
          </TouchableOpacity>
        </Link>
      )}
      <Image
        source={require("../../assets/images/banner.svg")}
        style={{ width: "100%", height: 250, marginTop: 40 }}
        contentFit="contain"
      />
    </View>
  );
};

export default HomeBanner;
