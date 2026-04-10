import React from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import config from "../config.json";

const Logo = ({ src }: { src?: any }) => {
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  const width = parseInt(logo_width.replace("px", ""));
  const height = parseInt(logo_height.replace("px", ""));

  return (
    <Link href="/" className="py-1">
      <View style={{ width, height }}>
        {src || logo ? (
          <Image
            source={src ? src : require("../assets/images/logo.png")}
            contentFit="contain"
            style={{ width, height }}
          />
        ) : logo_text ? (
          <Text className="text-xl font-bold">{logo_text}</Text>
        ) : (
          <Text className="text-xl font-bold">{title}</Text>
        )}
      </View>
    </Link>
  );
};

export default Logo;
