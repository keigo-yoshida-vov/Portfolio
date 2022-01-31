import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export const PieChart = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: 'pieChart',
            data: [100, 50, 300, 10, 200, 150, 250, 400, 100, 10, 50, 200],
            backgroundColor: [
                'rgba(230, 0, 18, 0.4)',
                'rgba(243, 152, 0, 0.4)',
                'rgba(255, 251, 0, 0.4)',
                'rgba(143, 195, 31, 0.4)',
                'rgba(0, 153, 68, 0.4)',
                'rgba(0, 158, 150, 0.4)',
                'rgba(0, 160, 150, 0.4)',
                'rgba(0, 104, 183, 0.4)',
                'rgba(29, 32, 136, 0.4)',
                'rgba(146, 7, 131, 0.4)',
                'rgba(228, 0, 127, 0.4)',
                'rgba(229, 0, 79, 0.4)',
            ],
            // グラフの枠線の色
            borderColor: [
                'rgb(230, 0, 18)',
                'rgb(243, 152, 0)',
                'rgb(255, 251, 0)',
                'rgb(143, 195, 31)',
                'rgb(0, 153, 68)',
                'rgb(0, 158, 150)',
                'rgb(0, 160, 150)',
                'rgb(0, 104, 183)',
                'rgb(29, 32, 136)',
                'rgb(146, 7, 131)',
                'rgb(228, 0, 127)',
                'rgb(229, 0, 79)',
            ],
            // グラフの枠線の太さ
            borderWidth: 1,
        }]
    }
    return <Pie data={data} />;
}
