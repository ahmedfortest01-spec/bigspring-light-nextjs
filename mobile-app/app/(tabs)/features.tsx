import React from "react";
import { ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import HomeFeatures from "../../components/partials/HomeFeatures";
import Services from "../../components/partials/Services";
import Footer from "../../components/partials/Footer";
import Header from "../../components/partials/Header";
import content from "../../data/content.json";

export default function Features() {
  const homeData = (content as any)["_index"].frontmatter;
  const { feature, services } = homeData;

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <ScrollView>
        <HomeFeatures feature={feature} />
        <Services services={services} />
        <Footer />
      </ScrollView>
    </View>
  );
}
