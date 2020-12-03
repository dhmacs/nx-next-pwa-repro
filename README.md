# NxNextPwaRepro

This project was generated using [Nx](https://nx.dev).

## Reproduction steps

1. `NODE_ENV=production yarn build web`
2. `yarn start --prod`
3. open http://localhost:4200 and refresh a couple of times

A bad precaching error should appear in browser console:
<img width="694" alt="Screen Shot 2020-12-03 at 09 21 59" src="https://user-images.githubusercontent.com/4640135/100983140-369bd880-3549-11eb-8725-d62c71f24558.png">
