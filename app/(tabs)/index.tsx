import Container from '@/components/container';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    <Container>
      <Text className="text-md text-black dark:text-white">
        Bem-vindo ao app com NativeWind!
      </Text>
    </Container>
  );
}
