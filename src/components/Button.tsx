export default function Button(props: { onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="bg-button text-black text-lg font-bold flex items-center gap-4 p-5 rounded-md hover:bg-opacity-90 transition-colors">
      <img src="./src/assets/shuffle.svg" width={40} height={28} />
      Encontrar filme
    </button>
  )
}