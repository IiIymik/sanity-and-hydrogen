import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import type {PAGE_QUERYResult} from '~/sanity/sanity.types';
import {PAGE_QUERY} from '~/sanity/queries';

import {AccordionBlock} from '~/components/AccordionBlock';
import {ProductsBlock} from '~/components/ProductsBlock';

const BLOCKS: Record<string, (props: any) => JSX.Element | null> = {
  accordion: AccordionBlock,
  products: ProductsBlock,
  _unknown: (props: any) => <>{JSON.stringify(props)}</>,
};
export async function loader({params, context: {sanity}}: LoaderFunctionArgs) {
  const query = PAGE_QUERY;
  const initial = await sanity.loadQuery<PAGE_QUERYResult>(query, params);

  if (!initial.data) {
    throw new Response('Not found', {status: 404});
  }

  return json({initial});
}

export default function Page() {
  const {initial} = useLoaderData<typeof loader>();
  const page = initial?.data;

  return Array.isArray(page?.body) ? (
    <main>
      {page.body.map((block) =>
        block._type in BLOCKS
          ? BLOCKS[block._type]({key: block._key, ...block})
          : BLOCKS._unknown({key: block._key, ...block}),
      )}
    </main>
  ) : null;
}
