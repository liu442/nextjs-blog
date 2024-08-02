import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
    const query = `
    *[_type=='blog' && slug.current=='${slug}'] {

        "currentSlug":slug.current,
          title,
          content,
          image
      }[0]
    `
    const data = await client.fetch(query);
    return data;

}
export default async function BlogArticle({ params }: { params: { slug: string } }) {

    const data: fullBlog = await getData(params.slug);


    {
        return (
            <div className="mt-8">
                <h1><span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Liu - Blog</span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span></h1>
                <Image src={urlFor(data.image).url()}
                    width={800}
                    height={800}
                    alt="image"
                    priority
                    className="rounded-lg mt-8 border"></Image>
                <div className="mt-16 prose prose-blue prose-xl dark:prose-invert ">
                    <PortableText value={data.content}></PortableText>
                </div>
            </div>
        )
    }
}