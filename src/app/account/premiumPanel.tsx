import { StarIcon } from "@heroicons/react/24/outline";

export const PremiumPanel = () => {
  const premiumStatusIcon = (
    <StarIcon className="h-5 w-5 text-slate-100" />
  );

  const premiumStatusPanel = (
    <div  className="glow-on-hover  pt-2">
    <div className="text-white text-sm rounded-full h-7 flex items-center justify-center mx-2 ring-2 ring-white z-10  bg-purple-600">
    Premium Member
  </div>
  </div>
    
  );

  return premiumStatusPanel;
};
