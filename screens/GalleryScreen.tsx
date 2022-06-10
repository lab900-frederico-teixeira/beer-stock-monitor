import { StyleSheet } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

import { View } from '../components/Themed';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <GridImageView
        data={[
          'https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg',
          'https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg',
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
