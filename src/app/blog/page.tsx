import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="antialiased  pt-10 relative mt-10 lg:mt-1 bg-dots-top  ">
      <div className="bg-dots-bottom">
        <div className="grid grid-cols-3 gap-4 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 ">
        <div className="circletopright"></div>
        <div className="circlebottomleft"></div>
          {postPreviews}
        </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
