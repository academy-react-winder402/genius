export interface CourseDetailsInterface {
  courseId: string;
  endTime: string;
  startTime: string;
  teacherId: number;
  teacherName: string;
  insertDate: string;
  title: string;
  imageAddress: string;
  currentRate: number;
  cost: number;
  googleTitle: string;
  googleSchema: string;
  capacity: number;
  uniqeUrlString: string;
  currentRegistrants: number;
  describe: string;
  miniDescribe: string;
  courseLevelName: string;
  courseStatusName: string;
  commentCount: number;
  likeCount: number;
  dissLikeCount: number;
  currentUserLike: string;
  currentUserDissLike: string;
  courseGroupCount: number;
  isCourseUser: string;
  isCourseReseve: string;
  courseReseveId: string;
  userFavoriteId: string;
  isUserFavorite: boolean;
  userLikeId: string;
  currentUserSetRate: boolean;
  currentUserRateNumber: number;
  techs: string[];
}
