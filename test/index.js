const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { loadSchemaSync } = require("@graphql-tools/load");
const test = require("tape");

test("test", (t) => {
  t.plan(1);

  t.doesNotThrow(() => {
    loadSchemaSync("test/schema/a/schema.graphql", {
      loaders: [new GraphQLFileLoader()]
    });
  });
});
