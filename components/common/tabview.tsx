
type TabViewProps = {
    tabTitles: Array<string>
    currentTab: number
    tabChanged: (index: number) => void
}

const TabView = ({ tabTitles, currentTab, ...props }: TabViewProps) => {
    return <div className="tabview">
        {Array.from(Array(3)).map((value, index) => {
            return <button
                key={index}
                className={`tab ${currentTab == index ? 'tab--active' : ''}`}
                onClick={() => props.tabChanged(index)}
            >
                {tabTitles[index]}
            </button>
        })}
    </div>
}

export default TabView;