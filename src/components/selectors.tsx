type SelectorProps = {
  label: string
  checked: boolean
  onChange: () => void
}

export const Selector: React.FC<SelectorProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2.5 w-full text-[16px] font-medium">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </div>
  )
}
