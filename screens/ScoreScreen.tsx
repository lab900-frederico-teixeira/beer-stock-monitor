import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParmEnum, RootTabScreenProps } from '../types';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Frederico Teixeira',
    score: 3,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Luis Silva',
    score: 5,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'jose Carlos',
    score: 1,
  },
];

const Card = ({ name, score }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.score}>{score}</Text>
  </View>
);

export default function ScoreScreen({
  navigation,
}: RootTabScreenProps<RootTabParmEnum.SCORE>) {
  const renderItem = ({ item }) => <Card name={item.name} score={item.score} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f9c2ff',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  name: {
    padding: 16,
    fontSize: 24,
  },
  score: {
    fontSize: 24,
    padding: 16,
  },
});
