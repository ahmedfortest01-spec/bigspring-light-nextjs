import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Logo from "../Logo";
import { Link } from "expo-router";
import config from "../../config.json";

const Header = () => {
  const { enable, label, link } = config.nav_button;

  return (
    <View className="flex-row items-center justify-between px-6 py-4 bg-white border-b border-border">
      <Logo />
      {enable && (
        <Link href={link as any} asChild>
          <TouchableOpacity className="bg-primary px-4 py-2 rounded-md">
            <Text className="text-white font-bold">{label}</Text>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};

export default Header;
