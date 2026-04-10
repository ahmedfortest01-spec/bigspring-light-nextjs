import React from "react";
import { ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import HomeBanner from "../../components/partials/HomeBanner";
import HomeFeatures from "../../components/partials/HomeFeatures";
import Services from "../../components/partials/Services";
import Workflow from "../../components/partials/Workflow";
import Cta from "../../components/Cta";
import Footer from "../../components/partials/Footer";
import Header from "../../components/partials/Header";
import content from "../../data/content.json";

export default function Home() {
  const homeData = (content as any)["_index"].frontmatter;
  const { banner, feature, services, workflow, call_to_action } = homeData;

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <ScrollView>
        <HomeBanner banner={banner} />
        <HomeFeatures feature={feature} />
        <Services services={services} />
        <Workflow workflow={workflow} />
        <Cta cta={call_to_action} />
        <Footer />
      </ScrollView>
    </View>
  );
}
