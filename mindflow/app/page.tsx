import HomePage from "@/components/home/HomePage";
import { createClient } from "@/prismicio";
import { PostDocument } from "@/prismicio-types";

export default async function Home() {
  const client = createClient();
  const banner = await client.getByType("homepage");
  const posts = await client.getAllByType<PostDocument>("post");

  const bannerImg = banner.results[0].data.banner.url ?? undefined;
  console.log("postt", posts);

  return <HomePage posts={posts} bannerImage={bannerImg} />;
}
