import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { findLatestPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Home({}) {
  const posts = await findLatestPosts({ count: 10 });
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header className="mb-16 text-center">
        <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          AI Interview Insights
        </h1>
        <p className="mx-auto max-w-3xl px-4 text-xl text-gray-600 dark:text-slate-400 sm:px-6">
          Expert tips, strategies, and insights to help you master AI-powered interviews and land your dream job.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <article key={post.slug} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
            <Link href={`/${post.slug}`} className="block">
              <div className="aspect-video overflow-hidden">
                <Image
                  width={400}
                  height={225}
                  alt={post.title}
                  src={post.image}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
                  <time dateTime={post.publishDate}>{post.publishDate}</time>
                  {post.tags && post.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <span className="capitalize">{post.tags[0]}</span>
                    </>
                  )}
                </div>
                <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400">
                  <span className="text-sm font-medium">Read more</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-slate-400">No blog posts found.</p>
        </div>
      )}
    </section>
  );
}
