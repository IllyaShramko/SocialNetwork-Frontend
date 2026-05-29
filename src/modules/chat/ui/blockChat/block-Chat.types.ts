export interface IBlockChatProps {
  groupName: string;
  memberCount: number;
  onlineCount: number;
  avatarColor?: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}