export const Divider = ({ text }) => (
  <div className="self-stretch flex justify-center items-center gap-2">
    <div className="flex-1 h-px bg-neutral-400"></div>
    <div className="text-neutral-500 text-[16px]">
      {text}
    </div>
    <div className="flex-1 h-px bg-neutral-400"></div>
  </div>
);
