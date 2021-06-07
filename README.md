# Daily Webinar Admin App

To run locally:

```
1. Clone app
2. Install dependencies: yarn
3. Add a .env file
4. Run app: yarn start
```

Your .env file should look like this:

```
REACT_APP_DAILY_API_KEY=<-your-daily-api-key->
REACT_APP_API_BASE_URL=<-your-api-endpoint->
```

## What's it for?

This app was originally intended to be the admin counter-part to the webinar app. It can be used on its own for room management, though.

## Functionality

- creating new broadcast rooms
- generating meeting tokens for specific rooms
