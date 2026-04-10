import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { Image } from "expo-image";
import { ChevronLeft } from "lucide-react-native";
import Header from "../../components/partials/Header";
import Footer from "../../components/partials/Footer";
import content from "../../data/content.json";

const blogImages: { [key: string]: any } = {
  "/images/blog-1.jpg": require("../../assets/images/blog-1.jpg"),
  "/images/blog-2.jpg": require("../../assets/images/blog-2.jpg"),
  "/images/blog-3.jpg": require("../../assets/images/blog-3.jpg"),
  "/images/blog-4.jpg": require("../../assets/images/blog-4.jpg"),
  "/images/blog-5.jpg": require("../../assets/images/blog-5.jpg"),
  "/images/blog-6.jpg": require("../../assets/images/blog-6.jpg"),
};

export default function BlogPost() {
  const { slug } = useLocalSearchParams();
  const router = useRouter();
  const post = (content as any).blogs[slug as string];

  if (!post) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Post not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: post.frontmatter.title, headerShown: false }} />
      <Header />
      <ScrollView>
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center px-6 py-4"
        >
          <ChevronLeft size={20} color="#0aa8a7" />
          <Text className="text-primary font-bold ml-1">Back to Blog</Text>
        </TouchableOpacity>

        {post.frontmatter.image && (
          <Image
            source={blogImages[post.frontmatter.image]}
            style={{ width: "100%", height: 250 }}
            contentFit="cover"
          />
        )}

        <View className="px-6 py-8">
          <Text className="text-h1 font-bold text-dark mb-4">
            {post.frontmatter.title}
          </Text>
          <Text className="text-text text-base leading-relaxed">
            {post.content}
          </Text>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
