import Home from './src/screens/home';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" translucent/>
    <Home/>
    </>
  );
}

 