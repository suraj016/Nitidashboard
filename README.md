# RSP Dashboard - Petrol & Diesel Prices

A data visualization dashboard for Retail Selling Price (RSP) of Petrol and Diesel in Metro Cities, built with TypeScript, Vite, Mantine, and Apache ECharts.

## 📋 Project Overview

This dashboard provides an interactive visualization of fuel prices across major metro cities in India. Users can filter data by metro city, fuel type (Petrol/Diesel), and calendar year to view monthly average RSP trends in a bar chart format.

**Data Source:** NITI Aayog – National Data and Analytics Platform

## 🛠️ Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend build tool
- **React** - UI library
- **Mantine** - React components library
- **Apache ECharts** - Powerful charting library (core package only)
- **No helper libraries** - Pure TypeScript implementation

## 📁 Project Structure

```
src/
├── components/
│   ├── Filters.tsx          # Filter dropdowns component
│   ├── RSPBarChart.tsx      # Bar chart visualization component
├── data/
│   └── rspData.ts           # RSP dataset
├── utils/
│   └── dataProcessor.ts     # Data processing utilities
├── types/
│   └── rsp.ts               # TypeScript type definitions
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Task-3
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
yarn build
```

The production build will be available in the `dist` directory.

## 📊 Features

- **Interactive Filters:**
  - Metro City selection (Delhi, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad)
  - Fuel Type selection (Petrol, Diesel)
  - Calendar Year selection (2020, 2021, 2022, 2023)

- **Dynamic Bar Chart:**
  - X-axis: Months (Jan-Dec)
  - Y-axis: Monthly Average RSP (₹)
  - Real-time updates based on filter selections
  - Interactive tooltips with detailed information

- **Data Processing:**
  - Efficient filtering and aggregation
  - Missing values treated as 0
  - Time-efficient data processing

## 🎨 UI Components

The dashboard uses Mantine components for a clean, modern interface:
- Select dropdowns for filters
- Paper components for layout
- Responsive design

## 📈 Chart Visualization

The bar chart is rendered using Apache ECharts with:
- Customizable colors and styling
- Interactive tooltips
- Responsive layout
- Smooth animations

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure build settings:
   - Build Command: `yarn build`
   - Output Directory: `dist`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Create a new site in Netlify
3. Connect your repository
4. Configure build settings:
   - Build Command: `yarn build`
   - Publish Directory: `dist`
5. Deploy



## 📸 Screenshot

![Dashboard Screenshot](./dashboard-screenshot.png)

*Note: Add a screenshot of your dashboard here after deployment*

## 🔗 Live Deployment

[Add your live deployment URL here]

Example: `https://rsp-dashboard.vercel.app`

## 📝 Data Notes

- All missing cell values are treated as 0
- Data covers metro cities from 2020 to 2023
- Monthly RSP values are in Indian Rupees (₹)

## 🧪 Development

The project uses strict TypeScript configuration with:
- No JavaScript files
- Type-safe components
- Modular architecture
- Clean, well-commented code



