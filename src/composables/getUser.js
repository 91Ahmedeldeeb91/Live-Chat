import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user =>  {
    console.log('use state change . curreent user is : ' , _user)
    user.value = _user
})
const getUser = () => {
    return { user }
}
export default getUser;