import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";

export const blockChatStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.blue20,
  },
  backButton: {
    padding: 6,
    marginRight: 4,
    marginLeft: -4,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.plum,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarInitials: {
    color: COLORS.white,
    fontSize: FONT_SIZE.defaultP,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  titleBlock: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  groupName: {
    fontSize: FONT_SIZE.smallTitle,
    fontWeight: "700",
    color: COLORS.blue,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.blue50,
    lineHeight: 16,
    marginTop: 1,
  },
  menuButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});