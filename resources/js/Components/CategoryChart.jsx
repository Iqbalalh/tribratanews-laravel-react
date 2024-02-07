import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const CategoryChart = ({ category1, category2, category3, category4, category5 }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const total = category1 + category2 + category3 + category4 + category5;

    const getChartcategorytions = () => {
      return {
        series: [category1 / total * 100, category2 / total * 100, category3 / total * 100, category4 / total * 100, category5 / total * 100],
        colors: ["#1C64F2", "#16BDCA", "#9061F9", "#FF7F50", "#E3A008"],
        chart: {
          height: 250,
          type: "pie",
        },
        labels: ["Hukum", "Sosial Budaya", "Keamanan", "Kesehatan", "Olahraga"],
        legend: {
          position: "bottom",
        },
      };
    };

    if (chartRef.current && typeof ApexCharts !== 'undefined' && category1 !== null && category2 !== null && category3 !== null && category4 !== null && category5 !== null) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new ApexCharts(chartRef.current, getChartcategorytions());
      chartInstance.current.render();
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [category1, category2, category3, category4, category5]);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white me-1">Rasio Kategori</h5>
        <div className="py-6" ref={chartRef}></div>
    </div>
  );
};

export default CategoryChart;
