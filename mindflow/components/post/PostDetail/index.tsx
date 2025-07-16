import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PostDetail.module.css";
import { FaArrowLeft, FaCalendar, FaTag, FaUser } from "react-icons/fa";
import { PostDocument } from "@/prismicio-types";
import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export interface IPostDetail {
  post: PostDocument;
}

export const PostDetail: FC<IPostDetail> = ({ post }) => {
  const { data } = post;

  return (
    <div className={styles.container}>
      <nav className={styles.backNav}>
        <Link href="/" className={styles.backLink}>
          <FaArrowLeft className={styles.icon} />
          Quay lại trang chủ
        </Link>
      </nav>

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{data.title}</h1>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <FaUser className={styles.icon} />
              <Link
                href={`/author/${isFilled.contentRelationship(data.author) && data.author.data?.slug}`}
                className={styles.author}
              >
                {(isFilled.contentRelationship(data.author) &&
                  data.author.data?.name) ||
                  ""}
              </Link>
            </div>
            <div className={styles.metaItem}>
              <FaCalendar className={styles.icon} />
              {data.publish_date}
            </div>
            <div className={styles.metaItem}>
              <FaTag className={styles.icon} />
              <span>
                {isFilled.contentRelationship(data.category) &&
                  data.category.data?.category_name}
              </span>
            </div>
          </div>

          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.badge}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.heroImage}>
            <Image
              src={data.featured_image.url || "/placeholder.svg"}
              alt={data.title as string}
              fill
              className={styles.heroImg}
            />
          </div>
        </header>

        <section className={styles.excerpt}>
          <PrismicRichText field={data.excerpt} />
        </section>

        <section className={`${styles.content}`}>
          <PrismicRichText field={data.content} />
        </section>
      </article>
    </div>
  );
};
