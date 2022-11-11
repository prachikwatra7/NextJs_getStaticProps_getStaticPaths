import { useRouter } from "next/router";

function ProductDetail({ product }) {
  const router = useRouter();
  if (router?.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>
        {product?.id} {product?.title} {product?.price}
      </h2>
      <p>{product?.body}</p>
    </>
  );
}

export default ProductDetail;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params?.productId}`
  );
  const data = await response.json();
  console.log(`build regenerating for product detail ${params?.productId}`);

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
