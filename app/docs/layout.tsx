import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { type ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { FaDiscord } from "react-icons/fa";

function Banner() {
  return (
    <div className="p-1 dark:hover:bg-white/5 hover:bg-black/5 rounded-sm transition-all duration-300">
      <a href="https://discord.gg/z9c4rY6U2P" className="flex items-center justify-center gap-2" target="_blank">
        <div className="p-1.5 text-3xl rounded-full bg-[#5764F0]"><FaDiscord /></div>
        <div className="text-lg">Join our Discord</div>
      </a>
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
    tree={source.pageTree}
    sidebar={{
      banner: (<Banner />)
    }}
    {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
