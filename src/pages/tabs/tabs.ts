import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CategoriesPage } from '../categories/categories';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = HomePage;
  tab3Root = CategoriesPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
