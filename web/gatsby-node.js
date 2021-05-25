// exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       fallback: {
//         https: require.resolve('https-browserify'),
//         http: require.resolve('stream-http'),
//       },
//     },
//   })
// }

// Template pages

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const PostTemplate = require.resolve('./src/templates/Post/Article/index.tsx')

//   // Articles
//   // ___________________________________________________________________
//   const post = graphql(`
//     {
//       posts: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
//         edges {
//           node {
//             title
//           }
//         }
//       }
//     }
//   `).then((result) => {
//     if (result.errors) {
//       Promise.reject(result.errors)
//     }
//     result.data.posts.edges.forEach((edge) => {
//       createPage({
//         path: `/blog/${edge.node.slug.current}`,
//         component: PostTemplate,
//         context: {
//           slug: edge.node.slug.current,
//           post: edge.node,
//           next: edge.next,
//           prev: edge.previous,
//         },
//       })
//     })
//   })

//   // Return a Promise which will wait for all queries to resolve
//   return Promise.all([post])
// }
