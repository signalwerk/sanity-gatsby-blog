export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615a19b42ed21463ac13cebd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-k21vy1sx",
                  apiId: "c2376ace-f802-4f43-aeb4-6eae8aa1c62b",
                },
                {
                  buildHookId: "615a19b59826038398998b80",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2ztfcnfp",
                  apiId: "33f8ea80-aec3-434a-8ec8-f3d53ee047fc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/signalwerk/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2ztfcnfp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
