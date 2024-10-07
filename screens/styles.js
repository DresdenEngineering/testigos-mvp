import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // General
  container_yellow: {
    flex: 1,
    backgroundColor: "#FCE279",
    alignItems: "center",
    justifyContent: "center",
  },

  container_white: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },

  screen_container: {
    width: '100%',
    maxWidth: 310,
  },

  fullWidthButton: {
    width: '100%',
    borderRadius: 20,
  },

  fullWidthButtonText: {
    width: 310,
    fontSize: 17,
    letterSpacing: 1.5,
    borderRadius: 20,
    textAlign: "center",
    paddingVertical: 16,
    fontFamily: "Roboto_700Bold",
    textTransform: "uppercase",
  },

  primaryButton: {
    backgroundColor: "#424242",
    borderRadius: 20,
  },

  primaryButtonText: {
    color: "#F9F9F9",
    fontFamily: "Roboto_700Bold",
  },

  secondaryButton: {
    marginTop: 30,
    borderColor: "#424242",
    borderWidth: 2,
  },

  secondaryButtonText: {
    color: "#424242",
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },

  // StartScreen
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: '50%', // TODO: Ensure the container takes the full width of the parent
  },

  logoImage: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: "contain",
  },

  // EnterName
  text: {
    textAlign: "left",
    width: 270,
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    fontSize: 18,
    height: 50,
    borderColor: "gray",
    marginTop: 20,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },

  buttonContainer: {
    maxWidth: 310,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // HomeScreen
  screenContainer: {
    flex: 1,
    backgroundColor: "#FFF", // Set the background color behind the tab bar
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  dummyText: {
    fontSize: 22,
  },

  // ProfileView
  arrowIcon: {
    marginLeft: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },

  profileImage: {
    width: 200,
    height: 200,
    backgroundColor: "#c1c1c1",
    borderRadius: 200,
    marginBottom: 20,
  },

  profileStrengthContainer: {
    marginTop: 20,
  },

  profileStrength: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "500",
  },

  progressBarContainer: {
    width: 310,
    height: 15,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBarFill: {
    width: "10%", // Fill 10% of the bar
    height: "100%",
    backgroundColor: "#76c7c0",
  },

  profileStepsContainer: {
    marginTop: 20,
    width: 310,
    alignItems: "center",
  },

  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },

  pressableText: {
    fontSize: 16,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  logoutButton: {
    padding: 10,
  },

  // RolesView
  // card, cardContent, buttonContainer, button, buttonText
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#c1c1c1',
    borderWidth: 1,
    width: 310,
    marginTop: 15
  },

  cardContent: {
    marginLeft: 16,
    flex: 1,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },

  flatlist_container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    paddingVertical: 40
  },

  seeRolesButton: {
    backgroundColor: '#FCE279',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-end', // Align the button to the right
  },

  // Profile Stack
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  section: {
    marginTop: 20,
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  
  input_profile: {
    height: 40,
    fontSize: 15,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 16,
    paddingHorizontal: 15,
  },


  // Guardians
  guardiansIconContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'grey',
    marginBottom: 20,
  },

  instructions_title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },

  instructions_text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '500',
  },

  instructions_subtext: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 50,
  },

  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },

  contactsListContainer: {
    width: '100%',
  },

  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },



});

export default styles;
