import { places } from '@/constants/places';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { Card, CardContent } from './card';

interface PlaceMentionProps {
    placeId: number,
    showLocation?: boolean
}

export default function PlaceMention({ placeId, showLocation }: PlaceMentionProps) {
    const place = places.find(p => p.id === placeId);

if (!place) {
  return (
    <Card className="flex justify-center items-center p-4">
      <CardContent>
        <Text className="text-red-500">Lugar não encontrado</Text>
      </CardContent>
    </Card>
  );
}

return (
  <Pressable onPress={() => router.push(`/${place.id}`)}>
    <Card className="flex flex-row justify-between items-center">
      <CardContent>
        {place.name}
        {showLocation &&
          <Text className="font-bold text-zinc-500">{place.street}</Text>
        }
      </CardContent>
      <Entypo name="chevron-right" size={28} color="#2563eb" className="me-2" />
    </Card>
  </Pressable>
);

}