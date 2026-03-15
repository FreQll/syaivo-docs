// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"aurora.mdx": () => import("../content/docs/aurora.mdx?collection=docs"), "cybergrid.mdx": () => import("../content/docs/cybergrid.mdx?collection=docs"), "dither.mdx": () => import("../content/docs/dither.mdx?collection=docs"), "glyphs.mdx": () => import("../content/docs/glyphs.mdx?collection=docs"), "hyper-jump.mdx": () => import("../content/docs/hyper-jump.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "mesh-gradient.mdx": () => import("../content/docs/mesh-gradient.mdx?collection=docs"), "particles.mdx": () => import("../content/docs/particles.mdx?collection=docs"), "topography.mdx": () => import("../content/docs/topography.mdx?collection=docs"), "waves.mdx": () => import("../content/docs/waves.mdx?collection=docs"), }),
};
export default browserCollections;