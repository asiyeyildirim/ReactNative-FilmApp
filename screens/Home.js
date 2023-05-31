import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import films from '../assets/film';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmList: films,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.filmList}
          numColumns={2} // iki sütunlu düzen
          renderItem={({ item }) => (
            <View style={{ padding: 10, width: '50%' }}> // %50 genişlik
              <Image
                source={{ uri: item.Poster }}
                style={{ width: 100, height: 150 }}
              />
              <Text style={{ fontWeight: 'bold' }}>{item.Title}</Text>
              <Text>{item.Year}</Text>
              <Text>{item.Plot}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Home;
