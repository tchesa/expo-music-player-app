import { RootStackParamList as CustomRootStackParamList } from "./navigation";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CustomRootStackParamList {}
  }
}
