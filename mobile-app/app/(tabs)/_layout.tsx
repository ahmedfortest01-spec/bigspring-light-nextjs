import { Tabs } from 'expo-router';
import React from 'react';
import { Home, LayoutGrid, Tag, FileText, Mail } from 'lucide-react-native';

export default function TabLayout() {
  const primaryColor = '#0aa8a7';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
        headerShown: false,
        tabBarStyle: {
          borderTopColor: '#e9e9e9',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="features"
        options={{
          title: 'Features',
          tabBarIcon: ({ color }: { color: string }) => <LayoutGrid size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: 'Pricing',
          tabBarIcon: ({ color }: { color: string }) => <Tag size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="blog/index"
        options={{
          title: 'Blog',
          tabBarIcon: ({ color }: { color: string }) => <FileText size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }: { color: string }) => <Mail size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
