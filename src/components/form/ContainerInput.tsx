import cn from "classnames"
export default function ContainerInput({ children }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex flex-col gap-y-2")} >
    {children}
  </div>
}