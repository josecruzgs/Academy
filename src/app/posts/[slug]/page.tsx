import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";
import Breadcrumb from "@/app/components/breadcrum";

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
  
  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
    { href: "/blog/subcategoria", text: post.data.title },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];

  return (

    <div className="antialiased  pt-10 relative mt-10 lg:mt-1 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
      <div className="pb-4 md:pb-4">
        <Breadcrumb items={breadcrumbItems} />
        </div>
       
        <div className="my-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-300">{post.data.title}</h1>
          
          <div className="flex items-center justify-center">
            <p className="text-slate-400 mt-2 mr-2">{post.data.date}</p>
            <p className="text-slate-400 mt-2 bg-slate-800 rounded-full px-4 text-white">{post.data.category}</p>
          </div>
          
        </div>
        <article className="prose prose-img:rounded-xl prose-video:w-full prose-img:w-full prose-th:text-purple-400 prose-h1:text-slate-200 prose-h3:text-slate-200 prose-h3:font-bold prose-strong:text-purple-300 prose-code:text-purple-300 prose-a:text-purple-400 prose-a:no-underline prose-purple text-slate-200 prose-h2:text-slate-300  prose-blockquote:pl-6 prose-blockquote:bg-slate-900 prose-blockquote:p-1  prose-blockquote:  prose-blockquote:text-slate-100 prose-blockquote:{blue} hover:prose-a:text-purple-500 prose-lg prose-h2:{text-white}  dark:prose-invert mx-auto" >
          <Markdown>{post.content}</Markdown>
        </article>

      </div>
    </div>
  );
};

export default PostPage;
