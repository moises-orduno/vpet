// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAM6bFwm5O3SfHJLrpiAMZ8SKLSCvh7w1M',
    authDomain: 'v-pet-blog.firebaseapp.com',
    databaseURL: 'https://v-pet-blog.firebaseio.com',
    projectId: 'v-pet-blog',
    storageBucket: 'v-pet-blog.appspot.com',
    messagingSenderId: '634364631270'
  }
};
