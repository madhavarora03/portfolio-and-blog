export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date: string | number | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

// export function formatBlogPosts(
//   posts,
//   {
//     filterOutDrafts = true,
//     filterOutFuturePosts = true,
//     sortByDate = true,
//     limit = undefined,
//   } = {},
// ) {
//   const filteredPosts = posts.reduce((acc, post) => {
//     const { date, draft } = post.frontmatter;
//     // filterOutDrafts if true
//     if (filterOutDrafts && draft) return acc;

//     // filterOutFuturePosts if true
//     if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

//     // add post to acc
//     acc.push(post);

//     return acc;
//   }, []);

//   // sortByDate or randomize
//   if (sortByDate) {
//     filteredPosts.sort(
//       (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
//     );
//   } else {
//     filteredPosts.sort(() => Math.random() - 0.5);
//   }

//   // limit if number is passed
//   if (typeof limit === "number") {
//     return filteredPosts.slice(0, limit);
//   }
//   return filteredPosts;
// }
