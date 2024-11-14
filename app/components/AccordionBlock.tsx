import {PortableText} from '@portabletext/react';
import type {Accordion} from '~/sanity/sanity.types';

export function AccordionBlock(props: Accordion) {
  return Array.isArray(props.groups) ? (
    <div className="flex flex-col bg-blue-50 divide-y divide-blue-100">
      {props.groups.map((group) => (
        <details key={group._key} className="p-4 w-full max-w-lg mx-auto">
          <summary className="font-bold py-2">{group.title}</summary>
          {Array.isArray(group.body) ? (
            <PortableText value={group.body} />
          ) : null}
        </details>
      ))}
    </div>
  ) : null;
}
