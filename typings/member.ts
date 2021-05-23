export interface IBaseMemberInfo {
  account: string
  groupId: string
  /**0普通成员1管理员2群主 */
  type: '0' | '1' | '2';
  nickName?: string
}