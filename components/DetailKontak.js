import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailKontak = ({ route }) => {
  const { kontak } = route.params;

  return (
    <View style={styles.container}>
      <Image source={kontak.gambar} style={styles.img} />
      <Text style={styles.title}>{kontak.judul}</Text>
      <Text style={styles.telpon}>Telpon: {kontak.telpon}</Text>
      <Text style={styles.tanggal}>Tanggal Lahir: {kontak.tanggalLahir}</Text>
      <Text style={styles.tempat}>Tempat Lahir: {kontak.tempatLahir}</Text>
      <Text style={styles.detail}>{kontak.detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  telpon: {
    fontSize: 18,
    marginBottom: 5,
  },
  tanggal: {
    fontSize: 18,
    marginBottom: 5,
  },
  tempat: {
    fontSize: 18,
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailKontak;
