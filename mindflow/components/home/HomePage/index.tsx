import { PostCard } from "@/components/post";
import { PostDocument } from "@/prismicio-types";
import { FC } from "react";
import Banner from "../Banner";

export interface IHomePage {
  bannerImage?: string;
  posts?: PostDocument[];
}

const HomePage: FC<IHomePage> = ({ bannerImage, posts }) => {
  return (
    <div>
      {bannerImage && <Banner bannerImage={bannerImage} />}
      <h1 className="font-bold text-lg text-black px-4 mt-4">
        Blogs <span className="text-gray-400 text-sm">555</span>
      </h1>

      <div className="grid gap-4 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {(posts || []).map((post, index) => (
          <PostCard key={index} className="" postInfo={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
