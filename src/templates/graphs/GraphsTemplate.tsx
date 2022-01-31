import { BarChart } from "../../components/atoms/charts/bar-chart/BarChart"
import { LineChart } from "../../components/atoms/charts/line-chart/LineChart";
import { PieChart } from "../../components/atoms/charts/pie-chart/PieChart";
import scss from './graphs.module.scss';
import Link from 'next/link'

export const GraphsTemplate = () => {
    return (
        <>
            <div className={scss.flexBox}>
                <div>
                    <Link href="/"><a>Home</a></Link>
                </div>
                <span className={scss.sideMargin5}>{`>`}</span>
                <div>
                    <Link href="/libraries"><a>libraries</a></Link>
                </div>
                <span className={scss.sideMargin5}>{`>`}</span>
                <div>
                    <p>Graphs</p>
                </div>
            </div>
            <div className={scss.paper}>
                <div className={scss.paperTitle}>
                    <p>Graphs by Chart.js</p>
                </div>
                <div className={scss.boxLayout}>
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
