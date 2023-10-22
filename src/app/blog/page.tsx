import Breadcrumb from "../components/breadcrum";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
    // { href: "/categoria/subcategoria", text: "Subcategoría" },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];

  return (
    <>
      <div className="antialiased  pt-10 relative  mt-10 lg:mt-10 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">Blog</h1>
        <div className="pb-4 md:pb-4">
        <Breadcrumb items={breadcrumbItems} />
        </div>
          <div className="glass-box rounded-2xl lg:flex mt-6">
            <div className="lg:w-1/2 lg:pr-4">
              <img src="/images/blog/best2023.jpg" alt="Imagen" className="w-full h-auto lg:rounded-l-lg lg:shadow-lg" />
            </div>
            <div className="lg:w-1/2 lg:px-4 text-left mx-auto my-auto ">
              <h2 className="text-4xl font-semibold mb-2 lg:px-4">Next Cryptocurrency to Explode in 2023</h2>
              <p className="text-gray-200 lg:px-4">There is no doubt that the crypto market is growing by leaps and bounds. The most popular cryptocurrency in the world, Bitcoin, has recently started growing again alongside other cryptocurrencies.</p>
              <a href="/posts/next_crypto_2023"><button className="lg:mx-4 bg-purple-700 mt-4 px-6 py-2 rounded-md "> Read More</button></a>
              </div>
          </div>
          <div className="antialiased  relative mt-1  ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-1 ">
              {postPreviews}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
