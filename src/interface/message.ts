export const enum IMsgType {
  text = 0,
  image = 1,
  audio = 2,
  video = 3,
  file = 4
}
export interface IMsgItem {
  msgId: string;
  conversationId: string;
  senderId: string;
  msgType: IMsgType;
  content?: string; // 文本消息内容
  smallUrl?: string; // 图片类型缩略图
  fullUrl?: string; // 语音类型地址/图片类型原图地址/视频资源完整视频地址
  size?: number; // 语音长度(秒)/文件大小
}