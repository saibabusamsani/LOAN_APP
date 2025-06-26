import { PaperProvider } from "react-native-paper";
import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";
import { useSelector } from "react-redux";

const ThemeManager = ({ children }) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
export default ThemeManager;