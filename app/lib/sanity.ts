import urlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient(
    {
        apiVersion: "2023-01-01",
        dataset: "production",
        projectId: "w4mat3zj",
        useCdn: false,
    }
)

const builder = urlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}