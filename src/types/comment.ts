export interface CommentInterface {
  id: string;
  courseId: string;
  parentId: string;
  title: string;
  describe: string;
  author: string;
  userId: number;
  insertDate: string;
  accept: true;
  acceptReplysCount: number;
  disslikeCount: number;
  likeCount: number;
  currentUserEmotion: string;
  currentUserLikeId: string;
  pictureAddress: string;
}
