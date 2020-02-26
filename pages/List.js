import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import getPoems from '../services/getPoems';

const List = ({navigation}) => {

  const ListItem = poem => (
    <TouchableOpacity key={poem.id}>
      <View style={styles.poem}>
        <Image source={{uri: poem.image}} style={{width: 100, height: 100}}/>
        <View style={styles.info}>
          <View>
            <Text style={styles.title}>{poem.title}</Text>
          </View>
          <Text style={styles.description}>{poem.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
};

List.navigationOptions = {
  title: 'Poems',
    headerTitleStyle: {width: Dimensions.get('window').width}
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  poem: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'steelblue',
    borderBottomWidth: 2
  },
  info: {
    marginLeft: 5
  },
  title: {
    fontSize: 20
  },
  description: {
    marginTop: 5
  }
});

export default List;


