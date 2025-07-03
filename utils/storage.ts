import { Place } from '@/types/place';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'FAVORITE_PLACES';

export async function getFavorites(): Promise<Place[]> {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveFavorite(place: Place) {
  const favorites = await getFavorites();
  const alreadySaved = favorites.some(p => p.id === place.id);
  if (alreadySaved) return;
  favorites.push(place);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export async function removeFavorite(id: number) {
  const favorites = await getFavorites();
  const filtered = favorites.filter(p => p.id !== id);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
}

export async function isFavorite(id: number): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.some(p => p.id === id);
}