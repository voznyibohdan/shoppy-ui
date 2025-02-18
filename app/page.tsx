import CreateProductFab from '@/app/products/create-product/create-product-fab';
import getProducts from '@/app/products/actions/get-products';
import Products from '@/app/products/products';

export default async function Home() {

  return (
    <>

      <Products />
      <CreateProductFab />

    </>
  );
}
