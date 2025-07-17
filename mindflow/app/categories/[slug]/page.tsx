import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";

import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const Category = async ({ params: { slug } }: Props) => {
  const client = createClient();
  const category = await client.getByUID("category", slug);
  const postsByCategory = await client.getAllByType("post", {
    filters: [filter.at("my.post.category", category.id)],
  });

  console.log("danh sách post", postsByCategory);

  return <div>Category</div>;
};

export default Category;
