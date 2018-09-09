import ShowAdmins from './components/admin/showAdmins'
import SigninForm from './components/shared/SigninForm.vue'
import AdminRegister from './components/admin/adminRegister.vue'
import ClientRegister from './components/client/clientRegister.vue'
import AddSubscriber from './components/shared/addSubscriber.vue'
import AllSubs from './components/client/allSubscribers.vue'

export default[
{path: '/', component:ShowAdmins},
{path: '/signin', component:SigninForm},
{path: '/registeradmin', component:AdminRegister},
{path: '/registerclient', component:ClientRegister},
{path: '/showadmins', component:ShowAdmins},
{path: '/addsubs', component:AddSubscriber},
{path: '/allsubs', component:AllSubs}
//
//

]

