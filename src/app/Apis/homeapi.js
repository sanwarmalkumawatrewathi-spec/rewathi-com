export async function getHomePageACF() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/acf/v3/pages/${process.env.NEXT_PUBLIC_HOMEPAGE_ID}`,
    { next: { revalidate: 60 } } // ISR cache
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch homepage ACF: ${res.status}`);
  }

  return res.json();
}
