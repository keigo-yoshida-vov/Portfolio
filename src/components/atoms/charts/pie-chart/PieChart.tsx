import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export const PieChart = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: 'barChart',
            data: [100, 50, 300, 10, 200, 150, 250, 400, 100, 10, 50, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
            ],
            // グラフの枠線の色
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
            ],
            // グラフの枠線の太さ
            borderWidth: 1,
        }]
    }
    return <Pie data={data} />;
}
