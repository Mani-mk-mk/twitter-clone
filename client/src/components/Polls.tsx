import InputBox from "./InputBox";

const Polls = () => {
  return (
    <div>
      <textarea
        className="placeholder-unhighlighted-color placeholder:py-auto h-full w-full resize-none bg-dark px-4 py-2 text-xl leading-5 text-white outline-none"
        name=""
        id=""
        placeholder="Ask a question"
      ></textarea>
      <div className="py-2">
        <div className=" border-borderColor rounded-t-lg border p-2 text-white">
          <div className="flex w-full gap-4">
            <div className="w-full">
              <InputBox label="Choice" />
              <InputBox label="Choice" />
            </div>
            <div className="flex items-end">
              <button className="text-commentHoverText text-2xl">+</button>
            </div>
          </div>
          <div>
            <div>Poll length</div>
            <div>
              <div>
                <label htmlFor="days">Days</label>
                <select name="" id=""></select>
              </div>
              <div>
                <label htmlFor="hours">Hours</label>
                <select name="" id=""></select>
              </div>
              <div>
                <label htmlFor="minutes">Minutes</label>
                <select name="" id=""></select>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-borderColor flex w-full items-center justify-center rounded-b-lg border">
          <button className="w-full rounded-b-lg py-2 text-[#c1292d] hover:bg-[#1c0404]">
            Remove poll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Polls;
