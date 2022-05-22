type SearchBarProps = {
    textDidChange: (value: string) => void,
    placeholder: string
} & React.HTMLProps<HTMLDivElement>

const SearchBar = (props: SearchBarProps) => {
    return <div className={`flex flex-row gap-4 items-center ${props.className}`}>
        <input
            onChange={(e) => props.textDidChange(e.target.value)}
            name="search"
            type="text"
            placeholder={props.placeholder}
            className="textField textField--dark w-80 mt-1"
        ></input>
    </div>
}

export default SearchBar;