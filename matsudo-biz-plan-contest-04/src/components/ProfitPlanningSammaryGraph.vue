<template>
  <Bar
  id="profit-planning-summary-graph"
  :options="chartOptions"
  :data="chartData"
  ref="chartRef"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement)

const chartRef = ref(null);

const stockSales = ref([8442, 13507, 16884]);
const flowSales = ref([10572, 16915, 21144]);
const expenses = ref([12715, 19163, 21290]);
const profits = ref([6229, 11259, 16738]);

const chartData = ref({
  labels: [ '1年目', '2年目', '3年目' ],
  datasets: [
    {
      type: 'bar',
      label: '安定売上',
      data: stockSales.value,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      yAxisID: 'yAxis0',
      xAxisID: 'xAxis0',
      stack: 'Stack 0',
    },
    {
      type: 'bar',
      label: '流動売上',
      data: flowSales.value,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      yAxisID: 'yAxis0',
      xAxisID: 'xAxis0',
      stack: 'Stack 0',
    },
    {
      type: 'bar',
      label: '経費',
      data: expenses.value,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
      yAxisID: 'yAxis2',
      xAxisID: 'xAxis0',
      stack: 'Stack 1',
    },
    {
      type: 'line',
      label: '利益額',
      data: profits.value,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false,
      yAxisID: 'yAxis1',
      xAxisID: 'xAxis0',
    },
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxis0: {
      stacked: true,
    },
    yAxis0: {
      stacked: true,
      max: 40000
    },
    yAxis1: {
      stacked: false,
      display: false,
      grid: {
        display: false
      },
      max: 40000
    },
    yAxis2: {
      display: false,
      stacked: false,
      grid: {
        display: false
      },
      max: 40000
    },
    xAxis2: {
      display: false,
      stacked: true,
      grid: {
        display: false
      }
    }
  },
  animation: {
    duration: 0
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom"
    }
  }
})

</script>
