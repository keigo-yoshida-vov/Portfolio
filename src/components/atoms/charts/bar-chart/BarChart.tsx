import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export const BarChart = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: 'barChart',
            data: [100, 50, 300, 10, 200, 150, 250, 400, 100, 10, 50, 200],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
    return <Bar data={data} />;
}
