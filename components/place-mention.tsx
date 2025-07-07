import { View, Text, Pressable } from 'react-native'
import { places } from '@/constants/places';
import { Place } from '@/types/place';
import { Card, CardContent, CardDescription } from './card';
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

interface PlaceMentionProps {
    placeId: number,
    showLocation?: boolean
}

export default function PlaceMention({ placeId, showLocation }: PlaceMentionProps) {
    const place: Place[] = places.filter(p => p.id === placeId);

    return (
        <Pressable onPress={() => router.push(`/${place[0].id}`)}>
            <Card className="flex flex-row justify-between items-center">
                <CardContent>
                    {place[0].name}
                    {showLocation &&
                        <Text className="font-bold text-zinc-500">{place[0].street}</Text>
                    }
                </CardContent>
                <Entypo name="chevron-right" size={28} color="#2563eb" className="me-2" />
            </Card>
        </Pressable>
    );
}