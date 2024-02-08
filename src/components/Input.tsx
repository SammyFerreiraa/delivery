import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({...rest} : TextInputProps) {
  return <TextInput className="h-32 bg-slate-800 rounded-md py-4 px-3 text-sm font-body text-white placeholder:text-white" {...rest} textAlignVertical="top" multiline placeholderTextColor={colors.slate[400]}/>
} 