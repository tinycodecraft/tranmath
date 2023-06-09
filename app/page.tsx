import Link from "next/link";
import { Container } from "../layouts/container";
import { PageWrapper } from "../layouts/page-wrapper";


export default function Home() {
  return (
    <PageWrapper className="bg-[url(/chair.jpg)] bg-center bg-cover">
      <Container className=" flex h-full flex-col mx-12 pt-24 text-center text-2xl">
        <h1 className="mb-8 text-8xl font-bold">Welcome to Fur Nature</h1>
        <p className="mx-auto max-w-xl">
          We craft furniture by utilising what mother earth gave us. And we
          build websites on the side ;).
        </p>

        <Link
          href="/products"
          className="text-beige mx-auto mt-12 rounded-full bg-black p-4 transition-colors hover:bg-[#333] focus:bg-[#333]"
        >
          More about Foldly
        </Link>
      </Container>
    </PageWrapper>
  );
}
