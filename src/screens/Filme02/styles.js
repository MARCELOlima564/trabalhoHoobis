import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ff0000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: 500,
    height: 600,
    aspectRatio: 1.5,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  infoContainer: {
    paddingHorizontal: '5%',
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 24,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
});

export default styles;
