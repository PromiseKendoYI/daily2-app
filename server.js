const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint for querying RANK
app.get('/rank', (req, res) => {
    // 模擬資料，實際應根據資料庫或外部 API 查詢數據
    const dummyRankData = {
        rank: "Gold",
        points: 1500,
        lastUpdated: new Date().toISOString()
    };
    res.json(dummyRankData);
});

// Endpoint for querying STATUS
app.get('/status', (req, res) => {
    // 模擬資料，可加入更多健康檢查邏輯
    const dummyStatusData = {
        status: "OK",
        uptime: process.uptime(), // 伺服器運行秒數
        timestamp: new Date().toISOString()
    };
    res.json(dummyStatusData);
});

// 選用：統一查詢 RANK 與 STATUS
app.get('/query', (req, res) => {
    const result = {
        rank: {
            rank: "Gold",
            points: 1500
        },
        status: {
            status: "OK",
            uptime: process.uptime()
        }
    };
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
