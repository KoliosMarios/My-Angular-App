import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: WelcomeComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [WelcomeComponent, TodosComponent, ErrorComponent];
