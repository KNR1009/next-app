export default function IndexPage({ message }: any) {
  return <h3>{message}</h3>;
}

export async function getStaticProps() {
  return {
    props: { message: "from static props" },
  };
}
