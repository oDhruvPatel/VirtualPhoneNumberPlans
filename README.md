# 📞 Virtual Phone Number Plan Analysis

A data analysis tool that simplifies the process of selecting a virtual phone number provider by aggregating, normalizing, and comparing plans across multiple providers in a single interactive dashboard.

## 🔍 Problem

Comparing virtual phone number plans across providers is time-consuming. Users have to visit multiple websites, manually note pricing and features, and try to make sense of inconsistent plan structures. This project brings all of that into one place.

## 💡 Solution

Scraped, normalized, and visualized pricing and feature data from 4 major providers — **Grasshopper, eVoice, RingCentral, and Google Voice** — covering 10+ plans, allowing users to compare options instantly without manual research.

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| Data Collection | Selenium, Java |
| Data Processing | Python, MySQL |
| Frontend | React |
| Data Structures | Custom normalization logic |

## 🚀 Features

- Automated scraping of live plan data from 4 providers
- Data normalization to make inconsistent plan structures comparable
- Side-by-side feature and pricing comparison across 10+ plans
- Interactive frontend to filter and explore plans
- Identifies cost-efficiency patterns and hidden feature gaps across providers

## 📊 Key Findings

- Significant pricing variation across providers for similar feature sets
- Some providers bundle features others charge separately for
- Cost-per-feature analysis revealed clear value leaders by use case

## 🛠️ Getting Started

### Prerequisites
- Java 11+
- Python 3.8+
- Node.js 16+
- MySQL

### Installation

```bash
# Clone the repository
git clone https://github.com/oDhruvPatel/VirtualPhoneNumberPlans

# Install Python dependencies
pip install -r requirements.txt

# Install frontend dependencies
cd frontend
npm install

# Run the scraper
python scraper.py

# Start the frontend
npm start
```

## 📁 Project Structure

```
VirtualPhoneNumberPlans/
├── scraper/          # Selenium scraping scripts
├── data/             # Raw and normalized datasets
├── analysis/         # Python data processing scripts
├── frontend/         # React comparison dashboard
└── README.md
```

## 🔮 Future Improvements

- Add more providers
- Real-time price tracking with alerts
- User preference-based plan recommendation engine

## 📄 License

MIT License
