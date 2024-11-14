/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type PortableTextSimple = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: 'span';
    _key: string;
  }>;
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
  listItem?: 'bullet' | 'number';
  markDefs?: Array<
    | ({
        _key: string;
      } & LinkProduct)
    | ({
        _key: string;
      } & LinkEmail)
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  level?: number;
  _type: 'block';
  _key: string;
}>;

export type PortableText = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
      listItem?: 'bullet' | 'number';
      markDefs?: Array<
        | ({
            _key: string;
          } & LinkProduct)
        | ({
            _key: string;
          } & LinkEmail)
        | ({
            _key: string;
          } & LinkInternal)
        | ({
            _key: string;
          } & LinkExternal)
      >;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | ({
      _key: string;
    } & Accordion)
  | ({
      _key: string;
    } & Callout)
  | ({
      _key: string;
    } & Grid)
  | ({
      _key: string;
    } & Images)
  | ({
      _key: string;
    } & ImageWithProductHotspots)
  | ({
      _key: string;
    } & Instagram)
  | ({
      _key: string;
    } & Products)
>;

export type Settings = {
  _id: string;
  _type: 'settings';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  menu?: Menu;
  footer?: FooterSettings;
  customProductOptions?: Array<
    | ({
        _key: string;
      } & CustomProductOptionColor)
    | ({
        _key: string;
      } & CustomProductOptionSize)
  >;
  notFoundPage?: NotFoundPage;
  seo?: Seo;
};

export type Spot = {
  _type: 'spot';
  productWithVariant?: ProductWithVariant;
  x?: number;
  y?: number;
};

export type ProxyString = string;

export type ProductVariant = {
  _id: string;
  _type: 'productVariant';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hidden?: string;
  titleProxy?: ProxyString;
  store?: ShopifyProductVariant;
};

export type ShopifyProductVariant = {
  _type: 'shopifyProductVariant';
  createdAt?: string;
  updatedAt?: string;
  status?: 'active' | 'archived' | 'draft';
  isDeleted?: boolean;
  title?: string;
  sku?: string;
  id?: number;
  gid?: string;
  productId?: number;
  productGid?: string;
  price?: number;
  compareAtPrice?: number;
  inventory?: Inventory;
  option1?: string;
  option2?: string;
  option3?: string;
  previewImageUrl?: string;
};

export type ProductReference = {
  _type: 'productReference';
  productWithVariant?: ProductWithVariant;
};

export type ProductHotspots = Array<
  {
    _key: string;
  } & Spot
>;

export type Products = {
  _type: 'products';
  products?: Array<
    {
      _key: string;
    } & ProductReference
  >;
  layout?: 'card' | 'pill';
};

export type PriceRange = {
  _type: 'priceRange';
  minVariantPrice?: number;
  maxVariantPrice?: number;
};

export type PlaceholderString = string;

export type Option = {
  _type: 'option';
  name?: string;
  values?: Array<string>;
};

export type NotFoundPage = {
  _type: 'notFoundPage';
  title?: string;
  body?: string;
  collection?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'collection';
  };
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
};

export type Menu = {
  _type: 'menu';
  links?: Array<
    | ({
        _key: string;
      } & CollectionGroup)
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
};

export type MenuLinks = Array<
  | ({
      _key: string;
    } & CollectionGroup)
  | ({
      _key: string;
    } & LinkInternal)
  | ({
      _key: string;
    } & LinkExternal)
>;

export type Inventory = {
  _type: 'inventory';
  isAvailable?: boolean;
  management?: string;
  policy?: string;
};

export type Instagram = {
  _type: 'instagram';
  url?: string;
};

export type ImageWithProductHotspots = {
  _type: 'imageWithProductHotspots';
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  showHotspots?: boolean;
  productHotspots?: ProductHotspots;
};

export type ImageFeature = {
  _type: 'imageFeature';
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  variant?:
    | string
    | 'caption'
    | 'callToAction'
    | 'productHotspots'
    | 'productTags';
  caption?: string;
  callToAction?: ImageCallToAction;
  productHotspots?: ProductHotspots;
  productTags?: Array<
    {
      _key: string;
    } & ProductWithVariant
  >;
};

export type Images = {
  _type: 'images';
  imageFeatures?: Array<
    {
      _key: string;
    } & ImageFeature
  >;
  fullWidth?: boolean;
  verticalAlign?: 'top' | 'center' | 'bottom';
};

export type ImageCallToAction = {
  _type: 'imageCallToAction';
  title?: string;
  link?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
};

export type Grid = {
  _type: 'grid';
  items?: Array<
    {
      _key: string;
    } & GridItem
  >;
};

export type GridItem = {
  _type: 'gridItem';
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  body?: PortableTextSimple;
};

export type FooterSettings = {
  _type: 'footerSettings';
  links?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  text?: PortableTextSimple;
};

