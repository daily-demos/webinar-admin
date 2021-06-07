# Daily Webinar Admin App

This demo is the admin counterpart to the [webinar demo](https://github.com/daily-demos/webinar). It can be used on its own as well for token and room management.

## Prerequisites

- [Sign up for a Daily account](https://dashboard.daily.co/signup) and get API key from [https://dashboard.daily.co/developers](https://dashboard.daily.co/developers)

### Optional

- Click the Netlify deploy button below and follow the instructions

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/daily-demos/webinar-admin)

## How this demo works

Create new broadcast rooms with pre-set config options and generate new owner meeting tokens for specific rooms. Owner usernames can be set through the token form, as well.

## Running locally

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

## What's next

Expand the room and meeting token forms to accommodate all Daily config options!
