# React plus SSR setup

## About

There are definitely a lot of the same projects. Nevertheless, creating this one I do want to provide a simple, but at the same time with a possibiility to use in production right away, template for React based projects with Server Side rendering feature that has only a __minimum configuration__ of all used libraries. All other possible advanced configuration is expected to be written on-demand and only by your needs. I will try to stick with only those libraries that are __relevant__ for today from the community view. 

For me, it is a base for future projects, constant opportunity to examine as new libraries as its updates (in particular those of webpack) and community approaches in a more detailed way.

I would be very grateful for any suggestions or improvements.

## Usage

Start Development

```bash
npm install
npm start
```

Start Production

```bash
npm install
npm run build
node build/server/server.js
```

> Each has its specific environment based optimizations

## Todo
- [x] Setup webpack-hot-middleware
- [x] Add Redux, Redux Thunk, Redux DevTools
- [x] Provide code consistency(linters)
- [x] Add production client build script
- [ ] Add static typing
- [ ] Setup Jest
- [x] Add wepback loaders with HMR for SCSS, CSS with
- [ ] Customize webpack compile logs
