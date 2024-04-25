import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

const BarChartBox = (props: Props) => {
    return (
        <div className="barChartBox">
            <h2></h2>
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={props.chartData}>
                    <Tooltip
                        contentStyle={{background: "#2a3447", borderRadius: "5px"}}
                        labelStyle={{display: "none"}}
                        cursor={{fill: "none"}}
                    />
                    <Bar 
                        dataKey={props.dataKey} 
                        fill={props.color} 
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartBox