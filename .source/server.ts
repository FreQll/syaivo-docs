// @ts-nocheck
import * as __fd_glob_5 from "../content/docs/waves.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/topography.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/particles.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/glyphs.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"glyphs.mdx": __fd_glob_1, "index.mdx": __fd_glob_2, "particles.mdx": __fd_glob_3, "topography.mdx": __fd_glob_4, "waves.mdx": __fd_glob_5, });