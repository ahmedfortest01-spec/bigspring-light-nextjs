import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Stack, Link } from "expo-router";
import { Image } from "expo-image";
import Header from "../../../components/partials/Header";
import Footer from "../../../components/partials/Footer";
import content from "../../../data/content.json";

const blogImages: { [key: string]: any } = {
  "/images/blog-1.jpg": require("../../../assets/images/blog-1.jpg"),
  "/images/blog-2.jpg": require("../../../assets/images/blog-2.jpg"),
  "/images/blog-3.jpg": require("../../../assets/images/blog-3.jpg"),
  "/images/blog-4.jpg": require("../../../assets/images/blog-4.jpg"),
  "/images/blog-5.jpg": require("../../../assets/images/blog-5.jpg"),
  "/images/blog-6.jpg": require("../../../assets/images/blog-6.jpg"),
};

export default function BlogIndex() {
  const blogsData = (content as any).blogs;
  const posts = Object.keys(blogsData)
    .filter(slug => slug !== "_index")
    .map((slug) => ({
      slug,
      ...blogsData[slug],
    }));

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Blog", headerShown: false }} />
      <Header />
      <ScrollView className="px-6">
        <Text className="text-h1 font-bold text-dark mt-10 mb-6 text-center">
          Our Blog
        </Text>
        {posts.map((post, i) => (
          <View key={post.slug} className="mb-10 bg-white rounded-xl shadow-sm overflow-hidden border border-border">
            {post.frontmatter.image && (
              <Image
                source={blogImages[post.frontmatter.image]}
                style={{ width: "100%", height: 200 }}
                contentFit="cover"
              />
            )}
            <View className="p-5">
              <Text className="text-h3 font-bold text-dark mb-2">
                {post.frontmatter.title}
              </Text>
              <Text className="text-text text-sm mb-4" numberOfLines={3}>
                {post.content.replace(/[#*`]/g, "").slice(0, 150)}...
              </Text>
              <Link href={`/blog/${post.slug}` as any} asChild>
                <TouchableOpacity className="bg-primary self-start px-4 py-2 rounded-md">
                  <Text className="text-white font-bold">Read More</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        ))}
        <Footer />
      </ScrollView>
    </View>
  );
}
