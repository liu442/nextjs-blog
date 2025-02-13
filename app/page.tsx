import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

async function getData() {
  const query = `
  *[_type=='blog'] | order(_createdAt desc){
    title,
      describe,
      image,
      "currentSlug":slug.current
  }
  `
  const data = await client.fetch(query);
  return data;
}
export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {
        data.map((blog: simpleBlogCard, index: number) => (
          <Card key={index}>
            <Image src={urlFor(blog.image).url()} alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover" />
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2">{blog.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-500 dark:text-gray-300">{blog.describe}</p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>

        ))
      }
    </div>


  );
}