export type CustomProductOptionSize = {
  _type: 'customProductOption.size';
  title?: string;
  sizes?: Array<
    {
      _key: string;
    } & CustomProductOptionSizeObject
  >;
};

export type CustomProductOptionSizeObject = {
  _type: 'customProductOption.sizeObject';
  title?: string;
  width?: number;
  height?: number;
};

export type CustomProductOptionColor = {
  _type: 'customProductOption.color';
  title?: string;
  colors?: Array<
    {
      _key: string;
    } & CustomProductOptionColorObject
  >;
};

export type CustomProductOptionColorObject = {
  _type: 'customProductOption.colorObject';
  title?: string;
  color?: Color;
};

export type CollectionRule = {
  _type: 'collectionRule';
  column?: string;
  relation?: string;
  condition?: string;
};

export type CollectionReference = {
  _type: 'collectionReference';
  collection?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'collection';
  };
  showBackground?: boolean;
};

export type CollectionLinks = Array<{
  _ref: string;
  _type: 'reference';
  _weak?: boolean;
  _key: string;
  [internalGroqTypeReferenceTo]?: 'collection';
}>;

export type CollectionGroup = {
  _type: 'collectionGroup';
  title?: string;
  collectionLinks?: CollectionLinks;
  collectionProducts?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'collection';
  };
};

export type CallToAction = {
  _type: 'callToAction';
  layout?: 'left' | 'right';
  title?: string;
  portableText?: string;
  link?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  content?: Array<
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: 'image';
        _key: string;
      }
    | ({
        _key: string;
      } & ProductWithVariant)
  >;
};

export type Callout = {
  _type: 'callout';
  text?: string;
  link?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
};

export type Accordion = {
  _type: 'accordion';
  groups?: Array<
    {
      _key: string;
    } & AccordionGroup
  >;
};

export type AccordionGroup = {
  _type: 'accordionGroup';
  title?: string;
  body?: PortableTextSimple;
};

export type LinkProduct = {
  _type: 'linkProduct';
  productWithVariant?: ProductWithVariant;
  linkAction?: 'link' | 'addToCart' | 'buyNow';
  quantity?: number;
};

export type ProductWithVariant = {
  _type: 'productWithVariant';
  product?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'product';
  };
  variant?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'productVariant';
  };
};

export type LinkInternal = {
  _type: 'linkInternal';
  reference?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'collection';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'home';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'page';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'product';
      };
};

export type Product = {
  _id: string;
  _type: 'product';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hidden?: string;
  titleProxy?: ProxyString;
  slugProxy?: ProxyString;
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
  body?: PortableText;
  store?: ShopifyProduct;
  seo?: Seo;
};

export type ShopifyProduct = {
  _type: 'shopifyProduct';
  createdAt?: string;
  updatedAt?: string;
  status?: 'active' | 'archived' | 'draft';
  isDeleted?: boolean;
  title?: string;
  id?: number;
  gid?: string;
  slug?: Slug;
  descriptionHtml?: string;
  productType?: string;
  vendor?: string;
  tags?: string;
  priceRange?: PriceRange;
  previewImageUrl?: string;
  options?: Array<
    {
      _key: string;
    } & Option
  >;
  variants?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'productVariant';
  }>;
};

export type Page = {
  _id: string;
  _type: 'page';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
  showHero?: boolean;
  hero?: Hero;
  body?: Array<
    | ({
        _key: string;
      } & Accordion)
    | ({
        _key: string;
      } & Callout)
    | ({
        _key: string;
      } & Grid)
    | ({
        _key: string;
      } & Images)
    | ({
        _key: string;
      } & ImageWithProductHotspots)
    | ({
        _key: string;
      } & Instagram)
    | ({
        _key: string;
      } & Products)
  >;
  seo?: Seo;
};

export type Home = {
  _id: string;
  _type: 'home';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hero?: Hero;
  modules?: Array<
    | ({
        _key: string;
      } & Accordion)
    | ({
        _key: string;
      } & Callout)
    | ({
        _key: string;
      } & Grid)
    | ({
        _key: string;
      } & Images)
    | ({
        _key: string;
      } & ImageWithProductHotspots)
    | ({
        _key: string;
      } & Instagram)
    | ({
        _key: string;
      } & Products)
  >;
  seo?: Seo;
};

export type Collection = {
  _id: string;
  _type: 'collection';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hidden?: string;
  titleProxy?: ProxyString;
  slugProxy?: ProxyString;
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
  vector?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  showHero?: boolean;
  hero?: Hero;
  modules?: Array<
    | ({
        _key: string;
      } & Callout)
    | ({
        _key: string;
      } & CallToAction)
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: 'image';
        _key: string;
      }
    | ({
        _key: string;
      } & Instagram)
  >;
  store?: ShopifyCollection;
  seo?: Seo;
};

