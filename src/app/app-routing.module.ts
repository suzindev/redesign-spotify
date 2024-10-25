import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { PlayerModule } from './pages/player/player.module';
import { usuarioLogadoResolver } from './resolvers/isUsuarioLogado.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(m => PlayerModule),
    resolve: { isUsuarioLogado: usuarioLogadoResolver }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
