import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  href: string;
  text: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <>
   

   <nav className="flex px-5 py-3 text-gray-100 text-xs lg:text-sm border rounded-lg glass-box border-gray-700" aria-label="Breadcrumb">
  
   <HomeIcon className="w-6 h-6 mr-1 my-auto mr-4"/>
   <ul className="flex space-x-2 overflow-x-auto  ">
  
    {items.map((item, index) => (
        
      <li key={index} className="flex items-center">
        {index < items.length - 1 ? (
            
          <>
            <Link href={item.href} passHref>
              <div className="flex items-center space-x-1">
               
                <span className="hover:text-purple-500 mr-3 font-semibold cursor-pointer">
                  {item.text}
                </span>
              </div>
            </Link>
            <span className="text-gray-100 mx-2">/</span>
          </>
        ) : (
          <span className="text-purple-500 font-semibold">{item.text}</span>
        )}
      </li>
    ))}
  </ul>
</nav>

  </>
  );
};

export default Breadcrumb;
