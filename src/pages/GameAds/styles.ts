import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 32,
  },
  backIcon: {
    width: 24,
    height: 24,
    color: "#fff",
  },
  logoImage: {
    width: 71,
    height: 40,
  },
  bannerContainer: {
    width: "100%",
    height: 160,
    overflow: "hidden",
    borderRadius: 8,
  },
  bannerImage: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: THEME.COLORS.CAPTION_400,
    marginBottom: 16,
  },
  emptyList: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 24,
  },
  modal: {
    backgroundColor: THEME.COLORS.SHAPE,
    paddingHorizontal: 40,
    paddingVertical: 32,
    alignItems: "center",
    flex: 1,
  },
  modalTitleIcon: {
    marginBottom: 24,
  },
  modalTitle: {
    color: "#fff",
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: 24,
    marginBottom: 4,
  },
  modalSubtitle: {
    color: THEME.COLORS.CAPTION_400,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 16,
    marginBottom: 40,
  },
  modalLabel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalLabelText: {
    color: "#fff",
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 16,
  },
  modalDiscordButton: {
    minWidth: 231,
    marginTop: 16,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modalDiscordButtonText: {
    color: THEME.COLORS.CAPTION_300,
  },
});
