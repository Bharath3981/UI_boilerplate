import { useStore } from "../../state/store.media";


const BasicInfoLayout = () => {
     const bears = useStore((state) => state.bears)
  return (
    <div>
        <div>layout.basicinfo: {bears}</div>
    </div>
  )
}

export default BasicInfoLayout;