import axios from "axios";

export async function getBioData() {
  try {
    const data = await axios.get("http://54.202.218.249:9501/api/users");
    return data;
  } catch (err) {
    return err;
  }
}

export async function createUser(payload) {
  try {
    const data = await axios.post(
      `http://54.202.218.249:9501/api/users/`,
      payload
    );
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
}

export async function updateUser(userId, value) {
  console.log(userId, "***Api call user ID");
  try {
    const data = await axios.put(
      `http://54.202.218.249:9501/api/users/${userId}`,
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
      `http://54.202.218.249:9501/api/users/${userID}`
    );
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
}
