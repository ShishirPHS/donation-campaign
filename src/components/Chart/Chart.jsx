import { Cell, Pie, PieChart } from "recharts";
import PropTypes from "prop-types";

const Chart = ({ myDonations, totalDonations }) => {
  const data = [
    { value: totalDonations - myDonations },
    { value: myDonations },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "center" : "center"}
        dominantBaseline="central"
        className="text-3xl font-bold"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="z-10 mt-7">
      <PieChart className="mx-auto" width={350} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

Chart.propTypes = {
  myDonations: PropTypes.number.isRequired,
  totalDonations: PropTypes.number.isRequired,
};

export default Chart;
