export interface BlogItemInterface {
  id: string;
  title: string;
  miniDescribe: string;
  keyword: string;
  currentRate: number;
  currentView: number;
  currentLikeCount: number;
  currentImageAddressTumb: string;
  insertDate: string;
  updateDate: string;
  addUserFullName: string;
  addUserProfileImage: string;
  newsCatregoryId: number;
  newsCatregoryName: string;
  currentUserIsLike: boolean;
  likeId: string;
  isCurrentUserFavorite: boolean;
  currentUserFavoriteId: string;
  currentUserSetRate: boolean;
  currentUserRateNumber: number;
  currentUserIsDissLike: boolean;
  currentDissLikeCount: number;
  isActive: boolean;
  totalCount: number;
}
