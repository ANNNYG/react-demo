/* --- STATE --- */
export interface AppState {
  userFetching: boolean;
  userLogined: boolean;
  userInfo: UserInfoState;
  messageCount: number;
}

export interface UserInfoState {
  id: string;
  name: string;
}
