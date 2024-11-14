import groq from 'groq';

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
...,
  body[]{
    _key,
    _type,
    ...,
    _type == "products" => {
      layout,
      products[]{
        _key,
        productWithVariant {
          "product": product->{
            "title": store.title,
            "image": store.previewImageUrl,
            "slug": store.slug,
            "price": store.priceRange,
          },
          "variant": variant->{
            "title": store.title,
            "image": store.previewImageUrl,
            "price": store.price,
          },
        }
      }
    }
  }
}`;
