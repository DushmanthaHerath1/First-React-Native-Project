import { Link } from "expo-router";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaView className="items-center justify-center flex-1 bg-white">
      <View className="items-center justify-center flex-1">
        <Text className="text-3xl font-pblack">Aoura!</Text>
        <StatusBar barStyle={"dark-content"} />
        <Link href={"/about"} asChild>
          <TouchableOpacity className="px-8 py-4 rounded-full bg-slate-500">
            <Text className="color-white font-pregular">About Me</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
