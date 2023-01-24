import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const img = uploadPhoto();
  const user = createUser();

  return Promise.all([img, user])
    .then((result) => console.log(result[0].body, result[1].firstName, result[1].lastName))
    .catch(Error('Signup system offline'));
}
