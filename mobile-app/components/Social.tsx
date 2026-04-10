import React from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import * as Icons from "lucide-react-native";

const Social = ({ source, className }: { source: any; className?: string }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    email,
    phone,
    address,
    website,
  } = source;

  const iconSize = 20;
  const iconColor = "#777";

  const socialItems = [
    { name: "facebook", icon: (Icons as any).Facebook, link: facebook },
    { name: "twitter", icon: (Icons as any).Twitter, link: twitter },
    { name: "instagram", icon: (Icons as any).Instagram, link: instagram },
    { name: "youtube", icon: (Icons as any).Youtube, link: youtube },
    { name: "linkedin", icon: (Icons as any).Linkedin, link: linkedin },
    { name: "github", icon: (Icons as any).Github, link: github },
    { name: "email", icon: (Icons as any).Mail, link: email ? `mailto:${email}` : null },
    { name: "phone", icon: (Icons as any).Phone, link: phone ? `tel:${phone}` : null },
    { name: "address", icon: (Icons as any).MapPin, link: address },
    { name: "website", icon: (Icons as any).Globe, link: website },
  ];

  return (
    <View className={`flex-row flex-wrap ${className}`}>
      {socialItems.map(
        (item) =>
          item.link && item.icon && (
            <TouchableOpacity
              key={item.name}
              onPress={() => Linking.openURL(item.link)}
              className="mr-4 mb-2"
            >
              <item.icon size={iconSize} color={iconColor} />
            </TouchableOpacity>
          )
      )}
    </View>
  );
};

export default Social;
