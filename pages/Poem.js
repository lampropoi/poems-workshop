import React from 'react';
import {StyleSheet, Dimensions, View, Text, Image} from 'react-native';

const Poem = ({navigation}) => {
  const poem = navigation.getParam('poem');

  return (
      <View style={styles.container} >
      </View>
  );
};


Poem.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('poem').title,
  headerTitleStyle: {width: Dimensions.get('window').width}
});
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#ecf0f1',
    padding: 20
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  description: {
    marginTop: 20,
    marginLeft: 5
  }
});

export default Poem;
