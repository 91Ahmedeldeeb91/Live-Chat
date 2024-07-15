import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const error = ref(null);
const login = async (email, Password) => {
  error.value = null;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, Password);
    error.value = null;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.value);
    error.value = "Incorrect login credentails";
  }
}
const useLogin = () => {
    return {error , login}
}
export default useLogin