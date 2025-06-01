import Link from "next/link";
import LinkArrow from "./LinkArrow";

type TPostGrid = {
  date?: string;
  title?: string;
  slug?: string;
  background: string;
  grid: string;
};

export default function PostGrid({
  date = "",
  title = "",
  slug = "",
  background,
  grid,
}: TPostGrid) {
  return (
    <div
      className={`p-6 relative rounded-xl flex items-center justify-items-center ${grid}`}
      style={{
        background,
      }}
    >
      <div>
        <h3 className="text-xl text-black font-bold tracking-tight md:text-lg">
          {title}
        </h3>
        {slug && (
          <LinkArrow
            href={`/blog/${slug}`}
            className="absolute bottom-6 right-6 text-sm text-black opacity-80 hover:opacity-100"
          >
            Read more
          </LinkArrow>
        )}
      </div>
    </div>
  );
}
