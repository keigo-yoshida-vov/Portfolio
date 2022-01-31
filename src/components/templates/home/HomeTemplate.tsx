import { BarChart } from "../../atoms/charts/bar-chart/BarChart"
import { LineChart } from "../../atoms/charts/line-chart/LineChart";
import { PieChart } from "../../atoms/charts/pie-chart/PieChart";

export const HomeTemplate = () => {
    return (
        <>
            <BarChart />
            <LineChart />
            <PieChart />
        </>
    );
};
