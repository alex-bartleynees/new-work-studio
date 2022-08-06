const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "x8xbnr3c",
  dataset: "production",
  apiVersion: "2022-07-02", // use current UTC date - see "specifying API version"!
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
