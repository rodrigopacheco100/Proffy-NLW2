import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },

  TeacherList: {
    marginTop: -40,
    paddingHorizontal: 14
  },

  searchForm: {
    marginBottom: 6,
  },

  label: {
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular'
  },

  input: {
    height: 46,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 12
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    marginVertical: 8,
    backgroundColor: '#04D361',
    height: 46,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16
  }
})

export default styles;