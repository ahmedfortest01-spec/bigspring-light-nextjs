import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import Header from "../../components/partials/Header";
import Footer from "../../components/partials/Footer";
import Cta from "../../components/Cta";
import content from "../../data/content.json";

export default function Pricing() {
  const pricingData = (content as any).pricing.frontmatter;
  const { title, plans, call_to_action } = pricingData;

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Pricing", headerShown: false }} />
      <Header />
      <ScrollView>
        <View className="px-6 py-10">
          <Text className="text-h1 font-bold text-dark text-center mb-10">
            {title}
          </Text>

          <View>
            {plans.map((plan: any, index: number) => (
              <View
                key={index}
                className={`mb-8 p-8 rounded-xl border ${plan.recommended ? 'border-primary bg-theme-light' : 'border-border bg-white'} items-center shadow-sm`}
              >
                <Text className="text-h4 font-bold text-dark">{plan.title}</Text>
                <View className="flex-row items-baseline mt-5">
                  <Text className="text-5xl font-bold text-dark">${plan.price}</Text>
                  <Text className="text-text ml-1">/ {plan.type}</Text>
                </View>
                <Text className="mt-2 text-text text-center">{plan.subtitle}</Text>

                <View className="mt-6 w-full">
                  {plan.features.map((feature: string, fIndex: number) => (
                    <Text key={fIndex} className="text-text text-center mb-2 leading-5">
                      {feature}
                    </Text>
                  ))}
                </View>

                <TouchableOpacity
                  className={`mt-6 w-full py-3 rounded-md items-center ${plan.recommended ? 'bg-primary' : 'border border-primary'}`}
                >
                  <Text className={`font-bold ${plan.recommended ? 'text-white' : 'text-primary'}`}>
                    {plan.button.label}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <Cta cta={call_to_action} />
        <Footer />
      </ScrollView>
    </View>
  );
}
