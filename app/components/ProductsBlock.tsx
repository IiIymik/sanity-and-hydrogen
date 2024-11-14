import type {PAGE_QUERYResult, PriceRange} from '~/sanity/sanity.types';

type BodyWithoutNull = NonNullable<
  NonNullable<PAGE_QUERYResult>['body']
>[number];
type ProductsBlockProps = Extract<BodyWithoutNull, {_type: 'products'}>;

export function ProductsBlock({products, layout}: ProductsBlockProps) {
  return Array.isArray(products) ? (
    <div className="p-4 bg-blue-50">
      <div className="container mx-auto grid grid-cols-2 gap-4">
        {products.map((product) =>
          layout === 'pill' ? (
            <ProductPill key={product._key} {...product} />
          ) : (
            <ProductCard key={product._key} {...product} />
          ),
        )}
      </div>
    </div>
  ) : null;
}

type ProductWithVariant = NonNullable<ProductsBlockProps['products']>[number];

function ProductCard({productWithVariant}: ProductWithVariant) {
  if (!productWithVariant) {
    return null;
  }

  const productImage =
    productWithVariant?.variant?.image || productWithVariant?.product?.image;
  const price =
    productWithVariant?.variant?.price || productWithVariant?.product?.price;

  return (
    <div className="grid grid-cols-1 gap-2">
      {productImage ? (
        <img
          src={productImage}
          className="w-full aspect-square object-cover rounded-lg"
          alt={productWithVariant?.product?.title || ''}
        />
      ) : null}
      {productWithVariant?.product?.title ? (
        <h2 className="text-lg font-bold">
          {productWithVariant.product.title}
        </h2>
      ) : null}
      {price ? <ProductPrice price={price} /> : null}
    </div>
  );
}

function ProductPill({productWithVariant}: ProductWithVariant) {
  if (!productWithVariant) {
    return null;
  }

  const productImage =
    productWithVariant?.variant?.image || productWithVariant?.product?.image;
  const price =
    productWithVariant?.variant?.price || productWithVariant?.product?.price;

  return (
    <div className="flex items-center gap-4 rounded-full bg-blue-100 p-2">
      {productImage ? (
        <img
          src={productImage}
          className="w-20 h-20 object-cover rounded-full shadow-inner"
          alt={productWithVariant?.product?.title || ''}
        />
      ) : null}
      <div>
        {productWithVariant?.product?.title ? (
          <h2 className="font-bold">{productWithVariant.product.title}</h2>
        ) : null}
        {price ? <ProductPrice price={price} /> : null}
      </div>
    </div>
  );
}

function ProductPrice({price}: {price: PriceRange | number}) {
  if (typeof price === 'number') {
    return <span>${price.toFixed(2)}</span>;
  } else if (
    typeof price.minVariantPrice === 'number' &&
    typeof price.maxVariantPrice === 'number'
  ) {
    return (
      <span>
        ${price.minVariantPrice.toFixed(2)} - $
        {price.maxVariantPrice.toFixed(2)}
      </span>
    );
  }

  return null;
}
