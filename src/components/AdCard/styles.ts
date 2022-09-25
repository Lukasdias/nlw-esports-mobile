import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 292,
    padding: 20,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE,
    marginRight: 16,
    justifyContent: "space-between",
  },
  label: {
    color: THEME.COLORS.CAPTION_400,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
  subLabel: {
    color: "#fff",
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginBottom: 8,
  },
  subLabelTrue: {
    color: THEME.COLORS.SUCCESS,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginBottom: 8,
  },
  subLabelFalse: {
    color: THEME.COLORS.ALERT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginBottom: 8,
  },
  button: {
    elevation: 1,
    width: "100%",
    height: 36,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: "#fff",
    marginLeft: 8,
  },
});
