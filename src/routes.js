import ShowAdmins from './components/admin/showAdmins'
import SigninForm from './components/shared/SigninForm.vue'
import AdminRegister from './components/admin/adminRegister.vue'
import ClientRegister from './components/client/clientRegister.vue'
import AddSubscriber from './components/shared/addSubscriber.vue'
import AllSubs from './components/client/allSubscribers.vue'
import ErrorPage from './components/shared/adminErrorPage.vue'
import AdminUpdate from './components/admin/updateAdmin.vue'
import UnpaidBills from './components/client/unpaidBills.vue'
import CSigninForm from './components/client/clientSignin.vue'
import ShowClients from './components/client/showClients.vue'

export default[

{path: '/adminsignin', component:SigninForm},
{path: '/clientsignin', component:CSigninForm},
{path: '/registeradmin', component:AdminRegister},
{path: '/registerclient', component:ClientRegister},
{path: '/showadmins', component:ShowAdmins},
{path: '/showclients', component:ShowClients},
{path: '/addsubs', component:AddSubscriber},
{path: '/allsubs', component:AllSubs},
{path: '/adminerrorpage', component:ErrorPage},
{path: '/adminupdate', component:AdminUpdate},
{path: '/unpaidbills', component:UnpaidBills},

//
//

]

