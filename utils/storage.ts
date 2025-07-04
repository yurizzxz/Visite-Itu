import { Place } from '@/types/place';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'; // 👈 importa o toast

const FAVORITES_KEY = 'FAVORITE_PLACES';

export async function getFavorites(): Promise<Place[]> {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveFavorite(place: Place) {
  const favorites = await getFavorites();
  const alreadySaved = favorites.some(p => p.id === place.id);
  if (alreadySaved) {
    Toast.show({
      type: 'info',
      text1: 'Já está salvo!',
      text2: `${place.name} já está nos favoritos.`,
    });
    return;
  }

  favorites.push(place);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));

  Toast.show({
    type: 'success',
    text1: 'Favorito adicionado!',
    text2: `${place.name} foi salvo com sucesso.`,
  });
}

export async function removeFavorite(id: number) {
  const favorites = await getFavorites();
  const filtered = favorites.filter(p => p.id !== id);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));

  Toast.show({
    type: 'error',
    text1: 'Favorito removido!',
    text2: `O local foi removido dos favoritos.`,
  });
}

export async function isFavorite(id: number): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.some(p => p.id === id);
}
