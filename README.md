# Next Initial Demo

This little app is for a initial demo with Next.js: framework fundamentals, page routing and nested layouts.

## Usage

Install dependencies

```
yarn
```

Run app locally for development

```
yarn dev
```

Build docker image for production

```
docker build -t <IMAGE_TAG_NAME> .
```

Run docker image and expose on port=PORT

```
docker run --name=<CONTAINER_NAME> -p <PORT>:3000 -d <IMAGE_TAG_NAME>
```

## Deployed app

https://jpin730-next-initial-demo.vercel.app
