import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const output = [];
  const promise = Promise.allSettled([user, photo])
    .then((results) => {
      results.forEach((res) => {
        const data = {};
        data.status = res.status;
        if (res.value) {
          data.value = res.value;
        } else {
          data.value = res.reason;
        }
        output.push(data);
      });
      return output;
    });
  return promise;
}
