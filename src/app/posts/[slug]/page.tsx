import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (

    <div className="antialiased  pt-10 relative mt-10 lg:mt-1 ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">

 <div className="my-12 text-center">
 <h1 className="text-5xl md:text-5xl font-bold mb-5 text-gray-300">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      

      <article className="prose prose-img:rounded-xl prose-img:w-full prose-th:text-purple-400 prose-h3:text-slate-200 prose-h3:font-bold prose-strong:text-purple-300 prose-code:text-purple-300 prose-a:text-purple-400 prose-a:no-underline prose-purple text-slate-200 prose-h2:text-slate-300  prose-blockquote:pl-6 prose-blockquote:bg-slate-900 prose-blockquote:p-1  prose-blockquote:  prose-blockquote:text-slate-100 prose-blockquote:{blue} hover:prose-a:text-purple-500 prose-lg prose-h2:{text-white}  dark:prose-invert mx-auto" >
        <Markdown>{post.content}</Markdown>
      </article>
   
    </div>
    </div>
  );
};

export default PostPage;
