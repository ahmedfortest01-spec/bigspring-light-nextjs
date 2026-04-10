import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import Header from "../../components/partials/Header";
import Footer from "../../components/partials/Footer";
import content from "../../data/content.json";

export default function Contact() {
  const contactData = (content as any).contact.frontmatter;
  const { title, info } = contactData;

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Contact", headerShown: false }} />
      <Header />
      <ScrollView>
        <View className="px-6 py-10">
          <Text className="text-h1 font-bold text-dark text-center mb-10">
            {title}
          </Text>

          <View className="mb-10">
            <TextInput
              className="bg-white border border-border rounded-md px-4 py-3 mb-4 text-dark"
              placeholder="Name"
              placeholderTextColor="#777"
            />
            <TextInput
              className="bg-white border border-border rounded-md px-4 py-3 mb-4 text-dark"
              placeholder="Your email"
              placeholderTextColor="#777"
              keyboardType="email-address"
            />
            <TextInput
              className="bg-white border border-border rounded-md px-4 py-3 mb-4 text-dark"
              placeholder="Subject"
              placeholderTextColor="#777"
            />
            <TextInput
              className="bg-white border border-border rounded-md px-4 py-3 mb-4 text-dark"
              placeholder="Your message"
              placeholderTextColor="#777"
              multiline
              numberOfLines={7}
              textAlignVertical="top"
              style={{ minHeight: 150 }}
            />
            <TouchableOpacity className="bg-primary py-4 rounded-md items-center">
              <Text className="text-white font-bold text-lg">Send Now</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text className="text-h4 font-bold text-dark mb-4">{info.title}</Text>
            <Text className="text-text text-base leading-relaxed mb-6">
              {info.description}
            </Text>
            <View>
              {info.contacts.map((contact: string, index: number) => (
                <Text key={index} className="text-dark font-bold mb-2 text-base">
                  {contact}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
