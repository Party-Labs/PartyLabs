import { useStaticQuery, graphql } from 'gatsby';

export const useAllMdx = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { status: { ne: "draft" }, type: { in: ["post", "article", "ctf"] } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `);

  return nodes;
};
