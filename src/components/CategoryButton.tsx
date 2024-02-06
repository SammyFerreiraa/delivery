import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from 'clsx'

type CategoryButtonProps = PressableProps & {
  title: string
  isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryButtonProps) {
  return (
    <Pressable
      {...rest}
      className={clsx(
        "rounded-md justify-center bg-slate-800 px-4 h-10 text-",
        isSelected && "border-2 border-lime-300"
      )}
    >
      <Text
        className={`text-xs font-bold text-slate-100`}
      >
        {title}
      </Text> 
    </Pressable>
  )
}