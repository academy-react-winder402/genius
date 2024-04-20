import React from "react";

export type CourseLessonType = {
  id: React.Key;
  title: string;
  hour: string;
  isOpen?: boolean;
  items: {
    id: number;
    title: string;
    hour: string;
    downloadLink: string;
  }[];
};
