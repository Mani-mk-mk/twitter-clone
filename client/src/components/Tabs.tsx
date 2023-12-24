interface TabsPropType {
  components: string[];
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Tabs = (props: TabsPropType) => {
  console.log(props);
  const handleTabClicks = (key: number) => {
    props.setTabIndex(key);
  };
  return (
    <div>
      <div className="flex items-center justify-between border-b border-borderColor p-4 pb-0 text-unhighlighted-color">
        {props.components.map((component, key) => (
          <button
            key={key}
            onClick={() => handleTabClicks(key)}
            className="flex w-full items-center justify-center hover:bg-accent-dark"
          >
            <div
              className={
                "flex cursor-pointer flex-col justify-between p-1 text-center" +
                `${
                  props.tabIndex === key && "font-roboto font-bold text-white"
                }`
              }
              key={key}
            >
              {component}

              <div
                className={`mt-2 block h-[4px] rounded-lg ${
                  props.tabIndex === key ? "bg-btn-dark" : "bg-transparent"
                } `}
              ></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
