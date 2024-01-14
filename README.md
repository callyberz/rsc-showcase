# nextjs static export showcase

This is a showcase of how to use nextjs to export a static site and Static Site Generation (SSG)

### Statie Site Generation (SSG)

- By default use SSG to build
- Does not require server to be running
- Or deploy to any node server and host it using `next start`

### Static export

- do the same thing as SSG, and also
- built as a individual HTML file with CSS/JS static assets
- can be deployed and hosted on any web server
- eg: by adding `output: export`
  ![code](https://i.imgur.com/d5RLPns.png)
- then run npm run build, out/ will look like this
  ![files](https://i.imgur.com/nJ9MDyY.png)
- We can host this `index.html` as the single point using AWS, Github Pages, Wix, even locally
- Install Live Server on VSCode [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer]
- Copy all the files in `out/` then host using Live Sever
- React Server Components (RSC) will be called at build time
- Client Component: if the app has routes, simply host this `index.html` will not work if it is not a SPA
  - As SPA will navigate to different routes on the client
  - Refer to [nextjs docs](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
