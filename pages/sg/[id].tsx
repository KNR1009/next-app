import { useRouter } from "next/router";

export default function IndexPage({ id }: any) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>ローディング</h3>;
  }
  return <h3>このページは{id}</h3>;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
    ],
    fallback: true,
  };
}

// 上記の関数のidが引数(params)として渡ってくる
export async function getStaticProps({ params }: any) {
  return {
    props: { id: params.id },
  };
}
