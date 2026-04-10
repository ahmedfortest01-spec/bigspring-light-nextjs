import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Play } from "lucide-react-native";

const YoutubePlayer = ({ id, title }: { id: string; title: string }) => {
  const openYoutube = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${id}`);
  };

  return (
    <TouchableOpacity
      onPress={openYoutube}
      className="w-full aspect-video bg-black rounded-xl overflow-hidden justify-center items-center"
    >
      <View className="bg-primary p-4 rounded-full">
        <Play size={32} color="white" fill="white" />
      </View>
      <Text className="text-white mt-2 font-bold px-4 text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default YoutubePlayer;
