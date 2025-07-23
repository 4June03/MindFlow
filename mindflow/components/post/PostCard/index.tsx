import { PostDocument } from "@/prismicio-types";
import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./PostCard.module.css";

export interface IPostCard {
  postInfo: PostDocument;
  className?: string;
}

export const PostCard: FC<IPostCard> = ({ postInfo, className }) => {
  const { data } = postInfo;

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={data.featured_image.url || "/placeholder.svg"}
          alt={data.title as string}
          fill
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          {isFilled.contentRelationship(data.category) && (
            <Link
              href={`/categories/${data.category.uid}`}
              className={styles.badge}
            >
              {data.category.data?.category_name}
            </Link>
          )}

          <span>•</span>
          <span>{data.publish_date}</span>
        </div>

        <h3 className={styles.title}>
          <Link
            href={`/blog/${postInfo.uid || ""}`}
            className={styles.titleLink}
          >
            {data.title}
          </Link>
        </h3>

        <section className={styles.excerpt}>
          <PrismicRichText field={data.excerpt}></PrismicRichText>
        </section>

        <div className={styles.tags}>
          {(postInfo.tags.slice(0, 6) || []).map((tag, index) => (
            <Link key={index} className={styles.tag} href={`/categories/`}>
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <FaRegUserCircle className={styles.icon} />
        {isFilled.contentRelationship(data.author) && (
          <Link href={`/author/${data.author.slug}`} className={styles.author}>
            {data.author.data?.name}
          </Link>
        )}
      </div>
    </div>
  );
};
