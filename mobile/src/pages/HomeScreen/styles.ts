import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 20,
  },

  banner: {
    width: "100%",
    resizeMode: "contain"
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 30
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold"
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },

  button: {
    height: 120,
    width: '48%',
    borderRadius: 8,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },

  buttonPrimary: {
    backgroundColor: '#9871f5'
  },

  buttonSecondary: {
    backgroundColor: '#04d361'
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 18
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    maxWidth: 140,
    fontSize: 12,
    marginTop: 10
  }
});

export default styles;