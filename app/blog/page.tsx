import { Post } from "../../components/post";
import Link from 'next/link';

async function getBlogPosts() {
  const postsResponse = await fetch(
    "https://brandmenow-yzus.onrender.com/all-blogs",
    { cache: "no-store" }
  );

  console.log("Refetching posts");

  const data = await postsResponse.json();
  return data.blogs;
}

export default async function Page() {
  const posts = await getBlogPosts();

  console.log("Rerendering Blog Component");

  return (
    <div className="flex flex-col items-center pt-10">
       <Link href="/">
                            Blogs
                        </Link>
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="flex flex-wrap h-full max-w-xl">
        {posts.map((post: any) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
