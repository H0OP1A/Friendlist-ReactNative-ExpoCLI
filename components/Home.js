import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Kontak from './Kontak'; 

const Home = ({ navigation }) => {
  const kontakData = [
    {
      id: 1,
      gambar: require('../assets/user1.jpg'),
      judul: "Siti",
      telpon: "08871248753",
      detail: "Teman Kuliah Yang Baik",
      tanggalLahir: "11 November 1974",
      tempatLahir: "Cianjur , Indonesia "
    },
    {
      id: 2,
      gambar: require('../assets/user2.jpg'),
      judul: "Daffa A",
      telpon: "08976456487",
      detail: "Teman Kuliah yang Rajin",
      tanggalLahir: "15 Mei 1990",
      tempatLahir: "Bandung, Indonesia"
    },
    {
      id: 3,
      gambar: require('../assets/user2.jpg'),
      judul: "Teguh Mulya",
      telpon: "081234565",
      detail: "Teman Kuliah yang Nakal",
      tanggalLahir: "20 September 1985",
      tempatLahir: "Sukabumi, Indonesia"
    },
    
  ];

  return (
    <View style={styles.container}>
      {kontakData.map(kontak => (
        <Kontak key={kontak.id} kontak={kontak} navigation={navigation} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default Home;
