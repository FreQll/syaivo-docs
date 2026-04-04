// @ts-nocheck
import * as __fd_glob_15 from "../content/docs/waves.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/topography.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/particles.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/mesh-gradient.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/lumina.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/liquid-silk.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/hyper-jump.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/halftone.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/glyphs.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/examples.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/dither.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/dither-warp.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/cybergrid.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/aurora.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"aurora.mdx": __fd_glob_1, "cybergrid.mdx": __fd_glob_2, "dither-warp.mdx": __fd_glob_3, "dither.mdx": __fd_glob_4, "examples.mdx": __fd_glob_5, "glyphs.mdx": __fd_glob_6, "halftone.mdx": __fd_glob_7, "hyper-jump.mdx": __fd_glob_8, "index.mdx": __fd_glob_9, "liquid-silk.mdx": __fd_glob_10, "lumina.mdx": __fd_glob_11, "mesh-gradient.mdx": __fd_glob_12, "particles.mdx": __fd_glob_13, "topography.mdx": __fd_glob_14, "waves.mdx": __fd_glob_15, });