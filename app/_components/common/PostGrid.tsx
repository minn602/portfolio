import Link from "next/link";

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
      <Link href={slug ? `/blog/${slug}` : "/"}>
        <div
          className={`${date ? "block" : "hidden"} p-1 absolute top-6 right-6 text-sm text-white bg-black`}
        >
          {date}
        </div>
        <h3 className="text-xl text-black font-bold tracking-tight md:text-lg">
          {title}
        </h3>
      </Link>
    </div>
  );
}
