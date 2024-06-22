export interface MyCourses {
  listOfMyCourses: {
    fullName: string;
    termName: string;
    statusName: string;
    levelName: string;
    courseTitle: string;
    courseId: string;
    describe: string;
    cost: string;
    lastUpdate: string;
    tumbImageAddress: string | null;
    classRoomName: string;
    typeName: string;
    isExpire: boolean;
    isActive: boolean;
    isdelete: boolean;
    teacherId: number;
    groupName: string;
    courseGroupId: number;
    studentId: number;
    paymentStatus: string;
  }[];
  totalCount: number;
}