export type Seo = {
  _type: 'seo';
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type ShopifyCollection = {
  _type: 'shopifyCollection';
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
  title?: string;
  id?: number;
  gid?: string;
  slug?: Slug;
  descriptionHtml?: string;
  imageUrl?: string;
  rules?: Array<
    {
      _key: string;
    } & CollectionRule
  >;
  disjunctive?: boolean;
  sortOrder?: string;
};

export type Hero = {
  _type: 'hero';
  title?: string;
  description?: string;
  link?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  content?: Array<
    | ({
        _key: string;
      } & ProductWithVariant)
    | ({
        _key: string;
      } & ImageWithProductHotspots)
  >;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type ColorTheme = {
  _id: string;
  _type: 'colorTheme';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  text?: Color;
  background?: Color;
};

export type LinkExternal = {
  _type: 'linkExternal';
  url?: string;
  newWindow?: boolean;
};

export type LinkEmail = {
  _type: 'linkEmail';
  email?: string;
};

export type MediaTag = {
  _id: string;
  _type: 'media.tag';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type Color = {
  _type: 'color';
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: 'rgbaColor';
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: 'hsvaColor';
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: 'hslaColor';
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | PortableTextSimple
  | PortableText
  | Settings
  | Spot
  | ProxyString
  | ProductVariant
  | ShopifyProductVariant
  | ProductReference
  | ProductHotspots
  | Products
  | PriceRange
  | PlaceholderString
  | Option
  | NotFoundPage
  | Menu
  | MenuLinks
  | Inventory
  | Instagram
  | ImageWithProductHotspots
  | ImageFeature
  | Images
  | ImageCallToAction
  | Grid
  | GridItem
  | FooterSettings
  | CustomProductOptionSize
  | CustomProductOptionSizeObject
  | CustomProductOptionColor
  | CustomProductOptionColorObject
  | CollectionRule
  | CollectionReference
  | CollectionLinks
  | CollectionGroup
  | CallToAction
  | Callout
  | Accordion
  | AccordionGroup
  | LinkProduct
  | ProductWithVariant
  | LinkInternal
  | Product
  | ShopifyProduct
  | Page
  | Home
  | Collection
  | Seo
  | ShopifyCollection
  | Hero
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | ColorTheme
  | LinkExternal
  | LinkEmail
  | MediaTag
  | Slug
  | Color
  | RgbaColor
  | HsvaColor
  | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../sanity-and-hydrogen/app/sanity/queries.ts
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]{...,  body[]{    _key,    _type,    ...,    _type == "products" => {      layout,      products[]{        _key,        productWithVariant {          "product": product->{            "title": store.title,            "image": store.previewImageUrl,            "slug": store.slug,            "price": store.priceRange,          },          "variant": variant->{            "title": store.title,            "image": store.previewImageUrl,            "price": store.price,          },        }      }    }  }}
export type PAGE_QUERYResult = {
  _id: string;
  _type: 'page';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
  showHero?: boolean;
  hero?: Hero;
  body: Array<
    | {
        _key: string;
        _type: 'accordion';
        groups?: Array<
          {
            _key: string;
          } & AccordionGroup
        >;
      }
    | {
        _key: string;
        _type: 'callout';
        text?: string;
        link?: Array<
          | ({
              _key: string;
            } & LinkExternal)
          | ({
              _key: string;
            } & LinkInternal)
        >;
      }
    | {
        _key: string;
        _type: 'grid';
        items?: Array<
          {
            _key: string;
          } & GridItem
        >;
      }
    | {
        _key: string;
        _type: 'images';
        imageFeatures?: Array<
          {
            _key: string;
          } & ImageFeature
        >;
        fullWidth?: boolean;
        verticalAlign?: 'bottom' | 'center' | 'top';
      }
    | {
        _key: string;
        _type: 'imageWithProductHotspots';
        image?: {
          asset?: {
            _ref: string;
            _type: 'reference';
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: 'image';
        };
        showHotspots?: boolean;
        productHotspots?: ProductHotspots;
      }
    | {
        _key: string;
        _type: 'instagram';
        url?: string;
      }
    | {
        _key: string;
        _type: 'products';
        products: Array<{
          _key: string;
          productWithVariant: {
            product: {
              title: string | null;
              image: string | null;
              slug: Slug | null;
              price: PriceRange | null;
            } | null;
            variant: {
              title: string | null;
              image: string | null;
              price: number | null;
            } | null;
          } | null;
        }> | null;
        layout: 'card' | 'pill' | null;
      }
  > | null;
  seo?: Seo;
} | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "page" && slug.current == $slug][0]{\n...,\n  body[]{\n    _key,\n    _type,\n    ...,\n    _type == "products" => {\n      layout,\n      products[]{\n        _key,\n        productWithVariant {\n          "product": product->{\n            "title": store.title,\n            "image": store.previewImageUrl,\n            "slug": store.slug,\n            "price": store.priceRange,\n          },\n          "variant": variant->{\n            "title": store.title,\n            "image": store.previewImageUrl,\n            "price": store.price,\n          },\n        }\n      }\n    }\n  }\n}': PAGE_QUERYResult;
  }
}
