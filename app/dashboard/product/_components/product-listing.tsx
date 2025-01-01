import { Product, products } from '../../../../constants/data';
import { searchParamsCache } from '../../../../lib/searchparams';
import { DataTable as ProductTable } from '../../../../components/ui/table/data-table';
import { columns } from './product-tables/columns';

type ProductListingPage = {};

export default async function ProductListingPage({}: ProductListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  // Filtering logic based on search
  const filteredProducts = search ? 
    products.filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.leader.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    )
    : products;

  return (
    <ProductTable
      columns={columns}
      data={filteredProducts}
      totalItems={filteredProducts.length}
    />
  );
}
