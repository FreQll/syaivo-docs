import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ParticlesPreview } from '@/components/particles-preview';
import { WavesPreview } from '@/components/waves-preview';
import { TopographyPreview } from '@/components/topography-preview';
import { GlyphsPreview } from '@/components/glyphs-preview';
import { MeshGradientPreview } from '@/components/mesh-gradient-preview';
import { AuroraPreview } from '@/components/aurora-preview';
import { CyberGridPreview } from '@/components/cybergrid-preview';
import { DitherPreview } from '@/components/dither-preview';
import { HyperJumpPreview } from '@/components/hyper-jump-preview';
import { LuminaPreview } from '@/components/lumina-preview';
import { DitherWarpPreview } from '@/components/dither-warp-preview';
import * as PhosphorIcons from '@phosphor-icons/react/dist/ssr';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...PhosphorIcons, ...defaultMdxComponents, ParticlesPreview, WavesPreview, TopographyPreview, GlyphsPreview, MeshGradientPreview, AuroraPreview, CyberGridPreview, DitherPreview, HyperJumpPreview, LuminaPreview, DitherWarpPreview }} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
