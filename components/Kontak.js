import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Kontak = ({ kontak, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailKontak', { kontak })}
    >
      <Image source={kontak.gambar} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{kontak.judul}</Text>
        <Text style={styles.telpon}>{kontak.telpon}</Text>
      </View>
      <Text style={styles.detailText}>Detail</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    paddingVertical: 10,
  },
  img: {
    marginHorizontal: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telpon: {
    fontSize: 14,
    color: '#3498db',
  },
  detailText: {
    color: '#3498db',
    marginRight: 15,
  },
});

export default Kontak;
