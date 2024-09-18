import React from "react";
import { View, Image, ScrollView } from "react-native";
import data from "./data.json";
import { Provider as PaperProvider, DefaultTheme, Card, Text, Button } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
        {data.map((user) => (
          <Card style={{ margin: 10 }} key={user.name}>
            <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: user.photo_url }}
                style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  {user.name}
                </Text>
                <Text style={{ color: theme.colors.primary }}>
                  {user.email}
                </Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => console.log(`Pressed ${user.name}`)}>
                View Profile
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </PaperProvider>
  );
}