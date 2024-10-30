import { IArtista } from "../interfaces/IArtista";
import { IMusica } from "../interfaces/IMusica";
import { IPlaylist } from "../interfaces/IPlaylist";
import { IUsuario } from "../interfaces/IUsuario";
import { addMilliseconds, format } from "date-fns";
import { newMusica, newPlaylist } from "./factories";

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

export function SpotifySinglePlaylistToPlaylist(playlist: SpotifyApi.SinglePlaylistResponse): IPlaylist {
  if (!playlist)
    return newPlaylist();

  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: playlist.images.shift().url,
    musicas: []
  }
}

export function SpotifyArtistaToArtista(artista: SpotifyApi.ArtistObjectFull): IArtista {
  return {
    id: artista.id,
    nome: artista.name,
    imagemUrl: artista.images.sort((a, b) => a.width - b.width).pop().url
  }
}

export function SpotifyTrackParaMusica(track: SpotifyApi.TrackObjectFull): IMusica {
  if (!track)
    return newMusica();

  const msParaMinutos = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms);

    return format(data, 'mm:ss');
  }

  return {
    id: track.uri,
    titulo: track.name,
    album: {
      id: track.album.id,
      imagemUrl: track.album.images.shift().url,
      nome: track.album.name
    },
    artistas: track.artists.map(m => ({
      id: m.id,
      nome: m.name
    })),
    tempo: msParaMinutos(track.duration_ms)
  }
}
