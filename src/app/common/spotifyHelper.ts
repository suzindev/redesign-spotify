import { IArtista } from "../interfaces/IArtista";
import { IPlaylist } from "../interfaces/IPlaylist";
import { IUsuario } from "../interfaces/IUsuario";

export function SpotifyUserToUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}

export function SpotifyPlaylistToPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: playlist.images.pop().url
  }
}

export function SpotifyArtistaToArtista(artista: SpotifyApi.ArtistObjectFull): IArtista {
  return {
    id: artista.id,
    nome: artista.name,
    imagemUrl: artista.images.sort((a, b) => a.width - b.width).pop().url
  }
}
