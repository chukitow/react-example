  const SIGNUP_KEY = 'signup_information';

  export const saveAndContinue = (data) => {
    window.localStorage.setItem(SIGNUP_KEY, JSON.stringify(data));
  }

  export const getSignupInformation = () => {
    const data = window.localStorage.getItem(SIGNUP_KEY);
    return data ? JSON.parse(data) : {};
  }

  export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
