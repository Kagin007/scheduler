# Interview Scheduler

Interview Scheduler is a scheduling application built in React. Users can add, edit, and delete appointments. Appointments are booked with a user inputted name and a selection from a list of interviewers. All data persists via Postgres SQL.

# Features Include
- Each day is previewed with the number of appointments spots available, which dynamically updates as user's create and delete appointments.
- Provides a user-friendly experience with informative 'saving...' and 'deleting...' notifications when Axios <b>puts</b> & <b>posts</b> are made to the server

## Screenshots

!["main page"](https://github.com/Kagin007/scheduler/blob/master/docs/Scheduler-%20post.png?raw=true)
!["entering main form"](https://github.com/Kagin007/scheduler/blob/master/docs/Scheduler-Entering%20form.png?raw=true)
!["savign form"](https://github.com/Kagin007/scheduler/blob/master/docs/Scheduler-%20saving.png?raw=true)
!["posted form"](https://github.com/Kagin007/scheduler/blob/master/docs/Scheduler-%20post.png?raw=true)

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

- Axios
- @testing-library/react-hooks
- react-test-renderer