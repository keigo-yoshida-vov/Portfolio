import { BarChart } from "../../atoms/charts/bar-chart/BarChart"
import { LineChart } from "../../atoms/charts/line-chart/LineChart";
import { PieChart } from "../../atoms/charts/pie-chart/PieChart";
import scss from './graphsTemplate.module.scss';

export const GraphsTemplate = () => {
    return (
        <>
            <div className={scss.paper}>
                <div className={scss.paperTitle}>
                    <p>Graphs by Chart.js</p>
                </div>
                <div className={scss.flexBox}>
                    <div className={scss.chartWidth}>
                        <div>
                            <BarChart />
                        </div>
                        <div className={scss.marginTop10}>
                            <LineChart />
                        </div>
                    </div>
                    <div className={scss.chartWidth}>
                        <PieChart />
                    </div>
                </div>
            </div>
        </>
    );
};
