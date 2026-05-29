import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IBlockChatProps } from "./block-Chat.types";
import { blockChatStyles as s } from "./block-Chat.styles";
import { COLORS } from "@shared/constants/colors";
import { Icons } from "@shared/ui/icons";

const getInitials = (name: string): string => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const pluralUk = (n: number): string => {
  if (n % 10 === 1 && n % 100 !== 11) return "";
  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return "и";
  return "ів";
};

export const BlockChat: FC<IBlockChatProps> = ({
  groupName,
  memberCount,
  onlineCount,
  avatarColor,
  onBackPress,
  onMenuPress,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const initials = getInitials(groupName);
  const bgColor = avatarColor ?? COLORS.plum;

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.backButton}
        onPress={handleBack}
        activeOpacity={0.7}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Icons.ArrowIcon color={COLORS.blue} />
      </TouchableOpacity>

      <View style={[s.avatarWrapper, { backgroundColor: bgColor }]}>
        <Text style={s.avatarInitials}>{initials}</Text>
      </View>

      <View style={s.titleBlock}>
        <Text style={s.groupName} numberOfLines={1}>
          {groupName}
        </Text>
        <Text style={s.subtitle} numberOfLines={1}>
          {memberCount} учасник{pluralUk(memberCount)}, {onlineCount} в мережі
        </Text>
      </View>

      <TouchableOpacity
        style={s.menuButton}
        onPress={onMenuPress}
        activeOpacity={0.7}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Icons.threePointsIcon color={COLORS.blue50} />
      </TouchableOpacity>
    </View>
  );
};