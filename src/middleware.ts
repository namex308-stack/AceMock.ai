import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// اختياري: حدد الصفحات اللي مش محتاجة حماية (زي الـ landing page والـ sign-in/up)
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/about',
  '/pricing',
  // أضف أي صفحات عامة تانية هنا
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect(); // يحمي كل الصفحات اللي مش عامة
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};