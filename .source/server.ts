// @ts-nocheck
import * as __fd_glob_10 from "../content/docs/waves.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/topography.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/particles.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/mesh-gradient.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/hyper-jump.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/glyphs.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/dither.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/cybergrid.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/aurora.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"aurora.mdx": __fd_glob_1, "cybergrid.mdx": __fd_glob_2, "dither.mdx": __fd_glob_3, "glyphs.mdx": __fd_glob_4, "hyper-jump.mdx": __fd_glob_5, "index.mdx": __fd_glob_6, "mesh-gradient.mdx": __fd_glob_7, "particles.mdx": __fd_glob_8, "topography.mdx": __fd_glob_9, "waves.mdx": __fd_glob_10, });