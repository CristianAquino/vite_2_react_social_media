import { TrendData } from "../../utils/trendData";

const TrendCard = () => {
  return (
    //   trendCard
    <div className="flex flex-col gap-[1rem] bg-cardColor p-[1rem] rounded-[1rem] pl-[2rem]">
      <h3>Trend for you</h3>
      {TrendData.map((trend) => (
        //   trend
        <div key={trend.id} className="flex flex-col gap-[0.5rem]">
          <span className="font-bold">#{trend.name}</span>
          <span className="text-[14px]">{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
