import React, { FC } from "react";

export interface IPostCard {
  title: string;
  image?: string;
  postDate: Date;
  postTime: number | Date | string;
}

export const PostCard: FC<IPostCard> = () => {
  return <div>PostCard</div>;
};
