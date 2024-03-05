import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  /* eslint-disable no-unused-vars */
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [photoResponse, userResponse] = response;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((err) => {
      console.error('Signup system offline');
    });
}
