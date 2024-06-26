import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return {
      user,
      photo,
    };

  } catch (err) {
    return { photo: null, user: null };
  }
}
