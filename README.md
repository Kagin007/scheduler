# Interview Scheduler

Interview Scheduler is a scheduling application built in React. Users can add, edit, and delete appointments. Appointments are booked with a user inputted name and a selection from a list of interviewers. All data persists via Postgres SQL.

# Features Include
- Each day is previewed with the number of appointments spots available, which dynamically updates as user's create and delete appointments.
- Provides a user-friendly experience with informative 'saving...' and 'deleting...' notifications when Axios <b>puts</b> & <b>posts</b> are made to the server

## Screenshots

<!-- !["desktop view"](https://github.com/Kagin007/tweeter/blob/master/docs/tweeterFullScreen.png?raw=true) -->


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```




## Dependencies

- Express
- Node 5.10.x or above
- Body Parser 1.15 or above
- Chance 1.0 or above
- md5 2.1 or above