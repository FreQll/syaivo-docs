import { docs } from '@/.source/server';
import { loader } from 'fumadocs-core/source';
import * as Icons from '@phosphor-icons/react/dist/ssr';

export const source = loader(docs.toFumadocsSource(), {
  baseUrl: '/docs',
  icon(icon) {
    if (!icon) return;
    const Icon = (Icons as Record<string, unknown>)[icon] as
      | React.ComponentType<{ size?: number; weight?: string }>
      | undefined;
    if (Icon) return <Icon size={18} weight="duotone" />;
  },
});
