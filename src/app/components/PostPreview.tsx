import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {

  return (
    <>
   

    <div className=" duration-300  bg-primary-500 rounded-lg ">
        <img
          src={props.image}
          className="object-cover w-full h-64 rounded-xl "
          alt=""
        />
        <div className="p-5">
          <p className="mb-3 text-sm font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-pink-700 "
              aria-label="Category"
              title="traveling"
            >
              crypto
            </a>
            <span className="text-slate-500"> — {props.date}</span>
          </p>
          <a
           href={`/posts/${props.slug}`}
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 leading-7 text-2xl font-semibold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
           {props.title}
          </a>
          <p className="mb-2 text-gray-300">
          {props.subtitle}
          </p>
          <Link href={`/posts/${props.slug}`}>
            <h2  className="inline-flex bg-purple-700 hover:bg-purple-600 px-4 py-1 text-xs rounded-full text-slate-200 hover:text-white">
            Learn more
            </h2>
          </Link>
         
        </div>
      </div>

    
  </>
  );
};

export default PostPreview;