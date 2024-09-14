module.exports = {
  port: 5000,
  directory: "public",
  spa: "index.html",
  logFormat: "dev",
  rewrite: [
    {
      from: "/api/sign/(.*)",
      to: "http://13.233.253.134:8000/$1",
    },
    {
      from: "/api/v2/(.*)",
      to: "https://test.swagger.print2block.in/$1",
    },
    {
      from: "/ipfs/(.*)",
      to: "https://test.view.print2block.in/ipfs/$1",
    },
  ],
}
