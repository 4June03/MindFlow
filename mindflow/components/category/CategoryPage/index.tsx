import { PostCard } from "@/components/post";
import { PostDocument } from "@/prismicio-types";
import React, { FC } from "react";
import styles from "./CategoryPage.module.css";
export interface ICategoryPage {
  postByCategory: PostDocument[];
  className?: string;
}

export const CategoryPage: FC<ICategoryPage> = ({
  postByCategory,
  className = "",
}) => {
  if (!postByCategory) return;

  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      {postByCategory.map((p) => (
        <PostCard key={p.id} postInfo={p} className={styles.cardOverride} />
      ))}
    </div>
  );
};
