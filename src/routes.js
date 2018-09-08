import ShowUsers from './components/shared/showUsers'
import SigninForm from './components/shared/SigninForm.vue'
import RegisterForm from './components/shared/RegisterForm.vue'
import AddSubscriber from './components/shared/addSubscriber.vue'

export default[
{path: '/', component:ShowUsers},
{path: '/signin', component:SigninForm},
{path: '/register', component:RegisterForm},
{path: '/showUsers', component:ShowUsers},
{path: '/addsubs', component:AddSubscriber}
//
//

]

