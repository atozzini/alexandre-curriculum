## My resume

My resume, developed with React.

## Local development
yarn install
yarn start

## Build
yarn build

## Deploy
Deployed via AWS Amplify Hosting, which builds and serves the `build/` output
directly (see `amplify.yml`). Since this is a client-side routed SPA
(`react-router-dom`), add a rewrite rule in the Amplify console so unknown
paths fall back to `index.html`:

| Source address | Target address | Type |
|---|---|---|
| `/<*>` | `/index.html` | 200 (Rewrite) |
