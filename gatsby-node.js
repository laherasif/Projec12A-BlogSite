


var path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    const result = await graphql(`
    {
      allContentfulBooks {
        nodes {
          slug
          title
          id
          desc {
            json
          }
          image {
            description
            file {
              url
            }
          }
        }
    }

    }
    `)

    console.log(JSON.stringify(result));

    result.data.allContentfulBooks.nodes.forEach((obj)=>{
        createPage({
            path: `/books/${obj.slug}`,
            component: path.resolve('./src/BookBlog/blog.tsx'),
            // component : path.resolve('./src/pages/index.js'),
            context: {
                itemDetails: obj
            }
        })
    })
}