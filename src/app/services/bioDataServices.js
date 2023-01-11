import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL

export async function getBioData() {
  console.log(baseURL,"base")
  try {
    const data = await axios.get(`${baseURL}users`);
    console.log(baseURL,"base")
    return data;
  } catch (err) {
    return err;
  }
}

export async function createUser(payload) {
  try {
    const data = await axios.post(
      `${baseURL}users/`,
      payload
    );
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
}

export async function updateUser(userId, value) {
  try {
    const data = await axios.put(
      `${baseURL}users/${userId}`,
      value
    );
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
}

export async function deleteUser(userID) {
  try {
    const data = await axios.delete(
      `${baseURL}users/${userID}`
    );
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
}
