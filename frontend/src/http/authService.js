import axios from "axios";

export function login(email, password) {
  return axios.post(`http://localhost:8000/api/auth`, {
    email,
    password,
  });
}

export function register({
  user_name,
  surname1,
  surname2,
  club,
  gender,
  postal_code,
  phone,
  email,
  password,
  user_type,
}) {
  return axios.post(`http://localhost:8000/api/account`, {
    user_name,
    surname1,
    surname2,
    club,
    gender,
    postal_code,
    phone,
    email,
    password,
    user_type,
  });
}

export function registerPromise(
  {
    avatar_url,
    name,
    surname1,
    surname2,
    gender,
    comunity,
    province,
    date_birth,
    team,
    height,
    weight,
    demarcation,
    best_leg,
  },
  config
) {
  return axios.post(
    `http://localhost:8000/api/promise`,
    {
      avatar_url,
      name,
      surname1,
      surname2,
      gender,
      comunity,
      province,
      date_birth,
      team,
      height,
      weight,
      demarcation,
      best_leg,
    },
    config
  );
}
