import ShowUsers from './components/shared/showUsers'
import SigninForm from './components/shared/SigninForm.vue'
import AdminRegister from './components/admin/adminRegister.vue'
import ClientRegister from './components/client/clientRegister.vue'
import AddSubscriber from './components/shared/addSubscriber.vue'

export default[
{path: '/', component:ShowUsers},
{path: '/signin', component:SigninForm},
{path: '/registeradmin', component:AdminRegister},
{path: '/registerclient', component:ClientRegister},
{path: '/showUsers', component:ShowUsers},
{path: '/addsubs', component:AddSubscriber}
//
//

]

