import { PostDetail } from "@/components/post";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  const client = await createClient();
  const post = await client.getByUID("post", slug);

  return {
    title: post.data.meta_title,
    description: post.data.meta_description,
  };
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;

  const client = createClient();
  console.log("slug ở detail", slug);
  const post = await client.getByUID("post", slug);
  console.log("post detail", post);

  return <PostDetail post={post} />;
}
