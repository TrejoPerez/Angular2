import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UsuarioService } from './usuario.service';
@Component({
	selector:'my-app',
	template: `
		{{title}}
		<nav>
			<a [routerLink]="['/usuario']" routerLinkActivate="active">Ver Todos</a>
			<a [routerLink]="['/usuarioId']" routerLinkActivate="active">Buscar Por Id</a>
		</nav>	
		<router-outlet></router-outlet>
		
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
		UsuarioService
	]
})
export class AppComponent {
	title='Crud Angular 2  & Spring';
}