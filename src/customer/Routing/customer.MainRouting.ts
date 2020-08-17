import {HomeComponent} from '../home/customer.HomeComponent';

export const MainRoutes = [
{path: 'Home', component: HomeComponent},
{path: 'Customer', loadChildren: () => import('../cust/customer.CustomerModule')
                                    .then(m => m.CustomerModule)},
{path: 'Supplier', loadChildren: () => import('../supplier/customer.SupplierModule')
                                    .then(m => m.SupplierModule)},
{path: '', component: HomeComponent}

];