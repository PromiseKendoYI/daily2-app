# Riot Mobile App Backend

此專案為 Riot Mobile APP 提供查詢 RANK 與 STATUS 的後端服務範例，符合產品描述要求。

## 提供的 API

- **GET /rank**  
  回傳使用者的等級資訊，例如：
  ```json
  {
      "rank": "Gold",
      "points": 1500,
      "lastUpdated": "2025-02-10T12:34:56.789Z"
  }
