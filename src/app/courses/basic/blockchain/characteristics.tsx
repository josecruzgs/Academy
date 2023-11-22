import { SiBlockchaindotcom } from "react-icons/si";
import { BsFillBoxFill } from "react-icons/bs";
import { RiStackshareLine } from "react-icons/ri";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { Bounce, Fade, Flip, Rotate, Zoom } from "react-awesome-reveal";



export const Characteristics = () => {
    return (
      <div className="px-2 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-8">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div>
          <Rotate triggerOnce > <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-purple-500">
          <BsFillBoxFill className="w-6 h-6"/>
            </div></Rotate>
            <Fade cascade triggerOnce delay={1000}>
            <h6 className="mb-2 font-semibold leading-5">Block</h6>
            <p className="mb-3 text-sm text-gray-200">
            Is a collection of data that is added to the chain, as if it were the new sheet in the book. These blocks “are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.
            </p>
            </Fade>
           
          </div>
          <div>
          <Rotate triggerOnce delay={1000} > 
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-purple-500">
             <RiStackshareLine className="w-6 h-6"/>
            </div></Rotate>
            <Fade cascade triggerOnce delay={1000}>
            <h6 className="mb-2 font-semibold leading-5">Decentralization</h6>
            <p className="mb-3 text-sm text-gray-200">
              Meaning that it is not controlled by any single entity or organization. Instead, it is supported by a network of users who validate and verify transactions. It is as if those who own copies of this book are the owners, since it does not belong to a single person or entity.
            </p>
            </Fade>
           
          </div>

          <div>
          <Rotate triggerOnce delay={1500}>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-purple-500">
             <AiOutlineSecurityScan className="w-6 h-6"/>
            </div></Rotate>
            <Fade cascade triggerOnce delay={1000}>
            <h6 className="mb-2 font-semibold leading-5">Security</h6>
            <p className="mb-3 text-sm text-gray-200">
            Each transaction is verified by multiple users on the network, making it difficult for anyone to manipulate the data. Blockchain uses cryptography to secure transactions and prevent fraud. 
            </p>
            </Fade>
          </div>

          <div>
          <Rotate triggerOnce delay={2000}>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-purple-500">
             <SiBlockchaindotcom className="w-6 h-6"/>
            </div>
            </Rotate>
            <Fade cascade triggerOnce delay={1000}>
            <h6 className="mb-2 font-semibold leading-5">Transparency</h6>
            <p className="mb-3 text-sm text-gray-200">
            all transactions on the blockchain are public and can be seen by anyone on the network. This makes it easy to track the movement of assets and ensures that all parties involved in a transaction are accountable. It's as if everyone sees that a paragraph is being written on a new sheet of paper; and it's up to them whether they approve or reject it.
            </p>
            </Fade>
          </div>
          
         
        </div>
      </div>
    );
  };