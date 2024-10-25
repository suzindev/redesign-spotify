import { Router } from "@angular/router";
import { SpotifyService } from "../services/spotify.service";
import { inject } from "@angular/core";

export const usuarioLogadoResolver = () => new Promise(async (res, rej) => {
  const spotifyService = inject(SpotifyService);
  const router = inject(Router);

  const naoAutenticado = () => {
    localStorage.clear();
    router.navigate(['/login']);

    rej('USUÁRIO NÃO AUTENTICADO!')

    return false;
  }

  const token = localStorage.getItem('token');

  if (!token) {
    return naoAutenticado();
  }

  const usuarioCriado = await spotifyService.inicializarUsuario();

  if (usuarioCriado)
    res(true);
  else
    res(naoAutenticado());

  return false;
});
