import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import Social from "../Social";
import config from "../../config.json";
import menu from "../../menu.json";
import social from "../../social.json";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;

  return (
    <View className="bg-theme-light pt-16 px-6">
      <View className="mb-12">
        <Link href="/" className="mb-6">
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 200, height: 48 }}
            contentFit="contain"
          />
        </Link>
        <Text className="text-text text-base mb-6 leading-relaxed">
          {footer_content}
        </Text>
        <Social source={social} className="mb-8" />
      </View>

      <View className="flex-row flex-wrap justify-between">
        {footer.map((col) => (
          <View key={col.name} className="w-1/2 mb-10">
            <Text className="text-h4 font-bold text-dark mb-4">{col.name}</Text>
            {col.menu.map((item) => (
              <Link key={item.text} href={item.url as any} className="mb-2">
                <Text className="text-text text-base">{item.text}</Text>
              </Link>
            ))}
          </View>
        ))}
      </View>

      <View className="border-t border-border py-8 items-center">
        <Text className="text-text text-sm text-center">{copyright}</Text>
      </View>
    </View>
  );
};

export default Footer;
