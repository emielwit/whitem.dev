export default {
  widgets: [
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: []
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/emielwit/whitem.dev",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://www.whitem.dev",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" }
    }
  ]
};
