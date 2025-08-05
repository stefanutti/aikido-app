import { Tabs } from 'expo-router';
import { BookOpen, Filter, ExternalLink, Info } from 'lucide-react-native';
import { TechniquesProvider } from '@/contexts/TechniquesContext';

export default function TabLayout() {
  return (
    <TechniquesProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#449df6',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#eee',
            paddingBottom: 8,
            paddingTop: 8,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 4,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Techniques',
            tabBarIcon: ({ size, color }) => (
              <BookOpen size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="filters"
          options={{
            title: 'Filters',
            tabBarIcon: ({ size, color }) => (
              <Filter size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: 'Resources',
            tabBarIcon: ({ size, color }) => (
              <ExternalLink size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ size, color }) => (
              <Info size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </TechniquesProvider>
  );
}