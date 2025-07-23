import { CategoryPage } from "@/components/category";
import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";

import React from "react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Category = async ({ params }: Props) => {
  const { slug } = await params;

  const client = createClient();
  const category = await client.getByUID("category", slug);
  const postsByCategory = await client.getAllByType("post", {
    filters: [filter.at("my.post.category", category.id)],
  });

  console.log("danh sách post", postsByCategory);

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{category.data.category_name}</h1>
      <CategoryPage postByCategory={postsByCategory} />
      {/*
        // <RelatedPostList posts={relatedPosts} className="mt-12" />
      */}
    </section>
  );
};

export default Category;
