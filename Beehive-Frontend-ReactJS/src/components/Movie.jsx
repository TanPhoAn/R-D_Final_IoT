import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Prepare data for the line chart
  const chartData = {
    labels: movies.map((movie) => movie.name), // Movie titles
    datasets: [
      {
        label: "Runtime (minutes)",
        data: movies.map((movie) => movie.runtime || 0), // Runtime values
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Movies",
        },
      },
      y: {
        title: {
          display: true,
          text: "Runtime (minutes)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && movies.length > 0 && (
        <div style={{ width: "90%", margin: "0 auto" }}>
          <h2>Movies Runtime</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default Movies;
